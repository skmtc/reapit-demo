import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { companyAddressModel, CompanyAddressModel } from '@/models/companyAddressModel.ts'
import { companyPaymentsModel, CompanyPaymentsModel } from '@/models/companyPaymentsModel.ts'
import { additionalContactDetailModel, AdditionalContactDetailModel } from '@/models/additionalContactDetailModel.ts'
import { companyRoleModel, CompanyRoleModel } from '@/models/companyRoleModel.ts'

/** Representation of a company */
export const companyModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the company */ id: z.string().nullable().optional(),
  /** The date and time when the company was created */ created: z.string().nullable().optional(),
  /** The date and time when the company was last modified */ modified: z.string().nullable().optional(),
  /** The name of the company */ name: z.string().nullable().optional(),
  /** The branch name of the company */ branch: z.string().nullable().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().nullable().optional(),
  /** A flag determining whether or not the company is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().nullable().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()).nullable().optional(),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().nullable().optional(),
  /** The work phone number of the company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the company */ email: z.string().nullable().optional(),
  /** The date and time the company was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the company is archived */ fromArchive: z.boolean().nullable().optional(),
  address: companyAddressModel.nullable().optional(),
  payments: companyPaymentsModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the company */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the company. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** A list of relationships belonging to the company. This is later removed from the response */
  relationships: z.array(companyRoleModel).nullable().optional(),
})
/** Representation of a company */
export type CompanyModel = {
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
