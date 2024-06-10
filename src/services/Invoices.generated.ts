import { invoiceModelPagedResult } from '@/schemas/invoiceModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiInvoicesFnArgs = {
  pageNumber?: number | null | undefined
  pageSize?: number | null | undefined
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  dueDateFrom?: string | null | undefined
  dueDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiInvoicesFn = async ({
  pageNumber,
  pageSize,
  sortBy,
  negotiatorId,
  propertyId,
  status,
  dateFrom,
  dateTo,
  dueDateFrom,
  dueDateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiInvoicesFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/invoices/${querySerialiser({ args: { pageNumber, pageSize, sortBy, negotiatorId, propertyId, status, dateFrom, dateTo, dueDateFrom, dueDateTo, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return invoiceModelPagedResult.parse(data)
}
export const useGetApiInvoices = (args: GetApiInvoicesFnArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
