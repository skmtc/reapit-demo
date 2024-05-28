/** Request body used to update an existing offer */
export type UpdateOfferModel = {
  negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
  date?: /** The date when the offer was made */ string | undefined
  amount?: /** The monetary amount of the offer */ number | undefined
  status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  string | undefined
  inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
  exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
  conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
  string | undefined
  metadata?: /** App specific metadata to set against the offer */ Record<string, Record<string, never>> | undefined
}
