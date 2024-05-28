import { z } from 'zod'

/** Represents rent changes in a tenancies renewal */
export const tenancyRentChangeModel = z.object({
  /** The amount the rent has changed in the renewal */ amount: z.number().nullable().optional(),
  /** The percentage the rent has changed in the renewal */ percentage: z.number().nullable().optional(),
})
/** Represents rent changes in a tenancies renewal */
export type TenancyRentChangeModel = {
  amount?: /** The amount the rent has changed in the renewal */ number | undefined
  percentage?: /** The percentage the rent has changed in the renewal */ number | undefined
}
