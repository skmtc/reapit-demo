import { z } from 'zod'

/** Request body used to set an address against a new contact */
export const createContactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().nullable().optional(),
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
})
/** Request body used to set an address against a new contact */
export type CreateContactAddressModel = {
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
