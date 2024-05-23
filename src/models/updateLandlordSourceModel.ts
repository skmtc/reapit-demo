import { z } from 'zod'

/** Request body used to update the source of an existing landlord */
export const updateLandlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
