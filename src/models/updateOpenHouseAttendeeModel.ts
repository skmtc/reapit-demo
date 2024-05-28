/** Request body used to upda te a new open house attendee */
export type UpdateOpenHouseAttendeeModel = {
  interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  string | undefined
  notes?: /** Notes on this open house attendee */ string | undefined
}
