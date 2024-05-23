import { z } from 'zod'

/** Representation of a tenancy break clauses break from details */
export const tenancyBreakClauseBreakFromModel = z.object({
  /** The earliest date at which the tenant/landlord can end the tenancy agreement */
  date: z.string().nullable().optional(),
  /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
  minTermMonths: z.number().int().nullable().optional(),
})
