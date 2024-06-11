import { z } from 'zod'

/** Payload to create a metadata record */
export const createMetadataRequest =
  /** Payload to create a metadata record */
  z.object({
    /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    entityType: z.string(),
    /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
    entityId: z.string().optional().nullable(),
    /** The JSON document to store */ metadata: z.string(),
  })
/** Payload to create a metadata record */
export type CreateMetadataRequest =
  /** Payload to create a metadata record */
  {
    entityType: /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    string
    entityId?:
      | /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
      string
      | null
      | undefined
    metadata: /** The JSON document to store */ string
  }