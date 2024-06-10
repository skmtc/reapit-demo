import { departmentModelPagedResult } from '@/schemas/departmentModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type GetApiDepartmentsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  id?: Array<string> | null | undefined
  name?: string | null | undefined
}
export const getApiDepartmentsFn = async ({ pageSize, pageNumber, id, name }: GetApiDepartmentsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/departments/${querySerialiser({ args: { pageSize, pageNumber, id, name }, options: defaultQuerySerialiserOptions })}`,
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

  return departmentModelPagedResult.parse(data)
}
export const useGetApiDepartments = (args: GetApiDepartmentsFnArgs) => {
  const result = useQuery({
    queryKey: ['Departments'],
    queryFn: () => getApiDepartmentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
