import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { individualKeyModel, IndividualKeyModel } from '@/models/individualKeyModel.ts'

/** Representation of a set of keys */
export const keysModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
  keysInSet: z.array(individualKeyModel).nullable().optional(),
  /** The ETag for the current version of the keys. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a set of keys */
export type KeysModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the key */ string | undefined
  created?: /** The date and time when the key was created */ string | undefined
  modified?: /** The date and time when the key was last modified */ string | undefined
  number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  string | undefined
  typeId?: /** The unique identifier of the key type */ string | undefined
  officeId?: /** The unique identifier of the office responsible for the key */ string | undefined
  propertyId?: /** The unique identifier of the property that the key belongs to */ string | undefined
  status?: /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ string | undefined
  keysInSet?: /** A listing of the individual keys included in the set */ Array<IndividualKeyModel> | undefined
  _eTag?: /** The ETag for the current version of the keys. Used for managing update concurrency */ string | undefined
}
