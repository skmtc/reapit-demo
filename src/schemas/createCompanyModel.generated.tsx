import { CreateCompanyAddressModel, createCompanyAddressModel } from '@/schemas/createCompanyAddressModel.generated.tsx'
import { z } from 'zod'

/** Request body used to create a new company */
export type CreateCompanyModel =
  /** Request body used to create a new company */
  {
    name: /** The name of the company */ string
    branch?: /** The branch name of the company */ string | null | undefined
    notes?:
      | /** A free text field containing notes that describe the company's business or service offering */
      string
      | null
      | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | null | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | null | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | null | undefined
    typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string>
    supplierTypeId?:
      | /** The unique identifier of a supplier type, if the company is a supplier */
      string
      | null
      | undefined
    workPhone?:
      | /** The work phone number of the company. (Required when no other company or address details are provided) */
      string
      | null
      | undefined
    mobilePhone?:
      | /** The mobile phone number of the company. (Required when no other company or address details are provided) */
      string
      | null
      | undefined
    email?:
      | /** The email address of the company. (Required when no other company or address details are provided) */
      string
      | null
      | undefined
    address?: CreateCompanyAddressModel | null | undefined
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
      | /** App specific metadata to set against the company */
      Record<string, Record<string, never>>
      | null
      | undefined
  }
export const createCompanyModel =
  /** Request body used to create a new company */
  z.object({
    /** The name of the company */ name: z.string(),
    /** The branch name of the company */ branch: z.string().optional().nullable(),
    /** A free text field containing notes that describe the company's business or service offering */
    notes: z.string().optional().nullable(),
    /** A flag determining whether or not the company is currently active */ active: z.boolean().optional().nullable(),
    /** The marketing consent status of the company (deny/notAsked) */
    marketingConsent: z.string().optional().nullable(),
    /** A flag determining whether or not the company is VAT registered */
    vatRegistered: z.boolean().optional().nullable(),
    /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    typeIds: z.array(z.string()),
    /** The unique identifier of a supplier type, if the company is a supplier */
    supplierTypeId: z.string().optional().nullable(),
    /** The work phone number of the company. (Required when no other company or address details are provided) */
    workPhone: z.string().optional().nullable(),
    /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    mobilePhone: z.string().optional().nullable(),
    /** The email address of the company. (Required when no other company or address details are provided) */
    email: z.string().optional().nullable(),
    address: createCompanyAddressModel.optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional().nullable(),
    /** A flag determining whether or not the company is happy to receive communications by SMS */
    communicationPreferenceSms: z.boolean().optional().nullable(),
    /** App specific metadata to set against the company */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
  })
