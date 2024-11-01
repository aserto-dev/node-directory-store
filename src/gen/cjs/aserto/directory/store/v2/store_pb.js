"use strict";
// @generated by protoc-gen-es v1.8.0 with parameter "target=ts+js"
// @generated from file aserto/directory/store/v2/store.proto (package aserto.directory.store.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteIDPConnectionResponse = exports.DeleteIDPConnectionRequest = exports.InfoResponse = exports.InfoRequest = exports.Migration = exports.MigrateSchemaResponse = exports.MigrateSchemaRequest = exports.PurgeDeletedTenantsResponse = exports.PurgeDeletedTenantsRequest = exports.ListTenantsResponse = exports.ListTenantsRequest = exports.DeleteTenantResponse = exports.DeleteTenantRequest = exports.CreateTenantResponse = exports.CreateTenantRequest = exports.GetTenantResponse = exports.GetTenantRequest = exports.ListUserTenantsResponse = exports.ListUserTenantsRequest = exports.RemoveRoleFromTenantResponse = exports.RemoveRoleFromTenantRequest = exports.AssignRoleToTenantResponse = exports.AssignRoleToTenantRequest = exports.ListTenantMembersResponse = exports.ListTenantMembersRequest = exports.Tenant = exports.TenantMember = exports.Migrate = exports.Schema = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const common_pb_js_1 = require("../../common/v3/common_pb.js");
/**
 * @generated from enum aserto.directory.store.v2.Schema
 */
var Schema;
(function (Schema) {
    /**
     * @generated from enum value: SCHEMA_UNKNOWN = 0;
     */
    Schema[Schema["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: SCHEMA_SHARED = 1;
     */
    Schema[Schema["SHARED"] = 1] = "SHARED";
    /**
     * @generated from enum value: SCHEMA_TENANT = 2;
     */
    Schema[Schema["TENANT"] = 2] = "TENANT";
})(Schema = exports.Schema || (exports.Schema = {}));
// Retrieve enum metadata with: proto3.getEnumType(Schema)
protobuf_1.proto3.util.setEnumType(Schema, "aserto.directory.store.v2.Schema", [
    { no: 0, name: "SCHEMA_UNKNOWN" },
    { no: 1, name: "SCHEMA_SHARED" },
    { no: 2, name: "SCHEMA_TENANT" },
]);
/**
 * @generated from enum aserto.directory.store.v2.Migrate
 */
var Migrate;
(function (Migrate) {
    /**
     * @generated from enum value: MIGRATE_UNKNOWN = 0;
     */
    Migrate[Migrate["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * @generated from enum value: MIGRATE_UP = 1;
     */
    Migrate[Migrate["UP"] = 1] = "UP";
    /**
     * @generated from enum value: MIGRATE_DOWN = 2;
     */
    Migrate[Migrate["DOWN"] = 2] = "DOWN";
})(Migrate = exports.Migrate || (exports.Migrate = {}));
// Retrieve enum metadata with: proto3.getEnumType(Migrate)
protobuf_1.proto3.util.setEnumType(Migrate, "aserto.directory.store.v2.Migrate", [
    { no: 0, name: "MIGRATE_UNKNOWN" },
    { no: 1, name: "MIGRATE_UP" },
    { no: 2, name: "MIGRATE_DOWN" },
]);
/**
 * @generated from message aserto.directory.store.v2.TenantMember
 */
class TenantMember extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * @generated from field: string type = 2;
         */
        this.type = "";
        /**
         * @generated from field: repeated string roles = 3;
         */
        this.roles = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TenantMember().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TenantMember().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TenantMember().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(TenantMember, a, b);
    }
}
exports.TenantMember = TenantMember;
TenantMember.runtime = protobuf_1.proto3;
TenantMember.typeName = "aserto.directory.store.v2.TenantMember";
TenantMember.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "roles", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message aserto.directory.store.v2.Tenant
 */
class Tenant extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * tenant id (UUID, aserto-id --type tenant)
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * tenant name
         *
         * @generated from field: string name = 2;
         */
        this.name = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Tenant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Tenant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Tenant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Tenant, a, b);
    }
}
exports.Tenant = Tenant;
Tenant.runtime = protobuf_1.proto3;
Tenant.typeName = "aserto.directory.store.v2.Tenant";
Tenant.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 22, name: "deleted_at", kind: "message", T: protobuf_1.Timestamp },
]);
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersRequest
 */
class ListTenantMembersRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListTenantMembersRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListTenantMembersRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListTenantMembersRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListTenantMembersRequest, a, b);
    }
}
exports.ListTenantMembersRequest = ListTenantMembersRequest;
ListTenantMembersRequest.runtime = protobuf_1.proto3;
ListTenantMembersRequest.typeName = "aserto.directory.store.v2.ListTenantMembersRequest";
ListTenantMembersRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.store.v2.ListTenantMembersResponse
 */
class ListTenantMembersResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated aserto.directory.store.v2.TenantMember results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListTenantMembersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListTenantMembersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListTenantMembersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListTenantMembersResponse, a, b);
    }
}
exports.ListTenantMembersResponse = ListTenantMembersResponse;
ListTenantMembersResponse.runtime = protobuf_1.proto3;
ListTenantMembersResponse.typeName = "aserto.directory.store.v2.ListTenantMembersResponse";
ListTenantMembersResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: TenantMember, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantRequest
 */
class AssignRoleToTenantRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        /**
         * @generated from field: string user_id = 2;
         */
        this.userId = "";
        /**
         * @generated from field: string role = 3;
         */
        this.role = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AssignRoleToTenantRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AssignRoleToTenantRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AssignRoleToTenantRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AssignRoleToTenantRequest, a, b);
    }
}
exports.AssignRoleToTenantRequest = AssignRoleToTenantRequest;
AssignRoleToTenantRequest.runtime = protobuf_1.proto3;
AssignRoleToTenantRequest.typeName = "aserto.directory.store.v2.AssignRoleToTenantRequest";
AssignRoleToTenantRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.AssignRoleToTenantResponse
 */
class AssignRoleToTenantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AssignRoleToTenantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AssignRoleToTenantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AssignRoleToTenantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AssignRoleToTenantResponse, a, b);
    }
}
exports.AssignRoleToTenantResponse = AssignRoleToTenantResponse;
AssignRoleToTenantResponse.runtime = protobuf_1.proto3;
AssignRoleToTenantResponse.typeName = "aserto.directory.store.v2.AssignRoleToTenantResponse";
AssignRoleToTenantResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantRequest
 */
class RemoveRoleFromTenantRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string tenant_id = 1;
         */
        this.tenantId = "";
        /**
         * @generated from field: string user_id = 2;
         */
        this.userId = "";
        /**
         * @generated from field: string role = 3;
         */
        this.role = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RemoveRoleFromTenantRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RemoveRoleFromTenantRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RemoveRoleFromTenantRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RemoveRoleFromTenantRequest, a, b);
    }
}
exports.RemoveRoleFromTenantRequest = RemoveRoleFromTenantRequest;
RemoveRoleFromTenantRequest.runtime = protobuf_1.proto3;
RemoveRoleFromTenantRequest.typeName = "aserto.directory.store.v2.RemoveRoleFromTenantRequest";
RemoveRoleFromTenantRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.RemoveRoleFromTenantResponse
 */
class RemoveRoleFromTenantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new RemoveRoleFromTenantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new RemoveRoleFromTenantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new RemoveRoleFromTenantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(RemoveRoleFromTenantResponse, a, b);
    }
}
exports.RemoveRoleFromTenantResponse = RemoveRoleFromTenantResponse;
RemoveRoleFromTenantResponse.runtime = protobuf_1.proto3;
RemoveRoleFromTenantResponse.typeName = "aserto.directory.store.v2.RemoveRoleFromTenantResponse";
RemoveRoleFromTenantResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsRequest
 */
class ListUserTenantsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string id = 1;
         */
        this.id = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListUserTenantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListUserTenantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListUserTenantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListUserTenantsRequest, a, b);
    }
}
exports.ListUserTenantsRequest = ListUserTenantsRequest;
ListUserTenantsRequest.runtime = protobuf_1.proto3;
ListUserTenantsRequest.typeName = "aserto.directory.store.v2.ListUserTenantsRequest";
ListUserTenantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.store.v2.ListUserTenantsResponse
 */
class ListUserTenantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListUserTenantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListUserTenantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListUserTenantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListUserTenantsResponse, a, b);
    }
}
exports.ListUserTenantsResponse = ListUserTenantsResponse;
ListUserTenantsResponse.runtime = protobuf_1.proto3;
ListUserTenantsResponse.typeName = "aserto.directory.store.v2.ListUserTenantsResponse";
ListUserTenantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: Tenant, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.store.v2.GetTenantRequest
 */
class GetTenantRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof aserto.directory.store.v2.GetTenantRequest.data
         */
        this.data = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTenantRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTenantRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTenantRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetTenantRequest, a, b);
    }
}
exports.GetTenantRequest = GetTenantRequest;
GetTenantRequest.runtime = protobuf_1.proto3;
GetTenantRequest.typeName = "aserto.directory.store.v2.GetTenantRequest";
GetTenantRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "data" },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "data" },
]);
/**
 * @generated from message aserto.directory.store.v2.GetTenantResponse
 */
class GetTenantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTenantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTenantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTenantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(GetTenantResponse, a, b);
    }
}
exports.GetTenantResponse = GetTenantResponse;
GetTenantResponse.runtime = protobuf_1.proto3;
GetTenantResponse.typeName = "aserto.directory.store.v2.GetTenantResponse";
GetTenantResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Tenant },
]);
/**
 * @generated from message aserto.directory.store.v2.CreateTenantRequest
 */
class CreateTenantRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateTenantRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateTenantRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateTenantRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CreateTenantRequest, a, b);
    }
}
exports.CreateTenantRequest = CreateTenantRequest;
CreateTenantRequest.runtime = protobuf_1.proto3;
CreateTenantRequest.typeName = "aserto.directory.store.v2.CreateTenantRequest";
CreateTenantRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "tenant", kind: "message", T: Tenant },
]);
/**
 * @generated from message aserto.directory.store.v2.CreateTenantResponse
 */
class CreateTenantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateTenantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateTenantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateTenantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(CreateTenantResponse, a, b);
    }
}
exports.CreateTenantResponse = CreateTenantResponse;
CreateTenantResponse.runtime = protobuf_1.proto3;
CreateTenantResponse.typeName = "aserto.directory.store.v2.CreateTenantResponse";
CreateTenantResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Tenant },
]);
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantRequest
 */
class DeleteTenantRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * tenant id (UUID, aserto-id --type tenant)
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * permanently delete tenant (default: false)
         *
         * @generated from field: bool hard = 2;
         */
        this.hard = false;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteTenantRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteTenantRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteTenantRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteTenantRequest, a, b);
    }
}
exports.DeleteTenantRequest = DeleteTenantRequest;
DeleteTenantRequest.runtime = protobuf_1.proto3;
DeleteTenantRequest.typeName = "aserto.directory.store.v2.DeleteTenantRequest";
DeleteTenantRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hard", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message aserto.directory.store.v2.DeleteTenantResponse
 */
class DeleteTenantResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteTenantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteTenantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteTenantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteTenantResponse, a, b);
    }
}
exports.DeleteTenantResponse = DeleteTenantResponse;
DeleteTenantResponse.runtime = protobuf_1.proto3;
DeleteTenantResponse.typeName = "aserto.directory.store.v2.DeleteTenantResponse";
DeleteTenantResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
/**
 * @generated from message aserto.directory.store.v2.ListTenantsRequest
 */
class ListTenantsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListTenantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListTenantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListTenantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListTenantsRequest, a, b);
    }
}
exports.ListTenantsRequest = ListTenantsRequest;
ListTenantsRequest.runtime = protobuf_1.proto3;
ListTenantsRequest.typeName = "aserto.directory.store.v2.ListTenantsRequest";
ListTenantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationRequest },
]);
/**
 * @generated from message aserto.directory.store.v2.ListTenantsResponse
 */
class ListTenantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * result tenant list
         *
         * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListTenantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListTenantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListTenantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ListTenantsResponse, a, b);
    }
}
exports.ListTenantsResponse = ListTenantsResponse;
ListTenantsResponse.runtime = protobuf_1.proto3;
ListTenantsResponse.typeName = "aserto.directory.store.v2.ListTenantsResponse";
ListTenantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: Tenant, repeated: true },
    { no: 9, name: "page", kind: "message", T: common_pb_js_1.PaginationResponse },
]);
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsRequest
 */
class PurgeDeletedTenantsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * before the provided timestamp (UTC).
         *
         * tenant id (UUID, aserto-id --type tenant).
         *
         * @generated from field: string id = 2;
         */
        this.id = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PurgeDeletedTenantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PurgeDeletedTenantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PurgeDeletedTenantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PurgeDeletedTenantsRequest, a, b);
    }
}
exports.PurgeDeletedTenantsRequest = PurgeDeletedTenantsRequest;
PurgeDeletedTenantsRequest.runtime = protobuf_1.proto3;
PurgeDeletedTenantsRequest.typeName = "aserto.directory.store.v2.PurgeDeletedTenantsRequest";
PurgeDeletedTenantsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "deleted_before", kind: "message", T: protobuf_1.Timestamp },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.PurgeDeletedTenantsResponse
 */
class PurgeDeletedTenantsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * list of purged tenants
         *
         * @generated from field: repeated aserto.directory.store.v2.Tenant results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PurgeDeletedTenantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PurgeDeletedTenantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PurgeDeletedTenantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PurgeDeletedTenantsResponse, a, b);
    }
}
exports.PurgeDeletedTenantsResponse = PurgeDeletedTenantsResponse;
PurgeDeletedTenantsResponse.runtime = protobuf_1.proto3;
PurgeDeletedTenantsResponse.typeName = "aserto.directory.store.v2.PurgeDeletedTenantsResponse";
PurgeDeletedTenantsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: Tenant, repeated: true },
]);
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaRequest
 */
class MigrateSchemaRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * schemae SHARED or TENANT
         *
         * @generated from field: aserto.directory.store.v2.Schema schema = 1;
         */
        this.schema = Schema.UNKNOWN;
        /**
         * migrate UP or DOWN
         *
         * @generated from field: aserto.directory.store.v2.Migrate migrate = 2;
         */
        this.migrate = Migrate.UNKNOWN;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MigrateSchemaRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MigrateSchemaRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MigrateSchemaRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MigrateSchemaRequest, a, b);
    }
}
exports.MigrateSchemaRequest = MigrateSchemaRequest;
MigrateSchemaRequest.runtime = protobuf_1.proto3;
MigrateSchemaRequest.typeName = "aserto.directory.store.v2.MigrateSchemaRequest";
MigrateSchemaRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "schema", kind: "enum", T: protobuf_1.proto3.getEnumType(Schema) },
    { no: 2, name: "migrate", kind: "enum", T: protobuf_1.proto3.getEnumType(Migrate) },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
]);
/**
 * @generated from message aserto.directory.store.v2.MigrateSchemaResponse
 */
class MigrateSchemaResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * migration results
         *
         * @generated from field: repeated aserto.directory.store.v2.Migration results = 1;
         */
        this.results = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MigrateSchemaResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MigrateSchemaResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MigrateSchemaResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(MigrateSchemaResponse, a, b);
    }
}
exports.MigrateSchemaResponse = MigrateSchemaResponse;
MigrateSchemaResponse.runtime = protobuf_1.proto3;
MigrateSchemaResponse.typeName = "aserto.directory.store.v2.MigrateSchemaResponse";
MigrateSchemaResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: Migration, repeated: true },
]);
/**
 * @generated from message aserto.directory.store.v2.Migration
 */
class Migration extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * tenant-id (0 == NO tenant)
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * number of migrations applied
         *
         * @generated from field: int32 applied = 2;
         */
        this.applied = 0;
        /**
         * status
         *
         * @generated from field: string status = 3;
         */
        this.status = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Migration().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Migration().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Migration().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(Migration, a, b);
    }
}
exports.Migration = Migration;
Migration.runtime = protobuf_1.proto3;
Migration.typeName = "aserto.directory.store.v2.Migration";
Migration.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "applied", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.InfoRequest
 */
class InfoRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * tenant id (UUID, aserto-id --type tenant)
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(InfoRequest, a, b);
    }
}
exports.InfoRequest = InfoRequest;
InfoRequest.runtime = protobuf_1.proto3;
InfoRequest.typeName = "aserto.directory.store.v2.InfoRequest";
InfoRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.InfoResponse
 */
class InfoResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(InfoResponse, a, b);
    }
}
exports.InfoResponse = InfoResponse;
InfoResponse.runtime = protobuf_1.proto3;
InfoResponse.typeName = "aserto.directory.store.v2.InfoResponse";
InfoResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: protobuf_1.Struct },
]);
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionRequest
 */
class DeleteIDPConnectionRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * tenant id (UUID, aserto-id --type tenant)
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        /**
         * idp connection id (UUID, aserto-id --type connection)
         *
         * @generated from field: string connection = 2;
         */
        this.connection = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteIDPConnectionRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteIDPConnectionRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteIDPConnectionRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteIDPConnectionRequest, a, b);
    }
}
exports.DeleteIDPConnectionRequest = DeleteIDPConnectionRequest;
DeleteIDPConnectionRequest.runtime = protobuf_1.proto3;
DeleteIDPConnectionRequest.typeName = "aserto.directory.store.v2.DeleteIDPConnectionRequest";
DeleteIDPConnectionRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "connection", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message aserto.directory.store.v2.DeleteIDPConnectionResponse
 */
class DeleteIDPConnectionResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DeleteIDPConnectionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DeleteIDPConnectionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DeleteIDPConnectionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DeleteIDPConnectionResponse, a, b);
    }
}
exports.DeleteIDPConnectionResponse = DeleteIDPConnectionResponse;
DeleteIDPConnectionResponse.runtime = protobuf_1.proto3;
DeleteIDPConnectionResponse.typeName = "aserto.directory.store.v2.DeleteIDPConnectionResponse";
DeleteIDPConnectionResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: protobuf_1.Empty },
]);
