import { z } from 'zod'
import { applicantLeaseRemaining, ApplicantLeaseRemaining } from '@/schemas/applicantLeaseRemaining.generated.tsx'

/** The details specific to applicants with a marketingMode of buying */
export const createApplicantBuyingModel =
  /** The details specific to applicants with a marketingMode of buying */
  z.object({
    /** The identifier of the applicant's buying reason */ reasonId: z.string().optional(),
    /** The identifier of the applicant's selling position */ positionId: z.string().optional(),
    /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
    priceFrom: z.number().int().optional(),
    /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
    priceTo: z.number().int().optional(),
    /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
    decoration: z.array(z.string()).optional(),
    /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
    tenure: z.array(z.string()).optional(),
    /** The date when the applicant's current mortgage expires/is due for renewal */
    mortgageExpiry: z.string().optional(),
    leaseRemaining: applicantLeaseRemaining.optional(),
  })
/** The details specific to applicants with a marketingMode of buying */
export type CreateApplicantBuyingModel =
  /** The details specific to applicants with a marketingMode of buying */
  {
    reasonId?: /** The identifier of the applicant's buying reason */ string | undefined
    positionId?: /** The identifier of the applicant's selling position */ string | undefined
    priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
    number | undefined
    priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
    number | undefined
    decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
    Array<string> | undefined
    tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
    Array<string> | undefined
    mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */ string | undefined
    leaseRemaining?: ApplicantLeaseRemaining | undefined
  }
