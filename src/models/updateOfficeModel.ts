import { z } from 'zod'

/** Request body used to update an existing office */
export const updateOfficeModel = z.object({
  /** The name of the office */ name: z.string().nullable().optional(),
  /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
  /** The name of the office manager */ manager: z.string().nullable().optional(),
  /** Request body used to update the address of an existing office */
  address: z
    .object({
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
      /** Request body used to set the geolocation coordinates of an existing address */
      geolocation: z
        .object({
          /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
          /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
  /** The email address of the office */ email: z.string().nullable().optional(),
  /** App specific metadata to set against the office */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
