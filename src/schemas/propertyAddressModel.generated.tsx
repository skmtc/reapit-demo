import { z } from 'zod'
import { propertyGeolocationModel, PropertyGeolocationModel } from '@/schemas/propertyGeolocationModel.generated.tsx'

/** Representation of the physical address of a building or premise */
export const propertyAddressModel = /** Representation of the physical address of a building or premise */
z.object({buildingName: /** The building name */
z.string().optional(), buildingNumber: /** The building number */
z.string().optional(), line1: /** The first line of the address */
z.string().optional(), line2: /** The second line of the address */
z.string().optional(), line3: /** The third line of the address */
z.string().optional(), line4: /** The fourth line of the address */
z.string().optional(), postcode: /** The postcode */
z.string().optional(), countryId: /** The ISO-3166 country code that the address resides within */
z.string().optional(), localTimeZone: /** The local timezone for the address, based on the Geolocation coordinates */
z.string().optional(), geolocation: propertyGeolocationModel.optional()});
/** Representation of the physical address of a building or premise */
export type PropertyAddressModel = /** Representation of the physical address of a building or premise */
{buildingName?: /** The building name */
string | undefined, buildingNumber?: /** The building number */
string | undefined, line1?: /** The first line of the address */
string | undefined, line2?: /** The second line of the address */
string | undefined, line3?: /** The third line of the address */
string | undefined, line4?: /** The fourth line of the address */
string | undefined, postcode?: /** The postcode */
string | undefined, countryId?: /** The ISO-3166 country code that the address resides within */
string | undefined, localTimeZone?: /** The local timezone for the address, based on the Geolocation coordinates */
string | undefined, geolocation?: PropertyGeolocationModel | undefined};