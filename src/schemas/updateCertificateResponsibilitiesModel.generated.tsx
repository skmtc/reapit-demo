import { z } from 'zod'
import { updateCertificateResponsiblePartyModel, UpdateCertificateResponsiblePartyModel } from '@/schemas/updateCertificateResponsiblePartyModel.generated.tsx'

/** Object containing a collection of certificate type to responsible party mappings */
export const updateCertificateResponsibilitiesModel = /** Object containing a collection of certificate type to responsible party mappings */
z.object({responsibleParties: /** A collection of certificate type to responsible party mappings */
z.array(updateCertificateResponsiblePartyModel).optional()});
/** Object containing a collection of certificate type to responsible party mappings */
export type UpdateCertificateResponsibilitiesModel = /** Object containing a collection of certificate type to responsible party mappings */
{responsibleParties?: /** A collection of certificate type to responsible party mappings */
Array<UpdateCertificateResponsiblePartyModel> | undefined};