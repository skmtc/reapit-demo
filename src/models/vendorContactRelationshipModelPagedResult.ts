import { z } from 'zod'
import { vendorContactRelationshipModel } from '@/models/vendorContactRelationshipModel.ts'
import { pagingLinkModel } from '@/models/pagingLinkModel.ts'

export const vendorContactRelationshipModelPagedResult = z.object({
  _embedded: z.array(vendorContactRelationshipModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
