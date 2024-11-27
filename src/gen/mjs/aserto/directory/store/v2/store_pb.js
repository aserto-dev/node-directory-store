// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/store/v2/store.proto (package aserto.directory.store.v2, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_empty, file_google_protobuf_struct, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_aserto_directory_common_v3_common } from "../../common/v3/common_pb";

/**
 * Describes the file aserto/directory/store/v2/store.proto.
 */
export const file_aserto_directory_store_v2_store = /*@__PURE__*/
  fileDesc("CiVhc2VydG8vZGlyZWN0b3J5L3N0b3JlL3YyL3N0b3JlLnByb3RvEhlhc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyIjcKDFRlbmFudE1lbWJlchIKCgJpZBgBIAEoCRIMCgR0eXBlGAIgASgJEg0KBXJvbGVzGAMgAygJIrIBCgZUZW5hbnQSCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRIuCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgp1cGRhdGVkX2F0GBUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgpkZWxldGVkX2F0GBYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJjChhMaXN0VGVuYW50TWVtYmVyc1JlcXVlc3QSCgoCaWQYASABKAkSOwoEcGFnZRgJIAEoCzItLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXF1ZXN0IpMBChlMaXN0VGVuYW50TWVtYmVyc1Jlc3BvbnNlEjgKB3Jlc3VsdHMYASADKAsyJy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudE1lbWJlchI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIk0KGUFzc2lnblJvbGVUb1RlbmFudFJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEg8KB3VzZXJfaWQYAiABKAkSDAoEcm9sZRgDIAEoCSJEChpBc3NpZ25Sb2xlVG9UZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiTwobUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXF1ZXN0EhEKCXRlbmFudF9pZBgBIAEoCRIPCgd1c2VyX2lkGAIgASgJEgwKBHJvbGUYAyABKAkiRgocUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiYQoWTGlzdFVzZXJUZW5hbnRzUmVxdWVzdBIKCgJpZBgBIAEoCRI7CgRwYWdlGAkgASgLMi0uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlcXVlc3QiiwEKF0xpc3RVc2VyVGVuYW50c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudBI8CgRwYWdlGAkgASgLMi4uYXNlcnRvLmRpcmVjdG9yeS5jb21tb24udjMuUGFnaW5hdGlvblJlc3BvbnNlIjgKEEdldFRlbmFudFJlcXVlc3QSDAoCaWQYASABKAlIABIOCgRuYW1lGAIgASgJSABCBgoEZGF0YSJGChFHZXRUZW5hbnRSZXNwb25zZRIxCgZyZXN1bHQYASABKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudCJIChNDcmVhdGVUZW5hbnRSZXF1ZXN0EjEKBnRlbmFudBgBIAEoCzIhLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuVGVuYW50IkkKFENyZWF0ZVRlbmFudFJlc3BvbnNlEjEKBnJlc3VsdBgBIAEoCzIhLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuVGVuYW50Ii8KE0RlbGV0ZVRlbmFudFJlcXVlc3QSCgoCaWQYASABKAkSDAoEaGFyZBgCIAEoCCI+ChREZWxldGVUZW5hbnRSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiUQoSTGlzdFRlbmFudHNSZXF1ZXN0EjsKBHBhZ2UYCSABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdCKHAQoTTGlzdFRlbmFudHNSZXNwb25zZRIyCgdyZXN1bHRzGAEgAygLMiEuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5UZW5hbnQSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSJcChpQdXJnZURlbGV0ZWRUZW5hbnRzUmVxdWVzdBIyCg5kZWxldGVkX2JlZm9yZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASCgoCaWQYAiABKAkiUQobUHVyZ2VEZWxldGVkVGVuYW50c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlRlbmFudCLGAQoUTWlncmF0ZVNjaGVtYVJlcXVlc3QSMQoGc2NoZW1hGAEgASgOMiEuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5TY2hlbWESMwoHbWlncmF0ZRgCIAEoDjIiLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTWlncmF0ZRIUCgd2ZXJzaW9uGAMgASgJSACIAQESFgoJdGVuYW50X2lkGAQgASgJSAGIAQFCCgoIX3ZlcnNpb25CDAoKX3RlbmFudF9pZCJOChVNaWdyYXRlU2NoZW1hUmVzcG9uc2USNQoHcmVzdWx0cxgBIAMoCzIkLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTWlncmF0aW9uIjgKCU1pZ3JhdGlvbhIKCgJpZBgBIAEoCRIPCgdhcHBsaWVkGAIgASgFEg4KBnN0YXR1cxgDIAEoCSIZCgtJbmZvUmVxdWVzdBIKCgJpZBgBIAEoCSI1CgxJbmZvUmVzcG9uc2USJQoEaW5mbxgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QiPAoaRGVsZXRlSURQQ29ubmVjdGlvblJlcXVlc3QSCgoCaWQYASABKAkSEgoKY29ubmVjdGlvbhgCIAEoCSJFChtEZWxldGVJRFBDb25uZWN0aW9uUmVzcG9uc2USJgoGcmVzdWx0GAEgASgLMhYuZ29vZ2xlLnByb3RvYnVmLkVtcHR5IjUKEkxpc3RBUElLZXlzUmVxdWVzdBIRCgl0ZW5hbnRfaWQYASABKAkSDAoEcm9sZRgCIAEoCSJJChNMaXN0QVBJS2V5c1Jlc3BvbnNlEjIKB3Jlc3VsdHMYASADKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkFQSUtleSKGAQoGQVBJS2V5Eg8KB3ZlcnNpb24YASABKAUSCwoDa2V5GAIgASgJEi4KCmV4cGlyZXNfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCmNyZWF0ZWRfYXQYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIkcKE0RlbGV0ZUFQSUtleVJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEgwKBHJvbGUYAiABKAkSDwoHdmVyc2lvbhgDIAEoBSI+ChREZWxldGVBUElLZXlSZXNwb25zZRImCgZyZXN1bHQYASABKAsyFi5nb29nbGUucHJvdG9idWYuRW1wdHkiZgoTQ3JlYXRlQVBJS2V5UmVxdWVzdBIRCgl0ZW5hbnRfaWQYASABKAkSDAoEcm9sZRgCIAEoCRIuCgpleHBpcmVzX2F0GAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJJChRDcmVhdGVBUElLZXlSZXNwb25zZRIxCgZyZXN1bHQYASABKAsyIS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkFQSUtleSI6ChhHZXRBUElLZXlJZGVudGl0eVJlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEgsKA2tleRgCIAEoCSJdChlHZXRBUElLZXlJZGVudGl0eVJlc3BvbnNlEhAKCGlkZW50aXR5GAEgASgJEi4KCmV4cGlyZXNfYXQYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIj8KEEdldENvbmZpZ1JlcXVlc3QSEQoJdGVuYW50X2lkGAEgASgJEgwKBHR5cGUYAiABKAkSCgoCaWQYAyABKAkiZwoRR2V0Q29uZmlnUmVzcG9uc2USJwoGY29uZmlnGAEgASgLMhcuZ29vZ2xlLnByb3RvYnVmLlN0cnVjdBIpCgh0ZW1wbGF0ZRgCIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QiaAoQU2V0Q29uZmlnUmVxdWVzdBIRCgl0ZW5hbnRfaWQYASABKAkSDAoEdHlwZRgCIAEoCRIKCgJpZBgDIAEoCRInCgZjb25maWcYBCABKAsyFy5nb29nbGUucHJvdG9idWYuU3RydWN0IjwKEVNldENvbmZpZ1Jlc3BvbnNlEicKBmNvbmZpZxgBIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QicgoSTGlzdENvbmZpZ3NSZXF1ZXN0EhEKCXRlbmFudF9pZBgBIAEoCRIMCgR0eXBlGAIgASgJEjsKBHBhZ2UYCSABKAsyLS5hc2VydG8uZGlyZWN0b3J5LmNvbW1vbi52My5QYWdpbmF0aW9uUmVxdWVzdCJkChNMaXN0Q29uZmlnc1Jlc3BvbnNlEg8KB3Jlc3VsdHMYASADKAkSPAoEcGFnZRgJIAEoCzIuLmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzLlBhZ2luYXRpb25SZXNwb25zZSJCChNEZWxldGVDb25maWdSZXF1ZXN0EhEKCXRlbmFudF9pZBgBIAEoCRIMCgR0eXBlGAIgASgJEgoKAmlkGAMgASgJIj4KFERlbGV0ZUNvbmZpZ1Jlc3BvbnNlEiYKBnJlc3VsdBgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSpCCgZTY2hlbWESEgoOU0NIRU1BX1VOS05PV04QABIRCg1TQ0hFTUFfU0hBUkVEEAESEQoNU0NIRU1BX1RFTkFOVBACKkAKB01pZ3JhdGUSEwoPTUlHUkFURV9VTktOT1dOEAASDgoKTUlHUkFURV9VUBABEhAKDE1JR1JBVEVfRE9XThACMssSCgVTdG9yZRJoCglHZXRUZW5hbnQSKy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkdldFRlbmFudFJlcXVlc3QaLC5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkdldFRlbmFudFJlc3BvbnNlIgAScQoMQ3JlYXRlVGVuYW50Ei4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5DcmVhdGVUZW5hbnRSZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5DcmVhdGVUZW5hbnRSZXNwb25zZSIAEnEKDERlbGV0ZVRlbmFudBIuLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuRGVsZXRlVGVuYW50UmVxdWVzdBovLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuRGVsZXRlVGVuYW50UmVzcG9uc2UiABJuCgtMaXN0VGVuYW50cxItLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdFRlbmFudHNSZXF1ZXN0Gi4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5MaXN0VGVuYW50c1Jlc3BvbnNlIgAShgEKE1B1cmdlRGVsZXRlZFRlbmFudHMSNS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlB1cmdlRGVsZXRlZFRlbmFudHNSZXF1ZXN0GjYuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5QdXJnZURlbGV0ZWRUZW5hbnRzUmVzcG9uc2UiABJ0Cg1NaWdyYXRlU2NoZW1hEi8uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5NaWdyYXRlU2NoZW1hUmVxdWVzdBowLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTWlncmF0ZVNjaGVtYVJlc3BvbnNlIgASWQoESW5mbxImLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuSW5mb1JlcXVlc3QaJy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkluZm9SZXNwb25zZSIAEoYBChNEZWxldGVJRFBDb25uZWN0aW9uEjUuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVJRFBDb25uZWN0aW9uUmVxdWVzdBo2LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuRGVsZXRlSURQQ29ubmVjdGlvblJlc3BvbnNlIgASgAEKEUxpc3RUZW5hbnRNZW1iZXJzEjMuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5MaXN0VGVuYW50TWVtYmVyc1JlcXVlc3QaNC5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RUZW5hbnRNZW1iZXJzUmVzcG9uc2UiABJ6Cg9MaXN0VXNlclRlbmFudHMSMS5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RVc2VyVGVuYW50c1JlcXVlc3QaMi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RVc2VyVGVuYW50c1Jlc3BvbnNlIgASgwEKEkFzc2lnblJvbGVUb1RlbmFudBI0LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuQXNzaWduUm9sZVRvVGVuYW50UmVxdWVzdBo1LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuQXNzaWduUm9sZVRvVGVuYW50UmVzcG9uc2UiABKJAQoUUmVtb3ZlUm9sZUZyb21UZW5hbnQSNi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLlJlbW92ZVJvbGVGcm9tVGVuYW50UmVxdWVzdBo3LmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuUmVtb3ZlUm9sZUZyb21UZW5hbnRSZXNwb25zZSIAEm4KC0xpc3RBUElLZXlzEi0uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5MaXN0QVBJS2V5c1JlcXVlc3QaLi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkxpc3RBUElLZXlzUmVzcG9uc2UiABJxCgxEZWxldGVBUElLZXkSLi5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkRlbGV0ZUFQSUtleVJlcXVlc3QaLy5hc2VydG8uZGlyZWN0b3J5LnN0b3JlLnYyLkRlbGV0ZUFQSUtleVJlc3BvbnNlIgAScQoMQ3JlYXRlQVBJS2V5Ei4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5DcmVhdGVBUElLZXlSZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5DcmVhdGVBUElLZXlSZXNwb25zZSIAEoABChFHZXRBUElLZXlJZGVudGl0eRIzLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuR2V0QVBJS2V5SWRlbnRpdHlSZXF1ZXN0GjQuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5HZXRBUElLZXlJZGVudGl0eVJlc3BvbnNlIgASaAoJR2V0Q29uZmlnEisuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5HZXRDb25maWdSZXF1ZXN0GiwuYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5HZXRDb25maWdSZXNwb25zZSIAEmgKCVNldENvbmZpZxIrLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuU2V0Q29uZmlnUmVxdWVzdBosLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuU2V0Q29uZmlnUmVzcG9uc2UiABJuCgtMaXN0Q29uZmlncxItLmFzZXJ0by5kaXJlY3Rvcnkuc3RvcmUudjIuTGlzdENvbmZpZ3NSZXF1ZXN0Gi4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5MaXN0Q29uZmlnc1Jlc3BvbnNlIgAScQoMRGVsZXRlQ29uZmlnEi4uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVDb25maWdSZXF1ZXN0Gi8uYXNlcnRvLmRpcmVjdG9yeS5zdG9yZS52Mi5EZWxldGVDb25maWdSZXNwb25zZSIAQkpaSGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3Rvcnktc3RvcmUvYXNlcnRvL2RpcmVjdG9yeS9zdG9yZS92MjtzdG9yZWIGcHJvdG8z", [file_google_protobuf_empty, file_google_protobuf_struct, file_google_protobuf_timestamp, file_aserto_directory_common_v3_common]);

