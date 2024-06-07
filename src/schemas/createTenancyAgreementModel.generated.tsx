import { z } from 'zod'

/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export const createTenancyAgreementModel = /** Request body used to set party agreements to a specific clause in a tenancy agreement */
z.object({landlord: /** A flag to determine if the landlord has agreed */
z.boolean().optional(), tenant: /** A flag to determine if the tenant has agreed */
z.boolean().optional()});
/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export type CreateTenancyAgreementModel = /** Request body used to set party agreements to a specific clause in a tenancy agreement */
{landlord?: /** A flag to determine if the landlord has agreed */
boolean | undefined, tenant?: /** A flag to determine if the tenant has agreed */
boolean | undefined};