import { z } from 'zod'

/** Request body used to upda te a new open house attendee */
export const updateOpenHouseAttendeeModel = /** Request body used to upda te a new open house attendee */
z.object({interestLevel: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
z.string().optional(), notes: /** Notes on this open house attendee */
z.string().optional()});
/** Request body used to upda te a new open house attendee */
export type UpdateOpenHouseAttendeeModel = /** Request body used to upda te a new open house attendee */
{interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
string | undefined, notes?: /** Notes on this open house attendee */
string | undefined};