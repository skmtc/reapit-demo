import { z } from 'zod'
import { propertyAddressModel, PropertyAddressModel } from '@/models/propertyAddressModel.ts'
import { propertyRuralModel, PropertyRuralModel } from '@/models/propertyRuralModel.ts'
import { propertyExternalAreaModel, PropertyExternalAreaModel } from '@/models/propertyExternalAreaModel.ts'
import { propertyInternalAreaModel, PropertyInternalAreaModel } from '@/models/propertyInternalAreaModel.ts'
import { propertyEpcModel, PropertyEpcModel } from '@/models/propertyEpcModel.ts'
import { propertySellingModel, PropertySellingModel } from '@/models/propertySellingModel.ts'
import { propertyLettingModel, PropertyLettingModel } from '@/models/propertyLettingModel.ts'
import { propertyCommercialModel, PropertyCommercialModel } from '@/models/propertyCommercialModel.ts'
import { propertyRegionalModel, PropertyRegionalModel } from '@/models/propertyRegionalModel.ts'
import { unmappedAttributeModel, UnmappedAttributeModel } from '@/models/unmappedAttributeModel.ts'
import { propertyRoomModel, PropertyRoomModel } from '@/models/propertyRoomModel.ts'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export const propertyModel = z.object({
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the property */ id: z.string().nullable().optional(),
  /** The date and time when the property was created */ created: z.string().nullable().optional(),
  /** The date and time when the property was last modified */ modified: z.string().nullable().optional(),
  /** The date the owner of the property was last called */ lastCall: z.string().nullable().optional(),
  /** The date the owner of the property is next due to be called */ nextCall: z.string().nullable().optional(),
  /** The marketing mode of the property (selling/letting/sellingAndLetting) */
  marketingMode: z.string().nullable().optional(),
  /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().nullable().optional(),
  /** An optional alternative identifier specified for this property */ alternateId: z.string().nullable().optional(),
  address: propertyAddressModel.nullable().optional(),
  /** The unique identifier of the area that the property resides in */ areaId: z.string().nullable().optional(),
  /** The strapline description containing a short summary about the property */
  strapline: z.string().nullable().optional(),
  /** The brief description of the property */ description: z.string().nullable().optional(),
  /** The long description of the property */ longDescription: z.string().nullable().optional(),
  /** The property's local authority */ localAuthorityCompanyId: z.string().nullable().optional(),
  /** The name of the property's local authority */ localAuthorityCompanyName: z.string().nullable().optional(),
  /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  summary: z.string().nullable().optional(),
  /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string().nullable().optional(),
  /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedrooms: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().nullable().optional(),
  /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptions: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().nullable().optional(),
  /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathrooms: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().nullable().optional(),
  /** The number of units offered on the market. This is typically used when marketing development sites. */
  numberOfUnits: z.number().int().nullable().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpaces: z.number().int().nullable().optional(),
  /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
  councilTax: z.string().nullable().optional(),
  /** A collection of identifiers of portals that the property should not be displayed on */
  disabledPortalIds: z.array(z.string()).nullable().optional(),
  /** A flag denoting whether or not this property can be advertised on the internet */
  internetAdvertising: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the property has been instructed by another estate agent */
  isExternal: z.boolean().nullable().optional(),
  /** The arrangements regarding viewing the property */ viewingArrangements: z.string().nullable().optional(),
  /** The url of a video associated with this property, such as a virtual tour */
  videoUrl: z.string().nullable().optional(),
  /** The caption for the video url associated with this property */ videoCaption: z.string().nullable().optional(),
  /** The url of a second video associated with this property, such as a virtual tour */
  video2Url: z.string().nullable().optional(),
  /** The caption for the second video url associated with this property */
  video2Caption: z.string().nullable().optional(),
  /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  notes: z.string().nullable().optional(),
  /** The status of the advertising board sited outside or near to the property */
  boardStatus: z.string().nullable().optional(),
  /** Any notes relevant to the advertising board sited outside or near to the property */
  boardNotes: z.string().nullable().optional(),
  /** The properties featured image url */ featuredImageUrl: z.string().nullable().optional(),
  /** The url to the property on an external website */ url: z.string().nullable().optional(),
  /** The caption to accompany the url to the property on an external website */
  urlCaption: z.string().nullable().optional(),
  /** Any ground rent payment that applies to the property */ groundRent: z.number().nullable().optional(),
  /** Comments regarding the ground rent of the property */ groundRentComment: z.string().nullable().optional(),
  /** The date when the ground rent payable on the property should be reviewed */
  groundRentReviewDate: z.string().nullable().optional(),
  /** The annual percentage increase of the ground rent after being reviewed */
  groundRentIncrease: z.number().nullable().optional(),
  /** Any service charge payment that applies to the property */ serviceCharge: z.number().nullable().optional(),
  /** Comments regarding the service charge of the property */ serviceChargeComment: z.string().nullable().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  floorLevel: z.number().int().nullable().optional(),
  /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  internalFloors: z.number().int().nullable().optional(),
  /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  totalFloors: z.number().int().nullable().optional(),
  /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  boardUpdated: z.string().nullable().optional(),
  /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  valuation: z.string().nullable().optional(),
  /** The date and time the property was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the property is archived */ fromArchive: z.boolean().nullable().optional(),
  rural: propertyRuralModel.nullable().optional(),
  externalArea: propertyExternalAreaModel.nullable().optional(),
  internalArea: propertyInternalAreaModel.nullable().optional(),
  epc: propertyEpcModel.nullable().optional(),
  selling: propertySellingModel.nullable().optional(),
  letting: propertyLettingModel.nullable().optional(),
  commercial: propertyCommercialModel.nullable().optional(),
  regional: propertyRegionalModel.nullable().optional(),
  /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).nullable().optional(),
  /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).nullable().optional(),
  /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).nullable().optional(),
  /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).nullable().optional(),
  /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).nullable().optional(),
  /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).nullable().optional(),
  /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedAttributes: z.array(unmappedAttributeModel).nullable().optional(),
  /** Identifiers of any services connected at the property */
  availableServicesIds: z.array(z.string()).nullable().optional(),
  /** Details of each room in the property */ rooms: z.array(propertyRoomModel).nullable().optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** The date that this property became a lost instruction */ lostInstructionDate: z.string().nullable().optional(),
  /** The notes regarding the lost instruction */ lostInstructionNote: z.string().nullable().optional(),
  /** The type of development */ developmentSiteType: z.string().nullable().optional(),
  /** App specific metadata that has been set against the property */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The keywords associated with property */ keywords: z.array(z.string()).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
  _links: z.record(z.string(), linkModel).nullable().optional(),
})
/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export type PropertyModel = {
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the property */ string | undefined
  created?: /** The date and time when the property was created */ string | undefined
  modified?: /** The date and time when the property was last modified */ string | undefined
  lastCall?: /** The date the owner of the property was last called */ string | undefined
  nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
  marketingMode?: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string | undefined
  currency?: /** The currency that applies to monetary amounts exposed in the model */ string | undefined
  alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
  address?: PropertyAddressModel | undefined
  areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
  strapline?: /** The strapline description containing a short summary about the property */ string | undefined
  description?: /** The brief description of the property */ string | undefined
  longDescription?: /** The long description of the property */ string | undefined
  localAuthorityCompanyId?: /** The property's local authority */ string | undefined
  localAuthorityCompanyName?: /** The name of the property's local authority */ string | undefined
  summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  string | undefined
  departmentId?: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined
  bedrooms?: /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bedroomsMax?: /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptions?: /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMax?: /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathrooms?: /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMax?: /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
  number | undefined
  parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
  disabledPortalIds?: /** A collection of identifiers of portals that the property should not be displayed on */
  Array<string> | undefined
  internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
  boolean | undefined
  isExternal?: /** A flag denoting whether or not the property has been instructed by another estate agent */
  boolean | undefined
  viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
  videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
  videoCaption?: /** The caption for the video url associated with this property */ string | undefined
  video2Url?: /** The url of a second video associated with this property, such as a virtual tour */ string | undefined
  video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
  notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  string | undefined
  boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
  boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
  string | undefined
  featuredImageUrl?: /** The properties featured image url */ string | undefined
  url?: /** The url to the property on an external website */ string | undefined
  urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
  groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
  groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
  groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
  string | undefined
  groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */ number | undefined
  serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
  serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
  floorLevel?: /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  string | undefined
  valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  string | undefined
  archivedOn?: /** The date and time the property was archived */ string | undefined
  fromArchive?: /** A flag determining whether or not the property is archived */ boolean | undefined
  rural?: PropertyRuralModel | undefined
  externalArea?: PropertyExternalAreaModel | undefined
  internalArea?: PropertyInternalAreaModel | undefined
  epc?: PropertyEpcModel | undefined
  selling?: PropertySellingModel | undefined
  letting?: PropertyLettingModel | undefined
  commercial?: PropertyCommercialModel | undefined
  regional?: PropertyRegionalModel | undefined
  type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  specialFeatures?: /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  unmappedAttributes?: /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<UnmappedAttributeModel> | undefined
  availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined
  rooms?: /** Details of each room in the property */ Array<PropertyRoomModel> | undefined
  roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  boolean | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  Array<string> | undefined
  lostInstructionDate?: /** The date that this property became a lost instruction */ string | undefined
  lostInstructionNote?: /** The notes regarding the lost instruction */ string | undefined
  developmentSiteType?: /** The type of development */ string | undefined
  metadata?: /** App specific metadata that has been set against the property */
  Record<string, Record<string, never>> | undefined
  keywords?: /** The keywords associated with property */ Array<string> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the property. Used for managing update concurrency */
  string | undefined
  _links?: /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
  Record<string, LinkModel> | undefined
}