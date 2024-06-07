import { z } from 'zod'

/** Request body used to set a break clauses break from details */
export const createTenancyBreakFromModel = /** Request body used to set a break clauses break from details */
z.object({date: /** The date the break from clause can be used */
z.string().optional(), minTermMonths: /** The minimum number of months until the break clause can be used */
z.number().int().optional()});
/** Request body used to set a break clauses break from details */
export type CreateTenancyBreakFromModel = /** Request body used to set a break clauses break from details */
{date?: /** The date the break from clause can be used */
string | undefined, minTermMonths?: /** The minimum number of months until the break clause can be used */
number | undefined};