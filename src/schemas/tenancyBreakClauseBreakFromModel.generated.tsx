import { z } from 'zod'

/** Representation of a tenancy break clauses break from details */
export type TenancyBreakClauseBreakFromModel =
  /** Representation of a tenancy break clauses break from details */
  {
    date?: /** The earliest date at which the tenant/landlord can end the tenancy agreement */ string | null | undefined
    minTermMonths?:
      | /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
      number
      | null
      | undefined
  }
/** Representation of a tenancy break clauses break from details */
export const tenancyBreakClauseBreakFromModel =
  /** Representation of a tenancy break clauses break from details */
  z.object({
    /** The earliest date at which the tenant/landlord can end the tenancy agreement */
    date: z.string().optional().nullable(),
    /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
    minTermMonths: z.number().int().optional().nullable(),
  })
