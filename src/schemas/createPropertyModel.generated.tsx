import { z } from 'zod'
import { createPropertyAddressModel, CreatePropertyAddressModel } from '@/schemas/createPropertyAddressModel.generated.tsx'
import { createPropertyEpcModel, CreatePropertyEpcModel } from '@/schemas/createPropertyEpcModel.generated.tsx'
import { createPropertyExternalAreaModel, CreatePropertyExternalAreaModel } from '@/schemas/createPropertyExternalAreaModel.generated.tsx'
import { createPropertyInternalAreaModel, CreatePropertyInternalAreaModel } from '@/schemas/createPropertyInternalAreaModel.generated.tsx'
import { createPropertyRuralModel, CreatePropertyRuralModel } from '@/schemas/createPropertyRuralModel.generated.tsx'
import { createPropertySellingModel, CreatePropertySellingModel } from '@/schemas/createPropertySellingModel.generated.tsx'
import { createPropertyLettingModel, CreatePropertyLettingModel } from '@/schemas/createPropertyLettingModel.generated.tsx'
import { createPropertyRegionalModel, CreatePropertyRegionalModel } from '@/schemas/createPropertyRegionalModel.generated.tsx'
import { createPropertyRoomModel, CreatePropertyRoomModel } from '@/schemas/createPropertyRoomModel.generated.tsx'