/**
 * Describes the message aserto.directory.store.v2.TenantMember.
 * Use `create(TenantMemberSchema)` to create a new message.
 */
export const TenantMemberSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 0);

/**
 * Describes the message aserto.directory.store.v2.Tenant.
 * Use `create(TenantSchema)` to create a new message.
 */
export const TenantSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 1);

/**
 * Describes the message aserto.directory.store.v2.ListTenantMembersRequest.
 * Use `create(ListTenantMembersRequestSchema)` to create a new message.
 */
export const ListTenantMembersRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 2);

/**
 * Describes the message aserto.directory.store.v2.ListTenantMembersResponse.
 * Use `create(ListTenantMembersResponseSchema)` to create a new message.
 */
export const ListTenantMembersResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 3);

/**
 * Describes the message aserto.directory.store.v2.AssignRoleToTenantRequest.
 * Use `create(AssignRoleToTenantRequestSchema)` to create a new message.
 */
export const AssignRoleToTenantRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 4);

/**
 * Describes the message aserto.directory.store.v2.AssignRoleToTenantResponse.
 * Use `create(AssignRoleToTenantResponseSchema)` to create a new message.
 */
export const AssignRoleToTenantResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 5);

/**
 * Describes the message aserto.directory.store.v2.RemoveRoleFromTenantRequest.
 * Use `create(RemoveRoleFromTenantRequestSchema)` to create a new message.
 */
export const RemoveRoleFromTenantRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 6);

/**
 * Describes the message aserto.directory.store.v2.RemoveRoleFromTenantResponse.
 * Use `create(RemoveRoleFromTenantResponseSchema)` to create a new message.
 */
export const RemoveRoleFromTenantResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 7);

/**
 * Describes the message aserto.directory.store.v2.ListUserTenantsRequest.
 * Use `create(ListUserTenantsRequestSchema)` to create a new message.
 */
export const ListUserTenantsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 8);

/**
 * Describes the message aserto.directory.store.v2.ListUserTenantsResponse.
 * Use `create(ListUserTenantsResponseSchema)` to create a new message.
 */
export const ListUserTenantsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 9);

/**
 * Describes the message aserto.directory.store.v2.GetTenantRequest.
 * Use `create(GetTenantRequestSchema)` to create a new message.
 */
export const GetTenantRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 10);

/**
 * Describes the message aserto.directory.store.v2.GetTenantResponse.
 * Use `create(GetTenantResponseSchema)` to create a new message.
 */
export const GetTenantResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 11);

/**
 * Describes the message aserto.directory.store.v2.CreateTenantRequest.
 * Use `create(CreateTenantRequestSchema)` to create a new message.
 */
export const CreateTenantRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 12);

/**
 * Describes the message aserto.directory.store.v2.CreateTenantResponse.
 * Use `create(CreateTenantResponseSchema)` to create a new message.
 */
