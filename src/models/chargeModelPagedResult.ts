import { z } from 'zod'
import { chargeModel } from '@/models/chargeModel.ts'
import { pagingLinkModel } from '@/models/pagingLinkModel.ts'

export const chargeModelPagedResult = z.object({
  _embedded: z.array(chargeModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
