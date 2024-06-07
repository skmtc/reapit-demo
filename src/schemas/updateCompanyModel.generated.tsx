import { z } from 'zod'
import { updateCompanyAddressModel, UpdateCompanyAddressModel } from '@/schemas/updateCompanyAddressModel.generated.tsx'

/** Request body used to update an existing company */
export const updateCompanyModel = /** Request body used to update an existing company */
z.object({name: /** The name of the company */
z.string().optional(), branch: /** The branch name of the company */
z.string().optional(), notes: /** A free text field containing notes that describe the company's business or service offering */
z.string().optional(), active: /** A flag determining whether or not the company is currently active */
z.boolean().optional(), marketingConsent: /** The marketing consent status of the company (deny/notAsked) */
z.string().optional(), vatRegistered: /** A flag determining whether or not the company is VAT registered */
z.boolean().optional(), typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
z.array(z.string()).optional(), supplierTypeId: /** The unique identifier of a supplier type, if the company is a supplier */
z.string().optional(), workPhone: /** The work phone number of the company */
z.string().optional(), mobilePhone: /** The mobile phone number of the company */
z.string().optional(), email: /** The email address of the company */
z.string().optional(), address: updateCompanyAddressModel.optional(), communicationPreferenceLetter: /** A flag determining whether or not the company is happy to receive communications by letter */
z.boolean().optional(), communicationPreferenceEmail: /** A flag determining whether or not the company is happy to receive communications by email */
z.boolean().optional(), communicationPreferencePhone: /** A flag determining whether or not the company is happy to receive communications by phone */
z.boolean().optional(), communicationPreferenceSms: /** A flag determining whether or not the company is happy to receive communications by SMS */
z.boolean().optional(), metadata: /** App specific metadata to set against the company */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing company */
export type UpdateCompanyModel = /** Request body used to update an existing company */
{name?: /** The name of the company */
string | undefined, branch?: /** The branch name of the company */
string | undefined, notes?: /** A free text field containing notes that describe the company's business or service offering */
string | undefined, active?: /** A flag determining whether or not the company is currently active */
boolean | undefined, marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */
string | undefined, vatRegistered?: /** A flag determining whether or not the company is VAT registered */
boolean | undefined, typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
Array<string> | undefined, supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */
string | undefined, workPhone?: /** The work phone number of the company */
string | undefined, mobilePhone?: /** The mobile phone number of the company */
string | undefined, email?: /** The email address of the company */
string | undefined, address?: UpdateCompanyAddressModel | undefined, communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
boolean | undefined, communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
boolean | undefined, communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
boolean | undefined, communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
boolean | undefined, metadata?: /** App specific metadata to set against the company */
Record<string, Record<string, never>> | undefined};