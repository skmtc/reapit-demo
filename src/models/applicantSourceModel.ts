import { z } from 'zod'

/** An applicant's source of enquiry */
export const applicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** An applicant's source of enquiry */
export type ApplicantSourceModel = {
  id?: /** The unique identifier of the applicant's source */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
