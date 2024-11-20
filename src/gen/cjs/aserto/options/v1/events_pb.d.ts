import type { GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, MessageOptions } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/options/v1/events.proto.
 */
export declare const file_aserto_options_v1_events: GenFile;
/**
 * @generated from message aserto.options.v1.Event
 */
export type Event = Message<"aserto.options.v1.Event"> & {
    /**
     * @generated from field: string subject_template = 2;
     */
    subjectTemplate: string;
};
/**
 * Describes the message aserto.options.v1.Event.
 * Use `create(EventSchema)` to create a new message.
 */
export declare const EventSchema: GenMessage<Event>;
/**
 * @generated from extension: aserto.options.v1.Event event = 50095;
 */
export declare const event: GenExtension<MessageOptions, Event>;
/**
 * @generated from extension: string tag = 50095;
 */
export declare const tag: GenExtension<FieldOptions, string>;
