import { z } from 'zod'

/** Read model representing a Guarantor */
export const guarantorModel = /** Read model representing a Guarantor */
z.object({id: /** The identifier for the guarantor record */
z.string().optional(), guarantorAssociatedId: /** The identifier for the contact record associated with the guarantor */
z.string().optional(), type: /** Value indicating whether a the referenced guarantor is a person or a company */
z.string().optional(), referenceStatus: /** The status of the reference requested from the guarantor (notSet/requested/received) */
z.string().optional()});
/** Read model representing a Guarantor */
export type GuarantorModel = /** Read model representing a Guarantor */
{id?: /** The identifier for the guarantor record */
string | undefined, guarantorAssociatedId?: /** The identifier for the contact record associated with the guarantor */
string | undefined, type?: /** Value indicating whether a the referenced guarantor is a person or a company */
string | undefined, referenceStatus?: /** The status of the reference requested from the guarantor (notSet/requested/received) */
string | undefined};