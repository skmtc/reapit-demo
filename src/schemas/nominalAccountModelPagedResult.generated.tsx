import { z } from 'zod'
import { nominalAccountModel } from '@/schemas/nominalAccountModel.generated.tsx'
import { pagingLinkModel } from '@/schemas/pagingLinkModel.generated.tsx'

export const nominalAccountModelPagedResult = z.object({_embedded: z.array(nominalAccountModel).optional(), pageNumber: z.number().int().optional(), pageSize: z.number().int().optional(), pageCount: z.number().int().optional(), totalPageCount: z.number().int().optional(), totalCount: z.number().int().optional(), _links: z.record(z.string(), pagingLinkModel).optional()});