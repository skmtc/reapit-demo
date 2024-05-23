import { z } from 'zod'

/** Request body used to set the geolocation coordinates of an existing address */
export const updateOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
