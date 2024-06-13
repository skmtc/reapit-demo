import {
  PropertyCommissionFeeModel,
  propertyCommissionFeeModel,
} from '@/schemas/propertyCommissionFeeModel.generated.tsx'
import { z } from 'zod'

export type PropertyAppraisalModel =
  /** Representation of a property appraisal */
  {
    id?: /** Unique identifier of the appraisal */ string | null | undefined
    created?: /** The date and time on which the property appraisal was created */ string | null | undefined
    modified?: /** The date and time on which the property appraisal was last modified */ string | null | undefined
    companyId?: /** Unique identifier of the appraising company */ string | null | undefined
    isExternal?: /** Flag indicating whether the appraisal is internal or external */ boolean | null | undefined
    date?: /** The date of the appraisal */ string | null | undefined
    price?: /** The appraisal value */ number | null | undefined
    fee?: PropertyCommissionFeeModel | null | undefined
    notes?: /** Free-text notes associated with the appraisal */ string | null | undefined
    _eTag?: string | null | undefined
  }
/** Representation of a property appraisal */
export const propertyAppraisalModel =
  /** Representation of a property appraisal */
  z.object({
    /** Unique identifier of the appraisal */ id: z.string().optional().nullable(),
    /** The date and time on which the property appraisal was created */ created: z.string().optional().nullable(),
    /** The date and time on which the property appraisal was last modified */
    modified: z.string().optional().nullable(),
    /** Unique identifier of the appraising company */ companyId: z.string().optional().nullable(),
    /** Flag indicating whether the appraisal is internal or external */ isExternal: z.boolean().optional().nullable(),
    /** The date of the appraisal */ date: z.string().optional().nullable(),
    /** The appraisal value */ price: z.number().int().optional().nullable(),
    fee: propertyCommissionFeeModel.optional().nullable(),
    /** Free-text notes associated with the appraisal */ notes: z.string().optional().nullable(),
    _eTag: z.string().optional().nullable(),
  })
