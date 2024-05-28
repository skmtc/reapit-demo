import { z } from 'zod'

/** Details of regional information specific to Guernsey */
export const applicantGuernseyModel = z.object({
  /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).nullable().optional(),
})
/** Details of regional information specific to Guernsey */
export type ApplicantGuernseyModel = {
  market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  Array<string> | undefined
}
