import { z } from 'zod'
import { updateOfficeAddressModel, UpdateOfficeAddressModel } from '@/schemas/updateOfficeAddressModel.generated.tsx'

/** Request body used to update an existing office */
export const updateOfficeModel = /** Request body used to update an existing office */
z.object({name: /** The name of the office */
z.string().optional(), active: /** A flag denoting whether or not this office is active */
z.boolean().optional(), manager: /** The name of the office manager */
z.string().optional(), address: updateOfficeAddressModel.optional(), workPhone: /** The work phone number of the office */
z.string().optional(), email: /** The email address of the office */
z.string().optional(), metadata: /** App specific metadata to set against the office */
z.record(z.string(), z.object({})).optional()});
/** Request body used to update an existing office */
export type UpdateOfficeModel = /** Request body used to update an existing office */
{name?: /** The name of the office */
string | undefined, active?: /** A flag denoting whether or not this office is active */
boolean | undefined, manager?: /** The name of the office manager */
string | undefined, address?: UpdateOfficeAddressModel | undefined, workPhone?: /** The work phone number of the office */
string | undefined, email?: /** The email address of the office */
string | undefined, metadata?: /** App specific metadata to set against the office */
Record<string, Record<string, never>> | undefined};