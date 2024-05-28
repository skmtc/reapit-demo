/** Request body used to update the source of an existing contact */
export type UpdateContactSourceModel = {
  id?: /** The unique identifier of the source of the contact */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
