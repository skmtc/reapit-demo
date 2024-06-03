import { CreateTaskModel, taskModelPagedResult, taskModel, UpdateTaskModel } from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateTaskArgs = { body: CreateTaskModel }
export const createTaskFn = async ({ body }: UseCreateTaskArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTaskFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tasks'] })
    },
  })
}
export type UseGetApiTasksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | undefined
  id?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  recipientId?: Array<string> | undefined
  senderId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  tenancyId?: Array<string> | undefined
  activatesFrom?: string | undefined
  activatesTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiTasksFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  applicantId,
  contactId,
  landlordId,
  officeId,
  propertyId,
  recipientId,
  senderId,
  typeId,
  tenancyId,
  activatesFrom,
  activatesTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiTasksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, applicantId, contactId, landlordId, officeId, propertyId, recipientId, senderId, typeId, tenancyId, activatesFrom, activatesTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return taskModelPagedResult.parse(data)
}
export const useGetApiTasks = (args: UseGetApiTasksArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTasksIdArgs = {
  id: string
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | undefined
}
export const getApiTasksIdFn = async ({ id, embed }: UseGetApiTasksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return taskModel.parse(data)
}
export const useGetApiTasksId = ({ id, embed }: UseGetApiTasksIdArgs) => {
  const result = useQuery({
    queryKey: ['Tasks', id, embed],
    queryFn: () => getApiTasksIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiTasksIdArgs = { 'If-Match'?: string; id: string; body: UpdateTaskModel }
export const patchApiTasksIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiTasksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTasksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTasksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tasks'] })
    },
  })
}
