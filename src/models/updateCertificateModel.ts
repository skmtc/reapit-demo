/** Request body used to update an existing certificate */
export type UpdateCertificateModel = {
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  companyId?: /** The unique identifier of the company */ string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
}
