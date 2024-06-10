import { conveyancingModelPagedResult } from '@/schemas/conveyancingModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiConveyancingFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  buyerId?: Array<string> | null | undefined
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | null | undefined
  metadata?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
}
export const getApiConveyancingFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  propertyId,
  buyerId,
  embed,
  metadata,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: GetApiConveyancingFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, propertyId, buyerId, embed, metadata, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
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

  return conveyancingModelPagedResult.parse(data)
}
export const useGetApiConveyancing = (args: GetApiConveyancingFnArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
