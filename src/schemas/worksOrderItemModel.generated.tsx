import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a works order item */
export const worksOrderItemModel = /** Representation of a works order item */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the works order item */
z.string().optional(), worksOrderId: /** The unique identifier of the parent works order */
z.string().optional(), created: /** The date and time when the works order item was created */
z.string().optional(), modified: /** The date and time when the works order item was last modified */
z.string().optional(), notes: /** The notes attached to the works order item */
z.string().optional(), chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
z.string().optional(), estimate: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
z.number().optional(), estimateType: /** The type of estimate supplied (agent/verbal/written) */
z.string().optional(), netAmount: /** The net cost of the work to be carried out */
z.number().optional(), vatAmount: /** The additional vat cost for the work to be carried out */
z.number().optional(), grossAmount: /** The gross cost of the work to be carried out */
z.number().optional(), reserveAmount: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
z.number().optional(), nominalAccountId: /** The unique identifier of the nominal account the works order financial transactions are allocated to */
z.string().optional(), _eTag: /** The ETag for the current version of the works order item. Used for managing update concurrency */
z.string().optional()});
/** Representation of a works order item */
export type WorksOrderItemModel = /** Representation of a works order item */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the works order item */
string | undefined, worksOrderId?: /** The unique identifier of the parent works order */
string | undefined, created?: /** The date and time when the works order item was created */
string | undefined, modified?: /** The date and time when the works order item was last modified */
string | undefined, notes?: /** The notes attached to the works order item */
string | undefined, chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */
string | undefined, estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
number | undefined, estimateType?: /** The type of estimate supplied (agent/verbal/written) */
string | undefined, netAmount?: /** The net cost of the work to be carried out */
number | undefined, vatAmount?: /** The additional vat cost for the work to be carried out */
number | undefined, grossAmount?: /** The gross cost of the work to be carried out */
number | undefined, reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
number | undefined, nominalAccountId?: /** The unique identifier of the nominal account the works order financial transactions are allocated to */
string | undefined, _eTag?: /** The ETag for the current version of the works order item. Used for managing update concurrency */
string | undefined};