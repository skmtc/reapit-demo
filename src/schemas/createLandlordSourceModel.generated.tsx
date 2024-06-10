import { z } from 'zod'

/** Request body used to set the source of a new landlord */
export const createLandlordSourceModel =
  /** Request body used to set the source of a new landlord */
  z.object({
    /** The unique identifier of the source of the landlord */ id: z.string().optional().nullable(),
    /** The source type (office/source) */ type: z.string().optional().nullable(),
  })
/** Request body used to set the source of a new landlord */
export type CreateLandlordSourceModel =
  /** Request body used to set the source of a new landlord */
  {
    id?: /** The unique identifier of the source of the landlord */ string | null | undefined
    type?: /** The source type (office/source) */ string | null | undefined
  }
