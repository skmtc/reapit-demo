import { z } from 'zod'

/** Request body used to create a enquiries address */
export const createEnquiryAddressModel = z.object({
  /** Sets the building name */ buildingName: z.string().nullable().optional(),
  /** Sets the building number */ buildingNumber: z.string().nullable().optional(),
  /** Sets the first line of the address */ line1: z.string().nullable().optional(),
  /** Sets the second line of the address */ line2: z.string().nullable().optional(),
  /** Sets the third line of the address */ line3: z.string().nullable().optional(),
  /** Sets the fourth line of the address */ line4: z.string().nullable().optional(),
  /** Sets the postcode */ postcode: z.string().nullable().optional(),
  /** Sets the ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
