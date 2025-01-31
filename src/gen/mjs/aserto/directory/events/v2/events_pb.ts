// @generated by protoc-gen-es v2.2.2 with parameter "target=ts+js"
// @generated from file aserto/directory/events/v2/events.proto (package aserto.directory.events.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_aserto_options_v1_events } from "../../../options/v1/events_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file aserto/directory/events/v2/events.proto.
 */
export const file_aserto_directory_events_v2_events: GenFile = /*@__PURE__*/
  fileDesc("Cidhc2VydG8vZGlyZWN0b3J5L2V2ZW50cy92Mi9ldmVudHMucHJvdG8SGmFzZXJ0by5kaXJlY3RvcnkuZXZlbnRzLnYyIsIBChNUZW5hbnRTY2hlbWFDaGFuZ2VkEh0KCXRlbmFudF9pZBgBIAEoCUIK+roYBnRlbmFudBIRCglzb3VyY2VfaWQYAiABKAkSRwoJZGlyZWN0b3J5GAMgASgOMiUuYXNlcnRvLmRpcmVjdG9yeS5ldmVudHMudjIuRGlyZWN0b3J5Qg36uhgJZGlyZWN0b3J5OjD6uhgsEipncnBjLntuYW1lfS57dGFnOiBkaXJlY3Rvcnl9Lnt0YWc6IHRlbmFudH0qTAoJRGlyZWN0b3J5EhUKEURJUkVDVE9SWV9VTktOT1dOEAASEgoORElSRUNUT1JZX1JPT1QQARIUChBESVJFQ1RPUllfVEVOQU5UEAJCTFpKZ2l0aHViLmNvbS9hc2VydG8tZGV2L2dvLWRpcmVjdG9yeS1zdG9yZS9hc2VydG8vZGlyZWN0b3J5L2V2ZW50cy92MjtldmVudHNiBnByb3RvMw", [file_aserto_options_v1_events]);

/**
 * @generated from message aserto.directory.events.v2.TenantSchemaChanged
 */
export type TenantSchemaChanged = Message<"aserto.directory.events.v2.TenantSchemaChanged"> & {
  /**
   * @generated from field: string tenant_id = 1;
   */
  tenantId: string;

  /**
   * @generated from field: string source_id = 2;
   */
  sourceId: string;

  /**
   * @generated from field: aserto.directory.events.v2.Directory directory = 3;
   */
  directory: Directory;
};

/**
 * Describes the message aserto.directory.events.v2.TenantSchemaChanged.
 * Use `create(TenantSchemaChangedSchema)` to create a new message.
 */
export const TenantSchemaChangedSchema: GenMessage<TenantSchemaChanged> = /*@__PURE__*/
  messageDesc(file_aserto_directory_events_v2_events, 0);

/**
 * @generated from enum aserto.directory.events.v2.Directory
 */
export enum Directory {
  /**
   * @generated from enum value: DIRECTORY_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: DIRECTORY_ROOT = 1;
   */
  ROOT = 1,

  /**
   * @generated from enum value: DIRECTORY_TENANT = 2;
   */
  TENANT = 2,
}

/**
 * Describes the enum aserto.directory.events.v2.Directory.
 */
export const DirectorySchema: GenEnum<Directory> = /*@__PURE__*/
  enumDesc(file_aserto_directory_events_v2_events, 0);

