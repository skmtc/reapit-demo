/** Request body used to update an existing works order */
export type UpdateWorksOrderModel = {
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId?: /** The unique identifier of the property where the work is to be carried out */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | undefined
  typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined
  status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string | undefined
  description?: /** A free text description of the work required */ string | undefined
  reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | undefined
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  metadata?: /** App specific metadata to set against the works order */
  Record<string, Record<string, never>> | undefined
}
