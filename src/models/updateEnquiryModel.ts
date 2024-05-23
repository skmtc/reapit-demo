import { z } from 'zod'

/** Request body used to update an existing enquiry */
export const updateEnquiryModel = z.object({
  /** The unique identifier of the applicant associated to the enquiry */ applicantId: z.string().nullable().optional(),
  /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
  status: z.string().nullable().optional(),
})
