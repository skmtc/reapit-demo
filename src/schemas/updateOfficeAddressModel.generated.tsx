import { z } from 'zod'
import { updateOfficeAddressGeolocationModel, UpdateOfficeAddressGeolocationModel } from '@/schemas/updateOfficeAddressGeolocationModel.generated.tsx'

/** Request body used to update the address of an existing office */
export const updateOfficeAddressModel = /** Request body used to update the address of an existing office */
z.object({buildingName: /** The building name */
z.string().optional(), buildingNumber: /** The building number */
z.string().optional(), line1: /** The first line of the address */
z.string().optional(), line2: /** The second line of the address */
z.string().optional(), line3: /** The third line of the address */
z.string().optional(), line4: /** The fourth line of the address */
z.string().optional(), postcode: /** The postcode */
z.string().optional(), countryId: /** The ISO-3166 country code that the address resides within */
z.string().optional(), geolocation: updateOfficeAddressGeolocationModel.optional()});
/** Request body used to update the address of an existing office */
export type UpdateOfficeAddressModel = /** Request body used to update the address of an existing office */
{buildingName?: /** The building name */
string | undefined, buildingNumber?: /** The building number */
string | undefined, line1?: /** The first line of the address */
string | undefined, line2?: /** The second line of the address */
string | undefined, line3?: /** The third line of the address */
string | undefined, line4?: /** The fourth line of the address */
string | undefined, postcode?: /** The postcode */
string | undefined, countryId?: /** The ISO-3166 country code that the address resides within */
string | undefined, geolocation?: UpdateOfficeAddressGeolocationModel | undefined};