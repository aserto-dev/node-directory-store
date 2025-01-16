import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file aserto/directory/scim/v2/scim.proto.
 */
export declare const file_aserto_directory_scim_v2_scim: GenFile;
/**
 * @generated from message aserto.directory.scim.v2.UserOptions
 */
export type UserOptions = Message<"aserto.directory.scim.v2.UserOptions"> & {
    /**
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * @generated from field: string identity_object_type = 2;
     */
    identityObjectType: string;
    /**
     * @generated from field: string identity_relation = 3;
     */
    identityRelation: string;
    /**
     * @generated from field: map<string, string> property_mapping = 4;
     */
    propertyMapping: {
        [key: string]: string;
    };
    /**
     * @generated from field: string source_object_type = 5;
     */
    sourceObjectType: string;
    /**
     * @generated from field: string manager_relation = 6;
     */
    managerRelation: string;
};
/**
 * Describes the message aserto.directory.scim.v2.UserOptions.
 * Use `create(UserOptionsSchema)` to create a new message.
 */
export declare const UserOptionsSchema: GenMessage<UserOptions>;
/**
 * @generated from message aserto.directory.scim.v2.GroupOptions
 */
export type GroupOptions = Message<"aserto.directory.scim.v2.GroupOptions"> & {
    /**
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * @generated from field: string group_member_relation = 2;
     */
    groupMemberRelation: string;
    /**
     * @generated from field: string source_object_type = 3;
     */
    sourceObjectType: string;
};
/**
 * Describes the message aserto.directory.scim.v2.GroupOptions.
 * Use `create(GroupOptionsSchema)` to create a new message.
 */
export declare const GroupOptionsSchema: GenMessage<GroupOptions>;
/**
 * @generated from message aserto.directory.scim.v2.RoleOptions
 */
export type RoleOptions = Message<"aserto.directory.scim.v2.RoleOptions"> & {
    /**
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * @generated from field: string role_relation = 2;
     */
    roleRelation: string;
};
/**
 * Describes the message aserto.directory.scim.v2.RoleOptions.
 * Use `create(RoleOptionsSchema)` to create a new message.
 */
export declare const RoleOptionsSchema: GenMessage<RoleOptions>;
/**
 * @generated from message aserto.directory.scim.v2.Relation
 */
export type Relation = Message<"aserto.directory.scim.v2.Relation"> & {
    /**
     * @generated from field: string subject_type = 1;
     */
    subjectType: string;
    /**
     * @generated from field: string subject_id = 2;
     */
    subjectId: string;
    /**
     * @generated from field: string object_type = 3;
     */
    objectType: string;
    /**
     * @generated from field: string object_id = 4;
     */
    objectId: string;
    /**
     * @generated from field: string relation = 5;
     */
    relation: string;
    /**
     * @generated from field: string subject_relation = 6;
     */
    subjectRelation: string;
};
/**
 * Describes the message aserto.directory.scim.v2.Relation.
 * Use `create(RelationSchema)` to create a new message.
 */
export declare const RelationSchema: GenMessage<Relation>;
