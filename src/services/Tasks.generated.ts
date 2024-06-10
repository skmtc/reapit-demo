import { taskModelPagedResult } from '@/schemas/taskModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateTaskModel } from '@/schemas/createTaskModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiTasksFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  recipientId?: Array<string> | null | undefined
  senderId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  tenancyId?: Array<string> | null | undefined
  activatesFrom?: string | null | undefined
  activatesTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
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
