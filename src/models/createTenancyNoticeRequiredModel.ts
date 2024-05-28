import { z } from 'zod'

/** Request body used to set a break clauses notice required details */
export const createTenancyNoticeRequiredModel = z.object({
  /** The date a break clauses notice is required by */ date: z.string().nullable().optional(),
  /** The number of months the notice is required before the break clause */
  beforeBreakMonths: z.number().int().nullable().optional(),
})
/** Request body used to set a break clauses notice required details */
export type CreateTenancyNoticeRequiredModel = {
  date?: /** The date a break clauses notice is required by */ string | undefined
  beforeBreakMonths?: /** The number of months the notice is required before the break clause */ number | undefined
}
