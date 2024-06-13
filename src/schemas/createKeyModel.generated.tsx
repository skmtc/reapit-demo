import { z } from 'zod'
import { createIndividualKeyModel, CreateIndividualKeyModel } from '@/schemas/createIndividualKeyModel.generated.tsx'

/** Request body used to create a new set of keys */
export const createKeyModel =
  /** Request body used to create a new set of keys */
  z.object({
    /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
    number: z.string().optional().nullable(),
    /** The unique identifier of the key type */ typeId: z.string().optional().nullable(),
    /** The unique identifier of the office responsible for the key */ officeId: z.string().optional().nullable(),
    /** A listing of the individual keys included in the set */
    keysInSet: z.array(createIndividualKeyModel).optional().nullable(),
  })
/** Request body used to create a new set of keys */
export type CreateKeyModel =
  /** Request body used to create a new set of keys */
  {
    number?:
      | /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
      string
      | null
      | undefined
    typeId?: /** The unique identifier of the key type */ string | null | undefined
    officeId?: /** The unique identifier of the office responsible for the key */ string | null | undefined
    keysInSet?:
      | /** A listing of the individual keys included in the set */
      Array<CreateIndividualKeyModel>
      | null
      | undefined
  }
