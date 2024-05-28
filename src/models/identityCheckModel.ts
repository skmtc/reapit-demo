import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { identityDocumentModel, IdentityDocumentModel } from '@/models/identityDocumentModel.ts'

/** Representation of a contact identity check */
export const identityCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the identity check */ id: z.string().nullable().optional(),
  /** The unique identifier of the contact associated to the identity check */
  contactId: z.string().nullable().optional(),
  /** The date and time when the identity check was created */ created: z.string().nullable().optional(),
  /** The date and time when the identity check was last modified */ modified: z.string().nullable().optional(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string().nullable().optional(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that initiated the identity check */
  negotiatorId: z.string().nullable().optional(),
  identityDocument1: identityDocumentModel.nullable().optional(),
  identityDocument2: identityDocumentModel.nullable().optional(),
  /** App specific metadata that has been set against the identity check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the identity check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a contact identity check */
export type IdentityCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the identity check */ string | undefined
  contactId?: /** The unique identifier of the contact associated to the identity check */ string | undefined
  created?: /** The date and time when the identity check was created */ string | undefined
  modified?: /** The date and time when the identity check was last modified */ string | undefined
  checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
  string | undefined
  status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */ string | undefined
  identityDocument1?: IdentityDocumentModel | undefined
  identityDocument2?: IdentityDocumentModel | undefined
  metadata?: /** App specific metadata that has been set against the identity check */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the identity check. Used for managing update concurrency */
  string | undefined
}
