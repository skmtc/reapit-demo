import { z } from 'zod'

/** Request body used to set the deposit of a new tenancy */
export const createTenancyDepositModel = /** Request body used to set the deposit of a new tenancy */
z.object({heldBy: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
z.string().optional(), period: /** The number of weeks or months rent collected as the deposit on the tenancy */
z.number().int().optional(), type: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
z.string().optional(), sum: /** The amount of deposit held */
z.number().optional()});
/** Request body used to set the deposit of a new tenancy */
export type CreateTenancyDepositModel = /** Request body used to set the deposit of a new tenancy */
{heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
string | undefined, period?: /** The number of weeks or months rent collected as the deposit on the tenancy */
number | undefined, type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
string | undefined, sum?: /** The amount of deposit held */
number | undefined};