import { z } from 'zod'
import { creditModel } from '@/models/creditModel.ts'
import { pagingLinkModel } from '@/models/pagingLinkModel.ts'

export const creditModelPagedResult = z.object({
  _embedded: z.array(creditModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
