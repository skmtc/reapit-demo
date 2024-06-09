import { z } from 'zod'
import {
  createPropertyAddressModel,
  CreatePropertyAddressModel,
} from '@/schemas/createPropertyAddressModel.generated.tsx'
import { createPropertyEpcModel, CreatePropertyEpcModel } from '@/schemas/createPropertyEpcModel.generated.tsx'
import {
  createPropertyExternalAreaModel,
  CreatePropertyExternalAreaModel,
} from '@/schemas/createPropertyExternalAreaModel.generated.tsx'
import {
  createPropertyInternalAreaModel,
  CreatePropertyInternalAreaModel,
} from '@/schemas/createPropertyInternalAreaModel.generated.tsx'
import { createPropertyRuralModel, CreatePropertyRuralModel } from '@/schemas/createPropertyRuralModel.generated.tsx'
import {
  createPropertySellingModel,
  CreatePropertySellingModel,
} from '@/schemas/createPropertySellingModel.generated.tsx'
import {
  createPropertyLettingModel,
  CreatePropertyLettingModel,
} from '@/schemas/createPropertyLettingModel.generated.tsx'
import {
  createPropertyRegionalModel,
  CreatePropertyRegionalModel,
} from '@/schemas/createPropertyRegionalModel.generated.tsx'
import { createPropertyRoomModel, CreatePropertyRoomModel } from '@/schemas/createPropertyRoomModel.generated.tsx'

/** Request body used to create a new property */
export const createPropertyModel =
  /** Request body used to create a new property */
  z.object({
    /** The date the owner of the property was last called */ lastCall: z.string().optional(),
    /** The date the owner of the property is next due to be called */ nextCall: z.string().optional(),
    /** The marketing mode of the property (selling/letting/sellingAndLetting) */ marketingMode: z.string(),
    /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    departmentId: z.string(),
    /** The strapline description containing a short summary about the property */ strapline: z.string().optional(),
    /** The brief description of the property */ description: z.string().optional(),
    /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    summary: z.string().optional(),
    /** An optional alternative identifier specified for this property */ alternateId: z.string().optional(),
    /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    specialFeatures: z.array(z.string()).optional(),
    address: createPropertyAddressModel,
    /** The total number of bedrooms in the property */ bedrooms: z.number().int().optional(),
    /** The maximum number of bedrooms in the property */ bedroomsMax: z.number().int().optional(),
    /** The number of units offered on the market. This is typically used when marketing development sites. */
    numberOfUnits: z.number().int().optional(),
    /** The total number of reception rooms in the property */ receptions: z.number().int().optional(),
    /** The maximum number of reception rooms in the property */ receptionsMax: z.number().int().optional(),
    /** The total number of bathrooms in the property */ bathrooms: z.number().int().optional(),
    /** The maximum number of bathrooms in the property */ bathroomsMax: z.number().int().optional(),
    /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    parkingSpaces: z.number().int().optional(),
    /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    councilTax: z.string().optional(),
    /** A flag denoting whether or not this property can be advertised on the internet */
    internetAdvertising: z.boolean().optional(),
    /** The arrangements regarding viewing the property */ viewingArrangements: z.string().optional(),
    /** The url of a video associated with this property, such as a virtual tour */ videoUrl: z.string().optional(),
    /** The caption for the video url associated with this property */ videoCaption: z.string().optional(),
    /** The url of a second video associated with this property, such as a virtual tour */
    video2Url: z.string().optional(),
    /** The caption for the second video url associated with this property */ video2Caption: z.string().optional(),
    /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    notes: z.string().optional(),
    /** The long description of the property */ longDescription: z.string().optional(),
    /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    floorLevel: z.number().int().optional(),
    /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    internalFloors: z.number().int().optional(),
    /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    totalFloors: z.number().int().optional(),
    /** The status of the advertising board sited outside or near to the property */ boardStatus: z.string().optional(),
    /** Any notes relevant to the advertising board sited outside or near to the property */
    boardNotes: z.string().optional(),
    /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    boardUpdated: z.string().optional(),
    /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    valuation: z.string().optional(),
    epc: createPropertyEpcModel.optional(),
    externalArea: createPropertyExternalAreaModel.optional(),
    internalArea: createPropertyInternalAreaModel.optional(),
    rural: createPropertyRuralModel.optional(),
    selling: createPropertySellingModel.optional(),
    letting: createPropertyLettingModel.optional(),
    regional: createPropertyRegionalModel.optional(),
    /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    type: z.array(z.string()).optional(),
    /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    style: z.array(z.string()).optional(),
    /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    situation: z.array(z.string()).optional(),
    /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    parking: z.array(z.string()).optional(),
    /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    age: z.array(z.string()).optional(),
    /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    locality: z.array(z.string()).optional(),
    /** Details of each room in the property */ rooms: z.array(createPropertyRoomModel).optional(),
    /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    roomDetailsApproved: z.boolean().optional(),
    /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string(),
    /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()),
    /** The unique identifier of the area that the property resides in */ areaId: z.string().optional(),
    /** The url to the property on an external website */ url: z.string().optional(),
    /** The caption to accompany the url to the property on an external website */ urlCaption: z.string().optional(),
    /** Any ground rent payment that applies to the property */ groundRent: z.number().optional(),
    /** Comments regarding the ground rent of the property */ groundRentComment: z.string().optional(),
    /** The date when the ground rent payable on the property should be reviewed */
    groundRentReviewDate: z.string().optional(),
    /** The annual percentage increase of the ground rent after being reviewed */
    groundRentIncrease: z.number().optional(),
    /** Any service charge payment that applies to the property */ serviceCharge: z.number().optional(),
    /** Comments regarding the service charge of the property */ serviceChargeComment: z.string().optional(),
    /** App specific metadata to set against the property */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new property */
export type CreatePropertyModel =
  /** Request body used to create a new property */
  {
    lastCall?: /** The date the owner of the property was last called */ string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
    strapline?: /** The strapline description containing a short summary about the property */ string | undefined
    description?: /** The brief description of the property */ string | undefined
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined
    alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    address: CreatePropertyAddressModel
    bedrooms?: /** The total number of bedrooms in the property */ number | undefined
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined
    receptions?: /** The total number of reception rooms in the property */ number | undefined
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined
    bathrooms?: /** The total number of bathrooms in the property */ number | undefined
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
    videoCaption?: /** The caption for the video url associated with this property */ string | undefined
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined
    video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined
    longDescription?: /** The long description of the property */ string | undefined
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined
    epc?: CreatePropertyEpcModel | undefined
    externalArea?: CreatePropertyExternalAreaModel | undefined
    internalArea?: CreatePropertyInternalAreaModel | undefined
    rural?: CreatePropertyRuralModel | undefined
    selling?: CreatePropertySellingModel | undefined
    letting?: CreatePropertyLettingModel | undefined
    regional?: CreatePropertyRegionalModel | undefined
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    rooms?: /** Details of each room in the property */ Array<CreatePropertyRoomModel> | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    negotiatorId: /** The unique identifier of the negotiator managing the property */ string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
    areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
    url?: /** The url to the property on an external website */ string | undefined
    urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
    groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined
    serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }
