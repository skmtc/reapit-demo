import {
  CreatePropertyAddressModel,
  createPropertyAddressModel,
} from '@/schemas/createPropertyAddressModel.generated.tsx'
import { CreatePropertyEpcModel, createPropertyEpcModel } from '@/schemas/createPropertyEpcModel.generated.tsx'
import {
  CreatePropertyExternalAreaModel,
  createPropertyExternalAreaModel,
} from '@/schemas/createPropertyExternalAreaModel.generated.tsx'
import {
  CreatePropertyInternalAreaModel,
  createPropertyInternalAreaModel,
} from '@/schemas/createPropertyInternalAreaModel.generated.tsx'
import { CreatePropertyRuralModel, createPropertyRuralModel } from '@/schemas/createPropertyRuralModel.generated.tsx'
import {
  CreatePropertySellingModel,
  createPropertySellingModel,
} from '@/schemas/createPropertySellingModel.generated.tsx'
import {
  CreatePropertyLettingModel,
  createPropertyLettingModel,
} from '@/schemas/createPropertyLettingModel.generated.tsx'
import {
  CreatePropertyRegionalModel,
  createPropertyRegionalModel,
} from '@/schemas/createPropertyRegionalModel.generated.tsx'
import { CreatePropertyRoomModel, createPropertyRoomModel } from '@/schemas/createPropertyRoomModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new property */
export type CreatePropertyModel =
  /** Request body used to create a new property */
  {
    lastCall?: /** The date the owner of the property was last called */ string | null | undefined
    nextCall?: /** The date the owner of the property is next due to be called */ string | null | undefined
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
    strapline?: /** The strapline description containing a short summary about the property */ string | null | undefined
    description?: /** The brief description of the property */ string | null | undefined
    summary?:
      | /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
      string
      | null
      | undefined
    alternateId?: /** An optional alternative identifier specified for this property */ string | null | undefined
    specialFeatures?:
      | /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    address: CreatePropertyAddressModel
    bedrooms?: /** The total number of bedrooms in the property */ number | null | undefined
    bedroomsMax?: /** The maximum number of bedrooms in the property */ number | null | undefined
    numberOfUnits?:
      | /** The number of units offered on the market. This is typically used when marketing development sites. */
      number
      | null
      | undefined
    receptions?: /** The total number of reception rooms in the property */ number | null | undefined
    receptionsMax?: /** The maximum number of reception rooms in the property */ number | null | undefined
    bathrooms?: /** The total number of bathrooms in the property */ number | null | undefined
    bathroomsMax?: /** The maximum number of bathrooms in the property */ number | null | undefined
    parkingSpaces?:
      | /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      number
      | null
      | undefined
    councilTax?:
      | /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
      string
      | null
      | undefined
    internetAdvertising?:
      | /** A flag denoting whether or not this property can be advertised on the internet */
      boolean
      | null
      | undefined
    viewingArrangements?: /** The arrangements regarding viewing the property */ string | null | undefined
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | null | undefined
    videoCaption?: /** The caption for the video url associated with this property */ string | null | undefined
    video2Url?:
      | /** The url of a second video associated with this property, such as a virtual tour */
      string
      | null
      | undefined
    video2Caption?: /** The caption for the second video url associated with this property */ string | null | undefined
    notes?:
      | /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
      string
      | null
      | undefined
    longDescription?: /** The long description of the property */ string | null | undefined
    floorLevel?:
      | /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    internalFloors?:
      | /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    totalFloors?:
      | /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    boardStatus?:
      | /** The status of the advertising board sited outside or near to the property */
      string
      | null
      | undefined
    boardNotes?:
      | /** Any notes relevant to the advertising board sited outside or near to the property */
      string
      | null
      | undefined
    boardUpdated?:
      | /** The date the advertising board was last updated (or should be updated when the date is in the future) */
      string
      | null
      | undefined
    valuation?:
      | /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
      string
      | null
      | undefined
    epc?: CreatePropertyEpcModel | null | undefined
    externalArea?: CreatePropertyExternalAreaModel | null | undefined
    internalArea?: CreatePropertyInternalAreaModel | null | undefined
    rural?: CreatePropertyRuralModel | null | undefined
    selling?: CreatePropertySellingModel | null | undefined
    letting?: CreatePropertyLettingModel | null | undefined
    regional?: CreatePropertyRegionalModel | null | undefined
    type?:
      | /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    style?:
      | /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    situation?:
      | /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    parking?:
      | /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    age?:
      | /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    locality?:
      | /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    rooms?: /** Details of each room in the property */ Array<CreatePropertyRoomModel> | null | undefined
    roomDetailsApproved?:
      | /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
      boolean
      | null
      | undefined
    negotiatorId: /** The unique identifier of the negotiator managing the property */ string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
    areaId?: /** The unique identifier of the area that the property resides in */ string | null | undefined
    url?: /** The url to the property on an external website */ string | null | undefined
    urlCaption?:
      | /** The caption to accompany the url to the property on an external website */
      string
      | null
      | undefined
    groundRent?: /** Any ground rent payment that applies to the property */ number | null | undefined
    groundRentComment?: /** Comments regarding the ground rent of the property */ string | null | undefined
    groundRentReviewDate?:
      | /** The date when the ground rent payable on the property should be reviewed */
      string
      | null
      | undefined
    groundRentIncrease?:
      | /** The annual percentage increase of the ground rent after being reviewed */
      number
      | null
      | undefined
    serviceCharge?: /** Any service charge payment that applies to the property */ number | null | undefined
    serviceChargeComment?: /** Comments regarding the service charge of the property */ string | null | undefined
    metadata?:
      | /** App specific metadata to set against the property */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createPropertyModel =
  /** Request body used to create a new property */
  z.object({
    /** The date the owner of the property was last called */ lastCall: z.string().optional().nullable(),
    /** The date the owner of the property is next due to be called */ nextCall: z.string().optional().nullable(),
    /** The marketing mode of the property (selling/letting/sellingAndLetting) */ marketingMode: z.string(),
    /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    departmentId: z.string(),
    /** The strapline description containing a short summary about the property */
    strapline: z.string().optional().nullable(),
    /** The brief description of the property */ description: z.string().optional().nullable(),
    /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    summary: z.string().optional().nullable(),
    /** An optional alternative identifier specified for this property */ alternateId: z.string().optional().nullable(),
    /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    specialFeatures: z.array(z.string()).optional().nullable(),
    address: createPropertyAddressModel,
    /** The total number of bedrooms in the property */ bedrooms: z.number().int().optional().nullable(),
    /** The maximum number of bedrooms in the property */ bedroomsMax: z.number().int().optional().nullable(),
    /** The number of units offered on the market. This is typically used when marketing development sites. */
    numberOfUnits: z.number().int().optional().nullable(),
    /** The total number of reception rooms in the property */ receptions: z.number().int().optional().nullable(),
    /** The maximum number of reception rooms in the property */ receptionsMax: z.number().int().optional().nullable(),
    /** The total number of bathrooms in the property */ bathrooms: z.number().int().optional().nullable(),
    /** The maximum number of bathrooms in the property */ bathroomsMax: z.number().int().optional().nullable(),
    /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    parkingSpaces: z.number().int().optional().nullable(),
    /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    councilTax: z.string().optional().nullable(),
    /** A flag denoting whether or not this property can be advertised on the internet */
    internetAdvertising: z.boolean().optional().nullable(),
    /** The arrangements regarding viewing the property */ viewingArrangements: z.string().optional().nullable(),
    /** The url of a video associated with this property, such as a virtual tour */
    videoUrl: z.string().optional().nullable(),
    /** The caption for the video url associated with this property */ videoCaption: z.string().optional().nullable(),
    /** The url of a second video associated with this property, such as a virtual tour */
    video2Url: z.string().optional().nullable(),
    /** The caption for the second video url associated with this property */
    video2Caption: z.string().optional().nullable(),
    /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    notes: z.string().optional().nullable(),
    /** The long description of the property */ longDescription: z.string().optional().nullable(),
    /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    floorLevel: z.number().int().optional().nullable(),
    /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    internalFloors: z.number().int().optional().nullable(),
    /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    totalFloors: z.number().int().optional().nullable(),
    /** The status of the advertising board sited outside or near to the property */
    boardStatus: z.string().optional().nullable(),
    /** Any notes relevant to the advertising board sited outside or near to the property */
    boardNotes: z.string().optional().nullable(),
    /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    boardUpdated: z.string().optional().nullable(),
    /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    valuation: z.string().optional().nullable(),
    epc: createPropertyEpcModel.optional().nullable(),
    externalArea: createPropertyExternalAreaModel.optional().nullable(),
    internalArea: createPropertyInternalAreaModel.optional().nullable(),
    rural: createPropertyRuralModel.optional().nullable(),
    selling: createPropertySellingModel.optional().nullable(),
    letting: createPropertyLettingModel.optional().nullable(),
    regional: createPropertyRegionalModel.optional().nullable(),
    /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    type: z.array(z.string()).optional().nullable(),
    /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    style: z.array(z.string()).optional().nullable(),
    /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    situation: z.array(z.string()).optional().nullable(),
    /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    parking: z.array(z.string()).optional().nullable(),
    /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    age: z.array(z.string()).optional().nullable(),
    /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    locality: z.array(z.string()).optional().nullable(),
    /** Details of each room in the property */ rooms: z.array(createPropertyRoomModel).optional().nullable(),
    /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    roomDetailsApproved: z.boolean().optional().nullable(),
    /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string(),
    /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()),
    /** The unique identifier of the area that the property resides in */ areaId: z.string().optional().nullable(),
    /** The url to the property on an external website */ url: z.string().optional().nullable(),
    /** The caption to accompany the url to the property on an external website */
    urlCaption: z.string().optional().nullable(),
    /** Any ground rent payment that applies to the property */ groundRent: z.number().optional().nullable(),
    /** Comments regarding the ground rent of the property */ groundRentComment: z.string().optional().nullable(),
    /** The date when the ground rent payable on the property should be reviewed */
    groundRentReviewDate: z.string().optional().nullable(),
    /** The annual percentage increase of the ground rent after being reviewed */
    groundRentIncrease: z.number().optional().nullable(),
    /** Any service charge payment that applies to the property */ serviceCharge: z.number().optional().nullable(),
    /** Comments regarding the service charge of the property */ serviceChargeComment: z.string().optional().nullable(),
    /** App specific metadata to set against the property */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
