import { z } from 'zod'

/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel = /** Request body used to set the geolocation coordinates of a new address */
z.object({latitude: /** The latitude coordinate of the coordinate pair */
z.number().optional(), longitude: /** The longitude coordinate of the coordinate pair */
z.number().optional()});
/** Request body used to set the geolocation coordinates of a new address */
export type CreateOfficeAddressGeolocationModel = /** Request body used to set the geolocation coordinates of a new address */
{latitude?: /** The latitude coordinate of the coordinate pair */
number | undefined, longitude?: /** The longitude coordinate of the coordinate pair */
number | undefined};