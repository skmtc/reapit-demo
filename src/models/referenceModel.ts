import { z } from 'zod'

/** Read model representing a tenant/applicant reference */
export const referenceModel = z.object({
  /** The identifier for the reference record */ id: z.string().nullable().optional(),
  /** The identifier for the contact/company record associated with the reference */
  referenceAssociatedId: z.string().nullable().optional(),
  /** Value indicating whether a referenced contact is a person or a company */ type: z.string().nullable().optional(),
  /** The status of the reference (notSet/requested/received) */ referenceStatus: z.string().nullable().optional(),
  /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
  referenceType: z.string().nullable().optional(),
})
/** Read model representing a tenant/applicant reference */
export type ReferenceModel = {
  id?: /** The identifier for the reference record */ string | undefined
  referenceAssociatedId?: /** The identifier for the contact/company record associated with the reference */
  string | undefined
  type?: /** Value indicating whether a referenced contact is a person or a company */ string | undefined
  referenceStatus?: /** The status of the reference (notSet/requested/received) */ string | undefined
  referenceType?: /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
  string | undefined
}
