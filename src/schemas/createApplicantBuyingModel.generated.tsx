import { ApplicantLeaseRemaining, applicantLeaseRemaining } from '@/schemas/applicantLeaseRemaining.generated.tsx'
import { z } from 'zod'

/** The details specific to applicants with a marketingMode of buying */
export type CreateApplicantBuyingModel =
  /** The details specific to applicants with a marketingMode of buying */
  {
    reasonId?: /** The identifier of the applicant's buying reason */ string | null | undefined
    positionId?: /** The identifier of the applicant's selling position */ string | null | undefined
    priceFrom?:
      | /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
      number
      | null
      | undefined
    priceTo?:
      | /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
      number
      | null
      | undefined
    decoration?:
      | /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      Array<string>
      | null
      | undefined
    tenure?:
      | /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
      Array<string>
      | null
      | undefined
    mortgageExpiry?:
      | /** The date when the applicant's current mortgage expires/is due for renewal */
      string
      | null
      | undefined
    leaseRemaining?: ApplicantLeaseRemaining | null | undefined
  }
/** The details specific to applicants with a marketingMode of buying */
export const createApplicantBuyingModel =
  /** The details specific to applicants with a marketingMode of buying */
  z.object({
    /** The identifier of the applicant's buying reason */ reasonId: z.string().optional().nullable(),
    /** The identifier of the applicant's selling position */ positionId: z.string().optional().nullable(),
    /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
    priceFrom: z.number().int().optional().nullable(),
    /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
    priceTo: z.number().int().optional().nullable(),
    /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
    decoration: z.array(z.string()).optional().nullable(),
    /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
    tenure: z.array(z.string()).optional().nullable(),
    /** The date when the applicant's current mortgage expires/is due for renewal */
    mortgageExpiry: z.string().optional().nullable(),
    leaseRemaining: applicantLeaseRemaining.optional().nullable(),
  })
