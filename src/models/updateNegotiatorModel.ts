/** Request body used to update an existing negotiator */
export type UpdateNegotiatorModel = {
  name?: /** The name of the negotiator */ string | undefined
  jobTitle?: /** The job title of the negotiator */ string | undefined
  active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
  workPhone?: /** The work phone number of the negotiator */ string | undefined
  mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
  email?: /** The email address of the negotiator */ string | undefined
  diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  metadata?: /** App specific metadata to set against the negotiator */
  Record<string, Record<string, never>> | undefined
}
