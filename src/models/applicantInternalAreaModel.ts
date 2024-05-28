import { z } from 'zod'

/** The applicant's indoor space requirements */
export const applicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().nullable().optional(),
  /** The unit value of inside space that the applicant is looking for */ amount: z.number().nullable().optional(),
})
/** The applicant's indoor space requirements */
export type ApplicantInternalAreaModel = {
  type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */ string | undefined
  amount?: /** The unit value of inside space that the applicant is looking for */ number | undefined
}
