import { z } from 'zod'
import { tenancyRenewalModel } from '@/schemas/tenancyRenewalModel.generated.tsx'
import { pagingLinkModel } from '@/schemas/pagingLinkModel.generated.tsx'

export const tenancyRenewalModelPagedResult = z.object({_embedded: z.array(tenancyRenewalModel).optional(), pageNumber: z.number().int().optional(), pageSize: z.number().int().optional(), pageCount: z.number().int().optional(), totalPageCount: z.number().int().optional(), totalCount: z.number().int().optional(), _links: z.record(z.string(), pagingLinkModel).optional()});