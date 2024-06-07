import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { identityDocumentModel, IdentityDocumentModel } from '@/schemas/identityDocumentModel.generated.tsx'

/** Representation of a contact identity check */
export const identityCheckModel = /** Representation of a contact identity check */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the identity check */
z.string().optional(), contactId: /** The unique identifier of the contact associated to the identity check */
z.string().optional(), created: /** The date and time when the identity check was created */
z.string().optional(), modified: /** The date and time when the identity check was last modified */
z.string().optional(), checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
z.string().optional(), status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
z.string().optional(), identityDocument1: identityDocumentModel.optional(), identityDocument2: identityDocumentModel.optional(), metadata: /** App specific metadata that has been set against the identity check */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the identity check. Used for managing update concurrency */
z.string().optional()});
/** Representation of a contact identity check */
export type IdentityCheckModel = /** Representation of a contact identity check */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the identity check */
string | undefined, contactId?: /** The unique identifier of the contact associated to the identity check */
string | undefined, created?: /** The date and time when the identity check was created */
string | undefined, modified?: /** The date and time when the identity check was last modified */
string | undefined, checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
string | undefined, status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */
string | undefined, identityDocument1?: IdentityDocumentModel | undefined, identityDocument2?: IdentityDocumentModel | undefined, metadata?: /** App specific metadata that has been set against the identity check */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the identity check. Used for managing update concurrency */
string | undefined};