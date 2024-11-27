import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import type { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/store/v2/store.proto.
 */
export declare const file_aserto_directory_store_v2_store: GenFile;
/**
 * @generated from message aserto.directory.store.v2.TenantMember
 */
export type TenantMember = Message<"aserto.directory.store.v2.TenantMember"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.TenantMember.
 * Use `create(TenantMemberSchema)` to create a new message.
 */
export declare const TenantMemberSchema: GenMessage<TenantMember>;
/**
 * @generated from message aserto.directory.store.v2.Tenant
 */
export type Tenant = Message<"aserto.directory.store.v2.Tenant"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.Tenant.
 * Use `create(TenantSchema)` to create a new message.
 */
export declare const TenantSchema: GenMessage<Tenant>;
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersRequest
 */
export type ListTenantMembersRequest = Message<"aserto.directory.store.v2.ListTenantMembersRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.store.v2.ListTenantMembersRequest.
 * Use `create(ListTenantMembersRequestSchema)` to create a new message.
 */
export declare const ListTenantMembersRequestSchema: GenMessage<ListTenantMembersRequest>;
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersResponse
 */
export type ListTenantMembersResponse = Message<"aserto.directory.store.v2.ListTenantMembersResponse"> & {
    /**
     * @generated from field: repeated aserto.directory.store.v2.TenantMember results = 1;
     */
    results: TenantMember[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.store.v2.ListTenantMembersResponse.
 * Use `create(ListTenantMembersResponseSchema)` to create a new message.
 */
export declare const ListTenantMembersResponseSchema: GenMessage<ListTenantMembersResponse>;
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantRequest
 */
export type AssignRoleToTenantRequest = Message<"aserto.directory.store.v2.AssignRoleToTenantRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.AssignRoleToTenantRequest.
 * Use `create(AssignRoleToTenantRequestSchema)` to create a new message.
 */
export declare const AssignRoleToTenantRequestSchema: GenMessage<AssignRoleToTenantRequest>;
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantResponse
 */
export type AssignRoleToTenantResponse = Message<"aserto.directory.store.v2.AssignRoleToTenantResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.AssignRoleToTenantResponse.
 * Use `create(AssignRoleToTenantResponseSchema)` to create a new message.
 */
export declare const AssignRoleToTenantResponseSchema: GenMessage<AssignRoleToTenantResponse>;
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantRequest
 */
export type RemoveRoleFromTenantRequest = Message<"aserto.directory.store.v2.RemoveRoleFromTenantRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.RemoveRoleFromTenantRequest.
 * Use `create(RemoveRoleFromTenantRequestSchema)` to create a new message.
 */
export declare const RemoveRoleFromTenantRequestSchema: GenMessage<RemoveRoleFromTenantRequest>;
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantResponse
 */
export type RemoveRoleFromTenantResponse = Message<"aserto.directory.store.v2.RemoveRoleFromTenantResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.RemoveRoleFromTenantResponse.
 * Use `create(RemoveRoleFromTenantResponseSchema)` to create a new message.
 */
export declare const RemoveRoleFromTenantResponseSchema: GenMessage<RemoveRoleFromTenantResponse>;
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsRequest
 */
export type ListUserTenantsRequest = Message<"aserto.directory.store.v2.ListUserTenantsRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.store.v2.ListUserTenantsRequest.
 * Use `create(ListUserTenantsRequestSchema)` to create a new message.
 */
export declare const ListUserTenantsRequestSchema: GenMessage<ListUserTenantsRequest>;
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsResponse
 */
export type ListUserTenantsResponse = Message<"aserto.directory.store.v2.ListUserTenantsResponse"> & {
    /**
     * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
     */
    results: Tenant[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.store.v2.ListUserTenantsResponse.
 * Use `create(ListUserTenantsResponseSchema)` to create a new message.
 */
export declare const ListUserTenantsResponseSchema: GenMessage<ListUserTenantsResponse>;
/**
 * @generated from message aserto.directory.store.v2.GetTenantRequest
 */
export type GetTenantRequest = Message<"aserto.directory.store.v2.GetTenantRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.GetTenantRequest.
 * Use `create(GetTenantRequestSchema)` to create a new message.
 */
export declare const GetTenantRequestSchema: GenMessage<GetTenantRequest>;
/**
 * @generated from message aserto.directory.store.v2.GetTenantResponse
 */
export type GetTenantResponse = Message<"aserto.directory.store.v2.GetTenantResponse"> & {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant result = 1;
     */
    result?: Tenant;
};
/**
 * Describes the message aserto.directory.store.v2.GetTenantResponse.
 * Use `create(GetTenantResponseSchema)` to create a new message.
 */
export declare const GetTenantResponseSchema: GenMessage<GetTenantResponse>;
/**
 * @generated from message aserto.directory.store.v2.CreateTenantRequest
 */
export type CreateTenantRequest = Message<"aserto.directory.store.v2.CreateTenantRequest"> & {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant tenant = 1;
     */
    tenant?: Tenant;
};
/**
 * Describes the message aserto.directory.store.v2.CreateTenantRequest.
 * Use `create(CreateTenantRequestSchema)` to create a new message.
 */
export declare const CreateTenantRequestSchema: GenMessage<CreateTenantRequest>;
/**
 * @generated from message aserto.directory.store.v2.CreateTenantResponse
 */
export type CreateTenantResponse = Message<"aserto.directory.store.v2.CreateTenantResponse"> & {
    /**
     * tenant instance
     *
     * @generated from field: aserto.directory.store.v2.Tenant result = 1;
     */
    result?: Tenant;
};
/**
 * Describes the message aserto.directory.store.v2.CreateTenantResponse.
 * Use `create(CreateTenantResponseSchema)` to create a new message.
 */
export declare const CreateTenantResponseSchema: GenMessage<CreateTenantResponse>;
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantRequest
 */
export type DeleteTenantRequest = Message<"aserto.directory.store.v2.DeleteTenantRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.DeleteTenantRequest.
 * Use `create(DeleteTenantRequestSchema)` to create a new message.
 */
export declare const DeleteTenantRequestSchema: GenMessage<DeleteTenantRequest>;
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantResponse
 */
export type DeleteTenantResponse = Message<"aserto.directory.store.v2.DeleteTenantResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteTenantResponse.
 * Use `create(DeleteTenantResponseSchema)` to create a new message.
 */
export declare const DeleteTenantResponseSchema: GenMessage<DeleteTenantResponse>;
/**
 * @generated from message aserto.directory.store.v2.ListTenantsRequest
 */
export type ListTenantsRequest = Message<"aserto.directory.store.v2.ListTenantsRequest"> & {
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.store.v2.ListTenantsRequest.
 * Use `create(ListTenantsRequestSchema)` to create a new message.
 */
export declare const ListTenantsRequestSchema: GenMessage<ListTenantsRequest>;
/**
 * @generated from message aserto.directory.store.v2.ListTenantsResponse
 */
export type ListTenantsResponse = Message<"aserto.directory.store.v2.ListTenantsResponse"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.ListTenantsResponse.
 * Use `create(ListTenantsResponseSchema)` to create a new message.
 */
export declare const ListTenantsResponseSchema: GenMessage<ListTenantsResponse>;
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsRequest
 */
export type PurgeDeletedTenantsRequest = Message<"aserto.directory.store.v2.PurgeDeletedTenantsRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.PurgeDeletedTenantsRequest.
 * Use `create(PurgeDeletedTenantsRequestSchema)` to create a new message.
 */
export declare const PurgeDeletedTenantsRequestSchema: GenMessage<PurgeDeletedTenantsRequest>;
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsResponse
 */
export type PurgeDeletedTenantsResponse = Message<"aserto.directory.store.v2.PurgeDeletedTenantsResponse"> & {
    /**
     * list of purged tenants
     *
     * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
     */
    results: Tenant[];
};
/**
 * Describes the message aserto.directory.store.v2.PurgeDeletedTenantsResponse.
 * Use `create(PurgeDeletedTenantsResponseSchema)` to create a new message.
 */
export declare const PurgeDeletedTenantsResponseSchema: GenMessage<PurgeDeletedTenantsResponse>;
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaRequest
 */
export type MigrateSchemaRequest = Message<"aserto.directory.store.v2.MigrateSchemaRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.MigrateSchemaRequest.
 * Use `create(MigrateSchemaRequestSchema)` to create a new message.
 */
export declare const MigrateSchemaRequestSchema: GenMessage<MigrateSchemaRequest>;
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaResponse
 */
export type MigrateSchemaResponse = Message<"aserto.directory.store.v2.MigrateSchemaResponse"> & {
    /**
     * migration results
     *
     * @generated from field: repeated aserto.directory.store.v2.Migration results = 1;
     */
    results: Migration[];
};
/**
 * Describes the message aserto.directory.store.v2.MigrateSchemaResponse.
 * Use `create(MigrateSchemaResponseSchema)` to create a new message.
 */
export declare const MigrateSchemaResponseSchema: GenMessage<MigrateSchemaResponse>;
/**
 * @generated from message aserto.directory.store.v2.Migration
 */
export type Migration = Message<"aserto.directory.store.v2.Migration"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.Migration.
 * Use `create(MigrationSchema)` to create a new message.
 */
export declare const MigrationSchema: GenMessage<Migration>;
/**
 * @generated from message aserto.directory.store.v2.InfoRequest
 */
export type InfoRequest = Message<"aserto.directory.store.v2.InfoRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message aserto.directory.store.v2.InfoRequest.
 * Use `create(InfoRequestSchema)` to create a new message.
 */
export declare const InfoRequestSchema: GenMessage<InfoRequest>;
/**
 * @generated from message aserto.directory.store.v2.InfoResponse
 */
export type InfoResponse = Message<"aserto.directory.store.v2.InfoResponse"> & {
    /**
     * tenant store info
     *
     * @generated from field: google.protobuf.Struct info = 1;
     */
    info?: JsonObject;
};
/**
 * Describes the message aserto.directory.store.v2.InfoResponse.
 * Use `create(InfoResponseSchema)` to create a new message.
 */
export declare const InfoResponseSchema: GenMessage<InfoResponse>;
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionRequest
 */
export type DeleteIDPConnectionRequest = Message<"aserto.directory.store.v2.DeleteIDPConnectionRequest"> & {
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
};
/**
 * Describes the message aserto.directory.store.v2.DeleteIDPConnectionRequest.
 * Use `create(DeleteIDPConnectionRequestSchema)` to create a new message.
 */
export declare const DeleteIDPConnectionRequestSchema: GenMessage<DeleteIDPConnectionRequest>;
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionResponse
 */
export type DeleteIDPConnectionResponse = Message<"aserto.directory.store.v2.DeleteIDPConnectionResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteIDPConnectionResponse.
 * Use `create(DeleteIDPConnectionResponseSchema)` to create a new message.
 */
export declare const DeleteIDPConnectionResponseSchema: GenMessage<DeleteIDPConnectionResponse>;
/**
 * @generated from message aserto.directory.store.v2.ListAPIKeysRequest
 */
export type ListAPIKeysRequest = Message<"aserto.directory.store.v2.ListAPIKeysRequest"> & {
    /**
     * tenant id
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * machine account role
     *
     * @generated from field: string role = 2;
     */
    role: string;
};
/**
 * Describes the message aserto.directory.store.v2.ListAPIKeysRequest.
 * Use `create(ListAPIKeysRequestSchema)` to create a new message.
 */
export declare const ListAPIKeysRequestSchema: GenMessage<ListAPIKeysRequest>;
/**
 * @generated from message aserto.directory.store.v2.ListAPIKeysResponse
 */
export type ListAPIKeysResponse = Message<"aserto.directory.store.v2.ListAPIKeysResponse"> & {
    /**
     * list of api keys
     *
     * @generated from field: repeated aserto.directory.store.v2.APIKey results = 1;
     */
    results: APIKey[];
};
/**
 * Describes the message aserto.directory.store.v2.ListAPIKeysResponse.
 * Use `create(ListAPIKeysResponseSchema)` to create a new message.
 */
export declare const ListAPIKeysResponseSchema: GenMessage<ListAPIKeysResponse>;
/**
 * @generated from message aserto.directory.store.v2.APIKey
 */
export type APIKey = Message<"aserto.directory.store.v2.APIKey"> & {
    /**
     * api key version
     *
     * @generated from field: int32 version = 1;
     */
    version: number;
    /**
     * api key
     *
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * expiration date (UTC)
     *
     * @generated from field: google.protobuf.Timestamp expires_at = 3;
     */
    expiresAt?: Timestamp;
    /**
     * created at timestamp (UTC)
     *
     * @generated from field: google.protobuf.Timestamp created_at = 4;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message aserto.directory.store.v2.APIKey.
 * Use `create(APIKeySchema)` to create a new message.
 */
export declare const APIKeySchema: GenMessage<APIKey>;
/**
 * @generated from message aserto.directory.store.v2.DeleteAPIKeyRequest
 */
export type DeleteAPIKeyRequest = Message<"aserto.directory.store.v2.DeleteAPIKeyRequest"> & {
    /**
     * tenant id
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * machine account role
     *
     * @generated from field: string role = 2;
     */
    role: string;
    /**
     * api key version
     *
     * @generated from field: int32 version = 3;
     */
    version: number;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteAPIKeyRequest.
 * Use `create(DeleteAPIKeyRequestSchema)` to create a new message.
 */
export declare const DeleteAPIKeyRequestSchema: GenMessage<DeleteAPIKeyRequest>;
/**
 * @generated from message aserto.directory.store.v2.DeleteAPIKeyResponse
 */
export type DeleteAPIKeyResponse = Message<"aserto.directory.store.v2.DeleteAPIKeyResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteAPIKeyResponse.
 * Use `create(DeleteAPIKeyResponseSchema)` to create a new message.
 */
export declare const DeleteAPIKeyResponseSchema: GenMessage<DeleteAPIKeyResponse>;
/**
 * @generated from message aserto.directory.store.v2.CreateAPIKeyRequest
 */
export type CreateAPIKeyRequest = Message<"aserto.directory.store.v2.CreateAPIKeyRequest"> & {
    /**
     * tenant id
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * machine account role
     *
     * @generated from field: string role = 2;
     */
    role: string;
    /**
     * expiration date (UTC)
     *
     * @generated from field: google.protobuf.Timestamp expires_at = 3;
     */
    expiresAt?: Timestamp;
};
/**
 * Describes the message aserto.directory.store.v2.CreateAPIKeyRequest.
 * Use `create(CreateAPIKeyRequestSchema)` to create a new message.
 */
export declare const CreateAPIKeyRequestSchema: GenMessage<CreateAPIKeyRequest>;
/**
 * @generated from message aserto.directory.store.v2.CreateAPIKeyResponse
 */
export type CreateAPIKeyResponse = Message<"aserto.directory.store.v2.CreateAPIKeyResponse"> & {
    /**
     * api key
     *
     * @generated from field: aserto.directory.store.v2.APIKey result = 1;
     */
    result?: APIKey;
};
/**
 * Describes the message aserto.directory.store.v2.CreateAPIKeyResponse.
 * Use `create(CreateAPIKeyResponseSchema)` to create a new message.
 */
export declare const CreateAPIKeyResponseSchema: GenMessage<CreateAPIKeyResponse>;
/**
 * @generated from message aserto.directory.store.v2.GetAPIKeyIdentityRequest
 */
export type GetAPIKeyIdentityRequest = Message<"aserto.directory.store.v2.GetAPIKeyIdentityRequest"> & {
    /**
     * tenant id
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * api key
     *
     * @generated from field: string key = 2;
     */
    key: string;
};
/**
 * Describes the message aserto.directory.store.v2.GetAPIKeyIdentityRequest.
 * Use `create(GetAPIKeyIdentityRequestSchema)` to create a new message.
 */
export declare const GetAPIKeyIdentityRequestSchema: GenMessage<GetAPIKeyIdentityRequest>;
/**
 * @generated from message aserto.directory.store.v2.GetAPIKeyIdentityResponse
 */
export type GetAPIKeyIdentityResponse = Message<"aserto.directory.store.v2.GetAPIKeyIdentityResponse"> & {
    /**
     * machine account identity
     *
     * @generated from field: string identity = 1;
     */
    identity: string;
    /**
     * expiration date (UTC)
     *
     * @generated from field: google.protobuf.Timestamp expires_at = 2;
     */
    expiresAt?: Timestamp;
};
/**
 * Describes the message aserto.directory.store.v2.GetAPIKeyIdentityResponse.
 * Use `create(GetAPIKeyIdentityResponseSchema)` to create a new message.
 */
export declare const GetAPIKeyIdentityResponseSchema: GenMessage<GetAPIKeyIdentityResponse>;
/**
 * @generated from message aserto.directory.store.v2.GetConfigRequest
 */
export type GetConfigRequest = Message<"aserto.directory.store.v2.GetConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * object id
     *
     * @generated from field: string id = 3;
     */
    id: string;
};
/**
 * Describes the message aserto.directory.store.v2.GetConfigRequest.
 * Use `create(GetConfigRequestSchema)` to create a new message.
 */
export declare const GetConfigRequestSchema: GenMessage<GetConfigRequest>;
/**
 * @generated from message aserto.directory.store.v2.GetConfigResponse
 */
export type GetConfigResponse = Message<"aserto.directory.store.v2.GetConfigResponse"> & {
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Struct config = 1;
     */
    config?: JsonObject;
    /**
     * config source template
     *
     * @generated from field: google.protobuf.Struct template = 2;
     */
    template?: JsonObject;
};
/**
 * Describes the message aserto.directory.store.v2.GetConfigResponse.
 * Use `create(GetConfigResponseSchema)` to create a new message.
 */
export declare const GetConfigResponseSchema: GenMessage<GetConfigResponse>;
/**
 * @generated from message aserto.directory.store.v2.SetConfigRequest
 */
export type SetConfigRequest = Message<"aserto.directory.store.v2.SetConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * object id
     *
     * @generated from field: string id = 3;
     */
    id: string;
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Struct config = 4;
     */
    config?: JsonObject;
};
/**
 * Describes the message aserto.directory.store.v2.SetConfigRequest.
 * Use `create(SetConfigRequestSchema)` to create a new message.
 */
export declare const SetConfigRequestSchema: GenMessage<SetConfigRequest>;
/**
 * @generated from message aserto.directory.store.v2.SetConfigResponse
 */
export type SetConfigResponse = Message<"aserto.directory.store.v2.SetConfigResponse"> & {
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Struct config = 1;
     */
    config?: JsonObject;
};
/**
 * Describes the message aserto.directory.store.v2.SetConfigResponse.
 * Use `create(SetConfigResponseSchema)` to create a new message.
 */
export declare const SetConfigResponseSchema: GenMessage<SetConfigResponse>;
/**
 * @generated from message aserto.directory.store.v2.ListConfigsRequest
 */
export type ListConfigsRequest = Message<"aserto.directory.store.v2.ListConfigsRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.store.v2.ListConfigsRequest.
 * Use `create(ListConfigsRequestSchema)` to create a new message.
 */
export declare const ListConfigsRequestSchema: GenMessage<ListConfigsRequest>;
/**
 * @generated from message aserto.directory.store.v2.ListConfigsResponse
 */
export type ListConfigsResponse = Message<"aserto.directory.store.v2.ListConfigsResponse"> & {
    /**
     * list of config IDs
     *
     * @generated from field: repeated string results = 1;
     */
    results: string[];
    /**
     * pagination response
     *
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.store.v2.ListConfigsResponse.
 * Use `create(ListConfigsResponseSchema)` to create a new message.
 */
export declare const ListConfigsResponseSchema: GenMessage<ListConfigsResponse>;
/**
 * @generated from message aserto.directory.store.v2.DeleteConfigRequest
 */
export type DeleteConfigRequest = Message<"aserto.directory.store.v2.DeleteConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * object id
     *
     * @generated from field: string id = 3;
     */
    id: string;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteConfigRequest.
 * Use `create(DeleteConfigRequestSchema)` to create a new message.
 */
export declare const DeleteConfigRequestSchema: GenMessage<DeleteConfigRequest>;
/**
 * @generated from message aserto.directory.store.v2.DeleteConfigResponse
 */
export type DeleteConfigResponse = Message<"aserto.directory.store.v2.DeleteConfigResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.store.v2.DeleteConfigResponse.
 * Use `create(DeleteConfigResponseSchema)` to create a new message.
 */
export declare const DeleteConfigResponseSchema: GenMessage<DeleteConfigResponse>;
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
 * Describes the enum aserto.directory.store.v2.Schema.
 */
export declare const SchemaSchema: GenEnum<Schema>;
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
 * Describes the enum aserto.directory.store.v2.Migrate.
 */
export declare const MigrateSchema: GenEnum<Migrate>;
/**
 * @generated from service aserto.directory.store.v2.Store
 */
export declare const Store: GenService<{
    /**
     * @generated from rpc aserto.directory.store.v2.Store.GetTenant
     */
    getTenant: {
        methodKind: "unary";
        input: typeof GetTenantRequestSchema;
        output: typeof GetTenantResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.CreateTenant
     */
    createTenant: {
        methodKind: "unary";
        input: typeof CreateTenantRequestSchema;
        output: typeof CreateTenantResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.DeleteTenant
     */
    deleteTenant: {
        methodKind: "unary";
        input: typeof DeleteTenantRequestSchema;
        output: typeof DeleteTenantResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.ListTenants
     */
    listTenants: {
        methodKind: "unary";
        input: typeof ListTenantsRequestSchema;
        output: typeof ListTenantsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.PurgeDeletedTenants
     */
    purgeDeletedTenants: {
        methodKind: "unary";
        input: typeof PurgeDeletedTenantsRequestSchema;
        output: typeof PurgeDeletedTenantsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.MigrateSchema
     */
    migrateSchema: {
        methodKind: "unary";
        input: typeof MigrateSchemaRequestSchema;
        output: typeof MigrateSchemaResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.Info
     */
    info: {
        methodKind: "unary";
        input: typeof InfoRequestSchema;
        output: typeof InfoResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.DeleteIDPConnection
     */
    deleteIDPConnection: {
        methodKind: "unary";
        input: typeof DeleteIDPConnectionRequestSchema;
        output: typeof DeleteIDPConnectionResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.ListTenantMembers
     */
    listTenantMembers: {
        methodKind: "unary";
        input: typeof ListTenantMembersRequestSchema;
        output: typeof ListTenantMembersResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.ListUserTenants
     */
    listUserTenants: {
        methodKind: "unary";
        input: typeof ListUserTenantsRequestSchema;
        output: typeof ListUserTenantsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.AssignRoleToTenant
     */
    assignRoleToTenant: {
        methodKind: "unary";
        input: typeof AssignRoleToTenantRequestSchema;
        output: typeof AssignRoleToTenantResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.RemoveRoleFromTenant
     */
    removeRoleFromTenant: {
        methodKind: "unary";
        input: typeof RemoveRoleFromTenantRequestSchema;
        output: typeof RemoveRoleFromTenantResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.ListAPIKeys
     */
    listAPIKeys: {
        methodKind: "unary";
        input: typeof ListAPIKeysRequestSchema;
        output: typeof ListAPIKeysResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.DeleteAPIKey
     */
    deleteAPIKey: {
        methodKind: "unary";
        input: typeof DeleteAPIKeyRequestSchema;
        output: typeof DeleteAPIKeyResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.CreateAPIKey
     */
    createAPIKey: {
        methodKind: "unary";
        input: typeof CreateAPIKeyRequestSchema;
        output: typeof CreateAPIKeyResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.GetAPIKeyIdentity
     */
    getAPIKeyIdentity: {
        methodKind: "unary";
        input: typeof GetAPIKeyIdentityRequestSchema;
        output: typeof GetAPIKeyIdentityResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.GetConfig
     */
    getConfig: {
        methodKind: "unary";
        input: typeof GetConfigRequestSchema;
        output: typeof GetConfigResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.SetConfig
     */
    setConfig: {
        methodKind: "unary";
        input: typeof SetConfigRequestSchema;
        output: typeof SetConfigResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.ListConfigs
     */
    listConfigs: {
        methodKind: "unary";
        input: typeof ListConfigsRequestSchema;
        output: typeof ListConfigsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.store.v2.Store.DeleteConfig
     */
    deleteConfig: {
        methodKind: "unary";
        input: typeof DeleteConfigRequestSchema;
        output: typeof DeleteConfigResponseSchema;
    };
}>;
