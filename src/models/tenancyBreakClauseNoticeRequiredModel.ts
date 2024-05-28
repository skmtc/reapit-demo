import { z } from 'zod'

/** Representation of a tenancy break clauses notice requirements */
export const tenancyBreakClauseNoticeRequiredModel = z.object({
  /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
  date: z.string().nullable().optional(),
  /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
  beforeBreakMonths: z.number().int().nullable().optional(),
})
/** Representation of a tenancy break clauses notice requirements */
export type TenancyBreakClauseNoticeRequiredModel = {
  date?: /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
  string | undefined
  beforeBreakMonths?: /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
  number | undefined
}
