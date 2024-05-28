/** Request body used to update the EPC statistics of an existing property */
export type UpdatePropertyEpcModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  boolean | undefined
  eer?: /** The current energy efficiency rating */ number | undefined
  eerPotential?: /** The potential energy efficiency rating */ number | undefined
  eir?: /** The current environmental impact rating */ number | undefined
  eirPotential?: /** The potential environmental impact rating */ number | undefined
  fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
  firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
}
