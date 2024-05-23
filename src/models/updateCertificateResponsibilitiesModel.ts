import { z } from 'zod'

/** Object containing a collection of certificate type to responsible party mappings */
export const updateCertificateResponsibilitiesModel = z.object({
  /** A collection of certificate type to responsible party mappings */
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
})
