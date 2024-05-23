import { z } from 'zod'

/** Representation of certificate responsibilities configured for a property */
export const propertyCertificateResponsibilitiesModel = z.object({
  /** The id of the property to which the configured certificate responsibilities apply */
  id: z.string().nullable().optional(),
  /** The date and time on which the property was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property was last modified */ modified: z.string().nullable().optional(),
  /** The configured certificate responsibilities */
  responsibleParties: z
    .array(
      /** Record describing the responsible party for a given type of certificate within a property entry */
      z.object({
        /** Identifier for the type of certificate for which the party is responsible */
        typeId: z.string().nullable().optional(),
        /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
        responsibleParty: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
