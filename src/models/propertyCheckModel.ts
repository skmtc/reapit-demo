import { z } from 'zod'

/** Representation of a check */
export const propertyCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the check */ id: z.string().nullable().optional(),
  /** The date and time when the check was created */ created: z.string().nullable().optional(),
  /** The date and time when the check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the check relates to */ description: z.string().nullable().optional(),
  /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().nullable().optional(),
  /** The type of the check (preInstruction) */ type: z.string().nullable().optional(),
  /** The unique identifier of the property that this check relates to */ propertyId: z.string().nullable().optional(),
  /** The ETag for the current version of the check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
