import { z } from 'zod'

/** Request body used to create a enquiries address */
export const createEnquiryAddressModel =
  /** Request body used to create a enquiries address */
  z.object({
    /** Sets the building name */ buildingName: z.string().optional(),
    /** Sets the building number */ buildingNumber: z.string().optional(),
    /** Sets the first line of the address */ line1: z.string().optional(),
    /** Sets the second line of the address */ line2: z.string().optional(),
    /** Sets the third line of the address */ line3: z.string().optional(),
    /** Sets the fourth line of the address */ line4: z.string().optional(),
    /** Sets the postcode */ postcode: z.string().optional(),
    /** Sets the ISO-3166 country code that the address resides within */ countryId: z.string().optional(),
  })
/** Request body used to create a enquiries address */
export type CreateEnquiryAddressModel =
  /** Request body used to create a enquiries address */
  {
    buildingName?: /** Sets the building name */ string | undefined
    buildingNumber?: /** Sets the building number */ string | undefined
    line1?: /** Sets the first line of the address */ string | undefined
    line2?: /** Sets the second line of the address */ string | undefined
    line3?: /** Sets the third line of the address */ string | undefined
    line4?: /** Sets the fourth line of the address */ string | undefined
    postcode?: /** Sets the postcode */ string | undefined
    countryId?: /** Sets the ISO-3166 country code that the address resides within */ string | undefined
  }
