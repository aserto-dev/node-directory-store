// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/store/v2/store.proto (package aserto.directory.store.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { PaginationRequest, PaginationResponse } from "../../common/v3/common_pb";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/store/v2/store.proto.
 */
export const file_aserto_directory_store_v2_store: GenFile = /*@__PURE__*/
  fileDesc("CiVhc2VydG8vZGlyZWN0b3J5L3N0b3JlL3YyL3N0b3JlLnByb3RvEhlhc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyIjcKDFRlbmFudE1lbWJlchIKCgJpZBgBIAEoCRIMCgR0eXBlGAIgASgJEg0KBXJvbGVzGAMgAygJIrIBCgZUZW5hbnQSCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRIuCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgp1cGRhdGVkX2F0GBUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgpkZWxldGVkX2F0GBYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJjChhMaXN0VGVuYW50TWVtYmVyc1JlcXVlc3QSCgoCaWQYASABKAkSOwoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXF1ZXN0IpMBChlMaXN0VGVuYW50TWVtYmVyc1Jlc3BvbnNlEjgKB3Jlc3VsdHMYASADKAsyJy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudE1lbWJlchI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIk0KGUFzc2lnblJvbGVUb1RlbmFudFJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEg8KB3VzZXJfaWQYAiABKAkSDAoEcm9sZRgDIAEoCSJEChpBc3NpZ25Sb2xlVG9UZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiTwobUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXF1ZXN0EhEKCXRlbmFudF9pZBgBIAEoCRIPCgd1c2VyX2lkGAIgASgJEgwKBHJvbGUYAyABKAkiRgocUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiYQoWTGlzdFVzZXJUZW5hbnRzUmVxdWVzdBIKCgJpZBgBIAEoCRI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3QiiwEKF0xpc3RVc2VyVGVuYW50c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudBI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIjgKEEdldFRlbmFudFJlcXVlc3QSDAoCaWQYASABKAlIABIOCgRuYW1lGAIgASgJSABCBgoEZGF0YSJGChFHZXRUZW5hbnRSZXNwb25zZRIxCgZyZXN1bHQYASABKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudCJIChNDcmVhdGVUZW5hbnRSZXF1ZXN0EjEKBnRlbmFudBgBIAEoCzIhLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuVGVuYW50IkkKFENyZWF0ZVRlbmFudFJlc3BvbnNlEjEKBnJlc3VsdBgBIAEoCzIhLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuVGVuYW50Ii8KE0RlbGV0ZVRlbmFudFJlcXVlc3QSCgoCaWQYASABKAkSDAoEaGFyZBgCIAEoCCI+ChREZWxldGVUZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiUQoSTGlzdFRlbmFudHNSZXF1ZXN0EjsKBHBhZ2UYCSABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdCKHAQoTTGlzdFRlbmFudHNSZXNwb25zZRIyCgdyZXN1bHRzGAEgAygLMiEuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5UZW5hbnQSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSJcChpQdXJnZURlbGV0ZWRUZW5hbnRzUmVxdWVzdBIyCg5kZWxldGVkX2JlZm9yZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASCgoCaWQYAiABKAkiUQobUHVyZ2VEZWxldGVkVGVuYW50c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudCLGAQoUTWlncmF0ZVNjaGVtYVJlcXVlc3QSMQoGc2NoZW1hGAEgASgOMiEuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5TY2hlbWESMwoHbWlncmF0ZRgCIAEoDjIiLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTWlncmF0ZRIUCgd2ZXJzaW9uGAMgASgJSACIAQESFgoJdGVuYW50X2lkGAQgASgJSAGIAQFCCgoIX3ZlcnNpb25CDAoKX3RlbmFudF9pZCJOChVNaWdyYXRlU2NoZW1hUmVzcG9uc2USNQoHcmVzdWx0cxgBIAMoCzIkLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTWlncmF0aW9uIjgKCU1pZ3JhdGlvbhIKCgJpZBgBIAEoCRIPCgdhcHBsaWVkGAIgASgFEg4KBnN0YXR1cxgDIAEoCSIZCgtJbmZvUmVxdWVzdBIKCgJpZBgBIAEoCSI1CgxJbmZvUmVzcG9uc2USJQoEaW5mbxgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QiPAoaRGVsZXRlSURQQ29ubmVjdGlvblJlcXVlc3QSCgoCaWQYASABKAkSEgoKY29ubmVjdGlvbhgCIAEoCSJFChtEZWxldGVJRFBDb25uZWN0aW9uUmVzcG9uc2USJgoGcmVzdWx0GAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IjUKEkxpc3RBUElLZXlzUmVxdWVzdBIRCgl0ZW5hbnRfaWQYASABKAkSDAoEcm9sZRgCIAEoCSJJChNMaXN0QVBJS2V5c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkFQSUtleSKGAQoGQVBJS2V5Eg8KB3ZlcnNpb24YASABKAUSCwoDa2V5GAIgASgJEi4KCmV4cGlyZXNfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCmNyZWF0ZWRfYXQYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIkcKE0RlbGV0ZUFQSUtleVJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEgwKBHJvbGUYAiABKAkSDwoHdmVyc2lvbhgDIAEoBSI+ChREZWxldGVBUElLZXlSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiZgoTQ3JlYXRlQVBJS2V5UmVxdWVzdBIRCgl0ZW5hbnRfaWQYASABKAkSDAoEcm9sZRgCIAEoCRIuCgpleHBpcmVzX2F0GAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJJChRDcmVhdGVBUElLZXlSZXNwb25zZRIxCgZyZXN1bHQYASABKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkFQSUtleSI6ChhHZXRBUElLZXlJZGVudGl0eVJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEgsKA2tleRgCIAEoCSJdChlHZXRBUElLZXlJZGVudGl0eVJlc3BvbnNlEhAKCGlkZW50aXR5GAEgASgJEi4KCmV4cGlyZXNfYXQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wKkIKBlNjaGVtYRISCg5TQ0hFTUFfVU5LTk9XThAAEhEKDVNDSEVNQV9TSEFSRUQQARIRCg1TQ0hFTUFfVEVOQU5UEAIqQAoHTWlncmF0ZRITCg9NSUdSQVRFX1VOS05PV04QABIOCgpNSUdSQVRFX1VQEAESEAoMTUlHUkFURV9ET1dOEAIylA8KBVN0b3JlEmgKCUdldFRlbmFudBIrLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuR2V0VGVuYW50UmVxdWVzdBosLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuR2V0VGVuYW50UmVzcG9uc2UiABJxCgxDcmVhdGVUZW5hbnQSLi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkNyZWF0ZVRlbmFudFJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkNyZWF0ZVRlbmFudFJlc3BvbnNlIgAScQoMRGVsZXRlVGVuYW50Ei4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVUZW5hbnRSZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVUZW5hbnRSZXNwb25zZSIAEm4KC0xpc3RUZW5hbnRzEi0uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5MaXN0VGVuYW50c1JlcXVlc3QaLi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RUZW5hbnRzUmVzcG9uc2UiABKGAQoTUHVyZ2VEZWxldGVkVGVuYW50cxI1LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuUHVyZ2VEZWxldGVkVGVuYW50c1JlcXVlc3QaNi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlB1cmdlRGVsZXRlZFRlbmFudHNSZXNwb25zZSIAEnQKDU1pZ3JhdGVTY2hlbWESLy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLk1pZ3JhdGVTY2hlbWFSZXF1ZXN0GjAuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5NaWdyYXRlU2NoZW1hUmVzcG9uc2UiABJZCgRJbmZvEiYuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5JbmZvUmVxdWVzdBonLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuSW5mb1Jlc3BvbnNlIgAShgEKE0RlbGV0ZUlEUENvbm5lY3Rpb24SNS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkRlbGV0ZUlEUENvbm5lY3Rpb25SZXF1ZXN0GjYuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVJRFBDb25uZWN0aW9uUmVzcG9uc2UiABKAAQoRTGlzdFRlbmFudE1lbWJlcnMSMy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RUZW5hbnRNZW1iZXJzUmVxdWVzdBo0LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdFRlbmFudE1lbWJlcnNSZXNwb25zZSIAEnoKD0xpc3RVc2VyVGVuYW50cxIxLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdFVzZXJUZW5hbnRzUmVxdWVzdBoyLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdFVzZXJUZW5hbnRzUmVzcG9uc2UiABKDAQoSQXNzaWduUm9sZVRvVGVuYW50EjQuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5Bc3NpZ25Sb2xlVG9UZW5hbnRSZXF1ZXN0GjUuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5Bc3NpZ25Sb2xlVG9UZW5hbnRSZXNwb25zZSIAEokBChRSZW1vdmVSb2xlRnJvbVRlbmFudBI2LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXF1ZXN0GjcuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5SZW1vdmVSb2xlRnJvbVRlbmFudFJlc3BvbnNlIgASbgoLTGlzdEFQSUtleXMSLS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RBUElLZXlzUmVxdWVzdBouLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdEFQSUtleXNSZXNwb25zZSIAEnEKDERlbGV0ZUFQSUtleRIuLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuRGVsZXRlQVBJS2V5UmVxdWVzdBovLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuRGVsZXRlQVBJS2V5UmVzcG9uc2UiABJxCgxDcmVhdGVBUElLZXkSLi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkNyZWF0ZUFQSUtleVJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkNyZWF0ZUFQSUtleVJlc3BvbnNlIgASgAEKEUdldEFQSUtleUlkZW50aXR5EjMuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5HZXRBUElLZXlJZGVudGl0eVJlcXVlc3QaNC5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkdldEFQSUtleUlkZW50aXR5UmVzcG9uc2UiAEJKWkhnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5LXN0b3JlL2FzZXJ0by9kaXJlY3Rvcnkvc3RvcmUvdjI7c3RvcmViBnByb3RvMw", [file_google_protobuf_empty, file_google_protobuf_struct, file_google_protobuf_timestamp, file_aserto_directory_common_v3_common]);

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
export const TenantMemberSchema: GenMessage<TenantMember> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 0);

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
export const TenantSchema: GenMessage<Tenant> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 1);

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
export const ListTenantMembersRequestSchema: GenMessage<ListTenantMembersRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 2);

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
export const ListTenantMembersResponseSchema: GenMessage<ListTenantMembersResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 3);

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
export const AssignRoleToTenantRequestSchema: GenMessage<AssignRoleToTenantRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 4);

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
export const AssignRoleToTenantResponseSchema: GenMessage<AssignRoleToTenantResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 5);

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
export const RemoveRoleFromTenantRequestSchema: GenMessage<RemoveRoleFromTenantRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 6);

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
export const RemoveRoleFromTenantResponseSchema: GenMessage<RemoveRoleFromTenantResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 7);

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
export const ListUserTenantsRequestSchema: GenMessage<ListUserTenantsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 8);

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
export const ListUserTenantsResponseSchema: GenMessage<ListUserTenantsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 9);

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
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message aserto.directory.store.v2.GetTenantRequest.
 * Use `create(GetTenantRequestSchema)` to create a new message.
 */
