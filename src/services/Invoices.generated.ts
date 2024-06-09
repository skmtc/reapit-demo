import { invoiceModelPagedResult } from '@/schemas/invoiceModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiInvoicesFnArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  dueDateFrom?: string | undefined
  dueDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
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
