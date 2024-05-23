import { z } from 'zod'

/** Representation of a key movement */
export const keyMovementModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the key movement */ id: z.string().nullable().optional(),
  /** The date and time when the key movement was created */ created: z.string().nullable().optional(),
  /** The date and time when the key movement was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the key set this movement belongs to */ keyId: z.string().nullable().optional(),
  /** The unique identifier of the property that the key set belongs to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the contact/negotiator that the key is checked out with */
  checkOutToId: z.string().nullable().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().nullable().optional(),
  /** The date and time of when the key set was checked out */ checkOutAt: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().nullable().optional(),
  /** The date and time of when the key set was checked in */ checkInAt: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().nullable().optional(),
  /** The ETag for the current version of the key movement. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
