import { z } from 'zod'
import { invoiceModel } from '@/schemas/invoiceModel.generated.tsx'
import { pagingLinkModel } from '@/schemas/pagingLinkModel.generated.tsx'

export const invoiceModelPagedResult = z.object({
  _embedded: z.array(invoiceModel).optional().nullable(),
  pageNumber: z.number().int().optional().nullable(),
  pageSize: z.number().int().optional().nullable(),
  pageCount: z.number().int().optional().nullable(),
  totalPageCount: z.number().int().optional().nullable(),
  totalCount: z.number().int().optional().nullable(),
  _links: z.record(z.string(), pagingLinkModel).optional().nullable(),
})
