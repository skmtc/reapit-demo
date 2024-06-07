import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/schemas/propertyCommissionFeeModel.generated.tsx'

/** Representation of a property appraisal */
export const propertyAppraisalModel = /** Representation of a property appraisal */
z.object({id: /** Unique identifier of the appraisal */
z.string().optional(), created: /** The date and time on which the property appraisal was created */
z.string().optional(), modified: /** The date and time on which the property appraisal was last modified */
z.string().optional(), companyId: /** Unique identifier of the appraising company */
z.string().optional(), isExternal: /** Flag indicating whether the appraisal is internal or external */
z.boolean().optional(), date: /** The date of the appraisal */
z.string().optional(), price: /** The appraisal value */
z.number().int().optional(), fee: propertyCommissionFeeModel.optional(), notes: /** Free-text notes associated with the appraisal */
z.string().optional(), _eTag: z.string().optional()});
/** Representation of a property appraisal */
export type PropertyAppraisalModel = /** Representation of a property appraisal */
{id?: /** Unique identifier of the appraisal */
string | undefined, created?: /** The date and time on which the property appraisal was created */
string | undefined, modified?: /** The date and time on which the property appraisal was last modified */
string | undefined, companyId?: /** Unique identifier of the appraising company */
string | undefined, isExternal?: /** Flag indicating whether the appraisal is internal or external */
boolean | undefined, date?: /** The date of the appraisal */
string | undefined, price?: /** The appraisal value */
number | undefined, fee?: PropertyCommissionFeeModel | undefined, notes?: /** Free-text notes associated with the appraisal */
string | undefined, _eTag?: string | undefined};