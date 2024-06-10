import { z } from 'zod'

/** Request body to set the address of a new company */
export const createCompanyAddressModel =
  /** Request body to set the address of a new company */
  z.object({
    /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
    type: z.string().optional().nullable(),
    /** The building name */ buildingName: z.string().optional().nullable(),
    /** The building number */ buildingNumber: z.string().optional().nullable(),
    /** The first line of the address */ line1: z.string().optional().nullable(),
    /** The second line of the address */ line2: z.string().optional().nullable(),
    /** The third line of the address */ line3: z.string().optional().nullable(),
    /** The fourth line of the address */ line4: z.string().optional().nullable(),
    /** The postcode */ postcode: z.string().optional().nullable(),
    /** The ISO-3166 country code that the address resides within */ countryId: z.string().optional().nullable(),
  })
/** Request body to set the address of a new company */
export type CreateCompanyAddressModel =
  /** Request body to set the address of a new company */
  {
    type?:
      | /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      string
      | null
      | undefined
    buildingName?: /** The building name */ string | null | undefined
    buildingNumber?: /** The building number */ string | null | undefined
    line1?: /** The first line of the address */ string | null | undefined
    line2?: /** The second line of the address */ string | null | undefined
    line3?: /** The third line of the address */ string | null | undefined
    line4?: /** The fourth line of the address */ string | null | undefined
    postcode?: /** The postcode */ string | null | undefined
    countryId?: /** The ISO-3166 country code that the address resides within */ string | null | undefined
  }
