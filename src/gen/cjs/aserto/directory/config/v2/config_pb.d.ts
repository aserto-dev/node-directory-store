import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { GroupOptions, Relation, RoleOptions, UserOptions } from "../../scim/v2/scim_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/config/v2/config.proto.
 */
export declare const file_aserto_directory_config_v2_config: GenFile;
/**
 * @generated from message aserto.directory.config.v2.Oci
 */
export type Oci = Message<"aserto.directory.config.v2.Oci"> & {
    /**
     * oci registry host address
     *
     * @generated from field: string host = 1;
     */
    host: string;
    /**
     * path to the token secret
     *
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * authentication scheme used
     *
     * @generated from field: string scheme = 3;
     */
    scheme: string;
};
/**
 * Describes the message aserto.directory.config.v2.Oci.
 * Use `create(OciSchema)` to create a new message.
 */
export declare const OciSchema: GenMessage<Oci>;
/**
 * @generated from message aserto.directory.config.v2.Policy
 */
export type Policy = Message<"aserto.directory.config.v2.Policy"> & {
    /**
     * id of the oci config object
     *
     * @generated from field: string oci_config_id = 1;
     */
    ociConfigId: string;
    /**
     * @generated from field: string org = 2;
     */
    org: string;
    /**
     * @generated from field: string repo = 3;
     */
    repo: string;
    /**
     * @generated from field: string tag = 4;
     */
    tag: string;
    /**
     * @generated from field: optional bool decision_log = 5;
     */
    decisionLog?: boolean;
    /**
     * @generated from field: optional aserto.directory.config.v2.Sync sync = 6;
     */
    sync?: Sync;
};
/**
 * Describes the message aserto.directory.config.v2.Policy.
 * Use `create(PolicySchema)` to create a new message.
 */
export declare const PolicySchema: GenMessage<Policy>;
/**
 * @generated from message aserto.directory.config.v2.Sync
 */
export type Sync = Message<"aserto.directory.config.v2.Sync"> & {
    /**
     * address of sync directory
     *
     * @generated from field: string directory = 1;
     */
    directory: string;
    /**
     * path to the secret api key to use for directory
     *
     * @generated from field: string api_key_secret = 2;
     */
    apiKeySecret: string;
    /**
     * sync page size
     *
     * @generated from field: int32 page_size = 3;
     */
    pageSize: number;
    /**
     * sync interval
     *
     * @generated from field: int32 sync_interval = 4;
     */
    syncInterval: number;
    /**
     * timout config for sync
     *
     * @generated from field: int32 timeout = 5;
     */
    timeout: number;
    /**
     * insecure connection to directory
     *
     * @generated from field: bool insecure = 6;
     */
    insecure: boolean;
    /**
     * edge sync enabled
     *
     * @generated from field: bool enabled = 7;
     */
    enabled: boolean;
    /**
     * tls option for edge sync
     *
     * @generated from field: aserto.directory.config.v2.TLSOption tls_option = 8;
     */
    tlsOption: TLSOption;
};
/**
 * Describes the message aserto.directory.config.v2.Sync.
 * Use `create(SyncSchema)` to create a new message.
 */
export declare const SyncSchema: GenMessage<Sync>;
/**
 * @generated from message aserto.directory.config.v2.Scim
 */
export type Scim = Message<"aserto.directory.config.v2.Scim"> & {
    /**
     * @generated from field: aserto.directory.scim.v2.UserOptions user = 1;
     */
    user?: UserOptions;
    /**
     * @generated from field: optional aserto.directory.scim.v2.GroupOptions group = 2;
     */
    group?: GroupOptions;
    /**
     * @generated from field: optional aserto.directory.scim.v2.RoleOptions role = 3;
     */
    role?: RoleOptions;
    /**
     * @generated from field: repeated aserto.directory.scim.v2.Relation relations = 4;
     */
    relations: Relation[];
};
/**
 * Describes the message aserto.directory.config.v2.Scim.
 * Use `create(ScimSchema)` to create a new message.
 */
export declare const ScimSchema: GenMessage<Scim>;
/**
 * @generated from enum aserto.directory.config.v2.TLSOption
 */
export declare enum TLSOption {
    /**
     * @generated from enum value: TLS_OPTION_UNKNOWN = 0;
     */
    TLS_OPTION_UNKNOWN = 0,
    /**
     * @generated from enum value: TLS_OPTION_SECURE = 1;
     */
    TLS_OPTION_SECURE = 1,
    /**
     * @generated from enum value: TLS_OPTION_SKIP_VERIFY = 2;
     */
    TLS_OPTION_SKIP_VERIFY = 2,
    /**
     * @generated from enum value: TLS_OPTION_NO_TLS = 3;
     */
    TLS_OPTION_NO_TLS = 3
}
/**
 * Describes the enum aserto.directory.config.v2.TLSOption.
 */
export declare const TLSOptionSchema: GenEnum<TLSOption>;
