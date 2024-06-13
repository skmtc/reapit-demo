import { z } from 'zod'

/** Request body to create a room in the Rooms collection of a new property */
export type CreatePropertyRoomModel =
  /** Request body to create a room in the Rooms collection of a new property */
  {
    name?: /** The name of the room */ string | null | undefined
    dimensions?: /** Details about the dimensions of the room */ string | null | undefined
    description?: /** Short description of the room */ string | null | undefined
  }
/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel =
  /** Request body to create a room in the Rooms collection of a new property */
  z.object({
    /** The name of the room */ name: z.string().optional().nullable(),
    /** Details about the dimensions of the room */ dimensions: z.string().optional().nullable(),
    /** Short description of the room */ description: z.string().optional().nullable(),
  })
