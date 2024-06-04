import {
  journalEntryModelPagedResult,
  CreateJournalEntryModel,
  landlordJournalEntryModelPagedResult,
  CreateBulkJournalEntryModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiJournalEntriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined
  associatedType?: string | undefined
  associatedId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export const getApiJournalEntriesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  associatedType,
  associatedId,
  negotiatorId,
  propertyId,
  typeId,
  createdFrom,
  createdTo,
}: UseGetApiJournalEntriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, associatedType, associatedId, negotiatorId, propertyId, typeId, createdFrom, createdTo }, options: defaultQuerySerialiserOptions })}`,
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

  return journalEntryModelPagedResult.parse(data)
}
export const useGetApiJournalEntries = (args: UseGetApiJournalEntriesArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateJournalEntryArgs = { body: CreateJournalEntryModel }
export const createJournalEntryFn = async ({ body }: UseCreateJournalEntryArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateJournalEntry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createJournalEntryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    },
  })
}
export type UseGetApiJournalEntriesLandlordsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  landlordId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export const getApiJournalEntriesLandlordsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  landlordId,
  negotiatorId,
  propertyId,
  type,
  createdFrom,
  createdTo,
}: UseGetApiJournalEntriesLandlordsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/landlords${querySerialiser({ args: { pageSize, pageNumber, sortBy, landlordId, negotiatorId, propertyId, type, createdFrom, createdTo }, options: defaultQuerySerialiserOptions })}`,
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

  return landlordJournalEntryModelPagedResult.parse(data)
}
export const useGetApiJournalEntriesLandlords = (args: UseGetApiJournalEntriesLandlordsArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateBulkJournalEntryArgs = { body: CreateBulkJournalEntryModel }
export const createBulkJournalEntryFn = async ({ body }: UseCreateBulkJournalEntryArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/journalEntries/bulk${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateBulkJournalEntry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createBulkJournalEntryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    },
  })
}
