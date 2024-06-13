import { z } from 'zod'

/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export type IdentityDocumentModel =
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  {
    documentId?: /** The unique identifier of the identity document */ string | null | undefined
    typeId?: /** The unique identifier of the type of identity document provided */ string | null | undefined
    expiry?: /** The date when the document expires and becomes invalid */ string | null | undefined
    details?: /** Details regarding the identity document (eg. passport number) */ string | null | undefined
  }
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export const identityDocumentModel =
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  z.object({
    /** The unique identifier of the identity document */ documentId: z.string().optional().nullable(),
    /** The unique identifier of the type of identity document provided */ typeId: z.string().optional().nullable(),
    /** The date when the document expires and becomes invalid */ expiry: z.string().optional().nullable(),
    /** Details regarding the identity document (eg. passport number) */ details: z.string().optional().nullable(),
  })
