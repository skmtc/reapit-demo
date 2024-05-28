import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'
import { offerContactModel, OfferContactModel } from '@/models/offerContactModel.ts'

/** Representation of an offer */
export const offerModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the offer */ id: z.string().nullable().optional(),
  /** The the date and time when the offer was created */ created: z.string().nullable().optional(),
  /** The date and time when the offer was last modified */ modified: z.string().nullable().optional(),
  /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().nullable().optional(),
  /** The unique identifier of the applicant associated to the offer */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the company associated to the offer */ companyId: z.string().nullable().optional(),
  /** The unique identifier of the contact associated to the offer */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the property associated to the offer */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().nullable().optional(),
  /** The date when the offer was made */ date: z.string().nullable().optional(),
  /** The monetary amount of the offer */ amount: z.number().nullable().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().nullable().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().nullable().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().nullable().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().nullable().optional(),
  /** A collection of contacts associated to the offer */ related: z.array(offerContactModel).nullable().optional(),
  /** App specific metadata that has been set against the offer */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the offer. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an offer */
export type OfferModel = {
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
  _eTag?: /** The ETag for the current version of the offer. Used for managing update concurrency */ string | undefined
}
