/** Request body used to update an address on an existing contact */
export type UpdateContactAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined
}
