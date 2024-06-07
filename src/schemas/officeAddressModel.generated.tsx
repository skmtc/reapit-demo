import { z } from 'zod'
import { officeAddressGeolocationModel, OfficeAddressGeolocationModel } from '@/schemas/officeAddressGeolocationModel.generated.tsx'

/** Representation of the physical address of a building or premise */
export const officeAddressModel = /** Representation of the physical address of a building or premise */
z.object({buildingName: /** The building name */
z.string().optional(), buildingNumber: /** The building number */
z.string().optional(), line1: /** The first line of the address */
z.string().optional(), line2: /** The second line of the address */
z.string().optional(), line3: /** The third line of the address */
z.string().optional(), line4: /** The fourth line of the address */
z.string().optional(), postcode: /** The postcode */
z.string().optional(), countryId: /** The ISO-3166 country code that the address resides within */
z.string().optional(), geolocation: officeAddressGeolocationModel.optional()});
/** Representation of the physical address of a building or premise */
export type OfficeAddressModel = /** Representation of the physical address of a building or premise */
{buildingName?: /** The building name */
string | undefined, buildingNumber?: /** The building number */
string | undefined, line1?: /** The first line of the address */
string | undefined, line2?: /** The second line of the address */
string | undefined, line3?: /** The third line of the address */
string | undefined, line4?: /** The fourth line of the address */
string | undefined, postcode?: /** The postcode */
string | undefined, countryId?: /** The ISO-3166 country code that the address resides within */
string | undefined, geolocation?: OfficeAddressGeolocationModel | undefined};