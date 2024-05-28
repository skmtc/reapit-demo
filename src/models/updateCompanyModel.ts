import { UpdateCompanyAddressModel } from '@/models/updateCompanyAddressModel.ts'

/** Request body used to update an existing company */
export type UpdateCompanyModel = {
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
  address?: UpdateCompanyAddressModel | undefined
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
