import { z } from 'zod'

/** Request body used for checking in a key */
export const checkInKeyModel = /** Request body used for checking in a key */
z.object({checkInNegotiatorId: /** The unique identifier of the negotiator who performed the key check in */
z.string().optional()});
/** Request body used for checking in a key */
export type CheckInKeyModel = /** Request body used for checking in a key */
{checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
string | undefined};