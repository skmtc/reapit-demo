import { z } from 'zod'
import {
  createPropertyGeolocationModel,
  CreatePropertyGeolocationModel,
} from '@/models/createPropertyGeolocationModel.ts'

/** Request body used to set the address of a new property */
export const createPropertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  geolocation: createPropertyGeolocationModel.nullable().optional(),
})
/** Request body used to set the address of a new property */
export type CreatePropertyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1: /** The first line of the address */ string
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: CreatePropertyGeolocationModel | undefined
}
