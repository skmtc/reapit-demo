import { z } from 'zod'

/** Representation of a property details related to deposit */
export const propertyLettingsDepositModel = z.object({
  /** The type of deposit (weeks/months/fixed) */ type: z.string().nullable().optional(),
  /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
  amount: z.number().nullable().optional(),
})
