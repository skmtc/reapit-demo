import { z } from 'zod'

/** Representation of the geographical location of an address using coordinates */
export type OfficeAddressGeolocationModel =
  /** Representation of the geographical location of an address using coordinates */
  {
    latitude?: /** The latitude coordinate of the coordinate pair */ number | null | undefined
    longitude?: /** The longitude coordinate of the coordinate pair */ number | null | undefined
  }
/** Representation of the geographical location of an address using coordinates */
export const officeAddressGeolocationModel =
  /** Representation of the geographical location of an address using coordinates */
  z.object({
    /** The latitude coordinate of the coordinate pair */ latitude: z.number().optional().nullable(),
    /** The longitude coordinate of the coordinate pair */ longitude: z.number().optional().nullable(),
  })
