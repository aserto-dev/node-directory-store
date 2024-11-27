import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/events/v2/events.proto.
 */
export declare const file_aserto_directory_events_v2_events: GenFile;
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
export declare const TenantSchemaChangedSchema: GenMessage<TenantSchemaChanged>;
/**
 * @generated from enum aserto.directory.events.v2.Directory
 */
export declare enum Directory {
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
    TENANT = 2
}
/**
 * Describes the enum aserto.directory.events.v2.Directory.
 */
export declare const DirectorySchema: GenEnum<Directory>;
