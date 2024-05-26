import { z } from 'zod'

/** Request body used to create a new office */
export const createOfficeModel = z.object({
  /** The name of the office */ name: z.string(),
  /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
  /** The name of the office manager */ manager: z.string().nullable().optional(),
  /** Request body used to set the address of a new office */
  address: z.object({
    /** The building name */ buildingName: z.string().nullable().optional(),
    /** The building number */ buildingNumber: z.string().nullable().optional(),
    /** The first line of the address */ line1: z.string(),
    /** The second line of the address */ line2: z.string().nullable().optional(),
    /** The third line of the address */ line3: z.string().nullable().optional(),
    /** The fourth line of the address */ line4: z.string().nullable().optional(),
    /** The postcode */ postcode: z.string().nullable().optional(),
    /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
    /** Request body used to set the geolocation coordinates of a new address */
    geolocation: z
      .object({
        /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
        /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
      })
      .nullable()
      .optional(),
  }),
  /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
  /** The email address of the office */ email: z.string().nullable().optional(),
  /** App specific metadata to set against the office */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new office */
export type CreateOfficeModel = {
  name: /** The name of the office */ string
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  manager?: /** The name of the office manager */ string | undefined
  address: /** Request body used to set the address of a new office */
  {
    buildingName?: /** The building name */ string | undefined
    buildingNumber?: /** The building number */ string | undefined
    line1: /** The first line of the address */ string
    line2?: /** The second line of the address */ string | undefined
    line3?: /** The third line of the address */ string | undefined
    line4?: /** The fourth line of the address */ string | undefined
    postcode?: /** The postcode */ string | undefined
    countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
    geolocation?: /** Request body used to set the geolocation coordinates of a new address */
    | {
          latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
          longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
        }
      | undefined
  }
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
}
