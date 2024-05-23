import { z } from 'zod'

/** The applicant's indoor space requirements */
export const updateApplicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().nullable().optional(),
  /** The unit value of inside space that the applicant is looking for */ amount: z.number().nullable().optional(),
})
