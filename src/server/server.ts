import {
  AddOneRequest,
  AddOneResponse,
  CounterStreamRequest,
  CounterStreamResponse,
} from "../proto/counter_pb";
import { CounterService } from "../proto/counter_grpc_pb";

import * as grpc from "@grpc/grpc-js";

const addOne = (
  call: grpc.ServerUnaryCall<AddOneRequest, AddOneResponse>,
  callback: grpc.sendUnaryData<AddOneResponse>
) => {
  const result = call.request.getValue() + 1;
  const response = new AddOneResponse();
  response.setValue(result);

  callback(null, response);
};
const counterStream = async (
  call: grpc.ServerWritableStream<CounterStreamRequest, CounterStreamResponse>
) => {
  let initValue = call.request.getValue();

  for (let i = 0; i < 10; i++) {
    const response = new CounterStreamResponse();
    response.setValue(initValue + i);
    call.write(response);
    await sleep(100);
  }

  call.end();
};

function main() {
  var server = new grpc.Server();
  server.addService(CounterService, { addOne, counterStream });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
