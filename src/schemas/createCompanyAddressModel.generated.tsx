import { z } from 'zod'

/** Request body to set the address of a new company */
export const createCompanyAddressModel =
  /** Request body to set the address of a new company */
  z.object({
    /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ type: z.string().optional(),
    /** The building name */ buildingName: z.string().optional(),
    /** The building number */ buildingNumber: z.string().optional(),
    /** The first line of the address */ line1: z.string().optional(),
    /** The second line of the address */ line2: z.string().optional(),
    /** The third line of the address */ line3: z.string().optional(),
    /** The fourth line of the address */ line4: z.string().optional(),
    /** The postcode */ postcode: z.string().optional(),
    /** The ISO-3166 country code that the address resides within */ countryId: z.string().optional(),
  })
/** Request body to set the address of a new company */
export type CreateCompanyAddressModel =
  /** Request body to set the address of a new company */
  {
    type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
    buildingName?: /** The building name */ string | undefined
    buildingNumber?: /** The building number */ string | undefined
    line1?: /** The first line of the address */ string | undefined
    line2?: /** The second line of the address */ string | undefined
    line3?: /** The third line of the address */ string | undefined
    line4?: /** The fourth line of the address */ string | undefined
    postcode?: /** The postcode */ string | undefined
    countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  }
