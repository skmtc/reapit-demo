import { z } from 'zod'

/** Request body used to create a new certificate */
export const createCertificateModel = /** Request body used to create a new certificate */
z.object({category: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
z.string().optional(), typeId: /** The certificate's type */
z.string().optional(), start: /** The certificate's start date */
z.string().optional(), expiry: /** The certificate's expiry date */
z.string().optional(), companyId: /** The unique identifier of the company that supplied, or is supplying, the certificate */
z.string().optional(), notes: /** Any general notes regarding the certificate */
z.string().optional(), referenceNumber: /** The certificate's reference number */
z.string().optional()});
/** Request body used to create a new certificate */
export type CreateCertificateModel = /** Request body used to create a new certificate */
{category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
string | undefined, typeId?: /** The certificate's type */
string | undefined, start?: /** The certificate's start date */
string | undefined, expiry?: /** The certificate's expiry date */
string | undefined, companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
string | undefined, notes?: /** Any general notes regarding the certificate */
string | undefined, referenceNumber?: /** The certificate's reference number */
string | undefined};