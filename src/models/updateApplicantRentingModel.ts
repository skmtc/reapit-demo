/** The details specific to applicants with a marketingMode of renting */
export type UpdateApplicantRentingModel = {
  moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
  term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
  rentFrom?: /** The lower bound of the applicant's budget */ number | undefined
  rentTo?: /** The upper bound of the applicant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  string | undefined
  furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
  Array<string> | undefined
  positionId?: /** The identifier of the applicant's renting position */ string | undefined
}
