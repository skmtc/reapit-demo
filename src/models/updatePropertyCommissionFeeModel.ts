/** Request body used to update the commission fee for a property */
export type UpdatePropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
