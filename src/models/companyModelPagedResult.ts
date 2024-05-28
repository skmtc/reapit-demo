import { z } from 'zod'
import { companyModel } from '@/models/companyModel.ts'
import { pagingLinkModel } from '@/models/pagingLinkModel.ts'

export const companyModelPagedResult = z.object({
  _embedded: z.array(companyModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
