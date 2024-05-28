import { z } from 'zod'

/** Any specific details relating to the marketing of a property in Guernsey */
export const guernseyModel = z.object({
  /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).nullable().optional(),
})
/** Any specific details relating to the marketing of a property in Guernsey */
export type GuernseyModel = {
  market?: /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
  Array<string> | undefined
}