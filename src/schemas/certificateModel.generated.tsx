import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a cerificate */
export const certificateModel = /** Representation of a cerificate */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the certificate */
z.string().optional(), created: /** The date and time when the certificate was created */
z.string().optional(), modified: /** The date and time when the certificate was last modified */
z.string().optional(), category: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
z.string().optional(), typeId: /** The certificate's type */
z.string().optional(), start: /** The certificate's start date */
z.string().optional(), expiry: /** The certificate's expiry date */
z.string().optional(), propertyId: /** The unique identifier of the property */
z.string().optional(), companyId: /** The unique identifier of the company */
z.string().optional(), statusId: /** The unique identifier of the certificates status */
z.string().optional(), notes: /** Any general notes regarding the certificate */
z.string().optional(), referenceNumber: /** The certificate's reference number */
z.string().optional(), responsibleParty: /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
z.string().optional(), _eTag: /** The ETag for the current version of the certificate. Used for managing update concurrency */
z.string().optional()});
/** Representation of a cerificate */
export type CertificateModel = /** Representation of a cerificate */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the certificate */
string | undefined, created?: /** The date and time when the certificate was created */
string | undefined, modified?: /** The date and time when the certificate was last modified */
string | undefined, category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
string | undefined, typeId?: /** The certificate's type */
string | undefined, start?: /** The certificate's start date */
string | undefined, expiry?: /** The certificate's expiry date */
string | undefined, propertyId?: /** The unique identifier of the property */
string | undefined, companyId?: /** The unique identifier of the company */
string | undefined, statusId?: /** The unique identifier of the certificates status */
string | undefined, notes?: /** Any general notes regarding the certificate */
string | undefined, referenceNumber?: /** The certificate's reference number */
string | undefined, responsibleParty?: /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
string | undefined, _eTag?: /** The ETag for the current version of the certificate. Used for managing update concurrency */
string | undefined};