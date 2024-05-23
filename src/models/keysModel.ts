import { z } from 'zod'

/** Representation of a set of keys */
export const keysModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the key */ id: z.string().nullable().optional(),
  /** The date and time when the key was created */ created: z.string().nullable().optional(),
  /** The date and time when the key was last modified */ modified: z.string().nullable().optional(),
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().nullable().optional(),
  /** The unique identifier of the key type */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the office responsible for the key */ officeId: z.string().nullable().optional(),
  /** The unique identifier of the property that the key belongs to */ propertyId: z.string().nullable().optional(),
  /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ status: z.string().nullable().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z
    .array(
      /** Representation of an individual key included in a key set */
      z.object({ /** The name of the individual key in the set */ name: z.string().nullable().optional() }),
    )
    .nullable()
    .optional(),
  /** The ETag for the current version of the keys. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
