import { z } from 'zod'

/** An applicant's source of enquiry */
export const applicantSourceModel = /** An applicant's source of enquiry */
z.object({id: /** The unique identifier of the applicant's source */
z.string().optional(), type: /** The source type (office/source) */
z.string().optional()});
/** An applicant's source of enquiry */
export type ApplicantSourceModel = /** An applicant's source of enquiry */
{id?: /** The unique identifier of the applicant's source */
string | undefined, type?: /** The source type (office/source) */
string | undefined};