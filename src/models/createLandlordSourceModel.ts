import { z } from 'zod'

/** Request body used to set the source of a new landlord */
export const createLandlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Request body used to set the source of a new landlord */
export type CreateLandlordSourceModel = {
  id?: /** The unique identifier of the source of the landlord */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}