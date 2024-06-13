import { z } from 'zod'

/** Represents rent changes in a tenancies renewal */
export type TenancyRentChangeModel =
  /** Represents rent changes in a tenancies renewal */
  {
    amount?: /** The amount the rent has changed in the renewal */ number | null | undefined
    percentage?: /** The percentage the rent has changed in the renewal */ number | null | undefined
  }
/** Represents rent changes in a tenancies renewal */
export const tenancyRentChangeModel =
  /** Represents rent changes in a tenancies renewal */
  z.object({
    /** The amount the rent has changed in the renewal */ amount: z.number().optional().nullable(),
    /** The percentage the rent has changed in the renewal */ percentage: z.number().optional().nullable(),
  })
