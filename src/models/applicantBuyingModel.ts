import { z } from 'zod'
import { applicantLeaseRemaining, ApplicantLeaseRemaining } from '@/models/applicantLeaseRemaining.ts'

/** The details specific to applicants with a marketingMode of buying */
export const applicantBuyingModel = z.object({
  /** The lower bound of the applicant's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the applicant's budget */ priceTo: z.number().int().nullable().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
  /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).nullable().optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().nullable().optional(),
  leaseRemaining: applicantLeaseRemaining.nullable().optional(),
})
/** The details specific to applicants with a marketingMode of buying */
export type ApplicantBuyingModel = {
  priceFrom?: /** The lower bound of the applicant's budget */ number | undefined
  priceTo?: /** The upper bound of the applicant's budget */ number | undefined
  decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  Array<string> | undefined
  reasonId?: /** The identifier of the applicant's buying reason */ string | undefined
  positionId?: /** The identifier of the applicant's selling position */ string | undefined
  tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  Array<string> | undefined
  mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */ string | undefined
  leaseRemaining?: ApplicantLeaseRemaining | undefined
}
