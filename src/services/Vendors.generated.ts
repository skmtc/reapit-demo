import { vendorModelPagedResult } from '@/schemas/vendorModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiVendorsFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'> | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: Array<string> | undefined
  fromArchive?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  lastCallFrom?: string | undefined
  lastCallTo?: string | undefined
  nextCallFrom?: string | undefined
  nextCallTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiVendorsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  negotiatorId,
  officeId,
  email,
  fromArchive,
  address,
  name,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  lastCallFrom,
  lastCallTo,
  nextCallFrom,
  nextCallTo,
  metadata,
}: GetApiVendorsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/vendors/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, negotiatorId, officeId, email, fromArchive, address, name, createdFrom, createdTo, modifiedFrom, modifiedTo, lastCallFrom, lastCallTo, nextCallFrom, nextCallTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return vendorModelPagedResult.parse(data)
}
export const useGetApiVendors = (args: GetApiVendorsFnArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
