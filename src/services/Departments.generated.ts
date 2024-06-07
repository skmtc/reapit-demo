import { departmentModelPagedResult } from '@/schemas/departmentModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type UseGetApiDepartmentsArgs = {pageSize?: number | undefined, pageNumber?: number | undefined, id?: Array<string> | undefined, name?: string | undefined};
export const getApiDepartmentsFn = async ({pageSize, pageNumber, id, name}: UseGetApiDepartmentsArgs) => {


      const res = await fetch(
        `${import.meta.env.VITE_PLATFORM_API_URL}/departments/${querySerialiser({args:{ pageSize, pageNumber, id, name}, options: defaultQuerySerialiserOptions })}`,
        {
          method: 'GET',
          headers: {
            'api-version': 'latest',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          }
        }
      )

      const data = await res.json()
    
      return departmentModelPagedResult.parse(data)
    };
export const useGetApiDepartments = (args: UseGetApiDepartmentsArgs) => {
      const result = useQuery({
        queryKey: ['Departments'],
        queryFn: () => getApiDepartmentsFn(args),
        placeholderData: keepPreviousData
      })

      return result
    };