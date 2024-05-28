import { z } from 'zod'
import { certificateModel } from '@/models/certificateModel.ts'
import { pagingLinkModel } from '@/models/pagingLinkModel.ts'

export const certificateModelPagedResult = z.object({
  _embedded: z.array(certificateModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
