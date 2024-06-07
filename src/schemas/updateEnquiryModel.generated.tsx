import { z } from 'zod'

/** Request body used to update an existing enquiry */
export const updateEnquiryModel = /** Request body used to update an existing enquiry */
z.object({applicantId: /** The unique identifier of the applicant associated to the enquiry */
z.string().optional(), status: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
z.string().optional()});
/** Request body used to update an existing enquiry */
export type UpdateEnquiryModel = /** Request body used to update an existing enquiry */
{applicantId?: /** The unique identifier of the applicant associated to the enquiry */
string | undefined, status?: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
string | undefined};