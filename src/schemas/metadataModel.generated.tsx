import { z } from 'zod'

/** Model representing the state of a metadata record for a given entity */
export const metadataModel = /** Model representing the state of a metadata record for a given entity */
z.object({id: /** The unique identifier of this metadata record */
z.string().optional(), modified: /** The date and time of when this metadata record was last updated */
z.string().optional(), entityType: /** The name of the entity type that this metadata record is associated to */
z.string().optional(), entityId: /** The unique identifier of the the entity that this metadata is associated to */
z.string().optional(), metadata: /** The JSON document content */
z.string().optional()});
/** Model representing the state of a metadata record for a given entity */
export type MetadataModel = /** Model representing the state of a metadata record for a given entity */
{id?: /** The unique identifier of this metadata record */
string | undefined, modified?: /** The date and time of when this metadata record was last updated */
string | undefined, entityType?: /** The name of the entity type that this metadata record is associated to */
string | undefined, entityId?: /** The unique identifier of the the entity that this metadata is associated to */
string | undefined, metadata?: /** The JSON document content */
string | undefined};