import { z } from 'zod'

/** Details of regional information specific to Guernsey */
export const applicantGuernseyModel = /** Details of regional information specific to Guernsey */
z.object({market: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
z.array(z.string()).optional()});
/** Details of regional information specific to Guernsey */
export type ApplicantGuernseyModel = /** Details of regional information specific to Guernsey */
{market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
Array<string> | undefined};