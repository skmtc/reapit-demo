import { z } from 'zod'

/** Read model representing a Guarantor */
export type GuarantorModel =
  /** Read model representing a Guarantor */
  {
    id?: /** The identifier for the guarantor record */ string | null | undefined
    guarantorAssociatedId?:
      | /** The identifier for the contact record associated with the guarantor */
      string
      | null
      | undefined
    type?: /** Value indicating whether a the referenced guarantor is a person or a company */ string | null | undefined
    referenceStatus?:
      | /** The status of the reference requested from the guarantor (notSet/requested/received) */
      string
      | null
      | undefined
  }
/** Read model representing a Guarantor */
export const guarantorModel =
  /** Read model representing a Guarantor */
  z.object({
    /** The identifier for the guarantor record */ id: z.string().optional().nullable(),
    /** The identifier for the contact record associated with the guarantor */
    guarantorAssociatedId: z.string().optional().nullable(),
    /** Value indicating whether a the referenced guarantor is a person or a company */
    type: z.string().optional().nullable(),
    /** The status of the reference requested from the guarantor (notSet/requested/received) */
    referenceStatus: z.string().optional().nullable(),
  })
