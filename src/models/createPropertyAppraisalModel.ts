import { z } from 'zod'

/** Model for the creation of a new property appraisal */
export const createPropertyAppraisalModel = z.object({
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** The date of the appraisal */ date: z.string().nullable().optional(),
  /** The appraisal value */ price: z.number().int().nullable().optional(),
  /** Representation of the the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
      /** The commission letting fee amount */ amount: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** Free-text notes associated with the appraisal */ notes: z.string().nullable().optional(),
})
/** Model for the creation of a new property appraisal */
export type CreatePropertyAppraisalModel = {
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: /** Representation of the the commission fee for a property */
  | {
        type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
        amount?: /** The commission letting fee amount */ number | undefined
      }
    | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
}
