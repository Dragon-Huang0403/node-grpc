import * as grpc from "@grpc/grpc-js";

import { AddOneRequest, CounterStreamRequest } from "../proto/counter_pb";
import { CounterClient } from "../proto/counter_grpc_pb";

const client = new CounterClient(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

function addOne() {}

async function counterStream() {}

async function main() {
  addOne();
}

main();
