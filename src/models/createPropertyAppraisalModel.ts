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
