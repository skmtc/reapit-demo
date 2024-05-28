import { z } from 'zod'

/** Request body used to set a break clauses break from details */
export const createTenancyBreakFromModel = z.object({
  /** The date the break from clause can be used */ date: z.string().nullable().optional(),
  /** The minimum number of months until the break clause can be used */
  minTermMonths: z.number().int().nullable().optional(),
})
/** Request body used to set a break clauses break from details */
export type CreateTenancyBreakFromModel = {
  date?: /** The date the break from clause can be used */ string | undefined
  minTermMonths?: /** The minimum number of months until the break clause can be used */ number | undefined
}
