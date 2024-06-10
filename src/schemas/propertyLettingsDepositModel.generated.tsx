import { z } from 'zod'

/** Representation of a property details related to deposit */
export const propertyLettingsDepositModel =
  /** Representation of a property details related to deposit */
  z.object({
    /** The type of deposit (weeks/months/fixed) */ type: z.string().optional().nullable(),
    /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
    amount: z.number().optional().nullable(),
  })
/** Representation of a property details related to deposit */
export type PropertyLettingsDepositModel =
  /** Representation of a property details related to deposit */
  {
    type?: /** The type of deposit (weeks/months/fixed) */ string | null | undefined
    amount?:
      | /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
      number
      | null
      | undefined
  }
