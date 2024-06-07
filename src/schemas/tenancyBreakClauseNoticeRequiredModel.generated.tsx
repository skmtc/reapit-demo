import { z } from 'zod'

/** Representation of a tenancy break clauses notice requirements */
export const tenancyBreakClauseNoticeRequiredModel = /** Representation of a tenancy break clauses notice requirements */
z.object({date: /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
z.string().optional(), beforeBreakMonths: /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
z.number().int().optional()});
/** Representation of a tenancy break clauses notice requirements */
export type TenancyBreakClauseNoticeRequiredModel = /** Representation of a tenancy break clauses notice requirements */
{date?: /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
string | undefined, beforeBreakMonths?: /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
number | undefined};