import { z } from 'zod'

/** Representation of a contact identity check */
export const identityCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
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
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  identityDocument1: z
    .object({
      /** The unique identifier of the identity document */ documentId: z.string().nullable().optional(),
      /** The unique identifier of the type of identity document provided */ typeId: z.string().nullable().optional(),
      /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
      /** Details regarding the identity document (eg. passport number) */ details: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  identityDocument2: z
    .object({
      /** The unique identifier of the identity document */ documentId: z.string().nullable().optional(),
      /** The unique identifier of the type of identity document provided */ typeId: z.string().nullable().optional(),
      /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
      /** Details regarding the identity document (eg. passport number) */ details: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata that has been set against the identity check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the identity check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
