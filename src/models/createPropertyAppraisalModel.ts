import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/models/propertyCommissionFeeModel.ts'

/** Model for the creation of a new property appraisal */
export const createPropertyAppraisalModel = z.object({
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** The date of the appraisal */ date: z.string().nullable().optional(),
  /** The appraisal value */ price: z.number().int().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** Free-text notes associated with the appraisal */ notes: z.string().nullable().optional(),
})
/** Model for the creation of a new property appraisal */
export type CreatePropertyAppraisalModel = {
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
}
