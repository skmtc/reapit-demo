import { z } from 'zod'

/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel = z.object({
  /** The identifier of the associated to the break clause */ typeId: z.string().nullable().optional(),
  /** The date the break clause becomes/became active */ active: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant/mutual) */ appliesTo: z.string().nullable().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
      /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set a break clauses break from details */
  breakFrom: z
    .object({
      /** The date the break from clause can be used */ date: z.string().nullable().optional(),
      /** The minimum number of months until the break clause can be used */
      minTermMonths: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Request body used to set a break clauses notice required details */
  noticeRequired: z
    .object({
      /** The date a break clauses notice is required by */ date: z.string().nullable().optional(),
      /** The number of months the notice is required before the break clause */
      beforeBreakMonths: z.number().int().nullable().optional(),
    })
    .nullable()
    .optional(),
})
