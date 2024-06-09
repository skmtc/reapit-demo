import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { companyAddressModel, CompanyAddressModel } from '@/schemas/companyAddressModel.generated.tsx'
import { companyPaymentsModel, CompanyPaymentsModel } from '@/schemas/companyPaymentsModel.generated.tsx'
import {
  additionalContactDetailModel,
  AdditionalContactDetailModel,
} from '@/schemas/additionalContactDetailModel.generated.tsx'
import { companyRoleModel, CompanyRoleModel } from '@/schemas/companyRoleModel.generated.tsx'

/** Representation of a company */
export const companyModel =
  /** Representation of a company */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the company */ id: z.string().optional(),
    /** The date and time when the company was created */ created: z.string().optional(),
    /** The date and time when the company was last modified */ modified: z.string().optional(),
    /** The name of the company */ name: z.string().optional(),
    /** The branch name of the company */ branch: z.string().optional(),
    /** A free text field containing notes that describe the company's business or service offering */
    notes: z.string().optional(),
    /** A flag determining whether or not the company is currently active */ active: z.boolean().optional(),
    /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().optional(),
    /** A flag determining whether or not the company is VAT registered */ vatRegistered: z.boolean().optional(),
    /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    typeIds: z.array(z.string()).optional(),
    /** The unique identifier of a supplier type, if the company is a supplier */ supplierTypeId: z.string().optional(),
    /** The work phone number of the company */ workPhone: z.string().optional(),
    /** The mobile phone number of the company */ mobilePhone: z.string().optional(),
    /** The email address of the company */ email: z.string().optional(),
    /** The date and time the company was archived */ archivedOn: z.string().optional(),
    /** A flag determining whether or not the company is archived */ fromArchive: z.boolean().optional(),
    address: companyAddressModel.optional(),
    payments: companyPaymentsModel.optional(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional(),
    /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional(),
    /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional(),
    /** A flag determining whether or not the company is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by SMS */
    communicationPreferenceSms: z.boolean().optional(),
    /** App specific metadata that has been set against the company */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the company. Used for managing update concurrency */
    _eTag: z.string().optional(),
    /** A list of relationships belonging to the company. This is later removed from the response */
    relationships: z.array(companyRoleModel).optional(),
  })
/** Representation of a company */
export type CompanyModel =
  /** Representation of a company */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the company */ string | undefined
    created?: /** The date and time when the company was created */ string | undefined
    modified?: /** The date and time when the company was last modified */ string | undefined
    name?: /** The name of the company */ string | undefined
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
    typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string> | undefined
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
    workPhone?: /** The work phone number of the company */ string | undefined
    mobilePhone?: /** The mobile phone number of the company */ string | undefined
    email?: /** The email address of the company */ string | undefined
    archivedOn?: /** The date and time the company was archived */ string | undefined
    fromArchive?: /** A flag determining whether or not the company is archived */ boolean | undefined
    address?: CompanyAddressModel | undefined
    payments?: CompanyPaymentsModel | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Array<AdditionalContactDetailModel> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
    Array<string> | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata that has been set against the company */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the company. Used for managing update concurrency */
    string | undefined
    relationships?: /** A list of relationships belonging to the company. This is later removed from the response */
    Array<CompanyRoleModel> | undefined
  }
