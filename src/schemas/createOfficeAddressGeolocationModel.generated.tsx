import { z } from 'zod'

/** Request body used to set the geolocation coordinates of a new address */
export type CreateOfficeAddressGeolocationModel =
  /** Request body used to set the geolocation coordinates of a new address */
  {
    latitude?: /** The latitude coordinate of the coordinate pair */ number | null | undefined
    longitude?: /** The longitude coordinate of the coordinate pair */ number | null | undefined
  }
/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel =
  /** Request body used to set the geolocation coordinates of a new address */
  z.object({
    /** The latitude coordinate of the coordinate pair */ latitude: z.number().optional().nullable(),
    /** The longitude coordinate of the coordinate pair */ longitude: z.number().optional().nullable(),
  })
