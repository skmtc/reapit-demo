import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/schemas/propertyCommissionFeeModel.generated.tsx'

/** Model for the creation of a new property appraisal */
export const createPropertyAppraisalModel = /** Model for the creation of a new property appraisal */
z.object({companyId: /** Unique identifier of the appraising company */
z.string().optional(), date: /** The date of the appraisal */
z.string().optional(), price: /** The appraisal value */
z.number().int().optional(), fee: propertyCommissionFeeModel.optional(), notes: /** Free-text notes associated with the appraisal */
z.string().optional()});
/** Model for the creation of a new property appraisal */
export type CreatePropertyAppraisalModel = /** Model for the creation of a new property appraisal */
{companyId?: /** Unique identifier of the appraising company */
string | undefined, date?: /** The date of the appraisal */
string | undefined, price?: /** The appraisal value */
number | undefined, fee?: PropertyCommissionFeeModel | undefined, notes?: /** Free-text notes associated with the appraisal */
string | undefined};