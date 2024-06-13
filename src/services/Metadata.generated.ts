import { metadataModelPagedResult } from '@/schemas/metadataModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiMetadataFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  entityType?: string | null | undefined
  id?: Array<string> | null | undefined
  entityId?: Array<string> | null | undefined
  filter?: Array<string> | null | undefined
}
export const getApiMetadataFn = async ({
  pageSize,
  pageNumber,
  entityType,
  id,
  entityId,
  filter,
}: GetApiMetadataFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/${querySerialiser({ args: { pageSize, pageNumber, entityType, id, entityId, filter }, options: defaultQuerySerialiserOptions })}`,
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

  return metadataModelPagedResult.parse(data)
}
export const useGetApiMetadata = (args: GetApiMetadataFnArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
