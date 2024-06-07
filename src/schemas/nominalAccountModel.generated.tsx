import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Model representing a nominal account */
export const nominalAccountModel = /** Model representing a nominal account */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the nominal account */
z.string().optional(), created: /** The date and time when the nominal account was created */
z.string().optional(), modified: /** The date and time when the nominal account was last modified */
z.string().optional(), name: /** The nominal account name */
z.string().optional(), appliesToWorksOrders: /** Flag indicating whether or not the nominal account can be associated with works orders */
z.boolean().optional()});
/** Model representing a nominal account */
export type NominalAccountModel = /** Model representing a nominal account */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the nominal account */
string | undefined, created?: /** The date and time when the nominal account was created */
string | undefined, modified?: /** The date and time when the nominal account was last modified */
string | undefined, name?: /** The nominal account name */
string | undefined, appliesToWorksOrders?: /** Flag indicating whether or not the nominal account can be associated with works orders */
boolean | undefined};