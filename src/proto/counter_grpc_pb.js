// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_proto_counter_pb = require('../../src/proto/counter_pb.js');

function serialize_counter_AddOneRequest(arg) {
  if (!(arg instanceof src_proto_counter_pb.AddOneRequest)) {
    throw new Error('Expected argument of type counter.AddOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_counter_AddOneRequest(buffer_arg) {
  return src_proto_counter_pb.AddOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_counter_AddOneResponse(arg) {
  if (!(arg instanceof src_proto_counter_pb.AddOneResponse)) {
    throw new Error('Expected argument of type counter.AddOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_counter_AddOneResponse(buffer_arg) {
  return src_proto_counter_pb.AddOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_counter_CounterStreamRequest(arg) {
  if (!(arg instanceof src_proto_counter_pb.CounterStreamRequest)) {
    throw new Error('Expected argument of type counter.CounterStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_counter_CounterStreamRequest(buffer_arg) {
  return src_proto_counter_pb.CounterStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_counter_CounterStreamResponse(arg) {
  if (!(arg instanceof src_proto_counter_pb.CounterStreamResponse)) {
    throw new Error('Expected argument of type counter.CounterStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_counter_CounterStreamResponse(buffer_arg) {
  return src_proto_counter_pb.CounterStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CounterService = exports.CounterService = {
  addOne: {
    path: '/counter.Counter/AddOne',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_counter_pb.AddOneRequest,
    responseType: src_proto_counter_pb.AddOneResponse,
    requestSerialize: serialize_counter_AddOneRequest,
    requestDeserialize: deserialize_counter_AddOneRequest,
    responseSerialize: serialize_counter_AddOneResponse,
    responseDeserialize: deserialize_counter_AddOneResponse,
  },
  counterStream: {
    path: '/counter.Counter/CounterStream',
    requestStream: false,
    responseStream: true,
    requestType: src_proto_counter_pb.CounterStreamRequest,
    responseType: src_proto_counter_pb.CounterStreamResponse,
    requestSerialize: serialize_counter_CounterStreamRequest,
    requestDeserialize: deserialize_counter_CounterStreamRequest,
    responseSerialize: serialize_counter_CounterStreamResponse,
    responseDeserialize: deserialize_counter_CounterStreamResponse,
  },
};

exports.CounterClient = grpc.makeGenericClientConstructor(CounterService);
