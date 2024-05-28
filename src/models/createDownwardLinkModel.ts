/** Request body for associating this offer to another one below it in the chain */
export type CreateDownwardLinkModel = {
  offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  string | undefined
  propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
  string | undefined
  agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  string | undefined
  buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
  string | undefined
  buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
  string | undefined
}
