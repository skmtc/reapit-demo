import { z } from 'zod'

/** Request body to set the address of an existing company */
export const updateCompanyAddressModel = /** Request body to set the address of an existing company */
z.object({type: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
z.string().optional(), buildingName: /** The building name */
z.string().optional(), buildingNumber: /** The building number */
z.string().optional(), line1: /** The first line of the address */
z.string().optional(), line2: /** The second line of the address */
z.string().optional(), line3: /** The third line of the address */
z.string().optional(), line4: /** The fourth line of the address */
z.string().optional(), postcode: /** The postcode */
z.string().optional(), countryId: /** The ISO-3166 country code that the address resides within */
z.string().optional()});
/** Request body to set the address of an existing company */
export type UpdateCompanyAddressModel = /** Request body to set the address of an existing company */
{type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
string | undefined, buildingName?: /** The building name */
string | undefined, buildingNumber?: /** The building number */
string | undefined, line1?: /** The first line of the address */
string | undefined, line2?: /** The second line of the address */
string | undefined, line3?: /** The third line of the address */
string | undefined, line4?: /** The fourth line of the address */
string | undefined, postcode?: /** The postcode */
string | undefined, countryId?: /** The ISO-3166 country code that the address resides within */
string | undefined};