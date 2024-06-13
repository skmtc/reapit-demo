import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { IdentityDocumentModel, identityDocumentModel } from '@/schemas/identityDocumentModel.generated.tsx'
import { z } from 'zod'

export type IdentityCheckModel =
  /** Representation of a contact identity check */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the identity check */ string | null | undefined
    contactId?: /** The unique identifier of the contact associated to the identity check */ string | null | undefined
    created?: /** The date and time when the identity check was created */ string | null | undefined
    modified?: /** The date and time when the identity check was last modified */ string | null | undefined
    checkDate?:
      | /** The date when the identity check was performed. This may differ to the date when the check was created */
      string
      | null
      | undefined
    status?:
      | /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
      string
      | null
      | undefined
    negotiatorId?:
      | /** The unique identifier of the negotiator that initiated the identity check */
      string
      | null
      | undefined
    identityDocument1?: IdentityDocumentModel | null | undefined
    identityDocument2?: IdentityDocumentModel | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the identity check */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the identity check. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a contact identity check */
export const identityCheckModel =
  /** Representation of a contact identity check */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the identity check */ id: z.string().optional().nullable(),
    /** The unique identifier of the contact associated to the identity check */
    contactId: z.string().optional().nullable(),
    /** The date and time when the identity check was created */ created: z.string().optional().nullable(),
    /** The date and time when the identity check was last modified */ modified: z.string().optional().nullable(),
    /** The date when the identity check was performed. This may differ to the date when the check was created */
    checkDate: z.string().optional().nullable(),
    /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    status: z.string().optional().nullable(),
    /** The unique identifier of the negotiator that initiated the identity check */
    negotiatorId: z.string().optional().nullable(),
    identityDocument1: identityDocumentModel.optional().nullable(),
    identityDocument2: identityDocumentModel.optional().nullable(),
    /** App specific metadata that has been set against the identity check */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the identity check. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
