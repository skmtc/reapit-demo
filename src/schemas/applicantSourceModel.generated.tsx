import { z } from 'zod'

/** An applicant's source of enquiry */
export type ApplicantSourceModel =
  /** An applicant's source of enquiry */
  {
    id?: /** The unique identifier of the applicant's source */ string | null | undefined
    type?: /** The source type (office/source) */ string | null | undefined
  }
/** An applicant's source of enquiry */
export const applicantSourceModel =
  /** An applicant's source of enquiry */
  z.object({
    /** The unique identifier of the applicant's source */ id: z.string().optional().nullable(),
    /** The source type (office/source) */ type: z.string().optional().nullable(),
  })
