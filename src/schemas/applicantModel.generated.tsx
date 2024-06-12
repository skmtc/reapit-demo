import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { UnmappedRequirementModel, unmappedRequirementModel } from '@/schemas/unmappedRequirementModel.generated.tsx'
import { ApplicantBuyingModel, applicantBuyingModel } from '@/schemas/applicantBuyingModel.generated.tsx'
import { ApplicantRentingModel, applicantRentingModel } from '@/schemas/applicantRentingModel.generated.tsx'
import {
  ApplicantExternalAreaModel,
  applicantExternalAreaModel,
} from '@/schemas/applicantExternalAreaModel.generated.tsx'
import {
  ApplicantInternalAreaModel,
  applicantInternalAreaModel,
} from '@/schemas/applicantInternalAreaModel.generated.tsx'
import { ApplicantSourceModel, applicantSourceModel } from '@/schemas/applicantSourceModel.generated.tsx'
import { ApplicantCommercialModel, applicantCommercialModel } from '@/schemas/applicantCommercialModel.generated.tsx'
import { ApplicantRegionalModel, applicantRegionalModel } from '@/schemas/applicantRegionalModel.generated.tsx'
import { ApplicantContactModel, applicantContactModel } from '@/schemas/applicantContactModel.generated.tsx'
import { z } from 'zod'

export type ApplicantModel =
  /** Representation of an applicant */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the applicant */ string | null | undefined
    created?: /** The date and time when the applicant was created */ string | null | undefined
    modified?: /** The date and time when the applicant was last modified */ string | null | undefined
    marketingMode?:
      | /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
      string
      | null
      | undefined
    currency?:
      | /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
      string
      | null
      | undefined
    active?:
      | /** A flag determining whether or not the applicant is actively looking for a property */
      boolean
      | null
      | undefined
    notes?: /** A free text field describing any adhoc buying or renting requirements */ string | null | undefined
    sellingStatus?:
      | /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
      string
      | null
      | undefined
    sellingPosition?:
      | /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
      string
      | null
      | undefined
    statusId?: /** The status id of the applicant */ string | null | undefined
    lastCall?: /** The date when the applicant was last contacted */ string | null | undefined
    nextCall?: /** The date when the applicant is next due to be contacted */ string | null | undefined
    departmentId?:
      | /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
      string
      | null
      | undefined
    solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | null | undefined
    potentialClient?:
      | /** A flag determining whether or not the applicant is a potential client */
      boolean
      | null
      | undefined
    type?:
      | /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    style?:
      | /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    situation?:
      | /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    parking?:
      | /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    age?:
      | /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    locality?:
      | /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    specialFeatures?:
      | /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    unmappedRequirements?:
      | /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<UnmappedRequirementModel>
      | null
      | undefined
    bedroomsMin?:
      | /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bedroomsMax?:
      | /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    receptionsMin?:
      | /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    receptionsMax?:
      | /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bathroomsMin?:
      | /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    bathroomsMax?:
      | /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    parkingSpacesMin?:
      | /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    parkingSpacesMax?:
      | /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
      number
      | null
      | undefined
    locationType?: /** The applicant's location type (areas/addresses/none) */ string | null | undefined
    locationOptions?: /** The applicant's location options */ Array<string> | null | undefined
    archivedOn?: /** The date and time the applicant was archived */ string | null | undefined
    fromArchive?: /** A flag denoting whether or not this applicant is archived */ boolean | null | undefined
    buying?: ApplicantBuyingModel | null | undefined
    renting?: ApplicantRentingModel | null | undefined
    externalArea?: ApplicantExternalAreaModel | null | undefined
    internalArea?: ApplicantInternalAreaModel | null | undefined
    source?: ApplicantSourceModel | null | undefined
    commercial?: ApplicantCommercialModel | null | undefined
    regional?: ApplicantRegionalModel | null | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    negotiatorIds?:
      | /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
      Array<string>
      | null
      | undefined
    related?:
      | /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
      Array<ApplicantContactModel>
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the applicant */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the applicant. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of an applicant */
export const applicantModel =
  /** Representation of an applicant */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the applicant */ id: z.string().optional().nullable(),
    /** The date and time when the applicant was created */ created: z.string().optional().nullable(),
    /** The date and time when the applicant was last modified */ modified: z.string().optional().nullable(),
    /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
    marketingMode: z.string().optional().nullable(),
    /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
    currency: z.string().optional().nullable(),
    /** A flag determining whether or not the applicant is actively looking for a property */
    active: z.boolean().optional().nullable(),
    /** A free text field describing any adhoc buying or renting requirements */
    notes: z.string().optional().nullable(),
    /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    sellingStatus: z.string().optional().nullable(),
    /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    sellingPosition: z.string().optional().nullable(),
    /** The status id of the applicant */ statusId: z.string().optional().nullable(),
    /** The date when the applicant was last contacted */ lastCall: z.string().optional().nullable(),
    /** The date when the applicant is next due to be contacted */ nextCall: z.string().optional().nullable(),
    /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    departmentId: z.string().optional().nullable(),
    /** The unique identifier of the solicitor associated to the applicant */
    solicitorId: z.string().optional().nullable(),
    /** A flag determining whether or not the applicant is a potential client */
    potentialClient: z.boolean().optional().nullable(),
    /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    type: z.array(z.string()).optional().nullable(),
    /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    style: z.array(z.string()).optional().nullable(),
    /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    situation: z.array(z.string()).optional().nullable(),
    /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    parking: z.array(z.string()).optional().nullable(),
    /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    age: z.array(z.string()).optional().nullable(),
    /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    locality: z.array(z.string()).optional().nullable(),
    /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    specialFeatures: z.array(z.string()).optional().nullable(),
    /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    unmappedRequirements: z.array(unmappedRequirementModel).optional().nullable(),
    /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bedroomsMin: z.number().int().optional().nullable(),
    /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bedroomsMax: z.number().int().optional().nullable(),
    /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    receptionsMin: z.number().int().optional().nullable(),
    /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    receptionsMax: z.number().int().optional().nullable(),
    /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bathroomsMin: z.number().int().optional().nullable(),
    /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    bathroomsMax: z.number().int().optional().nullable(),
    /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    parkingSpacesMin: z.number().int().optional().nullable(),
    /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    parkingSpacesMax: z.number().int().optional().nullable(),
    /** The applicant's location type (areas/addresses/none) */ locationType: z.string().optional().nullable(),
    /** The applicant's location options */ locationOptions: z.array(z.string()).optional().nullable(),
    /** The date and time the applicant was archived */ archivedOn: z.string().optional().nullable(),
    /** A flag denoting whether or not this applicant is archived */ fromArchive: z.boolean().optional().nullable(),
    buying: applicantBuyingModel.optional().nullable(),
    renting: applicantRentingModel.optional().nullable(),
    externalArea: applicantExternalAreaModel.optional().nullable(),
    internalArea: applicantInternalAreaModel.optional().nullable(),
    source: applicantSourceModel.optional().nullable(),
    commercial: applicantCommercialModel.optional().nullable(),
    regional: applicantRegionalModel.optional().nullable(),
    /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional().nullable(),
    /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    related: z.array(applicantContactModel).optional().nullable(),
    /** App specific metadata that has been set against the applicant */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the applicant. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