/** Request body used to create a new property */
export const createPropertyModel = /** Request body used to create a new property */
z.object({lastCall: /** The date the owner of the property was last called */
z.string().optional(), nextCall: /** The date the owner of the property is next due to be called */
z.string().optional(), marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */
z.string(), departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
z.string(), strapline: /** The strapline description containing a short summary about the property */
z.string().optional(), description: /** The brief description of the property */
z.string().optional(), summary: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
z.string().optional(), alternateId: /** An optional alternative identifier specified for this property */
z.string().optional(), specialFeatures: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), address: createPropertyAddressModel, bedrooms: /** The total number of bedrooms in the property */
z.number().int().optional(), bedroomsMax: /** The maximum number of bedrooms in the property */
z.number().int().optional(), numberOfUnits: /** The number of units offered on the market. This is typically used when marketing development sites. */
z.number().int().optional(), receptions: /** The total number of reception rooms in the property */
z.number().int().optional(), receptionsMax: /** The maximum number of reception rooms in the property */
z.number().int().optional(), bathrooms: /** The total number of bathrooms in the property */
z.number().int().optional(), bathroomsMax: /** The maximum number of bathrooms in the property */
z.number().int().optional(), parkingSpaces: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.number().int().optional(), councilTax: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
z.string().optional(), internetAdvertising: /** A flag denoting whether or not this property can be advertised on the internet */
z.boolean().optional(), viewingArrangements: /** The arrangements regarding viewing the property */
z.string().optional(), videoUrl: /** The url of a video associated with this property, such as a virtual tour */
z.string().optional(), videoCaption: /** The caption for the video url associated with this property */
z.string().optional(), video2Url: /** The url of a second video associated with this property, such as a virtual tour */
z.string().optional(), video2Caption: /** The caption for the second video url associated with this property */
z.string().optional(), notes: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
z.string().optional(), longDescription: /** The long description of the property */
z.string().optional(), floorLevel: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), internalFloors: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), totalFloors: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), boardStatus: /** The status of the advertising board sited outside or near to the property */
z.string().optional(), boardNotes: /** Any notes relevant to the advertising board sited outside or near to the property */
z.string().optional(), boardUpdated: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
z.string().optional(), valuation: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
z.string().optional(), epc: createPropertyEpcModel.optional(), externalArea: createPropertyExternalAreaModel.optional(), internalArea: createPropertyInternalAreaModel.optional(), rural: createPropertyRuralModel.optional(), selling: createPropertySellingModel.optional(), letting: createPropertyLettingModel.optional(), regional: createPropertyRegionalModel.optional(), type: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), style: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), situation: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), parking: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), age: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), locality: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), rooms: /** Details of each room in the property */
z.array(createPropertyRoomModel).optional(), roomDetailsApproved: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
z.boolean().optional(), negotiatorId: /** The unique identifier of the negotiator managing the property */
z.string(), officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
z.array(z.string()), areaId: /** The unique identifier of the area that the property resides in */
z.string().optional(), url: /** The url to the property on an external website */
z.string().optional(), urlCaption: /** The caption to accompany the url to the property on an external website */
z.string().optional(), groundRent: /** Any ground rent payment that applies to the property */
z.number().optional(), groundRentComment: /** Comments regarding the ground rent of the property */
z.string().optional(), groundRentReviewDate: /** The date when the ground rent payable on the property should be reviewed */
z.string().optional(), groundRentIncrease: /** The annual percentage increase of the ground rent after being reviewed */
z.number().optional(), serviceCharge: /** Any service charge payment that applies to the property */
z.number().optional(), serviceChargeComment: /** Comments regarding the service charge of the property */
z.string().optional(), metadata: /** App specific metadata to set against the property */
z.record(z.string(), z.object({})).optional()});
/** Request body used to create a new property */
export type CreatePropertyModel = /** Request body used to create a new property */
{lastCall?: /** The date the owner of the property was last called */
string | undefined, nextCall?: /** The date the owner of the property is next due to be called */
string | undefined, marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */
string, departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
string, strapline?: /** The strapline description containing a short summary about the property */
string | undefined, description?: /** The brief description of the property */
string | undefined, summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
string | undefined, alternateId?: /** An optional alternative identifier specified for this property */
string | undefined, specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, address: CreatePropertyAddressModel, bedrooms?: /** The total number of bedrooms in the property */
number | undefined, bedroomsMax?: /** The maximum number of bedrooms in the property */
number | undefined, numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
number | undefined, receptions?: /** The total number of reception rooms in the property */
number | undefined, receptionsMax?: /** The maximum number of reception rooms in the property */
number | undefined, bathrooms?: /** The total number of bathrooms in the property */
number | undefined, bathroomsMax?: /** The maximum number of bathrooms in the property */
number | undefined, parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
number | undefined, councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
string | undefined, internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
boolean | undefined, viewingArrangements?: /** The arrangements regarding viewing the property */
string | undefined, videoUrl?: /** The url of a video associated with this property, such as a virtual tour */
string | undefined, videoCaption?: /** The caption for the video url associated with this property */
string | undefined, video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
string | undefined, video2Caption?: /** The caption for the second video url associated with this property */
string | undefined, notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
string | undefined, longDescription?: /** The long description of the property */
string | undefined, floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, boardStatus?: /** The status of the advertising board sited outside or near to the property */
string | undefined, boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
string | undefined, boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
string | undefined, valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
string | undefined, epc?: CreatePropertyEpcModel | undefined, externalArea?: CreatePropertyExternalAreaModel | undefined, internalArea?: CreatePropertyInternalAreaModel | undefined, rural?: CreatePropertyRuralModel | undefined, selling?: CreatePropertySellingModel | undefined, letting?: CreatePropertyLettingModel | undefined, regional?: CreatePropertyRegionalModel | undefined, type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, rooms?: /** Details of each room in the property */
Array<CreatePropertyRoomModel> | undefined, roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
boolean | undefined, negotiatorId: /** The unique identifier of the negotiator managing the property */
string, officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
Array<string>, areaId?: /** The unique identifier of the area that the property resides in */
string | undefined, url?: /** The url to the property on an external website */
string | undefined, urlCaption?: /** The caption to accompany the url to the property on an external website */
string | undefined, groundRent?: /** Any ground rent payment that applies to the property */
number | undefined, groundRentComment?: /** Comments regarding the ground rent of the property */
string | undefined, groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
string | undefined, groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
number | undefined, serviceCharge?: /** Any service charge payment that applies to the property */
number | undefined, serviceChargeComment?: /** Comments regarding the service charge of the property */
string | undefined, metadata?: /** App specific metadata to set against the property */
Record<string, Record<string, never>> | undefined};