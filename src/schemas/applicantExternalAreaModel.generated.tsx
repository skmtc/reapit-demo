import { z } from 'zod'

/** The applicant's outdoor space requirements */
export const applicantExternalAreaModel = /** The applicant's outdoor space requirements */
z.object({type: /** The unit of area that each amount corresponds to (acres/hectares) */
z.string().optional(), amountFrom: /** The minimum unit value of outside space that the applicant is looking for */
z.number().optional(), amountTo: /** The maximum unit value of outside space that the applicant is looking for */
z.number().optional()});
/** The applicant's outdoor space requirements */
export type ApplicantExternalAreaModel = /** The applicant's outdoor space requirements */
{type?: /** The unit of area that each amount corresponds to (acres/hectares) */
string | undefined, amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */
number | undefined, amountTo?: /** The maximum unit value of outside space that the applicant is looking for */
number | undefined};