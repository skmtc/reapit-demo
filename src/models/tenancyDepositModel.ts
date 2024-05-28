import { z } from 'zod'

/** A tenancy deposit model */
export const tenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().nullable().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().nullable().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().nullable().optional(),
  /** The amount of deposit held */ sum: z.number().nullable().optional(),
})
/** A tenancy deposit model */
export type TenancyDepositModel = {
  heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  string | undefined
  period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
  type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
  sum?: /** The amount of deposit held */ number | undefined
}
