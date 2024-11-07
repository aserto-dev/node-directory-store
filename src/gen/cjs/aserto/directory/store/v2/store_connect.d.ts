import { AssignRoleToTenantRequest, AssignRoleToTenantResponse, CreateAPIKeyRequest, CreateAPIKeyResponse, CreateTenantRequest, CreateTenantResponse, DeleteAPIKeyRequest, DeleteAPIKeyResponse, DeleteIDPConnectionRequest, DeleteIDPConnectionResponse, DeleteTenantRequest, DeleteTenantResponse, GetAPIKeyIdentityRequest, GetAPIKeyIdentityResponse, GetTenantRequest, GetTenantResponse, InfoRequest, InfoResponse, ListAPIKeysRequest, ListAPIKeysResponse, ListTenantMembersRequest, ListTenantMembersResponse, ListTenantsRequest, ListTenantsResponse, ListUserTenantsRequest, ListUserTenantsResponse, MigrateSchemaRequest, MigrateSchemaResponse, PurgeDeletedTenantsRequest, PurgeDeletedTenantsResponse, RemoveRoleFromTenantRequest, RemoveRoleFromTenantResponse } from "./store_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service aserto.directory.store.v2.Store
 */
export declare const Store: {
    readonly typeName: "aserto.directory.store.v2.Store";
    readonly methods: {
        /**
         * @generated from rpc aserto.directory.store.v2.Store.GetTenant
         */
        readonly getTenant: {
            readonly name: "GetTenant";
            readonly I: typeof GetTenantRequest;
            readonly O: typeof GetTenantResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.CreateTenant
         */
        readonly createTenant: {
            readonly name: "CreateTenant";
            readonly I: typeof CreateTenantRequest;
            readonly O: typeof CreateTenantResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.DeleteTenant
         */
        readonly deleteTenant: {
            readonly name: "DeleteTenant";
            readonly I: typeof DeleteTenantRequest;
            readonly O: typeof DeleteTenantResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.ListTenants
         */
        readonly listTenants: {
            readonly name: "ListTenants";
            readonly I: typeof ListTenantsRequest;
            readonly O: typeof ListTenantsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.PurgeDeletedTenants
         */
        readonly purgeDeletedTenants: {
            readonly name: "PurgeDeletedTenants";
            readonly I: typeof PurgeDeletedTenantsRequest;
            readonly O: typeof PurgeDeletedTenantsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.MigrateSchema
         */
        readonly migrateSchema: {
            readonly name: "MigrateSchema";
            readonly I: typeof MigrateSchemaRequest;
            readonly O: typeof MigrateSchemaResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.Info
         */
        readonly info: {
            readonly name: "Info";
            readonly I: typeof InfoRequest;
            readonly O: typeof InfoResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.DeleteIDPConnection
         */
        readonly deleteIDPConnection: {
            readonly name: "DeleteIDPConnection";
            readonly I: typeof DeleteIDPConnectionRequest;
            readonly O: typeof DeleteIDPConnectionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.ListTenantMembers
         */
        readonly listTenantMembers: {
            readonly name: "ListTenantMembers";
            readonly I: typeof ListTenantMembersRequest;
            readonly O: typeof ListTenantMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.ListUserTenants
         */
        readonly listUserTenants: {
            readonly name: "ListUserTenants";
            readonly I: typeof ListUserTenantsRequest;
            readonly O: typeof ListUserTenantsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.AssignRoleToTenant
         */
        readonly assignRoleToTenant: {
            readonly name: "AssignRoleToTenant";
            readonly I: typeof AssignRoleToTenantRequest;
            readonly O: typeof AssignRoleToTenantResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.RemoveRoleFromTenant
         */
        readonly removeRoleFromTenant: {
            readonly name: "RemoveRoleFromTenant";
            readonly I: typeof RemoveRoleFromTenantRequest;
            readonly O: typeof RemoveRoleFromTenantResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.ListAPIKeys
         */
        readonly listAPIKeys: {
            readonly name: "ListAPIKeys";
            readonly I: typeof ListAPIKeysRequest;
            readonly O: typeof ListAPIKeysResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.DeleteAPIKey
         */
        readonly deleteAPIKey: {
            readonly name: "DeleteAPIKey";
            readonly I: typeof DeleteAPIKeyRequest;
            readonly O: typeof DeleteAPIKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.CreateAPIKey
         */
        readonly createAPIKey: {
            readonly name: "CreateAPIKey";
            readonly I: typeof CreateAPIKeyRequest;
            readonly O: typeof CreateAPIKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc aserto.directory.store.v2.Store.GetAPIKeyIdentity
         */
        readonly getAPIKeyIdentity: {
            readonly name: "GetAPIKeyIdentity";
            readonly I: typeof GetAPIKeyIdentityRequest;
            readonly O: typeof GetAPIKeyIdentityResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
