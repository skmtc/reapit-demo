import { UpdatePropertyGeolocationModel } from '@/models/updatePropertyGeolocationModel.ts'

/** Request body used to update the address of an existing property */
export type UpdatePropertyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: UpdatePropertyGeolocationModel | undefined
}
