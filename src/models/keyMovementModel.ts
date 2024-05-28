import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a key movement */
export const keyMovementModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
/** Representation of a key movement */
export type KeyMovementModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the key movement */ string | undefined
  created?: /** The date and time when the key movement was created */ string | undefined
  modified?: /** The date and time when the key movement was last modified */ string | undefined
  keyId?: /** The unique identifier of the key set this movement belongs to */ string | undefined
  propertyId?: /** The unique identifier of the property that the key set belongs to */ string | undefined
  checkOutToId?: /** The unique identifier of the contact/negotiator that the key is checked out with */
  string | undefined
  checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | undefined
  checkOutAt?: /** The date and time of when the key set was checked out */ string | undefined
  checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
  string | undefined
  checkInAt?: /** The date and time of when the key set was checked in */ string | undefined
  checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */ string | undefined
  _eTag?: /** The ETag for the current version of the key movement. Used for managing update concurrency */
  string | undefined
}
