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
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the company */ id: z.string().optional().nullable(),
    /** The date and time when the company was created */ created: z.string().optional().nullable(),
    /** The date and time when the company was last modified */ modified: z.string().optional().nullable(),
    /** The name of the company */ name: z.string().optional().nullable(),
    /** The branch name of the company */ branch: z.string().optional().nullable(),
    /** A free text field containing notes that describe the company's business or service offering */
    notes: z.string().optional().nullable(),
    /** A flag determining whether or not the company is currently active */ active: z.boolean().optional().nullable(),
    /** The marketing consent status of the company (deny/notAsked) */
    marketingConsent: z.string().optional().nullable(),
    /** A flag determining whether or not the company is VAT registered */
    vatRegistered: z.boolean().optional().nullable(),
    /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    typeIds: z.array(z.string()).optional().nullable(),
    /** The unique identifier of a supplier type, if the company is a supplier */
    supplierTypeId: z.string().optional().nullable(),
    /** The work phone number of the company */ workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the company */ mobilePhone: z.string().optional().nullable(),
    /** The email address of the company */ email: z.string().optional().nullable(),
    /** The date and time the company was archived */ archivedOn: z.string().optional().nullable(),
    /** A flag determining whether or not the company is archived */ fromArchive: z.boolean().optional().nullable(),
    address: companyAddressModel.optional().nullable(),
    payments: companyPaymentsModel.optional().nullable(),
    /** A collection of additional contact details */
    additionalContactDetails: z.array(additionalContactDetailModel).optional().nullable(),
    /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
    officeIds: z.array(z.string()).optional().nullable(),
    /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
    negotiatorIds: z.array(z.string()).optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by SMS */
    communicationPreferenceSms: z.boolean().optional().nullable(),
    /** App specific metadata that has been set against the company */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the company. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
    /** A list of relationships belonging to the company. This is later removed from the response */
    relationships: z.array(companyRoleModel).optional().nullable(),
  })
export type CompanyModel =
  /** Representation of a company */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the company */ string | null | undefined
    created?: /** The date and time when the company was created */ string | null | undefined
    modified?: /** The date and time when the company was last modified */ string | null | undefined
    name?: /** The name of the company */ string | null | undefined
    branch?: /** The branch name of the company */ string | null | undefined
    notes?:
      | /** A free text field containing notes that describe the company's business or service offering */
      string
      | null
      | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | null | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | null | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | null | undefined
    typeIds?:
      | /** A collection of unique identifiers of company types that categorise the type of business the company operates */
      Array<string>
      | null
      | undefined
    supplierTypeId?:
      | /** The unique identifier of a supplier type, if the company is a supplier */
      string
      | null
      | undefined
    workPhone?: /** The work phone number of the company */ string | null | undefined
    mobilePhone?: /** The mobile phone number of the company */ string | null | undefined
    email?: /** The email address of the company */ string | null | undefined
    archivedOn?: /** The date and time the company was archived */ string | null | undefined
    fromArchive?: /** A flag determining whether or not the company is archived */ boolean | null | undefined
    address?: CompanyAddressModel | null | undefined
    payments?: CompanyPaymentsModel | null | undefined
    additionalContactDetails?:
      | /** A collection of additional contact details */
      Array<AdditionalContactDetailModel>
      | null
      | undefined
    officeIds?:
      | /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
      Array<string>
      | null
      | undefined
    negotiatorIds?:
      | /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
      Array<string>
      | null
      | undefined
    communicationPreferenceLetter?:
      | /** A flag determining whether or not the company is happy to receive communications by letter */
      boolean
      | null
      | undefined
    communicationPreferenceEmail?:
      | /** A flag determining whether or not the company is happy to receive communications by email */
      boolean
      | null
      | undefined
    communicationPreferencePhone?:
      | /** A flag determining whether or not the company is happy to receive communications by phone */
      boolean
      | null
      | undefined
    communicationPreferenceSms?:
      | /** A flag determining whether or not the company is happy to receive communications by SMS */
      boolean
      | null
      | undefined
    metadata?:
      | /** App specific metadata that has been set against the company */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the company. Used for managing update concurrency */
      string
      | null
      | undefined
    relationships?:
      | /** A list of relationships belonging to the company. This is later removed from the response */
      Array<CompanyRoleModel>
      | null
      | undefined
  }
