import { z } from 'zod'
import {
  createOfficeAddressGeolocationModel,
  CreateOfficeAddressGeolocationModel,
} from '@/schemas/createOfficeAddressGeolocationModel.generated.tsx'

/** Request body used to set the address of a new office */
export const createOfficeAddressModel =
  /** Request body used to set the address of a new office */
  z.object({
    /** The building name */ buildingName: z.string().optional().nullable(),
    /** The building number */ buildingNumber: z.string().optional().nullable(),
    /** The first line of the address */ line1: z.string(),
    /** The second line of the address */ line2: z.string().optional().nullable(),
    /** The third line of the address */ line3: z.string().optional().nullable(),
    /** The fourth line of the address */ line4: z.string().optional().nullable(),
    /** The postcode */ postcode: z.string().optional().nullable(),
    /** The ISO-3166 country code that the address resides within */ countryId: z.string().optional().nullable(),
    geolocation: createOfficeAddressGeolocationModel.optional().nullable(),
  })
/** Request body used to set the address of a new office */
export type CreateOfficeAddressModel =
  /** Request body used to set the address of a new office */
  {
    buildingName?: /** The building name */ string | null | undefined
    buildingNumber?: /** The building number */ string | null | undefined
    line1: /** The first line of the address */ string
    line2?: /** The second line of the address */ string | null | undefined
    line3?: /** The third line of the address */ string | null | undefined
    line4?: /** The fourth line of the address */ string | null | undefined
    postcode?: /** The postcode */ string | null | undefined
    countryId?: /** The ISO-3166 country code that the address resides within */ string | null | undefined
    geolocation?: CreateOfficeAddressGeolocationModel | null | undefined
  }
