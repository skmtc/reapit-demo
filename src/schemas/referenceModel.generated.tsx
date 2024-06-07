import { z } from 'zod'

/** Read model representing a tenant/applicant reference */
export const referenceModel = /** Read model representing a tenant/applicant reference */
z.object({id: /** The identifier for the reference record */
z.string().optional(), referenceAssociatedId: /** The identifier for the contact/company record associated with the reference */
z.string().optional(), type: /** Value indicating whether a referenced contact is a person or a company */
z.string().optional(), referenceStatus: /** The status of the reference (notSet/requested/received) */
z.string().optional(), referenceType: /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
z.string().optional()});
/** Read model representing a tenant/applicant reference */
export type ReferenceModel = /** Read model representing a tenant/applicant reference */
{id?: /** The identifier for the reference record */
string | undefined, referenceAssociatedId?: /** The identifier for the contact/company record associated with the reference */
string | undefined, type?: /** Value indicating whether a referenced contact is a person or a company */
string | undefined, referenceStatus?: /** The status of the reference (notSet/requested/received) */
string | undefined, referenceType?: /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
string | undefined};