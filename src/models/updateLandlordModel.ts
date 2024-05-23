import { z } from 'zod'

/** Request body used to update an existing landlord */
export const updateLandlordModel = z.object({
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().nullable().optional(),
  /** Request body used to update the source of an existing landlord */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
      /** The source type (office/source) */ type: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  /** App specific metadata that to set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
