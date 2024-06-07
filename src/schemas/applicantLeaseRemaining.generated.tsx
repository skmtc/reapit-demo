import { z } from 'zod'

/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const applicantLeaseRemaining = /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
z.object({min: /** The minimum number of years that must remain on the lease of a leasehold property */
z.number().int().optional(), max: /** The maximum number of years that must remain on the lease of a leasehold property */
z.number().int().optional()});
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export type ApplicantLeaseRemaining = /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
{min?: /** The minimum number of years that must remain on the lease of a leasehold property */
number | undefined, max?: /** The maximum number of years that must remain on the lease of a leasehold property */
number | undefined};