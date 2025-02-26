import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import type { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/store/v2/store.proto.
 */
export declare const file_aserto_directory_store_v2_store: GenFile;
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
         * @generated from field: string tenant_id = 1;
         */
        value: string;
        case: "tenantId";
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
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
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
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
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
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
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
}>;
