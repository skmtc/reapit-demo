import { z } from 'zod'

/** Representation of the geographical location of an address using coordinates */
export const officeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
/** Representation of the geographical location of an address using coordinates */
export type OfficeAddressGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}