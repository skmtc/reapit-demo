import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

export type UseGetApiDepartmentsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  id?: Array<string> | undefined | null
  name?: string | undefined | null
}
export const getApiDepartmentsFn = async ({ pageSize, pageNumber, id, name }: UseGetApiDepartmentsArgs) => {
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

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            typeOptions: z.array(z.string()).nullable().optional(),
            styleOptions: z.array(z.string()).nullable().optional(),
            situationOptions: z.array(z.string()).nullable().optional(),
            parkingOptions: z.array(z.string()).nullable().optional(),
            ageOptions: z.array(z.string()).nullable().optional(),
            localityOptions: z.array(z.string()).nullable().optional(),
            specialFeaturesOptions: z.array(z.string()).nullable().optional(),
            commercialUseClassOptions: z.array(z.string()).nullable().optional(),
            commercialFloorLevelOptions: z.array(z.string()).nullable().optional(),
            hasBedrooms: z.boolean().nullable().optional(),
            hasBathrooms: z.boolean().nullable().optional(),
            hasReceptionRooms: z.boolean().nullable().optional(),
            hasParkingSpaces: z.boolean().nullable().optional(),
            hasFloorLevelEnabled: z.boolean().nullable().optional(),
            hasInternalFloorsEnabled: z.boolean().nullable().optional(),
            hasTotalFloorsEnabled: z.boolean().nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiDepartments = (args: UseGetApiDepartmentsArgs) => {
  const result = useQuery({
    queryKey: ['Departments'],
    queryFn: () => getApiDepartmentsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiDepartmentsIdArgs = { id: string }
export const getApiDepartmentsIdFn = async ({ id }: UseGetApiDepartmentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/departments/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      name: z.string().nullable().optional(),
      typeOptions: z.array(z.string()).nullable().optional(),
      styleOptions: z.array(z.string()).nullable().optional(),
      situationOptions: z.array(z.string()).nullable().optional(),
      parkingOptions: z.array(z.string()).nullable().optional(),
      ageOptions: z.array(z.string()).nullable().optional(),
      localityOptions: z.array(z.string()).nullable().optional(),
      specialFeaturesOptions: z.array(z.string()).nullable().optional(),
      commercialUseClassOptions: z.array(z.string()).nullable().optional(),
      commercialFloorLevelOptions: z.array(z.string()).nullable().optional(),
      hasBedrooms: z.boolean().nullable().optional(),
      hasBathrooms: z.boolean().nullable().optional(),
      hasReceptionRooms: z.boolean().nullable().optional(),
      hasParkingSpaces: z.boolean().nullable().optional(),
      hasFloorLevelEnabled: z.boolean().nullable().optional(),
      hasInternalFloorsEnabled: z.boolean().nullable().optional(),
      hasTotalFloorsEnabled: z.boolean().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiDepartmentsId = (args: UseGetApiDepartmentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Departments'],
    queryFn: () => getApiDepartmentsIdFn(args),
  })

  return result
}
