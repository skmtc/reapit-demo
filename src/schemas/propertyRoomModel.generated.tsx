import { z } from 'zod'

/** Representation of a single room in a property */
export type PropertyRoomModel =
  /** Representation of a single room in a property */
  {
    name?: /** The name of the room */ string | null | undefined
    dimensions?: /** Details about the dimensions of the room */ string | null | undefined
    dimensionsAlt?: /** Details about the alternate dimensions of the room */ string | null | undefined
    description?: /** Short description of the room */ string | null | undefined
  }
/** Representation of a single room in a property */
export const propertyRoomModel =
  /** Representation of a single room in a property */
  z.object({
    /** The name of the room */ name: z.string().optional().nullable(),
    /** Details about the dimensions of the room */ dimensions: z.string().optional().nullable(),
    /** Details about the alternate dimensions of the room */ dimensionsAlt: z.string().optional().nullable(),
    /** Short description of the room */ description: z.string().optional().nullable(),
  })
