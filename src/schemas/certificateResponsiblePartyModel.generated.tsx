import { z } from 'zod'

/** Record describing the responsible party for a given type of certificate within a property entry */
export const certificateResponsiblePartyModel = /** Record describing the responsible party for a given type of certificate within a property entry */
z.object({typeId: /** Identifier for the type of certificate for which the party is responsible */
z.string().optional(), responsibleParty: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
z.string().optional()});
/** Record describing the responsible party for a given type of certificate within a property entry */
export type CertificateResponsiblePartyModel = /** Record describing the responsible party for a given type of certificate within a property entry */
{typeId?: /** Identifier for the type of certificate for which the party is responsible */
string | undefined, responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
string | undefined};