import { z } from 'zod'

/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
