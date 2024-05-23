import { z } from 'zod'

/** The details specific to applicants with a marketingMode of buying */
export const createApplicantBuyingModel = z.object({
  /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
  /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
  priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
  priceTo: z.number().int().nullable().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).nullable().optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().nullable().optional(),
  /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
  leaseRemaining: z
    .object({
      /** The minimum number of years that must remain on the lease of a leasehold property */
      min: z.number().int().nullable().optional(),
      /** The maximum number of years that must remain on the lease of a leasehold property */
      max: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
})