export const CreateTenantResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 13);

/**
 * Describes the message aserto.directory.store.v2.DeleteTenantRequest.
 * Use `create(DeleteTenantRequestSchema)` to create a new message.
 */
export const DeleteTenantRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 14);

/**
 * Describes the message aserto.directory.store.v2.DeleteTenantResponse.
 * Use `create(DeleteTenantResponseSchema)` to create a new message.
 */
export const DeleteTenantResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 15);

/**
 * Describes the message aserto.directory.store.v2.ListTenantsRequest.
 * Use `create(ListTenantsRequestSchema)` to create a new message.
 */
export const ListTenantsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 16);

/**
 * Describes the message aserto.directory.store.v2.ListTenantsResponse.
 * Use `create(ListTenantsResponseSchema)` to create a new message.
 */
export const ListTenantsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 17);

/**
 * Describes the message aserto.directory.store.v2.PurgeDeletedTenantsRequest.
 * Use `create(PurgeDeletedTenantsRequestSchema)` to create a new message.
 */
export const PurgeDeletedTenantsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 18);

/**
 * Describes the message aserto.directory.store.v2.PurgeDeletedTenantsResponse.
 * Use `create(PurgeDeletedTenantsResponseSchema)` to create a new message.
 */
export const PurgeDeletedTenantsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 19);

