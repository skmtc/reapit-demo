import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

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
            activates: z.string().nullable().optional(),
            completed: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            senderId: z.string().nullable().optional(),
            text: z.string().nullable().optional(),
            landlordId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            contactId: z.string().nullable().optional(),
            recipientId: z.string().nullable().optional(),
            recipientType: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiTasks = (args: UseGetApiTasksArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTasksArgs = {
  body: /** Request body used to create a new task, which can also be an internal message */
  {
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */ string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId: /** The unique identifer of the negotiator that created the task */ string
    text: /** The textual contents of the task or message */ string
    landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
    recipientId: /** The unique identifier of the negotiator or office the task is being sent to */ string
    recipientType: /** The type of the recipient (office/negotiator) */ string
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiTasksFn = async ({ body }: UsePostApiTasksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
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
      activates: z.string().nullable().optional(),
      completed: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      senderId: z.string().nullable().optional(),
      text: z.string().nullable().optional(),
      landlordId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      contactId: z.string().nullable().optional(),
      recipientId: z.string().nullable().optional(),
      recipientType: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTasksId = (args: UseGetApiTasksIdArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksIdFn(args),
  })

  return result
}
export type UsePatchApiTasksIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing task, which can also be an internal message */
  {
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */ string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId?: /** The unique identifer of the negotiator that created the task */ string | undefined
    text?: /** The textual contents of the task or message */ string | undefined
    landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
    recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */ string | undefined
    recipientType?: /** The type of the recipient (office/negotiator) */ string | undefined
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiTasksIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiTasksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tasks/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
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