export const GetTenantRequestSchema: GenMessage<GetTenantRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 10);

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
export const GetTenantResponseSchema: GenMessage<GetTenantResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 11);

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
export const CreateTenantRequestSchema: GenMessage<CreateTenantRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 12);

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
export const CreateTenantResponseSchema: GenMessage<CreateTenantResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 13);

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
export const DeleteTenantRequestSchema: GenMessage<DeleteTenantRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 14);

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
export const DeleteTenantResponseSchema: GenMessage<DeleteTenantResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 15);

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
export const ListTenantsRequestSchema: GenMessage<ListTenantsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 16);

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
export const ListTenantsResponseSchema: GenMessage<ListTenantsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 17);

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
export const PurgeDeletedTenantsRequestSchema: GenMessage<PurgeDeletedTenantsRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 18);

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
export const PurgeDeletedTenantsResponseSchema: GenMessage<PurgeDeletedTenantsResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 19);

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
export const MigrateSchemaRequestSchema: GenMessage<MigrateSchemaRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 20);

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
export const MigrateSchemaResponseSchema: GenMessage<MigrateSchemaResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 21);

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
export const MigrationSchema: GenMessage<Migration> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 22);

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
export const InfoRequestSchema: GenMessage<InfoRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 23);

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
export const InfoResponseSchema: GenMessage<InfoResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 24);

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
export const DeleteIDPConnectionRequestSchema: GenMessage<DeleteIDPConnectionRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 25);

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
export const DeleteIDPConnectionResponseSchema: GenMessage<DeleteIDPConnectionResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 26);

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
export const ListAPIKeysRequestSchema: GenMessage<ListAPIKeysRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 27);

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
export const ListAPIKeysResponseSchema: GenMessage<ListAPIKeysResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 28);

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
export const APIKeySchema: GenMessage<APIKey> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 29);

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
export const DeleteAPIKeyRequestSchema: GenMessage<DeleteAPIKeyRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 30);

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
export const DeleteAPIKeyResponseSchema: GenMessage<DeleteAPIKeyResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 31);

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
export const CreateAPIKeyRequestSchema: GenMessage<CreateAPIKeyRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 32);

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
export const CreateAPIKeyResponseSchema: GenMessage<CreateAPIKeyResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 33);

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
export const GetAPIKeyIdentityRequestSchema: GenMessage<GetAPIKeyIdentityRequest> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 34);

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
export const GetAPIKeyIdentityResponseSchema: GenMessage<GetAPIKeyIdentityResponse> = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 35);

