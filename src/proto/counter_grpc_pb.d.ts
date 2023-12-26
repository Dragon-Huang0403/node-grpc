// package: counter
// file: src/proto/counter.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as src_proto_counter_pb from "../../src/proto/counter_pb";

interface ICounterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addOne: ICounterService_IAddOne;
    counterStream: ICounterService_ICounterStream;
}

interface ICounterService_IAddOne extends grpc.MethodDefinition<src_proto_counter_pb.AddOneRequest, src_proto_counter_pb.AddOneResponse> {
    path: "/counter.Counter/AddOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_counter_pb.AddOneRequest>;
    requestDeserialize: grpc.deserialize<src_proto_counter_pb.AddOneRequest>;
    responseSerialize: grpc.serialize<src_proto_counter_pb.AddOneResponse>;
    responseDeserialize: grpc.deserialize<src_proto_counter_pb.AddOneResponse>;
}
interface ICounterService_ICounterStream extends grpc.MethodDefinition<src_proto_counter_pb.CounterStreamRequest, src_proto_counter_pb.CounterStreamResponse> {
    path: "/counter.Counter/CounterStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<src_proto_counter_pb.CounterStreamRequest>;
    requestDeserialize: grpc.deserialize<src_proto_counter_pb.CounterStreamRequest>;
    responseSerialize: grpc.serialize<src_proto_counter_pb.CounterStreamResponse>;
    responseDeserialize: grpc.deserialize<src_proto_counter_pb.CounterStreamResponse>;
}

export const CounterService: ICounterService;

export interface ICounterServer extends grpc.UntypedServiceImplementation {
    addOne: grpc.handleUnaryCall<src_proto_counter_pb.AddOneRequest, src_proto_counter_pb.AddOneResponse>;
    counterStream: grpc.handleServerStreamingCall<src_proto_counter_pb.CounterStreamRequest, src_proto_counter_pb.CounterStreamResponse>;
}

export interface ICounterClient {
    addOne(request: src_proto_counter_pb.AddOneRequest, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    addOne(request: src_proto_counter_pb.AddOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    addOne(request: src_proto_counter_pb.AddOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    counterStream(request: src_proto_counter_pb.CounterStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_proto_counter_pb.CounterStreamResponse>;
    counterStream(request: src_proto_counter_pb.CounterStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_proto_counter_pb.CounterStreamResponse>;
}

export class CounterClient extends grpc.Client implements ICounterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addOne(request: src_proto_counter_pb.AddOneRequest, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    public addOne(request: src_proto_counter_pb.AddOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    public addOne(request: src_proto_counter_pb.AddOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_counter_pb.AddOneResponse) => void): grpc.ClientUnaryCall;
    public counterStream(request: src_proto_counter_pb.CounterStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_proto_counter_pb.CounterStreamResponse>;
    public counterStream(request: src_proto_counter_pb.CounterStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<src_proto_counter_pb.CounterStreamResponse>;
}
