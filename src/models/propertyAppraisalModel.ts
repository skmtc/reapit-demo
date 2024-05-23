import { z } from 'zod'

/** Representation of a property appraisal */
export const propertyAppraisalModel = z.object({
  /** Unique identifier of the appraisal */ id: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** Flag indicating whether the appraisal is internal or external */ isExternal: z.boolean().nullable().optional(),
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
  _eTag: z.string().nullable().optional(),
})
