import { z } from 'zod'

/** Representation of a works order item */
export const createWorksOrderItemModel = /** Representation of a works order item */
z.object({notes: /** The notes attached to the works order item */
z.string(), chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
z.string(), estimate: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
z.number().optional(), estimateType: /** The type of estimate supplied (agent/verbal/written) */
z.string().optional(), netAmount: /** The net cost of the work to be carried out */
z.number().optional(), vatAmount: /** The cost of the vat associated with the work */
z.number().optional(), reserveAmount: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
z.number().optional()});
/** Representation of a works order item */
export type CreateWorksOrderItemModel = /** Representation of a works order item */
{notes: /** The notes attached to the works order item */
string, chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
string, estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
number | undefined, estimateType?: /** The type of estimate supplied (agent/verbal/written) */
string | undefined, netAmount?: /** The net cost of the work to be carried out */
number | undefined, vatAmount?: /** The cost of the vat associated with the work */
number | undefined, reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
number | undefined};