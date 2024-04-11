import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum aserto.directory.events.v2.Directory
 */
export declare enum Directory {
    /**
     * @generated from enum value: DIRECTORY_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: DIRECTORY_ROOT = 1;
     */
    ROOT = 1,
    /**
     * @generated from enum value: DIRECTORY_TENANT = 2;
     */
    TENANT = 2
}
/**
 * @generated from message aserto.directory.events.v2.TenantSchemaChanged
 */
export declare class TenantSchemaChanged extends Message<TenantSchemaChanged> {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: string source_id = 2;
     */
    sourceId: string;
    /**
     * @generated from field: aserto.directory.events.v2.Directory directory = 3;
     */
    directory: Directory;
    constructor(data?: PartialMessage<TenantSchemaChanged>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.events.v2.TenantSchemaChanged";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantSchemaChanged;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantSchemaChanged;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantSchemaChanged;
    static equals(a: TenantSchemaChanged | PlainMessage<TenantSchemaChanged> | undefined, b: TenantSchemaChanged | PlainMessage<TenantSchemaChanged> | undefined): boolean;
}
