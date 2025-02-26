import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Any, Empty, Timestamp, Value } from "@bufbuild/protobuf/wkt";
import type { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb";
import type { Tenant } from "../../store/v2/store_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/controller/v1/controller.proto.
 */
export declare const file_aserto_directory_controller_v1_controller: GenFile;
/**
 * @generated from message aserto.directory.controller.v1.APIKey
 */
export type APIKey = Message<"aserto.directory.controller.v1.APIKey"> & {
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
 * Describes the message aserto.directory.controller.v1.APIKey.
 * Use `create(APIKeySchema)` to create a new message.
 */
export declare const APIKeySchema: GenMessage<APIKey>;
/**
 * @generated from message aserto.directory.controller.v1.TenantMember
 */
export type TenantMember = Message<"aserto.directory.controller.v1.TenantMember"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: repeated string roles = 3;
     */
    roles: string[];
};
/**
 * Describes the message aserto.directory.controller.v1.TenantMember.
 * Use `create(TenantMemberSchema)` to create a new message.
 */
export declare const TenantMemberSchema: GenMessage<TenantMember>;
/**
 * @generated from message aserto.directory.controller.v1.ListRolesRequest
 */
export type ListRolesRequest = Message<"aserto.directory.controller.v1.ListRolesRequest"> & {
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListRolesRequest.
 * Use `create(ListRolesRequestSchema)` to create a new message.
 */
export declare const ListRolesRequestSchema: GenMessage<ListRolesRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListRolesResponse
 */
export type ListRolesResponse = Message<"aserto.directory.controller.v1.ListRolesResponse"> & {
    /**
     * @generated from field: repeated string results = 1;
     */
    results: string[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.controller.v1.ListRolesResponse.
 * Use `create(ListRolesResponseSchema)` to create a new message.
 */
export declare const ListRolesResponseSchema: GenMessage<ListRolesResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListTenantMembersRequest
 */
export type ListTenantMembersRequest = Message<"aserto.directory.controller.v1.ListTenantMembersRequest"> & {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListTenantMembersRequest.
 * Use `create(ListTenantMembersRequestSchema)` to create a new message.
 */
export declare const ListTenantMembersRequestSchema: GenMessage<ListTenantMembersRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListTenantMembersResponse
 */
export type ListTenantMembersResponse = Message<"aserto.directory.controller.v1.ListTenantMembersResponse"> & {
    /**
     * @generated from field: repeated aserto.directory.controller.v1.TenantMember results = 1;
     */
    results: TenantMember[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.controller.v1.ListTenantMembersResponse.
 * Use `create(ListTenantMembersResponseSchema)` to create a new message.
 */
export declare const ListTenantMembersResponseSchema: GenMessage<ListTenantMembersResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListUserTenantsRequest
 */
export type ListUserTenantsRequest = Message<"aserto.directory.controller.v1.ListUserTenantsRequest"> & {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListUserTenantsRequest.
 * Use `create(ListUserTenantsRequestSchema)` to create a new message.
 */
export declare const ListUserTenantsRequestSchema: GenMessage<ListUserTenantsRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListUserTenantsResponse
 */
export type ListUserTenantsResponse = Message<"aserto.directory.controller.v1.ListUserTenantsResponse"> & {
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
 * Describes the message aserto.directory.controller.v1.ListUserTenantsResponse.
 * Use `create(ListUserTenantsResponseSchema)` to create a new message.
 */
export declare const ListUserTenantsResponseSchema: GenMessage<ListUserTenantsResponse>;
/**
 * @generated from message aserto.directory.controller.v1.SetUserRoleRequest
 */
export type SetUserRoleRequest = Message<"aserto.directory.controller.v1.SetUserRoleRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.SetUserRoleRequest.
 * Use `create(SetUserRoleRequestSchema)` to create a new message.
 */
export declare const SetUserRoleRequestSchema: GenMessage<SetUserRoleRequest>;
/**
 * @generated from message aserto.directory.controller.v1.SetUserRoleResponse
 */
export type SetUserRoleResponse = Message<"aserto.directory.controller.v1.SetUserRoleResponse"> & {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
};
/**
 * Describes the message aserto.directory.controller.v1.SetUserRoleResponse.
 * Use `create(SetUserRoleResponseSchema)` to create a new message.
 */
export declare const SetUserRoleResponseSchema: GenMessage<SetUserRoleResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListUserRolesRequest
 */
export type ListUserRolesRequest = Message<"aserto.directory.controller.v1.ListUserRolesRequest"> & {
    /**
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * @generated from field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListUserRolesRequest.
 * Use `create(ListUserRolesRequestSchema)` to create a new message.
 */
export declare const ListUserRolesRequestSchema: GenMessage<ListUserRolesRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListUserRolesResponse
 */
export type ListUserRolesResponse = Message<"aserto.directory.controller.v1.ListUserRolesResponse"> & {
    /**
     * @generated from field: repeated string results = 1;
     */
    results: string[];
    /**
     * @generated from field: aserto.directory.common.v3.PaginationResponse page = 9;
     */
    page?: PaginationResponse;
};
/**
 * Describes the message aserto.directory.controller.v1.ListUserRolesResponse.
 * Use `create(ListUserRolesResponseSchema)` to create a new message.
 */
export declare const ListUserRolesResponseSchema: GenMessage<ListUserRolesResponse>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteUserRoleRequest
 */
export type DeleteUserRoleRequest = Message<"aserto.directory.controller.v1.DeleteUserRoleRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.DeleteUserRoleRequest.
 * Use `create(DeleteUserRoleRequestSchema)` to create a new message.
 */
export declare const DeleteUserRoleRequestSchema: GenMessage<DeleteUserRoleRequest>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteUserRoleResponse
 */
export type DeleteUserRoleResponse = Message<"aserto.directory.controller.v1.DeleteUserRoleResponse"> & {
    /**
     * @generated from field: bool deleted = 1;
     */
    deleted: boolean;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteUserRoleResponse.
 * Use `create(DeleteUserRoleResponseSchema)` to create a new message.
 */
export declare const DeleteUserRoleResponseSchema: GenMessage<DeleteUserRoleResponse>;
/**
 * @generated from message aserto.directory.controller.v1.GetAPIKeyIdentityRequest
 */
export type GetAPIKeyIdentityRequest = Message<"aserto.directory.controller.v1.GetAPIKeyIdentityRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.GetAPIKeyIdentityRequest.
 * Use `create(GetAPIKeyIdentityRequestSchema)` to create a new message.
 */
export declare const GetAPIKeyIdentityRequestSchema: GenMessage<GetAPIKeyIdentityRequest>;
/**
 * @generated from message aserto.directory.controller.v1.GetAPIKeyIdentityResponse
 */
export type GetAPIKeyIdentityResponse = Message<"aserto.directory.controller.v1.GetAPIKeyIdentityResponse"> & {
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
 * Describes the message aserto.directory.controller.v1.GetAPIKeyIdentityResponse.
 * Use `create(GetAPIKeyIdentityResponseSchema)` to create a new message.
 */
export declare const GetAPIKeyIdentityResponseSchema: GenMessage<GetAPIKeyIdentityResponse>;
/**
 * @generated from message aserto.directory.controller.v1.CreateAPIKeyRequest
 */
export type CreateAPIKeyRequest = Message<"aserto.directory.controller.v1.CreateAPIKeyRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.CreateAPIKeyRequest.
 * Use `create(CreateAPIKeyRequestSchema)` to create a new message.
 */
export declare const CreateAPIKeyRequestSchema: GenMessage<CreateAPIKeyRequest>;
/**
 * @generated from message aserto.directory.controller.v1.CreateAPIKeyResponse
 */
export type CreateAPIKeyResponse = Message<"aserto.directory.controller.v1.CreateAPIKeyResponse"> & {
    /**
     * api key
     *
     * @generated from field: aserto.directory.controller.v1.APIKey result = 1;
     */
    result?: APIKey;
};
/**
 * Describes the message aserto.directory.controller.v1.CreateAPIKeyResponse.
 * Use `create(CreateAPIKeyResponseSchema)` to create a new message.
 */
export declare const CreateAPIKeyResponseSchema: GenMessage<CreateAPIKeyResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListAPIKeysRequest
 */
export type ListAPIKeysRequest = Message<"aserto.directory.controller.v1.ListAPIKeysRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.ListAPIKeysRequest.
 * Use `create(ListAPIKeysRequestSchema)` to create a new message.
 */
export declare const ListAPIKeysRequestSchema: GenMessage<ListAPIKeysRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListAPIKeysResponse
 */
export type ListAPIKeysResponse = Message<"aserto.directory.controller.v1.ListAPIKeysResponse"> & {
    /**
     * list of api keys
     *
     * @generated from field: repeated aserto.directory.controller.v1.APIKey results = 1;
     */
    results: APIKey[];
};
/**
 * Describes the message aserto.directory.controller.v1.ListAPIKeysResponse.
 * Use `create(ListAPIKeysResponseSchema)` to create a new message.
 */
export declare const ListAPIKeysResponseSchema: GenMessage<ListAPIKeysResponse>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteAPIKeyRequest
 */
export type DeleteAPIKeyRequest = Message<"aserto.directory.controller.v1.DeleteAPIKeyRequest"> & {
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
 * Describes the message aserto.directory.controller.v1.DeleteAPIKeyRequest.
 * Use `create(DeleteAPIKeyRequestSchema)` to create a new message.
 */
export declare const DeleteAPIKeyRequestSchema: GenMessage<DeleteAPIKeyRequest>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteAPIKeyResponse
 */
export type DeleteAPIKeyResponse = Message<"aserto.directory.controller.v1.DeleteAPIKeyResponse"> & {
    /**
     * @generated from field: bool deleted = 1;
     */
    deleted: boolean;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteAPIKeyResponse.
 * Use `create(DeleteAPIKeyResponseSchema)` to create a new message.
 */
export declare const DeleteAPIKeyResponseSchema: GenMessage<DeleteAPIKeyResponse>;
/**
 * @generated from message aserto.directory.controller.v1.GetConfigRequest
 */
export type GetConfigRequest = Message<"aserto.directory.controller.v1.GetConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string config_type = 2;
     */
    configType: string;
    /**
     * object id
     *
     * @generated from field: string config_id = 3;
     */
    configId: string;
};
/**
 * Describes the message aserto.directory.controller.v1.GetConfigRequest.
 * Use `create(GetConfigRequestSchema)` to create a new message.
 */
export declare const GetConfigRequestSchema: GenMessage<GetConfigRequest>;
/**
 * @generated from message aserto.directory.controller.v1.GetConfigResponse
 */
export type GetConfigResponse = Message<"aserto.directory.controller.v1.GetConfigResponse"> & {
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Any config = 1;
     */
    config?: Any;
    /**
     * config source template
     *
     * @generated from field: google.protobuf.Any template = 2;
     */
    template?: Any;
};
/**
 * Describes the message aserto.directory.controller.v1.GetConfigResponse.
 * Use `create(GetConfigResponseSchema)` to create a new message.
 */
export declare const GetConfigResponseSchema: GenMessage<GetConfigResponse>;
/**
 * @generated from message aserto.directory.controller.v1.SetConfigRequest
 */
export type SetConfigRequest = Message<"aserto.directory.controller.v1.SetConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string config_type = 2;
     */
    configType: string;
    /**
     * object id
     *
     * @generated from field: string config_id = 3;
     */
    configId: string;
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Any config = 4;
     */
    config?: Any;
};
/**
 * Describes the message aserto.directory.controller.v1.SetConfigRequest.
 * Use `create(SetConfigRequestSchema)` to create a new message.
 */
export declare const SetConfigRequestSchema: GenMessage<SetConfigRequest>;
/**
 * @generated from message aserto.directory.controller.v1.SetConfigResponse
 */
export type SetConfigResponse = Message<"aserto.directory.controller.v1.SetConfigResponse"> & {
    /**
     * config properties
     *
     * @generated from field: google.protobuf.Any config = 1;
     */
    config?: Any;
};
/**
 * Describes the message aserto.directory.controller.v1.SetConfigResponse.
 * Use `create(SetConfigResponseSchema)` to create a new message.
 */
export declare const SetConfigResponseSchema: GenMessage<SetConfigResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListConfigsRequest
 */
export type ListConfigsRequest = Message<"aserto.directory.controller.v1.ListConfigsRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string config_type = 2;
     */
    configType: string;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListConfigsRequest.
 * Use `create(ListConfigsRequestSchema)` to create a new message.
 */
export declare const ListConfigsRequestSchema: GenMessage<ListConfigsRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListConfigsResponse
 */
export type ListConfigsResponse = Message<"aserto.directory.controller.v1.ListConfigsResponse"> & {
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
 * Describes the message aserto.directory.controller.v1.ListConfigsResponse.
 * Use `create(ListConfigsResponseSchema)` to create a new message.
 */
export declare const ListConfigsResponseSchema: GenMessage<ListConfigsResponse>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteConfigRequest
 */
export type DeleteConfigRequest = Message<"aserto.directory.controller.v1.DeleteConfigRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * object type
     *
     * @generated from field: string config_type = 2;
     */
    configType: string;
    /**
     * object id
     *
     * @generated from field: string config_id = 3;
     */
    configId: string;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteConfigRequest.
 * Use `create(DeleteConfigRequestSchema)` to create a new message.
 */
export declare const DeleteConfigRequestSchema: GenMessage<DeleteConfigRequest>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteConfigResponse
 */
export type DeleteConfigResponse = Message<"aserto.directory.controller.v1.DeleteConfigResponse"> & {
    /**
     * @generated from field: bool deleted = 1;
     */
    deleted: boolean;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteConfigResponse.
 * Use `create(DeleteConfigResponseSchema)` to create a new message.
 */
export declare const DeleteConfigResponseSchema: GenMessage<DeleteConfigResponse>;
/**
 * @generated from message aserto.directory.controller.v1.GetSecretRequest
 */
export type GetSecretRequest = Message<"aserto.directory.controller.v1.GetSecretRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * secret name
     *
     * @generated from field: string secret_name = 2;
     */
    secretName: string;
    /**
     * secret field
     *
     * @generated from field: string field = 3;
     */
    field: string;
};
/**
 * Describes the message aserto.directory.controller.v1.GetSecretRequest.
 * Use `create(GetSecretRequestSchema)` to create a new message.
 */
export declare const GetSecretRequestSchema: GenMessage<GetSecretRequest>;
/**
 * @generated from message aserto.directory.controller.v1.GetSecretResponse
 */
export type GetSecretResponse = Message<"aserto.directory.controller.v1.GetSecretResponse"> & {
    /**
     * secret value
     *
     * @generated from field: google.protobuf.Value value = 1;
     */
    value?: Value;
};
/**
 * Describes the message aserto.directory.controller.v1.GetSecretResponse.
 * Use `create(GetSecretResponseSchema)` to create a new message.
 */
export declare const GetSecretResponseSchema: GenMessage<GetSecretResponse>;
/**
 * @generated from message aserto.directory.controller.v1.SetSecretRequest
 */
export type SetSecretRequest = Message<"aserto.directory.controller.v1.SetSecretRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * secret name
     *
     * @generated from field: string secret_name = 2;
     */
    secretName: string;
    /**
     * secret field
     *
     * @generated from field: string field = 3;
     */
    field: string;
    /**
     * secret value
     *
     * @generated from field: google.protobuf.Value value = 4;
     */
    value?: Value;
};
/**
 * Describes the message aserto.directory.controller.v1.SetSecretRequest.
 * Use `create(SetSecretRequestSchema)` to create a new message.
 */
export declare const SetSecretRequestSchema: GenMessage<SetSecretRequest>;
/**
 * @generated from message aserto.directory.controller.v1.SetSecretResponse
 */
export type SetSecretResponse = Message<"aserto.directory.controller.v1.SetSecretResponse"> & {
    /**
     * secret value
     *
     * @generated from field: google.protobuf.Value value = 1;
     */
    value?: Value;
};
/**
 * Describes the message aserto.directory.controller.v1.SetSecretResponse.
 * Use `create(SetSecretResponseSchema)` to create a new message.
 */
export declare const SetSecretResponseSchema: GenMessage<SetSecretResponse>;
/**
 * @generated from message aserto.directory.controller.v1.ListSecretsRequest
 */
export type ListSecretsRequest = Message<"aserto.directory.controller.v1.ListSecretsRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * pagination request
     *
     * @generated from field: aserto.directory.common.v3.PaginationRequest page = 9;
     */
    page?: PaginationRequest;
};
/**
 * Describes the message aserto.directory.controller.v1.ListSecretsRequest.
 * Use `create(ListSecretsRequestSchema)` to create a new message.
 */
export declare const ListSecretsRequestSchema: GenMessage<ListSecretsRequest>;
/**
 * @generated from message aserto.directory.controller.v1.ListSecretsResponse
 */
export type ListSecretsResponse = Message<"aserto.directory.controller.v1.ListSecretsResponse"> & {
    /**
     * list of secrets
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
 * Describes the message aserto.directory.controller.v1.ListSecretsResponse.
 * Use `create(ListSecretsResponseSchema)` to create a new message.
 */
export declare const ListSecretsResponseSchema: GenMessage<ListSecretsResponse>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteSecretRequest
 */
export type DeleteSecretRequest = Message<"aserto.directory.controller.v1.DeleteSecretRequest"> & {
    /**
     * tenant id (UUID, aserto-id --type tenant)
     *
     * @generated from field: string tenant_id = 1;
     */
    tenantId: string;
    /**
     * secret name
     *
     * @generated from field: string secret_name = 2;
     */
    secretName: string;
    /**
     * secret key
     *
     * @generated from field: string field = 3;
     */
    field: string;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteSecretRequest.
 * Use `create(DeleteSecretRequestSchema)` to create a new message.
 */
export declare const DeleteSecretRequestSchema: GenMessage<DeleteSecretRequest>;
/**
 * @generated from message aserto.directory.controller.v1.DeleteSecretResponse
 */
export type DeleteSecretResponse = Message<"aserto.directory.controller.v1.DeleteSecretResponse"> & {
    /**
     * @generated from field: bool deleted = 1;
     */
    deleted: boolean;
};
/**
 * Describes the message aserto.directory.controller.v1.DeleteSecretResponse.
 * Use `create(DeleteSecretResponseSchema)` to create a new message.
 */
export declare const DeleteSecretResponseSchema: GenMessage<DeleteSecretResponse>;
/**
 * @generated from service aserto.directory.controller.v1.Controller
 */
export declare const Controller: GenService<{
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListRoles
     */
    listRoles: {
        methodKind: "unary";
        input: typeof ListRolesRequestSchema;
        output: typeof ListRolesResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListTenantMembers
     */
    listTenantMembers: {
        methodKind: "unary";
        input: typeof ListTenantMembersRequestSchema;
        output: typeof ListTenantMembersResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListUserTenants
     */
    listUserTenants: {
        methodKind: "unary";
        input: typeof ListUserTenantsRequestSchema;
        output: typeof ListUserTenantsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.SetUserRole
     */
    setUserRole: {
        methodKind: "unary";
        input: typeof SetUserRoleRequestSchema;
        output: typeof SetUserRoleResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListUserRoles
     */
    listUserRoles: {
        methodKind: "unary";
        input: typeof ListUserRolesRequestSchema;
        output: typeof ListUserRolesResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.DeleteUserRole
     */
    deleteUserRole: {
        methodKind: "unary";
        input: typeof DeleteUserRoleRequestSchema;
        output: typeof DeleteUserRoleResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.GetAPIKeyIdentity
     */
    getAPIKeyIdentity: {
        methodKind: "unary";
        input: typeof GetAPIKeyIdentityRequestSchema;
        output: typeof GetAPIKeyIdentityResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.CreateAPIKey
     */
    createAPIKey: {
        methodKind: "unary";
        input: typeof CreateAPIKeyRequestSchema;
        output: typeof CreateAPIKeyResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListAPIKeys
     */
    listAPIKeys: {
        methodKind: "unary";
        input: typeof ListAPIKeysRequestSchema;
        output: typeof ListAPIKeysResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.DeleteAPIKey
     */
    deleteAPIKey: {
        methodKind: "unary";
        input: typeof DeleteAPIKeyRequestSchema;
        output: typeof DeleteAPIKeyResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.GetConfig
     */
    getConfig: {
        methodKind: "unary";
        input: typeof GetConfigRequestSchema;
        output: typeof GetConfigResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.SetConfig
     */
    setConfig: {
        methodKind: "unary";
        input: typeof SetConfigRequestSchema;
        output: typeof SetConfigResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListConfigs
     */
    listConfigs: {
        methodKind: "unary";
        input: typeof ListConfigsRequestSchema;
        output: typeof ListConfigsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.DeleteConfig
     */
    deleteConfig: {
        methodKind: "unary";
        input: typeof DeleteConfigRequestSchema;
        output: typeof DeleteConfigResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.GetSecret
     */
    getSecret: {
        methodKind: "unary";
        input: typeof GetSecretRequestSchema;
        output: typeof GetSecretResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.SetSecret
     */
    setSecret: {
        methodKind: "unary";
        input: typeof SetSecretRequestSchema;
        output: typeof SetSecretResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.ListSecrets
     */
    listSecrets: {
        methodKind: "unary";
        input: typeof ListSecretsRequestSchema;
        output: typeof ListSecretsResponseSchema;
    };
    /**
     * @generated from rpc aserto.directory.controller.v1.Controller.DeleteSecret
     */
    deleteSecret: {
        methodKind: "unary";
        input: typeof DeleteSecretRequestSchema;
        output: typeof DeleteSecretResponseSchema;
    };
}>;
