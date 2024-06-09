import { contactModelPagedResult } from '@/schemas/contactModelPagedResult.generated.tsx'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateContactModel } from '@/schemas/createContactModel.generated.tsx'
import { z } from 'zod'
import { useFetchError } from '@/lib/useFetchError.ts'

export type GetApiContactsFnArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'> | undefined
  id?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  email?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  address?: string | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | undefined
  name?: string | undefined
  nameType?: string | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
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
