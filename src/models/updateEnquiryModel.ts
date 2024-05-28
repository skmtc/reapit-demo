/** Request body used to update an existing enquiry */
export type UpdateEnquiryModel = {
  applicantId?: /** The unique identifier of the applicant associated to the enquiry */ string | undefined
  status?: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
  string | undefined
}
