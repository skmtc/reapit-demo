import { PropertyCommissionFeeModel } from '@/models/propertyCommissionFeeModel.ts'

/** Model for the creation of a new property appraisal */
export type UpdatePropertyAppraisalModel = {
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
}
