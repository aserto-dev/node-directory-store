"use strict";
// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/config/v2/config.proto (package aserto.directory.config.v2, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLSOptionSchema = exports.TLSOption = exports.ScimSchema = exports.SyncSchema = exports.PolicySchema = exports.OciSchema = exports.file_aserto_directory_config_v2_config = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const scim_pb_1 = require("../../scim/v2/scim_pb");
/**
 * Describes the file aserto/directory/config/v2/config.proto.
 */
exports.file_aserto_directory_config_v2_config = (0, codegenv1_1.fileDesc)("Cidhc2VydG8vZGlyZWN0b3J5L2NvbmZpZy92Mi9jb25maWcucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkuY29uZmlnLnYyIjIKA09jaRIMCgRob3N0GAEgASgJEg0KBXRva2VuGAIgASgJEg4KBnNjaGVtZRgDIAEoCSKxAQoGUG9saWN5EhUKDW9jaV9jb25maWdfaWQYASABKAkSCwoDb3JnGAIgASgJEgwKBHJlcG8YAyABKAkSCwoDdGFnGAQgASgJEhkKDGRlY2lzaW9uX2xvZxgFIAEoCEgAiAEBEjMKBHN5bmMYBiABKAsyIC5hc2VydG8uZGlyZWN0b3J5LmNvbmZpZy52Mi5TeW5jSAGIAQFCDwoNX2RlY2lzaW9uX2xvZ0IHCgVfc3luYyLKAQoEU3luYxIRCglkaXJlY3RvcnkYASABKAkSFgoOYXBpX2tleV9zZWNyZXQYAiABKAkSEQoJcGFnZV9zaXplGAMgASgFEhUKDXN5bmNfaW50ZXJ2YWwYBCABKAUSDwoHdGltZW91dBgFIAEoBRIQCghpbnNlY3VyZRgGIAEoCBIPCgdlbmFibGVkGAcgASgIEjkKCnRsc19vcHRpb24YCCABKA4yJS5hc2VydG8uZGlyZWN0b3J5LmNvbmZpZy52Mi5UTFNPcHRpb24i+wEKBFNjaW0SMwoEdXNlchgBIAEoCzIlLmFzZXJ0by5kaXJlY3Rvcnkuc2NpbS52Mi5Vc2VyT3B0aW9ucxI6CgVncm91cBgCIAEoCzImLmFzZXJ0by5kaXJlY3Rvcnkuc2NpbS52Mi5Hcm91cE9wdGlvbnNIAIgBARI4CgRyb2xlGAMgASgLMiUuYXNlcnRvLmRpcmVjdG9yeS5zY2ltLnYyLlJvbGVPcHRpb25zSAGIAQESNQoJcmVsYXRpb25zGAQgAygLMiIuYXNlcnRvLmRpcmVjdG9yeS5zY2ltLnYyLlJlbGF0aW9uQggKBl9ncm91cEIHCgVfcm9sZSptCglUTFNPcHRpb24SFgoSVExTX09QVElPTl9VTktOT1dOEAASFQoRVExTX09QVElPTl9TRUNVUkUQARIaChZUTFNfT1BUSU9OX1NLSVBfVkVSSUZZEAISFQoRVExTX09QVElPTl9OT19UTFMQA0JMWkpnaXRodWIuY29tL2FzZXJ0by1kZXYvZ28tZGlyZWN0b3J5LXN0b3JlL2FzZXJ0by9kaXJlY3RvcnkvY29uZmlnL3YyO2NvbmZpZ2IGcHJvdG8z", [scim_pb_1.file_aserto_directory_scim_v2_scim]);
/**
 * Describes the message aserto.directory.config.v2.Oci.
 * Use `create(OciSchema)` to create a new message.
 */
exports.OciSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_config_v2_config, 0);
/**
 * Describes the message aserto.directory.config.v2.Policy.
 * Use `create(PolicySchema)` to create a new message.
 */
exports.PolicySchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_config_v2_config, 1);
/**
 * Describes the message aserto.directory.config.v2.Sync.
 * Use `create(SyncSchema)` to create a new message.
 */
exports.SyncSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_config_v2_config, 2);
/**
 * Describes the message aserto.directory.config.v2.Scim.
 * Use `create(ScimSchema)` to create a new message.
 */
exports.ScimSchema = (0, codegenv1_1.messageDesc)(exports.file_aserto_directory_config_v2_config, 3);
/**
 * @generated from enum aserto.directory.config.v2.TLSOption
 */
var TLSOption;
(function (TLSOption) {
    /**
     * @generated from enum value: TLS_OPTION_UNKNOWN = 0;
     */
    TLSOption[TLSOption["TLS_OPTION_UNKNOWN"] = 0] = "TLS_OPTION_UNKNOWN";
    /**
     * @generated from enum value: TLS_OPTION_SECURE = 1;
     */
    TLSOption[TLSOption["TLS_OPTION_SECURE"] = 1] = "TLS_OPTION_SECURE";
    /**
     * @generated from enum value: TLS_OPTION_SKIP_VERIFY = 2;
     */
    TLSOption[TLSOption["TLS_OPTION_SKIP_VERIFY"] = 2] = "TLS_OPTION_SKIP_VERIFY";
    /**
     * @generated from enum value: TLS_OPTION_NO_TLS = 3;
     */
    TLSOption[TLSOption["TLS_OPTION_NO_TLS"] = 3] = "TLS_OPTION_NO_TLS";
})(TLSOption || (exports.TLSOption = TLSOption = {}));
/**
 * Describes the enum aserto.directory.config.v2.TLSOption.
 */
exports.TLSOptionSchema = (0, codegenv1_1.enumDesc)(exports.file_aserto_directory_config_v2_config, 0);
