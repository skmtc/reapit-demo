import { z } from 'zod'
import {
  createApplicantBuyingModel,
  CreateApplicantBuyingModel,
} from '@/schemas/createApplicantBuyingModel.generated.tsx'
import {
  createApplicantRentingModel,
  CreateApplicantRentingModel,
} from '@/schemas/createApplicantRentingModel.generated.tsx'
import {
  applicantExternalAreaModel,
  ApplicantExternalAreaModel,
} from '@/schemas/applicantExternalAreaModel.generated.tsx'
import {
  applicantInternalAreaModel,
  ApplicantInternalAreaModel,
} from '@/schemas/applicantInternalAreaModel.generated.tsx'
import { applicantSourceModel, ApplicantSourceModel } from '@/schemas/applicantSourceModel.generated.tsx'
import { applicantRegionalModel, ApplicantRegionalModel } from '@/schemas/applicantRegionalModel.generated.tsx'
import {
  createApplicantContactRelationshipModel,
  CreateApplicantContactRelationshipModel,
} from '@/schemas/createApplicantContactRelationshipModel.generated.tsx'

/** Request body used to create a new applicant */
export const createApplicantModel =
  /** Request body used to create a new applicant */
  z.object({
    /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ marketingMode: z.string(),
    /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
    currency: z.string().optional(),
    /** A flag determining whether or not the applicant is actively looking for a property */
    active: z.boolean().optional(),
    /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().optional(),
    /** The status id of the applicant */ statusId: z.string().optional(),
    /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    sellingStatus: z.string().optional(),
    /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    sellingPosition: z.string().optional(),
    /** The date when the applicant was last contacted */ lastCall: z.string().optional(),
    /** The date when the applicant is next due to be contacted */ nextCall: z.string().optional(),
    /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    departmentId: z.string(),
    /** The unique identifier of the solicitor associated to the applicant */ solicitorId: z.string().optional(),
    /** A flag determining whether or not the applicant is a potential client */
    potentialClient: z.boolean().optional(),
    /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    type: z.array(z.string()).optional(),
    /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    style: z.array(z.string()).optional(),
    /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    situation: z.array(z.string()).optional(),
    /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    parking: z.array(z.string()).optional(),
    /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    age: z.array(z.string()).optional(),
    /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    locality: z.array(z.string()).optional(),
    /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    specialFeatures: z.array(z.string()).optional(),
    /** The minimum number of bedrooms the applicant requires */ bedroomsMin: z.number().int().optional(),
    /** The maximum number of bedrooms the applicant requires */ bedroomsMax: z.number().int().optional(),
    /** The minimum number of reception rooms the applicant requires */ receptionsMin: z.number().int().optional(),
    /** The maximum number of reception rooms the applicant requires */ receptionsMax: z.number().int().optional(),
    /** The minimum number of bathrooms the applicant requires */ bathroomsMin: z.number().int().optional(),
    /** The maximum number of bathrooms the applicant requires */ bathroomsMax: z.number().int().optional(),
    /** The minimum number of parking spaces the applicant requires */ parkingSpacesMin: z.number().int().optional(),
    /** The maximum number of parking spaces the applicant requires */ parkingSpacesMax: z.number().int().optional(),
    /** The applicant's location type (areas/addresses/none) */ locationType: z.string().optional(),
    /** The applicant's location options */ locationOptions: z.array(z.string()).optional(),
    buying: createApplicantBuyingModel.optional(),
    renting: createApplicantRentingModel.optional(),
    externalArea: applicantExternalAreaModel.optional(),
    internalArea: applicantInternalAreaModel.optional(),
    source: applicantSourceModel.optional(),
    regional: applicantRegionalModel.optional(),
    /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()),
    /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()),
    /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    related: z.array(createApplicantContactRelationshipModel),
    /** App specific metadata to set against the applicant */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new applicant */
export type CreateApplicantModel =
  /** Request body used to create a new applicant */
  {
    marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ string
    currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
    string | undefined
    active?: /** A flag determining whether or not the applicant is actively looking for a property */
    boolean | undefined
    notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
    statusId?: /** The status id of the applicant */ string | undefined
    sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    string | undefined
    sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    string | undefined
    lastCall?: /** The date when the applicant was last contacted */ string | undefined
    nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
    departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
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
    buying?: CreateApplicantBuyingModel | undefined
    renting?: CreateApplicantRentingModel | undefined
    externalArea?: ApplicantExternalAreaModel | undefined
    internalArea?: ApplicantInternalAreaModel | undefined
    source?: ApplicantSourceModel | undefined
    regional?: ApplicantRegionalModel | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string>
    related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    Array<CreateApplicantContactRelationshipModel>
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined
  }
