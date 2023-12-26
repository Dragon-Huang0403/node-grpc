// package: counter
// file: src/proto/counter.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AddOneRequest extends jspb.Message { 
    getValue(): number;
    setValue(value: number): AddOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddOneRequest): AddOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddOneRequest;
    static deserializeBinaryFromReader(message: AddOneRequest, reader: jspb.BinaryReader): AddOneRequest;
}

export namespace AddOneRequest {
    export type AsObject = {
        value: number,
    }
}

export class AddOneResponse extends jspb.Message { 
    getValue(): number;
    setValue(value: number): AddOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddOneResponse): AddOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddOneResponse;
    static deserializeBinaryFromReader(message: AddOneResponse, reader: jspb.BinaryReader): AddOneResponse;
}

export namespace AddOneResponse {
    export type AsObject = {
        value: number,
    }
}

export class CounterStreamRequest extends jspb.Message { 
    getValue(): number;
    setValue(value: number): CounterStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CounterStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CounterStreamRequest): CounterStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CounterStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CounterStreamRequest;
    static deserializeBinaryFromReader(message: CounterStreamRequest, reader: jspb.BinaryReader): CounterStreamRequest;
}

export namespace CounterStreamRequest {
    export type AsObject = {
        value: number,
    }
}

export class CounterStreamResponse extends jspb.Message { 
    getValue(): number;
    setValue(value: number): CounterStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CounterStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CounterStreamResponse): CounterStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CounterStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CounterStreamResponse;
    static deserializeBinaryFromReader(message: CounterStreamResponse, reader: jspb.BinaryReader): CounterStreamResponse;
}

export namespace CounterStreamResponse {
    export type AsObject = {
        value: number,
    }
}
