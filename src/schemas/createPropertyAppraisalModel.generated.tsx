import {
  PropertyCommissionFeeModel,
  propertyCommissionFeeModel,
} from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import { z } from 'zod'

/** Model for the creation of a new property appraisal */
export type CreatePropertyAppraisalModel =
  /** Model for the creation of a new property appraisal */
  {
    companyId?: /** Unique identifier of the appraising company */ string | null | undefined
    date?: /** The date of the appraisal */ string | null | undefined
    price?: /** The appraisal value */ number | null | undefined
    fee?: PropertyCommissionFeeModel | null | undefined
    notes?: /** Free-text notes associated with the appraisal */ string | null | undefined
  }
export const createPropertyAppraisalModel =
  /** Model for the creation of a new property appraisal */
  z.object({
    /** Unique identifier of the appraising company */ companyId: z.string().optional().nullable(),
    /** The date of the appraisal */ date: z.string().optional().nullable(),
    /** The appraisal value */ price: z.number().int().optional().nullable(),
    fee: propertyCommissionFeeModel.optional().nullable(),
    /** Free-text notes associated with the appraisal */ notes: z.string().optional().nullable(),
  })
