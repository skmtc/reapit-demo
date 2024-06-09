import { z } from 'zod'

/** Request body used to set the geolocation coordinates of a new property's address */
export const createPropertyGeolocationModel =
  /** Request body used to set the geolocation coordinates of a new property's address */
  z.object({
    /** The latitude coordinate of the coordinate pair */ latitude: z.number(),
    /** The longitude coordinate of the coordinate pair */ longitude: z.number(),
  })
/** Request body used to set the geolocation coordinates of a new property's address */
export type CreatePropertyGeolocationModel =
  /** Request body used to set the geolocation coordinates of a new property's address */
  {
    latitude: /** The latitude coordinate of the coordinate pair */ number
    longitude: /** The longitude coordinate of the coordinate pair */ number
  }
