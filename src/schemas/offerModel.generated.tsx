import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { OfferContactModel, offerContactModel } from '@/schemas/offerContactModel.generated.tsx'
import { z } from 'zod'

export type OfferModel =
  /** Representation of an offer */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the offer */ string | null | undefined
    created?: /** The the date and time when the offer was created */ string | null | undefined
    modified?: /** The date and time when the offer was last modified */ string | null | undefined
    currency?: /** The currency that applies to monetary amounts exposed in the model */ string | null | undefined
    applicantId?: /** The unique identifier of the applicant associated to the offer */ string | null | undefined
    companyId?: /** The unique identifier of the company associated to the offer */ string | null | undefined
    contactId?: /** The unique identifier of the contact associated to the offer */ string | null | undefined
    propertyId?: /** The unique identifier of the property associated to the offer */ string | null | undefined
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | null | undefined
    date?: /** The date when the offer was made */ string | null | undefined
    amount?: /** The monetary amount of the offer */ number | null | undefined
    status?:
      | /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
      string
      | null
      | undefined
    inclusions?: /** A free text field describing items that should be included in the sale */ string | null | undefined
    exclusions?:
      | /** A free text field describing items that are explicitly excluded from the sale */
      string
      | null
      | undefined
    conditions?:
      | /** A free text field describing any other conditions set by either party that relate to the sale */
      string
      | null
      | undefined
    related?: /** A collection of contacts associated to the offer */ Array<OfferContactModel> | null | undefined
    metadata?:
      | /** App specific metadata that has been set against the offer */
      Record<string, Record<string, never>>
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the offer. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Representation of an offer */
export const offerModel =
  /** Representation of an offer */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the offer */ id: z.string().optional().nullable(),
    /** The the date and time when the offer was created */ created: z.string().optional().nullable(),
    /** The date and time when the offer was last modified */ modified: z.string().optional().nullable(),
    /** The currency that applies to monetary amounts exposed in the model */
    currency: z.string().optional().nullable(),
    /** The unique identifier of the applicant associated to the offer */ applicantId: z.string().optional().nullable(),
    /** The unique identifier of the company associated to the offer */ companyId: z.string().optional().nullable(),
    /** The unique identifier of the contact associated to the offer */ contactId: z.string().optional().nullable(),
    /** The unique identifier of the property associated to the offer */ propertyId: z.string().optional().nullable(),
    /** The unique identifier of the negotiator associated to the offer */
    negotiatorId: z.string().optional().nullable(),
    /** The date when the offer was made */ date: z.string().optional().nullable(),
    /** The monetary amount of the offer */ amount: z.number().optional().nullable(),
    /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    status: z.string().optional().nullable(),
    /** A free text field describing items that should be included in the sale */
    inclusions: z.string().optional().nullable(),
    /** A free text field describing items that are explicitly excluded from the sale */
    exclusions: z.string().optional().nullable(),
    /** A free text field describing any other conditions set by either party that relate to the sale */
    conditions: z.string().optional().nullable(),
    /** A collection of contacts associated to the offer */ related: z.array(offerContactModel).optional().nullable(),
    /** App specific metadata that has been set against the offer */
    metadata: z.record(z.string(), z.object({})).optional().nullable(),
    /** The ETag for the current version of the offer. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
