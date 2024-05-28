import { z } from 'zod'

/** Record describing the responsible party for a given type of certificate within a property entry */
export const certificateResponsiblePartyModel = z.object({
  /** Identifier for the type of certificate for which the party is responsible */
  typeId: z.string().nullable().optional(),
  /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  responsibleParty: z.string().nullable().optional(),
})
/** Record describing the responsible party for a given type of certificate within a property entry */
export type CertificateResponsiblePartyModel = {
  typeId?: /** Identifier for the type of certificate for which the party is responsible */ string | undefined
  responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  string | undefined
}
