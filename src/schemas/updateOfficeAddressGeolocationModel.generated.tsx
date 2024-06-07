import { z } from 'zod'

/** Request body used to set the geolocation coordinates of an existing address */
export const updateOfficeAddressGeolocationModel = /** Request body used to set the geolocation coordinates of an existing address */
z.object({latitude: /** The latitude coordinate of the coordinate pair */
z.number().optional(), longitude: /** The longitude coordinate of the coordinate pair */
z.number().optional()});
/** Request body used to set the geolocation coordinates of an existing address */
export type UpdateOfficeAddressGeolocationModel = /** Request body used to set the geolocation coordinates of an existing address */
{latitude?: /** The latitude coordinate of the coordinate pair */
number | undefined, longitude?: /** The longitude coordinate of the coordinate pair */
number | undefined};