import { z } from 'zod'

/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export const identityDocumentModel = /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
z.object({documentId: /** The unique identifier of the identity document */
z.string().optional(), typeId: /** The unique identifier of the type of identity document provided */
z.string().optional(), expiry: /** The date when the document expires and becomes invalid */
z.string().optional(), details: /** Details regarding the identity document (eg. passport number) */
z.string().optional()});
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export type IdentityDocumentModel = /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
{documentId?: /** The unique identifier of the identity document */
string | undefined, typeId?: /** The unique identifier of the type of identity document provided */
string | undefined, expiry?: /** The date when the document expires and becomes invalid */
string | undefined, details?: /** Details regarding the identity document (eg. passport number) */
string | undefined};