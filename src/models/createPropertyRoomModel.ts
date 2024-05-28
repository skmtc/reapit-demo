import { z } from 'zod'

/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel = z.object({
  /** The name of the room */ name: z.string().nullable().optional(),
  /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
  /** Short description of the room */ description: z.string().nullable().optional(),
})
/** Request body to create a room in the Rooms collection of a new property */
export type CreatePropertyRoomModel = {
  name?: /** The name of the room */ string | undefined
  dimensions?: /** Details about the dimensions of the room */ string | undefined
  description?: /** Short description of the room */ string | undefined
}
