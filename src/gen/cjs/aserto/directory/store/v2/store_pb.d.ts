import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Empty, Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb.js";
/**
 * @generated from enum aserto.directory.store.v2.Schema
 */
export declare enum Schema {
    /**
     * @generated from enum value: SCHEMA_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SCHEMA_SHARED = 1;
     */
    SHARED = 1,
    /**
     * @generated from enum value: SCHEMA_TENANT = 2;
     */
    TENANT = 2
}
/**
 * @generated from enum aserto.directory.store.v2.Migrate
 */
export declare enum Migrate {
    /**
     * @generated from enum value: MIGRATE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: MIGRATE_UP = 1;
     */
    UP = 1,
    /**
     * @generated from enum value: MIGRATE_DOWN = 2;
     */
    DOWN = 2
}
/**
 * @generated from message aserto.directory.store.v2.TenantMember
 */
export declare class TenantMember extends Message<TenantMember> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: repeated string roles = 3;
     */
    roles: string[];
    constructor(data?: PartialMessage<TenantMember>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.TenantMember";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TenantMember;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TenantMember;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TenantMember;
    static equals(a: TenantMember | PlainMessage<TenantMember> | undefined, b: TenantMember | PlainMessage<TenantMember> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.Tenant
 */
export declare class Tenant extends Message<Tenant> {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * tenant name
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * created at timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp created_at = 20;
     */
    createdAt?: Timestamp;
    /**
     * last updated timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp updated_at = 21;
     */
    updatedAt?: Timestamp;
    /**
     * last updated timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp deleted_at = 22;
     */
    deletedAt?: Timestamp;
    constructor(data?: PartialMessage<Tenant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.Tenant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tenant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tenant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tenant;
    static equals(a: Tenant | PlainMessage<Tenant> | undefined, b: Tenant | PlainMessage<Tenant> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersRequest
 */
export declare class ListTenantMembersRequest extends Message<ListTenantMembersRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<ListTenantMembersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListTenantMembersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTenantMembersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTenantMembersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTenantMembersRequest;
    static equals(a: ListTenantMembersRequest | PlainMessage<ListTenantMembersRequest> | undefined, b: ListTenantMembersRequest | PlainMessage<ListTenantMembersRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersResponse
 */
export declare class ListTenantMembersResponse extends Message<ListTenantMembersResponse> {
    /**
     * @generated from field: repeated aserto.directory.store.v2.TenantMember results = 1;
     */
    results: TenantMember[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
    constructor(data?: PartialMessage<ListTenantMembersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListTenantMembersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTenantMembersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTenantMembersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTenantMembersResponse;
    static equals(a: ListTenantMembersResponse | PlainMessage<ListTenantMembersResponse> | undefined, b: ListTenantMembersResponse | PlainMessage<ListTenantMembersResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantRequest
 */
export declare class AssignRoleToTenantRequest extends Message<AssignRoleToTenantRequest> {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: string role = 3;
     */
    role: string;
    constructor(data?: PartialMessage<AssignRoleToTenantRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.AssignRoleToTenantRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRoleToTenantRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRoleToTenantRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRoleToTenantRequest;
    static equals(a: AssignRoleToTenantRequest | PlainMessage<AssignRoleToTenantRequest> | undefined, b: AssignRoleToTenantRequest | PlainMessage<AssignRoleToTenantRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantResponse
 */
export declare class AssignRoleToTenantResponse extends Message<AssignRoleToTenantResponse> {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<AssignRoleToTenantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.AssignRoleToTenantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRoleToTenantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRoleToTenantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRoleToTenantResponse;
    static equals(a: AssignRoleToTenantResponse | PlainMessage<AssignRoleToTenantResponse> | undefined, b: AssignRoleToTenantResponse | PlainMessage<AssignRoleToTenantResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantRequest
 */
export declare class RemoveRoleFromTenantRequest extends Message<RemoveRoleFromTenantRequest> {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: string role = 3;
     */
    role: string;
    constructor(data?: PartialMessage<RemoveRoleFromTenantRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.RemoveRoleFromTenantRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRoleFromTenantRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRoleFromTenantRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRoleFromTenantRequest;
    static equals(a: RemoveRoleFromTenantRequest | PlainMessage<RemoveRoleFromTenantRequest> | undefined, b: RemoveRoleFromTenantRequest | PlainMessage<RemoveRoleFromTenantRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantResponse
 */
export declare class RemoveRoleFromTenantResponse extends Message<RemoveRoleFromTenantResponse> {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<RemoveRoleFromTenantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.RemoveRoleFromTenantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRoleFromTenantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRoleFromTenantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRoleFromTenantResponse;
    static equals(a: RemoveRoleFromTenantResponse | PlainMessage<RemoveRoleFromTenantResponse> | undefined, b: RemoveRoleFromTenantResponse | PlainMessage<RemoveRoleFromTenantResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsRequest
 */
export declare class ListUserTenantsRequest extends Message<ListUserTenantsRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<ListUserTenantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListUserTenantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserTenantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserTenantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserTenantsRequest;
    static equals(a: ListUserTenantsRequest | PlainMessage<ListUserTenantsRequest> | undefined, b: ListUserTenantsRequest | PlainMessage<ListUserTenantsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsResponse
 */
export declare class ListUserTenantsResponse extends Message<ListUserTenantsResponse> {
    /**
     * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
     */
    results: Tenant[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
    constructor(data?: PartialMessage<ListUserTenantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListUserTenantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserTenantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserTenantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserTenantsResponse;
    static equals(a: ListUserTenantsResponse | PlainMessage<ListUserTenantsResponse> | undefined, b: ListUserTenantsResponse | PlainMessage<ListUserTenantsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.GetTenantRequest
 */
export declare class GetTenantRequest extends Message<GetTenantRequest> {
    /**
     * @generated from oneof aserto.directory.store.v2.GetTenantRequest.data
     */
    data: {
        /**
         * tenant id (UUID, aserto-id --type tenant)
         *
         * @generated from field: string id = 1;
         */
        value: string;
        case: "id";
    } | {
        /**
         * tenant name
         *
         * @generated from field: string name = 2;
         */
        value: string;
        case: "name";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<GetTenantRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.GetTenantRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTenantRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTenantRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTenantRequest;
    static equals(a: GetTenantRequest | PlainMessage<GetTenantRequest> | undefined, b: GetTenantRequest | PlainMessage<GetTenantRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.GetTenantResponse
 */
export declare class GetTenantResponse extends Message<GetTenantResponse> {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant result = 1;
     */
    result?: Tenant;
    constructor(data?: PartialMessage<GetTenantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.GetTenantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTenantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTenantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTenantResponse;
    static equals(a: GetTenantResponse | PlainMessage<GetTenantResponse> | undefined, b: GetTenantResponse | PlainMessage<GetTenantResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.CreateTenantRequest
 */
export declare class CreateTenantRequest extends Message<CreateTenantRequest> {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant tenant = 1;
     */
    tenant?: Tenant;
    constructor(data?: PartialMessage<CreateTenantRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.CreateTenantRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTenantRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTenantRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTenantRequest;
    static equals(a: CreateTenantRequest | PlainMessage<CreateTenantRequest> | undefined, b: CreateTenantRequest | PlainMessage<CreateTenantRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.CreateTenantResponse
 */
export declare class CreateTenantResponse extends Message<CreateTenantResponse> {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant result = 1;
     */
    result?: Tenant;
    constructor(data?: PartialMessage<CreateTenantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.CreateTenantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTenantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTenantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTenantResponse;
    static equals(a: CreateTenantResponse | PlainMessage<CreateTenantResponse> | undefined, b: CreateTenantResponse | PlainMessage<CreateTenantResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantRequest
 */
export declare class DeleteTenantRequest extends Message<DeleteTenantRequest> {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * permanently delete tenant (default: false)
     *
     * @generated from field: bool hard = 2;
     */
    hard: boolean;
    constructor(data?: PartialMessage<DeleteTenantRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.DeleteTenantRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTenantRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTenantRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTenantRequest;
    static equals(a: DeleteTenantRequest | PlainMessage<DeleteTenantRequest> | undefined, b: DeleteTenantRequest | PlainMessage<DeleteTenantRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantResponse
 */
export declare class DeleteTenantResponse extends Message<DeleteTenantResponse> {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteTenantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.DeleteTenantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTenantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTenantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTenantResponse;
    static equals(a: DeleteTenantResponse | PlainMessage<DeleteTenantResponse> | undefined, b: DeleteTenantResponse | PlainMessage<DeleteTenantResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListTenantsRequest
 */
export declare class ListTenantsRequest extends Message<ListTenantsRequest> {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
    constructor(data?: PartialMessage<ListTenantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListTenantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTenantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTenantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTenantsRequest;
    static equals(a: ListTenantsRequest | PlainMessage<ListTenantsRequest> | undefined, b: ListTenantsRequest | PlainMessage<ListTenantsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.ListTenantsResponse
 */
export declare class ListTenantsResponse extends Message<ListTenantsResponse> {
    /**
     * result tenant list
     *
     * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
     */
    results: Tenant[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
    constructor(data?: PartialMessage<ListTenantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.ListTenantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTenantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTenantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTenantsResponse;
    static equals(a: ListTenantsResponse | PlainMessage<ListTenantsResponse> | undefined, b: ListTenantsResponse | PlainMessage<ListTenantsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsRequest
 */
export declare class PurgeDeletedTenantsRequest extends Message<PurgeDeletedTenantsRequest> {
    /**
     * if spcecified, only purge tenants deleted
     *
     * @generated from field: google.protobuf.Timestamp deleted_before = 1;
     */
    deletedBefore?: Timestamp;
    /**
     * before the provided timestamp (UTC).
     *
     * tenant id (UUID, aserto-id --type tenant).
     *
     * @generated from field: string id = 2;
     */
    id: string;
    constructor(data?: PartialMessage<PurgeDeletedTenantsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.PurgeDeletedTenantsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurgeDeletedTenantsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurgeDeletedTenantsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurgeDeletedTenantsRequest;
    static equals(a: PurgeDeletedTenantsRequest | PlainMessage<PurgeDeletedTenantsRequest> | undefined, b: PurgeDeletedTenantsRequest | PlainMessage<PurgeDeletedTenantsRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsResponse
 */
export declare class PurgeDeletedTenantsResponse extends Message<PurgeDeletedTenantsResponse> {
    /**
     * list of purged tenants
     *
     * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
     */
    results: Tenant[];
    constructor(data?: PartialMessage<PurgeDeletedTenantsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.PurgeDeletedTenantsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PurgeDeletedTenantsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PurgeDeletedTenantsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PurgeDeletedTenantsResponse;
    static equals(a: PurgeDeletedTenantsResponse | PlainMessage<PurgeDeletedTenantsResponse> | undefined, b: PurgeDeletedTenantsResponse | PlainMessage<PurgeDeletedTenantsResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaRequest
 */
export declare class MigrateSchemaRequest extends Message<MigrateSchemaRequest> {
    /**
     * schemae SHARED or TENANT
     *
     * @generated from field: aserto.directory.store.v2.Schema schema = 1;
     */
    schema: Schema;
    /**
     * migrate UP or DOWN
     *
     * @generated from field: aserto.directory.store.v2.Migrate migrate = 2;
     */
    migrate: Migrate;
    /**
     * schema version
     *
     * @generated from field: optional string version = 3;
     */
    version?: string;
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: optional string tenant_id = 4;
     */
    tenantId?: string;
    constructor(data?: PartialMessage<MigrateSchemaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.MigrateSchemaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateSchemaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateSchemaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateSchemaRequest;
    static equals(a: MigrateSchemaRequest | PlainMessage<MigrateSchemaRequest> | undefined, b: MigrateSchemaRequest | PlainMessage<MigrateSchemaRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaResponse
 */
export declare class MigrateSchemaResponse extends Message<MigrateSchemaResponse> {
    /**
     * migration results
     *
     * @generated from field: repeated aserto.directory.store.v2.Migration results = 1;
     */
    results: Migration[];
    constructor(data?: PartialMessage<MigrateSchemaResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.MigrateSchemaResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateSchemaResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateSchemaResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateSchemaResponse;
    static equals(a: MigrateSchemaResponse | PlainMessage<MigrateSchemaResponse> | undefined, b: MigrateSchemaResponse | PlainMessage<MigrateSchemaResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.Migration
 */
export declare class Migration extends Message<Migration> {
    /**
     * tenant-id (0 == NO tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * number of migrations applied
     *
     * @generated from field: int32 applied = 2;
     */
    applied: number;
    /**
     * status
     *
     * @generated from field: string status = 3;
     */
    status: string;
    constructor(data?: PartialMessage<Migration>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.Migration";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Migration;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Migration;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Migration;
    static equals(a: Migration | PlainMessage<Migration> | undefined, b: Migration | PlainMessage<Migration> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.InfoRequest
 */
export declare class InfoRequest extends Message<InfoRequest> {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    constructor(data?: PartialMessage<InfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.InfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoRequest;
    static equals(a: InfoRequest | PlainMessage<InfoRequest> | undefined, b: InfoRequest | PlainMessage<InfoRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.InfoResponse
 */
export declare class InfoResponse extends Message<InfoResponse> {
    /**
     * tenant store info
     *
     * @generated from field: google.protobuf.Struct info = 1;
     */
    info?: Struct;
    constructor(data?: PartialMessage<InfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.InfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoResponse;
    static equals(a: InfoResponse | PlainMessage<InfoResponse> | undefined, b: InfoResponse | PlainMessage<InfoResponse> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionRequest
 */
export declare class DeleteIDPConnectionRequest extends Message<DeleteIDPConnectionRequest> {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * idp connection id (UUID, aserto-id --type connection)
     *
     * @generated from field: string connection = 2;
     */
    connection: string;
    constructor(data?: PartialMessage<DeleteIDPConnectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.DeleteIDPConnectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteIDPConnectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteIDPConnectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteIDPConnectionRequest;
    static equals(a: DeleteIDPConnectionRequest | PlainMessage<DeleteIDPConnectionRequest> | undefined, b: DeleteIDPConnectionRequest | PlainMessage<DeleteIDPConnectionRequest> | undefined): boolean;
}
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionResponse
 */
export declare class DeleteIDPConnectionResponse extends Message<DeleteIDPConnectionResponse> {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteIDPConnectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "aserto.directory.store.v2.DeleteIDPConnectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteIDPConnectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteIDPConnectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteIDPConnectionResponse;
    static equals(a: DeleteIDPConnectionResponse | PlainMessage<DeleteIDPConnectionResponse> | undefined, b: DeleteIDPConnectionResponse | PlainMessage<DeleteIDPConnectionResponse> | undefined): boolean;
}
