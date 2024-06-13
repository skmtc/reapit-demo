import { z } from 'zod'

/** Read model representing a tenant/applicant reference */
export type ReferenceModel =
  /** Read model representing a tenant/applicant reference */
  {
    id?: /** The identifier for the reference record */ string | null | undefined
    referenceAssociatedId?:
      | /** The identifier for the contact/company record associated with the reference */
      string
      | null
      | undefined
    type?: /** Value indicating whether a referenced contact is a person or a company */ string | null | undefined
    referenceStatus?: /** The status of the reference (notSet/requested/received) */ string | null | undefined
    referenceType?:
      | /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
      string
      | null
      | undefined
  }
/** Read model representing a tenant/applicant reference */
export const referenceModel =
  /** Read model representing a tenant/applicant reference */
  z.object({
    /** The identifier for the reference record */ id: z.string().optional().nullable(),
    /** The identifier for the contact/company record associated with the reference */
    referenceAssociatedId: z.string().optional().nullable(),
    /** Value indicating whether a referenced contact is a person or a company */
    type: z.string().optional().nullable(),
    /** The status of the reference (notSet/requested/received) */ referenceStatus: z.string().optional().nullable(),
    /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
    referenceType: z.string().optional().nullable(),
  })
