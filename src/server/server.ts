import { AddOneRequest, AddOneResponse } from "../proto/counter_pb";
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

function main() {
  var server = new grpc.Server();
  server.addService(CounterService, { addOne });
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
    }
  );
}

main();
