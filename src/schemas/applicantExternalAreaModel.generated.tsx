import { z } from 'zod'

/** The applicant's outdoor space requirements */
export type ApplicantExternalAreaModel =
  /** The applicant's outdoor space requirements */
  {
    type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | null | undefined
    amountFrom?:
      | /** The minimum unit value of outside space that the applicant is looking for */
      number
      | null
      | undefined
    amountTo?:
      | /** The maximum unit value of outside space that the applicant is looking for */
      number
      | null
      | undefined
  }
/** The applicant's outdoor space requirements */
export const applicantExternalAreaModel =
  /** The applicant's outdoor space requirements */
  z.object({
    /** The unit of area that each amount corresponds to (acres/hectares) */ type: z.string().optional().nullable(),
    /** The minimum unit value of outside space that the applicant is looking for */
    amountFrom: z.number().optional().nullable(),
    /** The maximum unit value of outside space that the applicant is looking for */
    amountTo: z.number().optional().nullable(),
  })
