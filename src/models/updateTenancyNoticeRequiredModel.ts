import { z } from 'zod'

/** Request body used to set a break clauses notice required details */
export const updateTenancyNoticeRequiredModel = z.object({
  /** The date a break clauses notice is required by */ date: z.string().nullable().optional(),
  /** The number of months the notice is required before the break clause */
  beforeBreakMonths: z.number().int().nullable().optional(),
})
