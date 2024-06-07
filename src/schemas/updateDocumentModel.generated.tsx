import { z } from 'zod'

/** Request body used to update an existing document */
export const updateDocumentModel = /** Request body used to update an existing document */
z.object({typeId: /** The unique identifier of the type of document */
z.string().optional(), name: /** The filename of the document */
z.string().optional(), isPrivate: /** A flag denoting whether or not the document is private */
z.boolean().optional(), metadata: /** App specific metadata to set against the document */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing document */
export type UpdateDocumentModel = /** Request body used to update an existing document */
{typeId?: /** The unique identifier of the type of document */
string | undefined, name?: /** The filename of the document */
string | undefined, isPrivate?: /** A flag denoting whether or not the document is private */
boolean | undefined, metadata?: /** App specific metadata to set against the document */
Record<string, Record<string, never>> | undefined};