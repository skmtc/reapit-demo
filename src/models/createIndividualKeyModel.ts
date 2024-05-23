import { z } from 'zod'

/** Request body used to create an individual key included in a key set */
export const createIndividualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().nullable().optional(),
})
