import { UpdateIdentityDocumentModel } from '@/models/updateIdentityDocumentModel.ts'

/** Request body used to update an exist contact identity check */
export type UpdateIdentityCheckModel = {
  checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
  string | undefined
  status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */ string | undefined
  identityDocument1?: UpdateIdentityDocumentModel | undefined
  identityDocument2?: UpdateIdentityDocumentModel | undefined
  metadata?: /** App specific metadata to set against the identity check */
  Record<string, Record<string, never>> | undefined
}
