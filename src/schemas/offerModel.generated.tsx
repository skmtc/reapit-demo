import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'
import { offerContactModel, OfferContactModel } from '@/schemas/offerContactModel.generated.tsx'

/** Representation of an offer */
export const offerModel =
  /** Representation of an offer */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the offer */ id: z.string().optional(),
    /** The the date and time when the offer was created */ created: z.string().optional(),
    /** The date and time when the offer was last modified */ modified: z.string().optional(),
    /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().optional(),
    /** The unique identifier of the applicant associated to the offer */ applicantId: z.string().optional(),
    /** The unique identifier of the company associated to the offer */ companyId: z.string().optional(),
    /** The unique identifier of the contact associated to the offer */ contactId: z.string().optional(),
    /** The unique identifier of the property associated to the offer */ propertyId: z.string().optional(),
    /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().optional(),
    /** The date when the offer was made */ date: z.string().optional(),
    /** The monetary amount of the offer */ amount: z.number().optional(),
    /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    status: z.string().optional(),
    /** A free text field describing items that should be included in the sale */ inclusions: z.string().optional(),
    /** A free text field describing items that are explicitly excluded from the sale */
    exclusions: z.string().optional(),
    /** A free text field describing any other conditions set by either party that relate to the sale */
    conditions: z.string().optional(),
    /** A collection of contacts associated to the offer */ related: z.array(offerContactModel).optional(),
    /** App specific metadata that has been set against the offer */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the offer. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of an offer */
export type OfferModel =
  /** Representation of an offer */
  {
    _links?: Record<string, LinkModel> | undefined
    _embedded?: Record<string, Record<string, never>> | undefined
    id?: /** The unique identifier of the offer */ string | undefined
    created?: /** The the date and time when the offer was created */ string | undefined
    modified?: /** The date and time when the offer was last modified */ string | undefined
    currency?: /** The currency that applies to monetary amounts exposed in the model */ string | undefined
    applicantId?: /** The unique identifier of the applicant associated to the offer */ string | undefined
    companyId?: /** The unique identifier of the company associated to the offer */ string | undefined
    contactId?: /** The unique identifier of the contact associated to the offer */ string | undefined
    propertyId?: /** The unique identifier of the property associated to the offer */ string | undefined
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
    date?: /** The date when the offer was made */ string | undefined
    amount?: /** The monetary amount of the offer */ number | undefined
    status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string | undefined
    inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    related?: /** A collection of contacts associated to the offer */ Array<OfferContactModel> | undefined
    metadata?: /** App specific metadata that has been set against the offer */
    Record<string, Record<string, never>> | undefined
    _eTag?: /** The ETag for the current version of the offer. Used for managing update concurrency */
    string | undefined
  }
