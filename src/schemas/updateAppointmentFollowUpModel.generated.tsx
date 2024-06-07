import { z } from 'zod'

/** Represents the follow up information on a single appointment */
export const updateAppointmentFollowUpModel = /** Represents the follow up information on a single appointment */
z.object({responseId: /** The unique identifier of a pre-defined follow up response type */
z.string().optional(), notes: /** The internal follow up notes to be stored against the appointment */
z.string().optional()});
/** Represents the follow up information on a single appointment */
export type UpdateAppointmentFollowUpModel = /** Represents the follow up information on a single appointment */
{responseId?: /** The unique identifier of a pre-defined follow up response type */
string | undefined, notes?: /** The internal follow up notes to be stored against the appointment */
string | undefined};