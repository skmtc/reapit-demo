import { CreateOfferModel, offerModelPagedResult, offerModel, UpdateOfferModel } from '@/schemas/index.ts'
import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useMutation, useQueryClient, useQuery, keepPreviousData } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseCreateOfferArgs = { body: CreateOfferModel }
export const createOfferFn = async ({ body }: UseCreateOfferArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateOffer = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOfferFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    },
  })
}
export type UseGetApiOffersArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined
  id?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?:
    | Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'>
    | undefined
  address?: string | undefined
  name?: string | undefined
  amountFrom?: number | undefined
  amountTo?: number | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiOffersFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  applicantId,
  propertyId,
  status,
  address,
  name,
  amountFrom,
  amountTo,
  dateFrom,
  dateTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiOffersArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, applicantId, propertyId, status, address, name, amountFrom, amountTo, dateFrom, dateTo, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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

  return offerModelPagedResult.parse(data)
}
export const useGetApiOffers = (args: UseGetApiOffersArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiOffersIdArgs = {
  id: string
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | undefined
}
export const getApiOffersIdFn = async ({ id, embed }: UseGetApiOffersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return offerModel.parse(data)
}
export const useGetApiOffersId = ({ id, embed }: UseGetApiOffersIdArgs) => {
  const result = useQuery({
    queryKey: ['Offers', id, embed],
    queryFn: () => getApiOffersIdFn({ id, embed }),
  })

  return result
}
export type UsePatchApiOffersIdArgs = { 'If-Match'?: string; id: string; body: UpdateOfferModel }
export const patchApiOffersIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiOffersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/offers/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiOffersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiOffersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    },
  })
}