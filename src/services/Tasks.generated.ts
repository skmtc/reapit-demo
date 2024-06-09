import { taskModelPagedResult } from '@/schemas/taskModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateTaskModel } from '@/schemas/createTaskModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiTasksFnArgs = {
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
}: GetApiTasksFnArgs) => {
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
export const useGetApiTasks = (args: GetApiTasksFnArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiTasksFnArgs = { body: CreateTaskModel }
export const postApiTasksFn = async ({ body }: PostApiTasksFnArgs) => {
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
export const usePostApiTasks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTasksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tasks'] })
    },
  })
}
