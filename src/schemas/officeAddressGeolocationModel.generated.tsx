import { z } from 'zod'

/** Representation of the geographical location of an address using coordinates */
export const officeAddressGeolocationModel = /** Representation of the geographical location of an address using coordinates */
z.object({latitude: /** The latitude coordinate of the coordinate pair */
z.number().optional(), longitude: /** The longitude coordinate of the coordinate pair */
z.number().optional()});
/** Representation of the geographical location of an address using coordinates */
export type OfficeAddressGeolocationModel = /** Representation of the geographical location of an address using coordinates */
{latitude?: /** The latitude coordinate of the coordinate pair */
number | undefined, longitude?: /** The longitude coordinate of the coordinate pair */
number | undefined};