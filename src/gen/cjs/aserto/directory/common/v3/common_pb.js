"use strict";
// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/common/v3/common.proto (package aserto.directory.common.v3, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponseSchema = exports.PaginationRequestSchema = exports.RelationIdentifierSchema = exports.ObjectIdentifierSchema = exports.RelationSchema = exports.ObjectSchema = exports.file_aserto_directory_common_v3_common = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const field_behavior_pb_1 = require("../../../../google/api/field_behavior_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const validate_pb_1 = require("../../../../buf/validate/validate_pb");
/**
 * Describes the file aserto/directory/common/v3/common.proto.
 */
exports.file_aserto_directory_common_v3_common = (0, codegenv1_1.fileDesc)("Cidhc2VydG8vZGlyZWN0b3J5L2NvbW1vbi92My9jb21tb24ucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkuY29tbW9uLnYzIsMECgZPYmplY3QS8AEKBHR5cGUYASABKAlC4QHgQQK6SNoBugHPAQoLb2JqZWN0LnR5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASfAoCaWQYAiABKAlCcOBBArpIaroBXwoJb2JqZWN0LmlkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAISGQoMZGlzcGxheV9uYW1lGAMgASgJQgPgQQESMAoKcHJvcGVydGllcxgEIAEoCzIXLmdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3RCA+BBARIzCgpjcmVhdGVkX2F0GBQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEjMKCnVwZGF0ZWRfYXQYFSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgPgQQMSEQoEZXRhZxgXIAEoCUID4EEBIrkLCghSZWxhdGlvbhKAAgoLb2JqZWN0X3R5cGUYASABKAlC6gHgQQK6SOMBugHYAQoUcmVsYXRpb24ub2JqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASjAEKCW9iamVjdF9pZBgCIAEoCUJ54EECukhzugFoChJyZWxhdGlvbi5vYmplY3RfaWQSOGNhbm5vdCBjb250YWluIGFueSBzcGFjZXMgb3Igb3RoZXIgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzGhh0aGlzLm1hdGNoZXMoJ15bXFxTXSskJynIAQFyAxiAAhL6AQoIcmVsYXRpb24YAyABKAlC5wHgQQK6SOABugHVAQoRcmVsYXRpb24ucmVsYXRpb24SiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASggIKDHN1YmplY3RfdHlwZRgEIAEoCULrAeBBArpI5AG6AdkBChVyZWxhdGlvbi5zdWJqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASjgEKCnN1YmplY3RfaWQYBSABKAlCeuBBArpIdLoBaQoTcmVsYXRpb24uc3ViamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKcgBAXIDGIACEooCChBzdWJqZWN0X3JlbGF0aW9uGAYgASgJQu8B4EEBukjoAboB3QEKGXJlbGF0aW9uLnN1YmplY3RfcmVsYXRpb24SiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEASMwoKY3JlYXRlZF9hdBgUIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA+BBAxIzCgp1cGRhdGVkX2F0GBUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEID4EEDEhEKBGV0YWcYFyABKAlCA+BBASK3AwoQT2JqZWN0SWRlbnRpZmllchKJAgoLb2JqZWN0X3R5cGUYASABKAlC8wHgQQK6SOwBugHhAQodb2JqZWN0X2lkZW50aWZpZXIub2JqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKcgBAXICGEASlgEKCW9iamVjdF9pZBgCIAEoCUKCAeBBArpIfLoBcQobb2JqZWN0X2lkZW50aWZpZXIub2JqZWN0X2lkEjhjYW5ub3QgY29udGFpbiBhbnkgc3BhY2VzIG9yIG90aGVyIHdoaXRlc3BhY2UgY2hhcmFjdGVycxoYdGhpcy5tYXRjaGVzKCdeW1xcU10rJCcpyAEBcgMYgAIiigsKElJlbGF0aW9uSWRlbnRpZmllchKLAgoLb2JqZWN0X3R5cGUYASABKAlC9QHgQQK6SO4BugHjAQofcmVsYXRpb25faWRlbnRpZmllci5vYmplY3RfdHlwZRKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQBKYAQoJb2JqZWN0X2lkGAIgASgJQoQB4EECukh+ugFzCh1yZWxhdGlvbl9pZGVudGlmaWVyLm9iamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKdABAXIDGIACEoUCCghyZWxhdGlvbhgDIAEoCULyAeBBArpI6wG6AeABChxyZWxhdGlvbl9pZGVudGlmaWVyLnJlbGF0aW9uEosBbXVzdCBiZSBhbGwgbG93ZXJjYXNlLCBzdGFydCB3aXRoIGEgbGV0dGVyLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGRvdHMsIHVuZGVyc2NvcmVzLCBhbmQgZGFzaGVzLCBhbmQgbXVzdCBlbmQgd2l0aCBhIGxldHRlciBvciBkaWdpdBoydGhpcy5tYXRjaGVzKCdeW2Etel1bYS16MC05XFwuXy1dezEsNjJ9W2EtejAtOV0kJynQAQFyAhhAEo0CCgxzdWJqZWN0X3R5cGUYBCABKAlC9gHgQQK6SO8BugHkAQogcmVsYXRpb25faWRlbnRpZmllci5zdWJqZWN0X3R5cGUSiwFtdXN0IGJlIGFsbCBsb3dlcmNhc2UsIHN0YXJ0IHdpdGggYSBsZXR0ZXIsIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgZG90cywgdW5kZXJzY29yZXMsIGFuZCBkYXNoZXMsIGFuZCBtdXN0IGVuZCB3aXRoIGEgbGV0dGVyIG9yIGRpZ2l0GjJ0aGlzLm1hdGNoZXMoJ15bYS16XVthLXowLTlcXC5fLV17MSw2Mn1bYS16MC05XSQnKdABAXICGEASmgEKCnN1YmplY3RfaWQYBSABKAlChQHgQQK6SH+6AXQKHnJlbGF0aW9uX2lkZW50aWZpZXIuc3ViamVjdF9pZBI4Y2Fubm90IGNvbnRhaW4gYW55IHNwYWNlcyBvciBvdGhlciB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMaGHRoaXMubWF0Y2hlcygnXltcXFNdKyQnKdABAXIDGIACEpUCChBzdWJqZWN0X3JlbGF0aW9uGAYgASgJQvoB4EEBukjzAboB6AEKJHJlbGF0aW9uX2lkZW50aWZpZXIuc3ViamVjdF9yZWxhdGlvbhKLAW11c3QgYmUgYWxsIGxvd2VyY2FzZSwgc3RhcnQgd2l0aCBhIGxldHRlciwgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBkb3RzLCB1bmRlcnNjb3JlcywgYW5kIGRhc2hlcywgYW5kIG11c3QgZW5kIHdpdGggYSBsZXR0ZXIgb3IgZGlnaXQaMnRoaXMubWF0Y2hlcygnXlthLXpdW2EtejAtOVxcLl8tXXsxLDYyfVthLXowLTldJCcp0AEBcgIYQCJDChFQYWdpbmF0aW9uUmVxdWVzdBIaCgRzaXplGAEgASgFQgzgQQG6SAYaBBhkKAESEgoFdG9rZW4YAiABKAlCA+BBASItChJQYWdpbmF0aW9uUmVzcG9uc2USFwoKbmV4dF90b2tlbhgBIAEoCUID4EEDQkZaRGdpdGh1Yi5jb20vYXNlcnRvLWRldi9nby1kaXJlY3RvcnkvYXNlcnRvL2RpcmVjdG9yeS9jb21tb24vdjM7Y29tbW9uYgZwcm90bzM", [field_behavior_pb_1.file_google_api_field_behavior, wkt_1.file_google_protobuf_struct, wkt_1.file_google_protobuf_timestamp, validate_pb_1.file_buf_validate_validate]);
/**
 * Describes the message aserto.directory.common.v3.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
exports.ObjectSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 0);
/**
 * Describes the message aserto.directory.common.v3.Relation.
 * Use `create(RelationSchema)` to create a new message.
 */
exports.RelationSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 1);
/**
 * Describes the message aserto.directory.common.v3.ObjectIdentifier.
 * Use `create(ObjectIdentifierSchema)` to create a new message.
 */
exports.ObjectIdentifierSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 2);
/**
 * Describes the message aserto.directory.common.v3.RelationIdentifier.
 * Use `create(RelationIdentifierSchema)` to create a new message.
 */
exports.RelationIdentifierSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 3);
/**
 * Describes the message aserto.directory.common.v3.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
exports.PaginationRequestSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 4);
/**
 * Describes the message aserto.directory.common.v3.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
exports.PaginationResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_common_v3_common, 5);
