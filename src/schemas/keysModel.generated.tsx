import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { IndividualKeyModel, individualKeyModel } from '@/schemas/individualKeyModel.generated.tsx'
import { z } from 'zod'

export type KeysModel =
  /** Representation of a set of keys */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the key */ string | null | undefined
    created?: /** The date and time when the key was created */ string | null | undefined
    modified?: /** The date and time when the key was last modified */ string | null | undefined
    number?:
      | /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
      string
      | null
      | undefined
    typeId?: /** The unique identifier of the key type */ string | null | undefined
    officeId?: /** The unique identifier of the office responsible for the key */ string | null | undefined
    propertyId?: /** The unique identifier of the property that the key belongs to */ string | null | undefined
    status?: /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ string | null | undefined
    keysInSet?: /** A listing of the individual keys included in the set */ Array<IndividualKeyModel> | null | undefined
    _eTag?:
      | /** The ETag for the current version of the keys. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of a set of keys */
export const keysModel =
  /** Representation of a set of keys */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the key */ id: z.string().optional().nullable(),
    /** The date and time when the key was created */ created: z.string().optional().nullable(),
    /** The date and time when the key was last modified */ modified: z.string().optional().nullable(),
    /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
    number: z.string().optional().nullable(),
    /** The unique identifier of the key type */ typeId: z.string().optional().nullable(),
    /** The unique identifier of the office responsible for the key */ officeId: z.string().optional().nullable(),
    /** The unique identifier of the property that the key belongs to */ propertyId: z.string().optional().nullable(),
    /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ status: z.string().optional().nullable(),
    /** A listing of the individual keys included in the set */
    keysInSet: z.array(individualKeyModel).optional().nullable(),
    /** The ETag for the current version of the keys. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
