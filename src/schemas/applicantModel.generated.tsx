import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { unmappedRequirementModel, UnmappedRequirementModel } from '@/schemas/unmappedRequirementModel.generated.tsx'
import { applicantBuyingModel, ApplicantBuyingModel } from '@/schemas/applicantBuyingModel.generated.tsx'
import { applicantRentingModel, ApplicantRentingModel } from '@/schemas/applicantRentingModel.generated.tsx'
import { applicantExternalAreaModel, ApplicantExternalAreaModel } from '@/schemas/applicantExternalAreaModel.generated.tsx'
import { applicantInternalAreaModel, ApplicantInternalAreaModel } from '@/schemas/applicantInternalAreaModel.generated.tsx'
import { applicantSourceModel, ApplicantSourceModel } from '@/schemas/applicantSourceModel.generated.tsx'
import { applicantCommercialModel, ApplicantCommercialModel } from '@/schemas/applicantCommercialModel.generated.tsx'
import { applicantRegionalModel, ApplicantRegionalModel } from '@/schemas/applicantRegionalModel.generated.tsx'
import { applicantContactModel, ApplicantContactModel } from '@/schemas/applicantContactModel.generated.tsx'

/** Representation of an applicant */
export const applicantModel = /** Representation of an applicant */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the applicant */
z.string().optional(), created: /** The date and time when the applicant was created */
z.string().optional(), modified: /** The date and time when the applicant was last modified */
z.string().optional(), marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
z.string().optional(), currency: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
z.string().optional(), active: /** A flag determining whether or not the applicant is actively looking for a property */
z.boolean().optional(), notes: /** A free text field describing any adhoc buying or renting requirements */
z.string().optional(), sellingStatus: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
z.string().optional(), sellingPosition: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
z.string().optional(), statusId: /** The status id of the applicant */
z.string().optional(), lastCall: /** The date when the applicant was last contacted */
z.string().optional(), nextCall: /** The date when the applicant is next due to be contacted */
z.string().optional(), departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
z.string().optional(), solicitorId: /** The unique identifier of the solicitor associated to the applicant */
z.string().optional(), potentialClient: /** A flag determining whether or not the applicant is a potential client */
z.boolean().optional(), type: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), style: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), situation: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), parking: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), age: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), locality: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), specialFeatures: /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), unmappedRequirements: /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(unmappedRequirementModel).optional(), bedroomsMin: /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), bedroomsMax: /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), receptionsMin: /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), receptionsMax: /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), bathroomsMin: /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), bathroomsMax: /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), parkingSpacesMin: /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), parkingSpacesMax: /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
z.number().int().optional(), locationType: /** The applicant's location type (areas/addresses/none) */
z.string().optional(), locationOptions: /** The applicant's location options */
z.array(z.string()).optional(), archivedOn: /** The date and time the applicant was archived */
z.string().optional(), fromArchive: /** A flag denoting whether or not this applicant is archived */
z.boolean().optional(), buying: applicantBuyingModel.optional(), renting: applicantRentingModel.optional(), externalArea: applicantExternalAreaModel.optional(), internalArea: applicantInternalAreaModel.optional(), source: applicantSourceModel.optional(), commercial: applicantCommercialModel.optional(), regional: applicantRegionalModel.optional(), officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
z.array(z.string()).optional(), negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
z.array(z.string()).optional(), related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
z.array(applicantContactModel).optional(), metadata: /** App specific metadata that has been set against the applicant */
z.record(z.string(), z.object({})).optional(), _eTag: /** The ETag for the current version of the applicant. Used for managing update concurrency */
z.string().optional()});
/** Representation of an applicant */
export type ApplicantModel = /** Representation of an applicant */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the applicant */
string | undefined, created?: /** The date and time when the applicant was created */
string | undefined, modified?: /** The date and time when the applicant was last modified */
string | undefined, marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
string | undefined, currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
string | undefined, active?: /** A flag determining whether or not the applicant is actively looking for a property */
boolean | undefined, notes?: /** A free text field describing any adhoc buying or renting requirements */
string | undefined, sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
string | undefined, sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
string | undefined, statusId?: /** The status id of the applicant */
string | undefined, lastCall?: /** The date when the applicant was last contacted */
string | undefined, nextCall?: /** The date when the applicant is next due to be contacted */
string | undefined, departmentId?: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
string | undefined, solicitorId?: /** The unique identifier of the solicitor associated to the applicant */
string | undefined, potentialClient?: /** A flag determining whether or not the applicant is a potential client */
boolean | undefined, type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, specialFeatures?: /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, unmappedRequirements?: /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<UnmappedRequirementModel> | undefined, bedroomsMin?: /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, bedroomsMax?: /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, receptionsMin?: /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, receptionsMax?: /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, bathroomsMin?: /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, bathroomsMax?: /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
number | undefined, locationType?: /** The applicant's location type (areas/addresses/none) */
string | undefined, locationOptions?: /** The applicant's location options */
Array<string> | undefined, archivedOn?: /** The date and time the applicant was archived */
string | undefined, fromArchive?: /** A flag denoting whether or not this applicant is archived */
boolean | undefined, buying?: ApplicantBuyingModel | undefined, renting?: ApplicantRentingModel | undefined, externalArea?: ApplicantExternalAreaModel | undefined, internalArea?: ApplicantInternalAreaModel | undefined, source?: ApplicantSourceModel | undefined, commercial?: ApplicantCommercialModel | undefined, regional?: ApplicantRegionalModel | undefined, officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
Array<string> | undefined, negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
Array<string> | undefined, related?: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
Array<ApplicantContactModel> | undefined, metadata?: /** App specific metadata that has been set against the applicant */
Record<string, Record<string, never>> | undefined, _eTag?: /** The ETag for the current version of the applicant. Used for managing update concurrency */
string | undefined};