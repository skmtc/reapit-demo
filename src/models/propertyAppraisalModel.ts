import { z } from 'zod'
import { propertyCommissionFeeModel, PropertyCommissionFeeModel } from '@/models/propertyCommissionFeeModel.ts'

/** Representation of a property appraisal */
export const propertyAppraisalModel = z.object({
  /** Unique identifier of the appraisal */ id: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** Flag indicating whether the appraisal is internal or external */ isExternal: z.boolean().nullable().optional(),
  /** The date of the appraisal */ date: z.string().nullable().optional(),
  /** The appraisal value */ price: z.number().int().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** Free-text notes associated with the appraisal */ notes: z.string().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
/** Representation of a property appraisal */
export type PropertyAppraisalModel = {
  id?: /** Unique identifier of the appraisal */ string | undefined
  created?: /** The date and time on which the property appraisal was created */ string | undefined
  modified?: /** The date and time on which the property appraisal was last modified */ string | undefined
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  isExternal?: /** Flag indicating whether the appraisal is internal or external */ boolean | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
  _eTag?: string | undefined
}
