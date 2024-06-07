import { z } from 'zod'

/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel = /** Request body to create a room in the Rooms collection of a new property */
z.object({name: /** The name of the room */
z.string().optional(), dimensions: /** Details about the dimensions of the room */
z.string().optional(), description: /** Short description of the room */
z.string().optional()});
/** Request body to create a room in the Rooms collection of a new property */
export type CreatePropertyRoomModel = /** Request body to create a room in the Rooms collection of a new property */
{name?: /** The name of the room */
string | undefined, dimensions?: /** Details about the dimensions of the room */
string | undefined, description?: /** Short description of the room */
string | undefined};