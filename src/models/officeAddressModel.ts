import { z } from 'zod'
import { officeAddressGeolocationModel, OfficeAddressGeolocationModel } from '@/models/officeAddressGeolocationModel.ts'

/** Representation of the physical address of a building or premise */
export const officeAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  geolocation: officeAddressGeolocationModel.nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export type OfficeAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: OfficeAddressGeolocationModel | undefined
}
