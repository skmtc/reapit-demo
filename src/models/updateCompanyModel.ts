import { z } from 'zod'

/** Request body used to update an existing company */
export const updateCompanyModel = z.object({
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
  /** Request body to set the address of an existing company */
  address: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().nullable().optional(),
      /** The building name */ buildingName: z.string().nullable().optional(),
      /** The building number */ buildingNumber: z.string().nullable().optional(),
      /** The first line of the address */ line1: z.string().nullable().optional(),
      /** The second line of the address */ line2: z.string().nullable().optional(),
      /** The third line of the address */ line3: z.string().nullable().optional(),
      /** The fourth line of the address */ line4: z.string().nullable().optional(),
      /** The postcode */ postcode: z.string().nullable().optional(),
      /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().nullable().optional(),
  /** App specific metadata to set against the company */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
