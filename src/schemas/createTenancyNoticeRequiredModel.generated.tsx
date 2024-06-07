import { z } from 'zod'

/** Request body used to set a break clauses notice required details */
export const createTenancyNoticeRequiredModel = /** Request body used to set a break clauses notice required details */
z.object({date: /** The date a break clauses notice is required by */
z.string().optional(), beforeBreakMonths: /** The number of months the notice is required before the break clause */
z.number().int().optional()});
/** Request body used to set a break clauses notice required details */
export type CreateTenancyNoticeRequiredModel = /** Request body used to set a break clauses notice required details */
{date?: /** The date a break clauses notice is required by */
string | undefined, beforeBreakMonths?: /** The number of months the notice is required before the break clause */
number | undefined};