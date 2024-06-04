import { schemaModel, schemaModelPagedResult } from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type UseGetApiMetadataMetadataSchemaIdArgs = { id: string }
export const getApiMetadataMetadataSchemaIdFn = async ({ id }: UseGetApiMetadataMetadataSchemaIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/metadata/metadataSchema/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return schemaModel.parse(data)
}
export const useGetApiMetadataMetadataSchemaId = ({ id }: UseGetApiMetadataMetadataSchemaIdArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema', id],
    queryFn: () => getApiMetadataMetadataSchemaIdFn({ id }),
  })

  return result
}
export type UseGetApiMetadataMetadataSchemaArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  entityType?: string | undefined
}
export const getApiMetadataMetadataSchemaFn = async ({
  pageSize,
  pageNumber,
  entityType,
}: UseGetApiMetadataMetadataSchemaArgs) => {
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
export const useGetApiMetadataMetadataSchema = (args: UseGetApiMetadataMetadataSchemaArgs) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
