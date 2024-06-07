import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { guarantorModel, GuarantorModel } from '@/schemas/guarantorModel.generated.tsx'
import { referenceModel, ReferenceModel } from '@/schemas/referenceModel.generated.tsx'

/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel = /** Representation of a relationship between a tenancy and a contact or company */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the tenancy relationship */
z.string().optional(), created: /** The date and time when the relationship was created */
z.string().optional(), modified: /** The date and time when the relationship was last modified */
z.string().optional(), tenancyId: /** The unique identifier of the tenancy */
z.string().optional(), associatedType: /** The type of related entity (contact/company) */
z.string().optional(), associatedId: /** The unique identifier of the related contact or company */
z.string().optional(), isMain: /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
z.boolean().optional(), fromArchive: /** A flag denoting whether or not this relationship is archived */
z.boolean().optional(), guarantors: /** Collection of guarantors recorded for this relationship */
z.array(guarantorModel).optional(), references: /** Collection of references recorded for this relationship */
z.array(referenceModel).optional()});
/** Representation of a relationship between a tenancy and a contact or company */
export type TenancyContactRelationshipModel = /** Representation of a relationship between a tenancy and a contact or company */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the tenancy relationship */
string | undefined, created?: /** The date and time when the relationship was created */
string | undefined, modified?: /** The date and time when the relationship was last modified */
string | undefined, tenancyId?: /** The unique identifier of the tenancy */
string | undefined, associatedType?: /** The type of related entity (contact/company) */
string | undefined, associatedId?: /** The unique identifier of the related contact or company */
string | undefined, isMain?: /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
boolean | undefined, fromArchive?: /** A flag denoting whether or not this relationship is archived */
boolean | undefined, guarantors?: /** Collection of guarantors recorded for this relationship */
Array<GuarantorModel> | undefined, references?: /** Collection of references recorded for this relationship */
Array<ReferenceModel> | undefined};