/**
 * Describes the message aserto.directory.store.v2.MigrateSchemaRequest.
 * Use `create(MigrateSchemaRequestSchema)` to create a new message.
 */
export const MigrateSchemaRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 20);

/**
 * Describes the message aserto.directory.store.v2.MigrateSchemaResponse.
 * Use `create(MigrateSchemaResponseSchema)` to create a new message.
 */
export const MigrateSchemaResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 21);

/**
 * Describes the message aserto.directory.store.v2.Migration.
 * Use `create(MigrationSchema)` to create a new message.
 */
export const MigrationSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 22);

/**
 * Describes the message aserto.directory.store.v2.InfoRequest.
 * Use `create(InfoRequestSchema)` to create a new message.
 */
export const InfoRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 23);

/**
 * Describes the message aserto.directory.store.v2.InfoResponse.
 * Use `create(InfoResponseSchema)` to create a new message.
 */
export const InfoResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 24);

/**
 * Describes the message aserto.directory.store.v2.DeleteIDPConnectionRequest.
 * Use `create(DeleteIDPConnectionRequestSchema)` to create a new message.
 */
export const DeleteIDPConnectionRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 25);

/**
 * Describes the message aserto.directory.store.v2.DeleteIDPConnectionResponse.
 * Use `create(DeleteIDPConnectionResponseSchema)` to create a new message.
 */
export const DeleteIDPConnectionResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 26);

/**
 * Describes the message aserto.directory.store.v2.ListAPIKeysRequest.
 * Use `create(ListAPIKeysRequestSchema)` to create a new message.
 */
export const ListAPIKeysRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 27);

/**
 * Describes the message aserto.directory.store.v2.ListAPIKeysResponse.
 * Use `create(ListAPIKeysResponseSchema)` to create a new message.
 */
export const ListAPIKeysResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 28);

/**
 * Describes the message aserto.directory.store.v2.APIKey.
 * Use `create(APIKeySchema)` to create a new message.
 */
