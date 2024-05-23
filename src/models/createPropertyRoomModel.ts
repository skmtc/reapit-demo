import { z } from 'zod'

/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel = z.object({
  /** The name of the room */ name: z.string().nullable().optional(),
  /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
  /** Short description of the room */ description: z.string().nullable().optional(),
})
