import { z } from 'zod'

/** Representation of an individual key included in a key set */
export const individualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().nullable().optional(),
})
/** Representation of an individual key included in a key set */
export type IndividualKeyModel = { name?: /** The name of the individual key in the set */ string | undefined }
