import { z } from 'zod'
import { propertyGeolocationModel, PropertyGeolocationModel } from '@/schemas/propertyGeolocationModel.generated.tsx'

/** Representation of the physical address of a building or premise */
export const propertyAddressModel =
  /** Representation of the physical address of a building or premise */
  z.object({
    /** The building name */ buildingName: z.string().optional(),
    /** The building number */ buildingNumber: z.string().optional(),
    /** The first line of the address */ line1: z.string().optional(),
    /** The second line of the address */ line2: z.string().optional(),
    /** The third line of the address */ line3: z.string().optional(),
    /** The fourth line of the address */ line4: z.string().optional(),
    /** The postcode */ postcode: z.string().optional(),
    /** The ISO-3166 country code that the address resides within */ countryId: z.string().optional(),
    /** The local timezone for the address, based on the Geolocation coordinates */
    localTimeZone: z.string().optional(),
    geolocation: propertyGeolocationModel.optional(),
  })
/** Representation of the physical address of a building or premise */
export type PropertyAddressModel =
  /** Representation of the physical address of a building or premise */
  {
    buildingName?: /** The building name */ string | undefined
    buildingNumber?: /** The building number */ string | undefined
    line1?: /** The first line of the address */ string | undefined
    line2?: /** The second line of the address */ string | undefined
    line3?: /** The third line of the address */ string | undefined
    line4?: /** The fourth line of the address */ string | undefined
    postcode?: /** The postcode */ string | undefined
    countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
    localTimeZone?: /** The local timezone for the address, based on the Geolocation coordinates */ string | undefined
    geolocation?: PropertyGeolocationModel | undefined
  }
