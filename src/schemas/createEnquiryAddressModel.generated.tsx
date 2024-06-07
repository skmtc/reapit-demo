import { z } from 'zod'

/** Request body used to create a enquiries address */
export const createEnquiryAddressModel = /** Request body used to create a enquiries address */
z.object({buildingName: /** Sets the building name */
z.string().optional(), buildingNumber: /** Sets the building number */
z.string().optional(), line1: /** Sets the first line of the address */
z.string().optional(), line2: /** Sets the second line of the address */
z.string().optional(), line3: /** Sets the third line of the address */
z.string().optional(), line4: /** Sets the fourth line of the address */
z.string().optional(), postcode: /** Sets the postcode */
z.string().optional(), countryId: /** Sets the ISO-3166 country code that the address resides within */
z.string().optional()});
/** Request body used to create a enquiries address */
export type CreateEnquiryAddressModel = /** Request body used to create a enquiries address */
{buildingName?: /** Sets the building name */
string | undefined, buildingNumber?: /** Sets the building number */
string | undefined, line1?: /** Sets the first line of the address */
string | undefined, line2?: /** Sets the second line of the address */
string | undefined, line3?: /** Sets the third line of the address */
string | undefined, line4?: /** Sets the fourth line of the address */
string | undefined, postcode?: /** Sets the postcode */
string | undefined, countryId?: /** Sets the ISO-3166 country code that the address resides within */
string | undefined};