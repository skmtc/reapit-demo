import { z } from 'zod'

/** Representation of a single room in a property */
export const propertyRoomModel = z.object({
  /** The name of the room */ name: z.string().nullable().optional(),
  /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
  /** Details about the alternate dimensions of the room */ dimensionsAlt: z.string().nullable().optional(),
  /** Short description of the room */ description: z.string().nullable().optional(),
})
