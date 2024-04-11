// @generated by protoc-gen-es v1.8.0 with parameter "target=ts+js"
// @generated from file aserto/directory/common/v2/common.proto (package aserto.directory.common.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum aserto.directory.common.v2.Flag
 */
export const Flag = /*@__PURE__*/ proto3.makeEnum(
  "aserto.directory.common.v2.Flag",
  [
    {no: 0, name: "FLAG_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "FLAG_HIDDEN", localName: "HIDDEN"},
    {no: 2, name: "FLAG_READONLY", localName: "READONLY"},
    {no: 4, name: "FLAG_SYSTEM", localName: "SYSTEM"},
    {no: 8, name: "FLAG_SHADOW", localName: "SHADOW"},
  ],
);

/**
 * @generated from message aserto.directory.common.v2.ObjectType
 */
export const ObjectType = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.ObjectType",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_subject", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "schema", kind: "message", T: Struct },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message aserto.directory.common.v2.Permission
 */
export const Permission = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.Permission",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message aserto.directory.common.v2.RelationType
 */
export const RelationType = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.RelationType",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ordinal", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "status", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "unions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "permissions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message aserto.directory.common.v2.Object
 */
export const Object$ = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.Object",
  () => [
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "properties", kind: "message", T: Struct },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Object$"},
);

/**
 * @generated from message aserto.directory.common.v2.Relation
 */
export const Relation = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.Relation",
  () => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
    { no: 20, name: "created_at", kind: "message", T: Timestamp },
    { no: 21, name: "updated_at", kind: "message", T: Timestamp },
    { no: 23, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message aserto.directory.common.v2.ObjectDependency
 */
export const ObjectDependency = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.ObjectDependency",
  () => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "relation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subject_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "subject_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "is_cycle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * ObjectType identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectTypeIdentifier
 */
export const ObjectTypeIdentifier = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.ObjectTypeIdentifier",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * Permission identifier
 *
 * @generated from message aserto.directory.common.v2.PermissionIdentifier
 */
export const PermissionIdentifier = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.PermissionIdentifier",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * RelationType identifier
 *
 * @generated from message aserto.directory.common.v2.RelationTypeIdentifier
 */
export const RelationTypeIdentifier = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.RelationTypeIdentifier",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * Object identifier
 *
 * @generated from message aserto.directory.common.v2.ObjectIdentifier
 */
export const ObjectIdentifier = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.ObjectIdentifier",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * Relation identifier
 *
 * @generated from message aserto.directory.common.v2.RelationIdentifier
 */
export const RelationIdentifier = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.RelationIdentifier",
  () => [
    { no: 1, name: "subject", kind: "message", T: ObjectIdentifier },
    { no: 2, name: "relation", kind: "message", T: RelationTypeIdentifier },
    { no: 3, name: "object", kind: "message", T: ObjectIdentifier },
  ],
);

/**
 * Pagination request
 *
 * @generated from message aserto.directory.common.v2.PaginationRequest
 */
export const PaginationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.PaginationRequest",
  () => [
    { no: 1, name: "size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Pagination response
 *
 * @generated from message aserto.directory.common.v2.PaginationResponse
 */
export const PaginationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "aserto.directory.common.v2.PaginationResponse",
  () => [
    { no: 1, name: "next_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "result_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

