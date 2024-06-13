import { z } from 'zod'

/** Request body used to set a break clauses notice required details */
export type CreateTenancyNoticeRequiredModel =
  /** Request body used to set a break clauses notice required details */
  {
    date?: /** The date a break clauses notice is required by */ string | null | undefined
    beforeBreakMonths?:
      | /** The number of months the notice is required before the break clause */
      number
      | null
      | undefined
  }
/** Request body used to set a break clauses notice required details */
export const createTenancyNoticeRequiredModel =
  /** Request body used to set a break clauses notice required details */
  z.object({
    /** The date a break clauses notice is required by */ date: z.string().optional().nullable(),
    /** The number of months the notice is required before the break clause */
    beforeBreakMonths: z.number().int().optional().nullable(),
  })
