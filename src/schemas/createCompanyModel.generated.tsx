import { z } from 'zod'
import { createCompanyAddressModel, CreateCompanyAddressModel } from '@/schemas/createCompanyAddressModel.generated.tsx'

/** Request body used to create a new company */
export const createCompanyModel =
  /** Request body used to create a new company */
  z.object({
    /** The name of the company */ name: z.string(),
    /** The branch name of the company */ branch: z.string().optional(),
    /** A free text field containing notes that describe the company's business or service offering */
    notes: z.string().optional(),
    /** A flag determining whether or not the company is currently active */ active: z.boolean().optional(),
    /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().optional(),
    /** A flag determining whether or not the company is VAT registered */ vatRegistered: z.boolean().optional(),
    /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    typeIds: z.array(z.string()),
    /** The unique identifier of a supplier type, if the company is a supplier */ supplierTypeId: z.string().optional(),
    /** The work phone number of the company. (Required when no other company or address details are provided) */
    workPhone: z.string().optional(),
    /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    mobilePhone: z.string().optional(),
    /** The email address of the company. (Required when no other company or address details are provided) */
    email: z.string().optional(),
    address: createCompanyAddressModel.optional(),
    /** A flag determining whether or not the company is happy to receive communications by letter */
    communicationPreferenceLetter: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by email */
    communicationPreferenceEmail: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by phone */
    communicationPreferencePhone: z.boolean().optional(),
    /** A flag determining whether or not the company is happy to receive communications by SMS */
    communicationPreferenceSms: z.boolean().optional(),
    /** App specific metadata to set against the company */ metadata: z.record(z.string(), z.object({})).optional(),
  })
/** Request body used to create a new company */
export type CreateCompanyModel =
  /** Request body used to create a new company */
  {
    name: /** The name of the company */ string
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
    typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string>
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
    workPhone?: /** The work phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    email?: /** The email address of the company. (Required when no other company or address details are provided) */
    string | undefined
    address?: CreateCompanyAddressModel | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the company */ Record<string, Record<string, never>> | undefined
  }
