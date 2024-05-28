/** Representation of a property details related to deposit */
export type UpdatePropertyLettingsDepositModel = {
  type?: /** The type of deposit (weeks/months/fixed) */ string | undefined
  amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
  number | undefined
}