/**
 * @generated from enum aserto.directory.store.v2.Schema
 */
export enum Schema {
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
  TENANT = 2,
}

/**
 * Describes the enum aserto.directory.store.v2.Schema.
 */
export const SchemaSchema: GenEnum<Schema> = /*@__PURE__*/
  enumDesc(file_aserto_directory_store_v2_store, 0);

/**
 * @generated from enum aserto.directory.store.v2.Migrate
 */
export enum Migrate {
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
  DOWN = 2,
}

/**
 * Describes the enum aserto.directory.store.v2.Migrate.
 */
export const MigrateSchema: GenEnum<Migrate> = /*@__PURE__*/
  enumDesc(file_aserto_directory_store_v2_store, 1);

/**
 * @generated from service aserto.directory.store.v2.Store
 */
export const Store: GenService<{
  /**
   * @generated from rpc aserto.directory.store.v2.Store.GetTenant
   */
  getTenant: {
    methodKind: "unary";
    input: typeof GetTenantRequestSchema;
    output: typeof GetTenantResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.CreateTenant
   */
  createTenant: {
    methodKind: "unary";
    input: typeof CreateTenantRequestSchema;
    output: typeof CreateTenantResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.DeleteTenant
   */
  deleteTenant: {
    methodKind: "unary";
    input: typeof DeleteTenantRequestSchema;
    output: typeof DeleteTenantResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.ListTenants
   */
  listTenants: {
    methodKind: "unary";
    input: typeof ListTenantsRequestSchema;
    output: typeof ListTenantsResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.PurgeDeletedTenants
   */
  purgeDeletedTenants: {
    methodKind: "unary";
    input: typeof PurgeDeletedTenantsRequestSchema;
    output: typeof PurgeDeletedTenantsResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.MigrateSchema
   */
  migrateSchema: {
    methodKind: "unary";
    input: typeof MigrateSchemaRequestSchema;
    output: typeof MigrateSchemaResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.Info
   */
  info: {
    methodKind: "unary";
    input: typeof InfoRequestSchema;
    output: typeof InfoResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.DeleteIDPConnection
   */
  deleteIDPConnection: {
    methodKind: "unary";
    input: typeof DeleteIDPConnectionRequestSchema;
    output: typeof DeleteIDPConnectionResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.ListTenantMembers
   */
  listTenantMembers: {
    methodKind: "unary";
    input: typeof ListTenantMembersRequestSchema;
    output: typeof ListTenantMembersResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.ListUserTenants
   */
  listUserTenants: {
    methodKind: "unary";
    input: typeof ListUserTenantsRequestSchema;
    output: typeof ListUserTenantsResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.AssignRoleToTenant
   */
  assignRoleToTenant: {
    methodKind: "unary";
    input: typeof AssignRoleToTenantRequestSchema;
    output: typeof AssignRoleToTenantResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.RemoveRoleFromTenant
   */
  removeRoleFromTenant: {
    methodKind: "unary";
    input: typeof RemoveRoleFromTenantRequestSchema;
    output: typeof RemoveRoleFromTenantResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.ListAPIKeys
   */
  listAPIKeys: {
    methodKind: "unary";
    input: typeof ListAPIKeysRequestSchema;
    output: typeof ListAPIKeysResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.DeleteAPIKey
   */
  deleteAPIKey: {
    methodKind: "unary";
    input: typeof DeleteAPIKeyRequestSchema;
    output: typeof DeleteAPIKeyResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.CreateAPIKey
   */
  createAPIKey: {
    methodKind: "unary";
    input: typeof CreateAPIKeyRequestSchema;
    output: typeof CreateAPIKeyResponseSchema;
  },
  /**
   * @generated from rpc aserto.directory.store.v2.Store.GetAPIKeyIdentity
   */
  getAPIKeyIdentity: {
    methodKind: "unary";
    input: typeof GetAPIKeyIdentityRequestSchema;
    output: typeof GetAPIKeyIdentityResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_aserto_directory_store_v2_store, 0);

