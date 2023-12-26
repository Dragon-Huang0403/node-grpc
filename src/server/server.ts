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
) => {};

const counterStream = async (
  call: grpc.ServerWritableStream<CounterStreamRequest, CounterStreamResponse>
) => {};

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
