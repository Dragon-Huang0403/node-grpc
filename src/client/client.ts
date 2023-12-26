import * as grpc from "@grpc/grpc-js";

import { AddOneRequest, CounterStreamRequest } from "../proto/counter_pb";
import { CounterClient } from "../proto/counter_grpc_pb";

const client = new CounterClient(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

function addOne() {
  return new Promise((resolve, reject) => {
    const request = new AddOneRequest();
    request.setValue(5);

    client.addOne(request, (err, response) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      console.log(response.getValue());
      resolve(response.getValue());
    });
  });
}

async function counterStream() {
  return new Promise((resolve, reject) => {
    const request = new CounterStreamRequest();
    request.setValue(5);

    const call = client.counterStream(request);
    call.on("data", (response) => {
      console.log("value: ", response.getValue());
    });

    call.on("end", () => {
      console.log("end");
      resolve(null);
    });

    call.on("error", (err) => {
      console.error(err);
      reject(err);
    });
  });
}

async function main() {
  // await addOne();

  await counterStream();
}

main();
