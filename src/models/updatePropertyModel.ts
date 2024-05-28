import { UpdatePropertyAddressModel } from '@/models/updatePropertyAddressModel.ts'
import { UpdatePropertyEpcModel } from '@/models/updatePropertyEpcModel.ts'
import { UpdatePropertyExternalAreaModel } from '@/models/updatePropertyExternalAreaModel.ts'
import { UpdatePropertyInternalAreaModel } from '@/models/updatePropertyInternalAreaModel.ts'
import { UpdatePropertySellingModel } from '@/models/updatePropertySellingModel.ts'
import { UpdatePropertyLettingModel } from '@/models/updatePropertyLettingModel.ts'
import { UpdatePropertyRegionalModel } from '@/models/updatePropertyRegionalModel.ts'
import { UpdatePropertyRuralModel } from '@/models/updatePropertyRuralModel.ts'

/** Request body used to update an existing property */
export type UpdatePropertyModel = {
  lastCall?: /** The date the owner of the property was last called */ string | undefined
  nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
  roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  boolean | undefined
  strapline?: /** The strapline description containing a short summary about the property */ string | undefined
  description?: /** The brief description of the property */ string | undefined
  summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  string | undefined
  alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
  specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  address?: UpdatePropertyAddressModel | undefined
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
  video2Url?: /** The url of a second video associated with this property, such as a virtual tour */ string | undefined
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
  epc?: UpdatePropertyEpcModel | undefined
  externalArea?: UpdatePropertyExternalAreaModel | undefined
  internalArea?: UpdatePropertyInternalAreaModel | undefined
  selling?: UpdatePropertySellingModel | undefined
  letting?: UpdatePropertyLettingModel | undefined
  regional?: UpdatePropertyRegionalModel | undefined
  rural?: UpdatePropertyRuralModel | undefined
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
  negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  Array<string> | undefined
  areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
  url?: /** The url to the property on an external website */ string | undefined
  urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
  groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
  groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
  groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
  string | undefined
  groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */ number | undefined
  serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
  serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
  availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined
  metadata?: /** App specific metadata to set against the property */ Record<string, Record<string, never>> | undefined
}