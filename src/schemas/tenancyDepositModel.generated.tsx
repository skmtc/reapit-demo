import { z } from 'zod'

/** A tenancy deposit model */
export type TenancyDepositModel =
  /** A tenancy deposit model */
  {
    heldBy?:
      | /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
      string
      | null
      | undefined
    period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | null | undefined
    type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | null | undefined
    sum?: /** The amount of deposit held */ number | null | undefined
  }
/** A tenancy deposit model */
export const tenancyDepositModel =
  /** A tenancy deposit model */
  z.object({
    /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
    heldBy: z.string().optional().nullable(),
    /** The number of weeks or months rent collected as the deposit on the tenancy */
    period: z.number().int().optional().nullable(),
    /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().optional().nullable(),
    /** The amount of deposit held */ sum: z.number().optional().nullable(),
  })
