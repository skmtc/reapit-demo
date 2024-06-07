import { z } from 'zod'

/** Represents rent changes in a tenancies renewal */
export const tenancyRentChangeModel = /** Represents rent changes in a tenancies renewal */
z.object({amount: /** The amount the rent has changed in the renewal */
z.number().optional(), percentage: /** The percentage the rent has changed in the renewal */
z.number().optional()});
/** Represents rent changes in a tenancies renewal */
export type TenancyRentChangeModel = /** Represents rent changes in a tenancies renewal */
{amount?: /** The amount the rent has changed in the renewal */
number | undefined, percentage?: /** The percentage the rent has changed in the renewal */
number | undefined};