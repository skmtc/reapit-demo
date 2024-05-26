import { z } from 'zod'

/** Request body used to create a new set of keys */
export const createKeyModel = z.object({
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().nullable().optional(),
  /** The unique identifier of the key type */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the office responsible for the key */ officeId: z.string().nullable().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z
    .array(
      /** Request body used to create an individual key included in a key set */
      z.object({ /** The name of the individual key in the set */ name: z.string().nullable().optional() }),
    )
    .nullable()
    .optional(),
})
/** Request body used to create a new set of keys */
export type CreateKeyModel = {
  number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  string | undefined
  typeId?: /** The unique identifier of the key type */ string | undefined
  officeId?: /** The unique identifier of the office responsible for the key */ string | undefined
  keysInSet?: /** A listing of the individual keys included in the set */
  | Array</** Request body used to create an individual key included in a key set */
      { name?: /** The name of the individual key in the set */ string | undefined }>
    | undefined
}
