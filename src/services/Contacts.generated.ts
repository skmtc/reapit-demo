import { contactModelPagedResult } from '@/schemas/contactModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateContactModel } from '@/schemas/createContactModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiContactsFnArgs = {
  pageSize?: number | null | undefined
  pageNumber?: number | null | undefined
  sortBy?: string | null | undefined
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  address?: string | null | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | null | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
}
export const getApiContactsFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  contactDetail,
  email,
  negotiatorId,
  officeId,
  address,
  identityCheck,
  name,
  nameType,
  marketingConsent,
  marketingConsentFilterType,
  active,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
  extrasField,
}: GetApiContactsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, contactDetail, email, negotiatorId, officeId, address, identityCheck, name, nameType, marketingConsent, marketingConsentFilterType, active, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata, extrasField }, options: defaultQuerySerialiserOptions })}`,
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

  return contactModelPagedResult.parse(data)
}
export const useGetApiContacts = (args: GetApiContactsFnArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type PostApiContactsFnArgs = { body: CreateContactModel }
export const postApiContactsFn = async ({ body }: PostApiContactsFnArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/contacts/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiContacts = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiContactsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    },
  })
}
