import { ApplicantBuyingModel } from '@/models/applicantBuyingModel.ts'
import { UpdateApplicantRentingModel } from '@/models/updateApplicantRentingModel.ts'
import { ApplicantExternalAreaModel } from '@/models/applicantExternalAreaModel.ts'
import { ApplicantInternalAreaModel } from '@/models/applicantInternalAreaModel.ts'
import { ApplicantSourceModel } from '@/models/applicantSourceModel.ts'
import { ApplicantRegionalModel } from '@/models/applicantRegionalModel.ts'

/** Request body used to update an existing applicant */
export type UpdateApplicantModel = {
  marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  string | undefined
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId?: /** The unique identifier of the department that the applicant requirements are associated with. The applicant will only match to properties with the same value */
  string | undefined
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  buying?: ApplicantBuyingModel | undefined
  renting?: UpdateApplicantRentingModel | undefined
  externalArea?: ApplicantExternalAreaModel | undefined
  internalArea?: ApplicantInternalAreaModel | undefined
  source?: ApplicantSourceModel | undefined
  regional?: ApplicantRegionalModel | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  metadata?: /** App specific metadata to set against the applicant */ Record<string, Record<string, never>> | undefined
}