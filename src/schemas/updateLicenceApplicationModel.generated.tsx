import { z } from 'zod'

/** Representation of property details specific to property licence application */
export const updateLicenceApplicationModel = /** Representation of property details specific to property licence application */
z.object({status: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
z.string().optional(), referenceNumber: /** The licence application reference number */
z.string().optional(), date: /** The date the licence was applied for */
z.string().optional(), granted: /** The date the licence application was granted */
z.string().optional(), expiry: /** The date the licence will expire */
z.string().optional()});
/** Representation of property details specific to property licence application */
export type UpdateLicenceApplicationModel = /** Representation of property details specific to property licence application */
{status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
string | undefined, referenceNumber?: /** The licence application reference number */
string | undefined, date?: /** The date the licence was applied for */
string | undefined, granted?: /** The date the licence application was granted */
string | undefined, expiry?: /** The date the licence will expire */
string | undefined};