import { z } from 'zod'

/** Read model representing a Guarantor */
export const guarantorModel = z.object({
  /** The identifier for the guarantor record */ id: z.string().nullable().optional(),
  /** The identifier for the contact record associated with the guarantor */
  guarantorAssociatedId: z.string().nullable().optional(),
  /** Value indicating whether a the referenced guarantor is a person or a company */
  type: z.string().nullable().optional(),
  /** The status of the reference requested from the guarantor (notSet/requested/received) */
  referenceStatus: z.string().nullable().optional(),
})
