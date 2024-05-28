import { UpdateCertificateResponsiblePartyModel } from '@/models/updateCertificateResponsiblePartyModel.ts'

/** Object containing a collection of certificate type to responsible party mappings */
export type UpdateCertificateResponsibilitiesModel = {
  responsibleParties?: /** A collection of certificate type to responsible party mappings */
  Array<UpdateCertificateResponsiblePartyModel> | undefined
}
