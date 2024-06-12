import { PropertyAddressModel, propertyAddressModel } from '@/schemas/propertyAddressModel.generated.tsx'
import { PropertyRuralModel, propertyRuralModel } from '@/schemas/propertyRuralModel.generated.tsx'
import { PropertyExternalAreaModel, propertyExternalAreaModel } from '@/schemas/propertyExternalAreaModel.generated.tsx'
import { PropertyInternalAreaModel, propertyInternalAreaModel } from '@/schemas/propertyInternalAreaModel.generated.tsx'
import { PropertyEpcModel, propertyEpcModel } from '@/schemas/propertyEpcModel.generated.tsx'
import { PropertySellingModel, propertySellingModel } from '@/schemas/propertySellingModel.generated.tsx'
import { PropertyLettingModel, propertyLettingModel } from '@/schemas/propertyLettingModel.generated.tsx'
import { PropertyCommercialModel, propertyCommercialModel } from '@/schemas/propertyCommercialModel.generated.tsx'
import { PropertyRegionalModel, propertyRegionalModel } from '@/schemas/propertyRegionalModel.generated.tsx'
import { UnmappedAttributeModel, unmappedAttributeModel } from '@/schemas/unmappedAttributeModel.generated.tsx'
import { PropertyRoomModel, propertyRoomModel } from '@/schemas/propertyRoomModel.generated.tsx'
import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type PropertyModel =
  /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
  {
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the property */ string | null | undefined
    created?: /** The date and time when the property was created */ string | null | undefined
    modified?: /** The date and time when the property was last modified */ string | null | undefined
    lastCall?: /** The date the owner of the property was last called */ string | null | undefined
    nextCall?: /** The date the owner of the property is next due to be called */ string | null | undefined
    marketingMode?:
      | /** The marketing mode of the property (selling/letting/sellingAndLetting) */
      string
      | null
      | undefined
    currency?: /** The currency that applies to monetary amounts exposed in the model */ string | null | undefined
    alternateId?: /** An optional alternative identifier specified for this property */ string | null | undefined
    address?: PropertyAddressModel | null | undefined
    areaId?: /** The unique identifier of the area that the property resides in */ string | null | undefined
    strapline?: /** The strapline description containing a short summary about the property */ string | null | undefined
    description?: /** The brief description of the property */ string | null | undefined
    longDescription?: /** The long description of the property */ string | null | undefined
    localAuthorityCompanyId?: /** The property's local authority */ string | null | undefined
    localAuthorityCompanyName?: /** The name of the property's local authority */ string | null | undefined
    summary?:
      | /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
      string
      | null
      | undefined
    departmentId?:
      | /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
      string
      | null
      | undefined
    negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | null | undefined
    bedrooms?:
      | /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bedroomsMax?:
      | /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    receptions?:
      | /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    receptionsMax?:
      | /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bathrooms?:
      | /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bathroomsMax?:
      | /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    numberOfUnits?:
      | /** The number of units offered on the market. This is typically used when marketing development sites. */
      number
      | null
      | undefined
    parkingSpaces?:
      | /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    councilTax?:
      | /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
      string
      | null
      | undefined
    disabledPortalIds?:
      | /** A collection of identifiers of portals that the property should not be displayed on */
      Array<string>
      | null
      | undefined
    internetAdvertising?:
      | /** A flag denoting whether or not this property can be advertised on the internet */
      boolean
      | null
      | undefined
    isExternal?:
      | /** A flag denoting whether or not the property has been instructed by another estate agent */
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
    featuredImageUrl?: /** The properties featured image url */ string | null | undefined
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
    floorLevel?:
      | /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
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
    archivedOn?: /** The date and time the property was archived */ string | null | undefined
    fromArchive?: /** A flag determining whether or not the property is archived */ boolean | null | undefined
    rural?: PropertyRuralModel | null | undefined
    externalArea?: PropertyExternalAreaModel | null | undefined
    internalArea?: PropertyInternalAreaModel | null | undefined
    epc?: PropertyEpcModel | null | undefined
    selling?: PropertySellingModel | null | undefined
    letting?: PropertyLettingModel | null | undefined
    commercial?: PropertyCommercialModel | null | undefined
    regional?: PropertyRegionalModel | null | undefined
    type?:
      | /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    style?:
      | /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    situation?:
      | /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    parking?:
      | /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    age?:
      | /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    locality?:
      | /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    specialFeatures?:
      | /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    unmappedAttributes?:
      | /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<UnmappedAttributeModel>
      | null
      | undefined
    availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | null | undefined
    rooms?: /** Details of each room in the property */ Array<PropertyRoomModel> | null | undefined
    roomDetailsApproved?:
      | /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
      boolean
      | null
      | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    lostInstructionDate?: /** The date that this property became a lost instruction */ string | null | undefined
    lostInstructionNote?: /** The notes regarding the lost instruction */ string | null | undefined
    developmentSiteType?: /** The type of development */ string | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the property */
      Record<string, Record<string, never>>
      | null
      | undefined
    keywords?: /** The keywords associated with property */ Array<string> | null | undefined
    extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | null | undefined
    _eTag?:
      | /** The ETag for the current version of the property. Used for managing update concurrency */
      string
      | null
      | undefined
    _links?:
      | /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
      Record<string, LinkModel>
      | null
      | undefined
  }
