import { z } from 'zod'

/** The applicant's indoor space requirements */
export const applicantInternalAreaModel =
  /** The applicant's indoor space requirements */
  z.object({
    /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
    type: z.string().optional().nullable(),
    /** The unit value of inside space that the applicant is looking for */ amount: z.number().optional().nullable(),
  })
/** The applicant's indoor space requirements */
export type ApplicantInternalAreaModel =
  /** The applicant's indoor space requirements */
  {
    type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */ string | null | undefined
    amount?: /** The unit value of inside space that the applicant is looking for */ number | null | undefined
  }
