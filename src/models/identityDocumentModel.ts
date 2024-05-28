import { z } from 'zod'

/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export const identityDocumentModel = z.object({
  /** The unique identifier of the identity document */ documentId: z.string().nullable().optional(),
  /** The unique identifier of the type of identity document provided */ typeId: z.string().nullable().optional(),
  /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
  /** Details regarding the identity document (eg. passport number) */ details: z.string().nullable().optional(),
})
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export type IdentityDocumentModel = {
  documentId?: /** The unique identifier of the identity document */ string | undefined
  typeId?: /** The unique identifier of the type of identity document provided */ string | undefined
  expiry?: /** The date when the document expires and becomes invalid */ string | undefined
  details?: /** Details regarding the identity document (eg. passport number) */ string | undefined
}