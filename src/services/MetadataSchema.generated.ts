import { schemaModelPagedResult } from '@/schemas/schemaModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiMetadataMetadataSchemaFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  entityType?: string | null | undefined
}
export const getApiMetadataMetadataSchemaFn = async ({
  pageSize,
  pageNumber,
  entityType,
}: GetApiMetadataMetadataSchemaFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema${querySerialiser({ args: { pageSize, pageNumber, entityType }, options: defaultQuerySerialiserOptions })}`,
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

  return schemaModelPagedResult.parse(data)
}
export const useGetApiMetadataMetadataSchema = (args: GetApiMetadataMetadataSchemaFnArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
