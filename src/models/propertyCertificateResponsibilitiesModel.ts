import { z } from 'zod'
import { certificateResponsiblePartyModel } from '@/models/certificateResponsiblePartyModel.ts'

/** Representation of certificate responsibilities configured for a property */
export const propertyCertificateResponsibilitiesModel = z.object({
  /** The id of the property to which the configured certificate responsibilities apply */
  id: z.string().nullable().optional(),
  /** The date and time on which the property was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property was last modified */ modified: z.string().nullable().optional(),
  /** The configured certificate responsibilities */
  responsibleParties: z.array(certificateResponsiblePartyModel).nullable().optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
