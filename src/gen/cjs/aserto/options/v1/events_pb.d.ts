import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldOptions, Message, MessageOptions, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message aserto.options.v1.Event
 */
export declare class Event extends Message<Event> {
    /**
     * @generated from field: string subject_template = 2;
     */
    subjectTemplate: string;
    constructor(data?: PartialMessage<Event>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.options.v1.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;
    static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}
/**
 * @generated from extension: aserto.options.v1.Event event = 50095;
 */
export declare const event: import("@bufbuild/protobuf").Extension<MessageOptions, Event>;
/**
 * @generated from extension: string tag = 50095;
 */
export declare const tag: import("@bufbuild/protobuf").Extension<FieldOptions, string>;
