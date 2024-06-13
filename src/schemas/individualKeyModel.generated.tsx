import { z } from 'zod'

/** Representation of an individual key included in a key set */
export type IndividualKeyModel =
  /** Representation of an individual key included in a key set */
  { name?: /** The name of the individual key in the set */ string | null | undefined }
/** Representation of an individual key included in a key set */
export const individualKeyModel =
  /** Representation of an individual key included in a key set */
  z.object({ /** The name of the individual key in the set */ name: z.string().optional().nullable() })
