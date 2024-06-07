import { z } from 'zod'
import { createIdentityDocumentModel, CreateIdentityDocumentModel } from '@/schemas/createIdentityDocumentModel.generated.tsx'

/** Request body used to create a new contact identity check */
export const createIdentityCheckModel = /** Request body used to create a new contact identity check */
z.object({contactId: /** The unique identifier of the contact associated to the identity check */
z.string(), checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
z.string(), status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
z.string(), negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
z.string(), identityDocument1: createIdentityDocumentModel.optional(), identityDocument2: createIdentityDocumentModel.optional(), metadata: /** App specific metadata to set against the identity check */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new contact identity check */
export type CreateIdentityCheckModel = /** Request body used to create a new contact identity check */
{contactId: /** The unique identifier of the contact associated to the identity check */
string, checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
string, status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
string, negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
string, identityDocument1?: CreateIdentityDocumentModel | undefined, identityDocument2?: CreateIdentityDocumentModel | undefined, metadata?: /** App specific metadata to set against the identity check */
Record<string, Record<string, never>> | undefined};