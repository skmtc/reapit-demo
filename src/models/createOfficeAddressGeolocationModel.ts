import { z } from 'zod'

/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
/** Request body used to set the geolocation coordinates of a new address */
export type CreateOfficeAddressGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
