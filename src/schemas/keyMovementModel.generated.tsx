import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type KeyMovementModel =
  /** Representation of a key movement */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the key movement */ string | null | undefined
    created?: /** The date and time when the key movement was created */ string | null | undefined
    modified?: /** The date and time when the key movement was last modified */ string | null | undefined
    keyId?: /** The unique identifier of the key set this movement belongs to */ string | null | undefined
    propertyId?: /** The unique identifier of the property that the key set belongs to */ string | null | undefined
    checkOutToId?:
      | /** The unique identifier of the contact/negotiator that the key is checked out with */
      string
      | null
      | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | null | undefined
    checkOutAt?: /** The date and time of when the key set was checked out */ string | null | undefined
    checkOutNegotiatorId?:
      | /** The unique identifier of the negotiator who performed the key check out */
      string
      | null
      | undefined
    checkInAt?: /** The date and time of when the key set was checked in */ string | null | undefined
    checkInNegotiatorId?:
      | /** The unique identifier of the negotiator who performed the key check in */
      string
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the key movement. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a key movement */
export const keyMovementModel =
  /** Representation of a key movement */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the key movement */ id: z.string().optional().nullable(),
    /** The date and time when the key movement was created */ created: z.string().optional().nullable(),
    /** The date and time when the key movement was last modified */ modified: z.string().optional().nullable(),
    /** The unique identifier of the key set this movement belongs to */ keyId: z.string().optional().nullable(),
    /** The unique identifier of the property that the key set belongs to */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the contact/negotiator that the key is checked out with */
    checkOutToId: z.string().optional().nullable(),
    /** The type of entity that checked out the key (contact/negotiator) */
    checkOutToType: z.string().optional().nullable(),
    /** The date and time of when the key set was checked out */ checkOutAt: z.string().optional().nullable(),
    /** The unique identifier of the negotiator who performed the key check out */
    checkOutNegotiatorId: z.string().optional().nullable(),
    /** The date and time of when the key set was checked in */ checkInAt: z.string().optional().nullable(),
    /** The unique identifier of the negotiator who performed the key check in */
    checkInNegotiatorId: z.string().optional().nullable(),
    /** The ETag for the current version of the key movement. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
