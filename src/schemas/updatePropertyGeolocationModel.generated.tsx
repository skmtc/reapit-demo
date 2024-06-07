import { z } from 'zod'

/** Request body used to update the geolocation coordinates of an existing property's address */
export const updatePropertyGeolocationModel = /** Request body used to update the geolocation coordinates of an existing property's address */
z.object({latitude: /** The latitude coordinate of the coordinate pair */
z.number().optional(), longitude: /** The longitude coordinate of the coordinate pair */
z.number().optional()});
/** Request body used to update the geolocation coordinates of an existing property's address */
export type UpdatePropertyGeolocationModel = /** Request body used to update the geolocation coordinates of an existing property's address */
{latitude?: /** The latitude coordinate of the coordinate pair */
number | undefined, longitude?: /** The longitude coordinate of the coordinate pair */
number | undefined};