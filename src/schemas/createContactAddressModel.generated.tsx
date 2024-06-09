import { z } from 'zod'

/** Request body used to set an address against a new contact */
export const createContactAddressModel =
  /** Request body used to set an address against a new contact */
  z.object({
    /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ type: z.string().optional(),
    /** The building name */ buildingName: z.string().optional(),
    /** The building number */ buildingNumber: z.string().optional(),
    /** The first line of the address */ line1: z.string().optional(),
    /** The second line of the address */ line2: z.string().optional(),
    /** The third line of the address */ line3: z.string().optional(),
    /** The fourth line of the address */ line4: z.string().optional(),
    /** The postcode */ postcode: z.string().optional(),
    /** The ISO-3166 country code that the address resides in */ countryId: z.string().optional(),
  })
/** Request body used to set an address against a new contact */
export type CreateContactAddressModel =
  /** Request body used to set an address against a new contact */
  {
    type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
    buildingName?: /** The building name */ string | undefined
    buildingNumber?: /** The building number */ string | undefined
    line1?: /** The first line of the address */ string | undefined
    line2?: /** The second line of the address */ string | undefined
    line3?: /** The third line of the address */ string | undefined
    line4?: /** The fourth line of the address */ string | undefined
    postcode?: /** The postcode */ string | undefined
    countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
  }
