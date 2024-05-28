import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { unmappedRequirementModel, UnmappedRequirementModel } from '@/models/unmappedRequirementModel.ts'
import { applicantBuyingModel, ApplicantBuyingModel } from '@/models/applicantBuyingModel.ts'
import { applicantRentingModel, ApplicantRentingModel } from '@/models/applicantRentingModel.ts'
import { applicantExternalAreaModel, ApplicantExternalAreaModel } from '@/models/applicantExternalAreaModel.ts'
import { applicantInternalAreaModel, ApplicantInternalAreaModel } from '@/models/applicantInternalAreaModel.ts'
import { applicantSourceModel, ApplicantSourceModel } from '@/models/applicantSourceModel.ts'
import { applicantCommercialModel, ApplicantCommercialModel } from '@/models/applicantCommercialModel.ts'
import { applicantRegionalModel, ApplicantRegionalModel } from '@/models/applicantRegionalModel.ts'
import { applicantContactModel, ApplicantContactModel } from '@/models/applicantContactModel.ts'

/** Representation of an applicant */
export const applicantModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the applicant */ id: z.string().nullable().optional(),
  /** The date and time when the applicant was created */ created: z.string().nullable().optional(),
  /** The date and time when the applicant was last modified */ modified: z.string().nullable().optional(),
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string().nullable().optional(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  currency: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().nullable().optional(),
  /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().nullable().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().nullable().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().nullable().optional(),
  /** The status id of the applicant */ statusId: z.string().nullable().optional(),
  /** The date when the applicant was last contacted */ lastCall: z.string().nullable().optional(),
  /** The date when the applicant is next due to be contacted */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().nullable().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).nullable().optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).nullable().optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).nullable().optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).nullable().optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).nullable().optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).nullable().optional(),
  /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedRequirements: z.array(unmappedRequirementModel).nullable().optional(),
  /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMin: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().nullable().optional(),
  /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMin: z.number().int().nullable().optional(),
  /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMax: z.number().int().nullable().optional(),
  /** The applicant's location type (areas/addresses/none) */ locationType: z.string().nullable().optional(),
  /** The applicant's location options */ locationOptions: z.array(z.string()).nullable().optional(),
  /** The date and time the applicant was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag denoting whether or not this applicant is archived */ fromArchive: z.boolean().nullable().optional(),
  buying: applicantBuyingModel.nullable().optional(),
  renting: applicantRentingModel.nullable().optional(),
  externalArea: applicantExternalAreaModel.nullable().optional(),
  internalArea: applicantInternalAreaModel.nullable().optional(),
  source: applicantSourceModel.nullable().optional(),
  commercial: applicantCommercialModel.nullable().optional(),
  regional: applicantRegionalModel.nullable().optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z.array(applicantContactModel).nullable().optional(),
  /** App specific metadata that has been set against the applicant */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the applicant. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an applicant */
export type ApplicantModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the applicant */ string | undefined
  created?: /** The date and time when the applicant was created */ string | undefined
  modified?: /** The date and time when the applicant was last modified */ string | undefined
  marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  string | undefined
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId?: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string | undefined
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  unmappedRequirements?: /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<UnmappedRequirementModel> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  archivedOn?: /** The date and time the applicant was archived */ string | undefined
  fromArchive?: /** A flag denoting whether or not this applicant is archived */ boolean | undefined
  buying?: ApplicantBuyingModel | undefined
  renting?: ApplicantRentingModel | undefined
  externalArea?: ApplicantExternalAreaModel | undefined
  internalArea?: ApplicantInternalAreaModel | undefined
  source?: ApplicantSourceModel | undefined
  commercial?: ApplicantCommercialModel | undefined
  regional?: ApplicantRegionalModel | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  related?: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  Array<ApplicantContactModel> | undefined
  metadata?: /** App specific metadata that has been set against the applicant */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the applicant. Used for managing update concurrency */
  string | undefined
}
