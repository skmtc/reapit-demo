import { z } from 'zod'

/** Representation of a property details related to deposit */
export const updatePropertyLettingsDepositModel = /** Representation of a property details related to deposit */
z.object({type: /** The type of deposit (weeks/months/fixed) */
z.string().optional(), amount: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
z.number().optional()});
/** Representation of a property details related to deposit */
export type UpdatePropertyLettingsDepositModel = /** Representation of a property details related to deposit */
{type?: /** The type of deposit (weeks/months/fixed) */
string | undefined, amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
number | undefined};