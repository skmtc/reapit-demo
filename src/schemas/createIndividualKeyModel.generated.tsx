import { z } from 'zod'

/** Request body used to create an individual key included in a key set */
export const createIndividualKeyModel =
  /** Request body used to create an individual key included in a key set */
  z.object({ /** The name of the individual key in the set */ name: z.string().optional().nullable() })
/** Request body used to create an individual key included in a key set */
export type CreateIndividualKeyModel =
  /** Request body used to create an individual key included in a key set */
  { name?: /** The name of the individual key in the set */ string | null | undefined }
