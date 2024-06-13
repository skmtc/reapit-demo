import { CreateJournalEntryModel } from '@/schemas/createJournalEntryModel.generated.tsx'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'
import { CreateBulkJournalEntryModel } from '@/schemas/createBulkJournalEntryModel.generated.tsx'
import { journalEntryModelPagedResult } from '@/schemas/journalEntryModelPagedResult.generated.tsx'
import { landlordJournalEntryModelPagedResult } from '@/schemas/landlordJournalEntryModelPagedResult.generated.tsx'

export type CreateJournalEntryFnArgs = { body: CreateJournalEntryModel }
export const createJournalEntryFn = async ({ body }: CreateJournalEntryFnArgs) => {
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
export type CreateBulkJournalEntryFnArgs = { body: CreateBulkJournalEntryModel }
export const createBulkJournalEntryFn = async ({ body }: CreateBulkJournalEntryFnArgs) => {
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
export type GetApiJournalEntriesFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | null | undefined
  associatedType?: string | null | undefined
  associatedId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
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
}: GetApiJournalEntriesFnArgs) => {
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
export const useGetApiJournalEntries = (args: GetApiJournalEntriesFnArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type GetApiJournalEntriesLandlordsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  landlordId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  type?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
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
}: GetApiJournalEntriesLandlordsFnArgs) => {
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
export const useGetApiJournalEntriesLandlords = (args: GetApiJournalEntriesLandlordsFnArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesLandlordsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
