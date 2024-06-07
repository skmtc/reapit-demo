import { z } from 'zod'

/** Request body used to update an existing certificate */
export const updateCertificateModel = /** Request body used to update an existing certificate */
z.object({start: /** The certificate's start date */
z.string().optional(), expiry: /** The certificate's expiry date */
z.string().optional(), companyId: /** The unique identifier of the company */
z.string().optional(), notes: /** Any general notes regarding the certificate */
z.string().optional(), referenceNumber: /** The certificate's reference number */
z.string().optional()});
/** Request body used to update an existing certificate */
export type UpdateCertificateModel = /** Request body used to update an existing certificate */
{start?: /** The certificate's start date */
string | undefined, expiry?: /** The certificate's expiry date */
string | undefined, companyId?: /** The unique identifier of the company */
string | undefined, notes?: /** Any general notes regarding the certificate */
string | undefined, referenceNumber?: /** The certificate's reference number */
string | undefined};