export const APIKeySchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 29);

/**
 * Describes the message aserto.directory.store.v2.DeleteAPIKeyRequest.
 * Use `create(DeleteAPIKeyRequestSchema)` to create a new message.
 */
export const DeleteAPIKeyRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 30);

/**
 * Describes the message aserto.directory.store.v2.DeleteAPIKeyResponse.
 * Use `create(DeleteAPIKeyResponseSchema)` to create a new message.
 */
export const DeleteAPIKeyResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 31);

/**
 * Describes the message aserto.directory.store.v2.CreateAPIKeyRequest.
 * Use `create(CreateAPIKeyRequestSchema)` to create a new message.
 */
export const CreateAPIKeyRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 32);

/**
 * Describes the message aserto.directory.store.v2.CreateAPIKeyResponse.
 * Use `create(CreateAPIKeyResponseSchema)` to create a new message.
 */
export const CreateAPIKeyResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 33);

/**
 * Describes the message aserto.directory.store.v2.GetAPIKeyIdentityRequest.
 * Use `create(GetAPIKeyIdentityRequestSchema)` to create a new message.
 */
export const GetAPIKeyIdentityRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 34);

/**
 * Describes the message aserto.directory.store.v2.GetAPIKeyIdentityResponse.
 * Use `create(GetAPIKeyIdentityResponseSchema)` to create a new message.
 */
export const GetAPIKeyIdentityResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 35);

/**
 * Describes the message aserto.directory.store.v2.GetConfigRequest.
 * Use `create(GetConfigRequestSchema)` to create a new message.
 */
export const GetConfigRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 36);

/**
 * Describes the message aserto.directory.store.v2.GetConfigResponse.
 * Use `create(GetConfigResponseSchema)` to create a new message.
 */
export const GetConfigResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 37);

/**
 * Describes the message aserto.directory.store.v2.SetConfigRequest.
 * Use `create(SetConfigRequestSchema)` to create a new message.
 */
export const SetConfigRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 38);

/**
 * Describes the message aserto.directory.store.v2.SetConfigResponse.
 * Use `create(SetConfigResponseSchema)` to create a new message.
 */
export const SetConfigResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 39);

/**
 * Describes the message aserto.directory.store.v2.ListConfigsRequest.
 * Use `create(ListConfigsRequestSchema)` to create a new message.
 */
export const ListConfigsRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 40);

/**
 * Describes the message aserto.directory.store.v2.ListConfigsResponse.
 * Use `create(ListConfigsResponseSchema)` to create a new message.
 */
export const ListConfigsResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 41);

/**
 * Describes the message aserto.directory.store.v2.DeleteConfigRequest.
 * Use `create(DeleteConfigRequestSchema)` to create a new message.
 */
export const DeleteConfigRequestSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 42);

/**
 * Describes the message aserto.directory.store.v2.DeleteConfigResponse.
 * Use `create(DeleteConfigResponseSchema)` to create a new message.
 */
export const DeleteConfigResponseSchema = /*@__PURE__*/
  messageDesc(file_aserto_directory_store_v2_store, 43);

/**
 * Describes the enum aserto.directory.store.v2.Schema.
 */
export const SchemaSchema = /*@__PURE__*/
  enumDesc(file_aserto_directory_store_v2_store, 0);

/**
 * @generated from enum aserto.directory.store.v2.Schema
 */
export const Schema = /*@__PURE__*/
  tsEnum(SchemaSchema);

/**
 * Describes the enum aserto.directory.store.v2.Migrate.
 */
export const MigrateSchema = /*@__PURE__*/
  enumDesc(file_aserto_directory_store_v2_store, 1);

/**
 * @generated from enum aserto.directory.store.v2.Migrate
 */
export const Migrate = /*@__PURE__*/
  tsEnum(MigrateSchema);

/**
 * @generated from service aserto.directory.store.v2.Store
 */
export const Store = /*@__PURE__*/
  serviceDesc(file_aserto_directory_store_v2_store, 0);

