import { z } from 'zod'

/** Representation of a tenancy break clauses notice requirements */
export type TenancyBreakClauseNoticeRequiredModel =
  /** Representation of a tenancy break clauses notice requirements */
  {
    date?:
      | /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
      string
      | null
      | undefined
    beforeBreakMonths?:
      | /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
      number
      | null
      | undefined
  }
/** Representation of a tenancy break clauses notice requirements */
export const tenancyBreakClauseNoticeRequiredModel =
  /** Representation of a tenancy break clauses notice requirements */
  z.object({
    /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
    date: z.string().optional().nullable(),
    /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
    beforeBreakMonths: z.number().int().optional().nullable(),
  })
