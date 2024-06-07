import { z } from 'zod'

/** Representation of a single room in a property */
export const propertyRoomModel = /** Representation of a single room in a property */
z.object({name: /** The name of the room */
z.string().optional(), dimensions: /** Details about the dimensions of the room */
z.string().optional(), dimensionsAlt: /** Details about the alternate dimensions of the room */
z.string().optional(), description: /** Short description of the room */
z.string().optional()});
/** Representation of a single room in a property */
export type PropertyRoomModel = /** Representation of a single room in a property */
{name?: /** The name of the room */
string | undefined, dimensions?: /** Details about the dimensions of the room */
string | undefined, dimensionsAlt?: /** Details about the alternate dimensions of the room */
string | undefined, description?: /** Short description of the room */
string | undefined};