/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export const propertyModel =
  /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
  z.object({
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the property */ id: z.string().optional().nullable(),
    /** The date and time when the property was created */ created: z.string().optional().nullable(),
    /** The date and time when the property was last modified */ modified: z.string().optional().nullable(),
    /** The date the owner of the property was last called */ lastCall: z.string().optional().nullable(),
    /** The date the owner of the property is next due to be called */ nextCall: z.string().optional().nullable(),
    /** The marketing mode of the property (selling/letting/sellingAndLetting) */
    marketingMode: z.string().optional().nullable(),
    /** The currency that applies to monetary amounts exposed in the model */
    currency: z.string().optional().nullable(),
    /** An optional alternative identifier specified for this property */ alternateId: z.string().optional().nullable(),
    address: propertyAddressModel.optional().nullable(),
    /** The unique identifier of the area that the property resides in */ areaId: z.string().optional().nullable(),
    /** The strapline description containing a short summary about the property */
    strapline: z.string().optional().nullable(),
    /** The brief description of the property */ description: z.string().optional().nullable(),
    /** The long description of the property */ longDescription: z.string().optional().nullable(),
    /** The property's local authority */ localAuthorityCompanyId: z.string().optional().nullable(),
    /** The name of the property's local authority */ localAuthorityCompanyName: z.string().optional().nullable(),
    /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    summary: z.string().optional().nullable(),
    /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    departmentId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string().optional().nullable(),
    /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bedrooms: z.number().int().optional().nullable(),
    /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bedroomsMax: z.number().int().optional().nullable(),
    /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    receptions: z.number().int().optional().nullable(),
    /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    receptionsMax: z.number().int().optional().nullable(),
    /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bathrooms: z.number().int().optional().nullable(),
    /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bathroomsMax: z.number().int().optional().nullable(),
    /** The number of units offered on the market. This is typically used when marketing development sites. */
    numberOfUnits: z.number().int().optional().nullable(),
    /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    parkingSpaces: z.number().int().optional().nullable(),
    /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    councilTax: z.string().optional().nullable(),
    /** A collection of identifiers of portals that the property should not be displayed on */
    disabledPortalIds: z.array(z.string()).optional().nullable(),
    /** A flag denoting whether or not this property can be advertised on the internet */
    internetAdvertising: z.boolean().optional().nullable(),
    /** A flag denoting whether or not the property has been instructed by another estate agent */
    isExternal: z.boolean().optional().nullable(),
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
    /** The status of the advertising board sited outside or near to the property */
    boardStatus: z.string().optional().nullable(),
    /** Any notes relevant to the advertising board sited outside or near to the property */
    boardNotes: z.string().optional().nullable(),
    /** The properties featured image url */ featuredImageUrl: z.string().optional().nullable(),
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
    /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    floorLevel: z.number().int().optional().nullable(),
    /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    internalFloors: z.number().int().optional().nullable(),
    /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    totalFloors: z.number().int().optional().nullable(),
    /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    boardUpdated: z.string().optional().nullable(),
    /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    valuation: z.string().optional().nullable(),
    /** The date and time the property was archived */ archivedOn: z.string().optional().nullable(),
    /** A flag determining whether or not the property is archived */ fromArchive: z.boolean().optional().nullable(),
    rural: propertyRuralModel.optional().nullable(),
    externalArea: propertyExternalAreaModel.optional().nullable(),
    internalArea: propertyInternalAreaModel.optional().nullable(),
    epc: propertyEpcModel.optional().nullable(),
    selling: propertySellingModel.optional().nullable(),
    letting: propertyLettingModel.optional().nullable(),
    commercial: propertyCommercialModel.optional().nullable(),
    regional: propertyRegionalModel.optional().nullable(),
    /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    type: z.array(z.string()).optional().nullable(),
    /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    style: z.array(z.string()).optional().nullable(),
    /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    situation: z.array(z.string()).optional().nullable(),
    /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    parking: z.array(z.string()).optional().nullable(),
    /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    age: z.array(z.string()).optional().nullable(),
    /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    locality: z.array(z.string()).optional().nullable(),
    /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    specialFeatures: z.array(z.string()).optional().nullable(),
    /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    unmappedAttributes: z.array(unmappedAttributeModel).optional().nullable(),
    /** Identifiers of any services connected at the property */
    availableServicesIds: z.array(z.string()).optional().nullable(),
    /** Details of each room in the property */ rooms: z.array(propertyRoomModel).optional().nullable(),
    /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    roomDetailsApproved: z.boolean().optional().nullable(),
    /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** The date that this property became a lost instruction */ lostInstructionDate: z.string().optional().nullable(),
    /** The notes regarding the lost instruction */ lostInstructionNote: z.string().optional().nullable(),
    /** The type of development */ developmentSiteType: z.string().optional().nullable(),
    /** App specific metadata that has been set against the property */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The keywords associated with property */ keywords: z.array(z.string()).optional().nullable(),
    /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the property. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
    /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
    _links: z.record(z.string(), linkModel).optional().nullable(),
  })
