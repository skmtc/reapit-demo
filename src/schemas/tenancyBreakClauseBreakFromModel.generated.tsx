import { z } from 'zod'

/** Representation of a tenancy break clauses break from details */
export const tenancyBreakClauseBreakFromModel = /** Representation of a tenancy break clauses break from details */
z.object({date: /** The earliest date at which the tenant/landlord can end the tenancy agreement */
z.string().optional(), minTermMonths: /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
z.number().int().optional()});
/** Representation of a tenancy break clauses break from details */
export type TenancyBreakClauseBreakFromModel = /** Representation of a tenancy break clauses break from details */
{date?: /** The earliest date at which the tenant/landlord can end the tenancy agreement */
string | undefined, minTermMonths?: /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
number | undefined};