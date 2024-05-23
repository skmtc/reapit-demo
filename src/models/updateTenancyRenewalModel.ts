import { z } from 'zod'

/** Request body used to update a tenancy renewal negotiation */
export const updateTenancyRenewalModel = z.object({
  /** The proposed start date of the tenancy renewal */ startDate: z.string().nullable().optional(),
  /** The proposed end date of the tenancy renewal */ endDate: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who is managing this tenancy renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().nullable().optional(),
  /** Request body used to update a tenancy renewals letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (fixed/perentage) */ type: z.string().nullable().optional(),
      /** The letting fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().nullable().optional(),
      /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to update a tenancy renewals management fee */
  managementFee: z
    .object({
      /** The mangement fee type (fixed/perentage) */ type: z.string().nullable().optional(),
      /** The mangement fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().nullable().optional(),
      /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})
