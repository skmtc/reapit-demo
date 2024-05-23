import { z } from 'zod'

/** Representation of the physical address of a building or premise */
export const contactAddressModel = z.object({
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
