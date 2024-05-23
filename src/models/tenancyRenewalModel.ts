import { z } from 'zod'

/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the renewal negotiation */ id: z.string().nullable().optional(),
  /** The date and time when the renewal was created */ created: z.string().nullable().optional(),
  /** The date and time when the renewal was last modified */ modified: z.string().nullable().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The tenancies rent amount */ rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  /** Represents rent changes in a tenancies renewal */
  rentChange: z
    .object({
      /** The amount the rent has changed in the renewal */ amount: z.number().nullable().optional(),
      /** The percentage the rent has changed in the renewal */ percentage: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The unique identifier of the tenancy associated to the renewal */ tenancyId: z.string().nullable().optional(),
  /** Representation of the tenancy letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The fee amount */ amount: z.number().nullable().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Representation of the tenancy management fee */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The fee amount */ amount: z.number().nullable().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
