import { z } from 'zod'

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
  /** Request body used to set the geolocation coordinates of a new property's address */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */ latitude: z.number(),
      /** The longitude coordinate of the coordinate pair */ longitude: z.number(),
    })
    .nullable()
    .optional(),
})
