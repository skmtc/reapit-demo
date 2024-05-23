import { z } from 'zod'

/** Request body used to update the geolocation coordinates of an existing property's address */
export const updatePropertyGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
