import { z } from 'zod'
import {
  createIdentityDocumentModel,
  CreateIdentityDocumentModel,
} from '@/schemas/createIdentityDocumentModel.generated.tsx'

/** Request body used to create a new contact identity check */
export const createIdentityCheckModel =
  /** Request body used to create a new contact identity check */
  z.object({
    /** The unique identifier of the contact associated to the identity check */ contactId: z.string(),
    /** The date when the identity check was performed. This may differ to the date when the check was created */
    checkDate: z.string(),
    /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ status: z.string(),
    /** The unique identifier of the negotiator that initiated the identity check */ negotiatorId: z.string(),
    identityDocument1: createIdentityDocumentModel.optional().nullable(),
    identityDocument2: createIdentityDocumentModel.optional().nullable(),
    /** App specific metadata to set against the identity check */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
/** Request body used to create a new contact identity check */
export type CreateIdentityCheckModel =
  /** Request body used to create a new contact identity check */
  {
    contactId: /** The unique identifier of the contact associated to the identity check */ string
    checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string
    status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ string
    negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */ string
    identityDocument1?: CreateIdentityDocumentModel | null | undefined
    identityDocument2?: CreateIdentityDocumentModel | null | undefined
    metadata?:
      | /** App specific metadata to set against the identity check */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
