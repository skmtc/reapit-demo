import { z } from 'zod'
import { createPropertyGeolocationModel, CreatePropertyGeolocationModel } from '@/schemas/createPropertyGeolocationModel.generated.tsx'

/** Request body used to set the address of a new property */
export const createPropertyAddressModel = /** Request body used to set the address of a new property */
z.object({buildingName: /** The building name */
z.string().optional(), buildingNumber: /** The building number */
z.string().optional(), line1: /** The first line of the address */
z.string(), line2: /** The second line of the address */
z.string().optional(), line3: /** The third line of the address */
z.string().optional(), line4: /** The fourth line of the address */
z.string().optional(), postcode: /** The postcode */
z.string().optional(), countryId: /** The ISO-3166 country code that the address resides within */
z.string().optional(), geolocation: createPropertyGeolocationModel.optional()});
/** Request body used to set the address of a new property */
export type CreatePropertyAddressModel = /** Request body used to set the address of a new property */
{buildingName?: /** The building name */
string | undefined, buildingNumber?: /** The building number */
string | undefined, line1: /** The first line of the address */
string, line2?: /** The second line of the address */
string | undefined, line3?: /** The third line of the address */
string | undefined, line4?: /** The fourth line of the address */
string | undefined, postcode?: /** The postcode */
string | undefined, countryId?: /** The ISO-3166 country code that the address resides within */
string | undefined, geolocation?: CreatePropertyGeolocationModel | undefined};