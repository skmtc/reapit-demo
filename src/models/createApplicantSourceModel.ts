import { z } from 'zod'

/** An applicant's source of enquiry */
export const createApplicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
