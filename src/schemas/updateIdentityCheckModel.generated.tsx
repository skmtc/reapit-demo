import { z } from 'zod'
import { updateIdentityDocumentModel, UpdateIdentityDocumentModel } from '@/schemas/updateIdentityDocumentModel.generated.tsx'

/** Request body used to update an exist contact identity check */
export const updateIdentityCheckModel = /** Request body used to update an exist contact identity check */
z.object({checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
z.string().optional(), status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
z.string().optional(), negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
z.string().optional(), identityDocument1: updateIdentityDocumentModel.optional(), identityDocument2: updateIdentityDocumentModel.optional(), metadata: /** App specific metadata to set against the identity check */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an exist contact identity check */
export type UpdateIdentityCheckModel = /** Request body used to update an exist contact identity check */
{checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
string | undefined, status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
string | undefined, negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */
string | undefined, identityDocument1?: UpdateIdentityDocumentModel | undefined, identityDocument2?: UpdateIdentityDocumentModel | undefined, metadata?: /** App specific metadata to set against the identity check */
Record<string, Record<string, never>> | undefined};