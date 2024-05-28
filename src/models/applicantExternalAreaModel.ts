import { z } from 'zod'

/** The applicant's outdoor space requirements */
export const applicantExternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum unit value of outside space that the applicant is looking for */
  amountFrom: z.number().nullable().optional(),
  /** The maximum unit value of outside space that the applicant is looking for */
  amountTo: z.number().nullable().optional(),
})
/** The applicant's outdoor space requirements */
export type ApplicantExternalAreaModel = {
  type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | undefined
  amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */ number | undefined
  amountTo?: /** The maximum unit value of outside space that the applicant is looking for */ number | undefined
}
