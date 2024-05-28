import { z } from 'zod'

/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const applicantLeaseRemaining = z.object({
  /** The minimum number of years that must remain on the lease of a leasehold property */
  min: z.number().int().nullable().optional(),
  /** The maximum number of years that must remain on the lease of a leasehold property */
  max: z.number().int().nullable().optional(),
})
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export type ApplicantLeaseRemaining = {
  min?: /** The minimum number of years that must remain on the lease of a leasehold property */ number | undefined
  max?: /** The maximum number of years that must remain on the lease of a leasehold property */ number | undefined
}