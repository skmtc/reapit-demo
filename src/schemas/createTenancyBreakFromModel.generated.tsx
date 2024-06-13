import { z } from 'zod'

/** Request body used to set a break clauses break from details */
export type CreateTenancyBreakFromModel =
  /** Request body used to set a break clauses break from details */
  {
    date?: /** The date the break from clause can be used */ string | null | undefined
    minTermMonths?: /** The minimum number of months until the break clause can be used */ number | null | undefined
  }
/** Request body used to set a break clauses break from details */
export const createTenancyBreakFromModel =
  /** Request body used to set a break clauses break from details */
  z.object({
    /** The date the break from clause can be used */ date: z.string().optional().nullable(),
    /** The minimum number of months until the break clause can be used */
    minTermMonths: z.number().int().optional().nullable(),
  })
