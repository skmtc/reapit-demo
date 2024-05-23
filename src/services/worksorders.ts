import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiWorksOrdersArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined | null
  id?: Array<string> | undefined | null
  companyId?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  status?:
    | Array<
        | 'pendingApproval'
        | 'pendingQuote'
        | 'raised'
        | 'raisedToChase'
        | 'landlordToComplete'
        | 'complete'
        | 'cancelled'
        | 'quoteAccepted'
      >
    | undefined
    | null
  tenancyId?: Array<string> | undefined | null
  typeId?: Array<string> | undefined | null
  extrasField?: Array<string> | undefined | null
  completedFrom?: string | undefined | null
  completedTo?: string | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  requiredFrom?: string | undefined | null
  requiredTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
}
export const getApiWorksOrdersFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  companyId,
  negotiatorId,
  propertyId,
  status,
  tenancyId,
  typeId,
  extrasField,
  completedFrom,
  completedTo,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  requiredFrom,
  requiredTo,
  metadata,
}: UseGetApiWorksOrdersArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, companyId, negotiatorId, propertyId, status, tenancyId, typeId, extrasField, completedFrom, completedTo, createdFrom, createdTo, modifiedFrom, modifiedTo, requiredFrom, requiredTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            companyId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            reporter: z.string().nullable().optional(),
            priority: z.string().nullable().optional(),
            booked: z.string().nullable().optional(),
            required: z.string().nullable().optional(),
            completed: z.string().nullable().optional(),
            totalNetAmount: z.number().nullable().optional(),
            totalVatAmount: z.number().nullable().optional(),
            totalGrossAmount: z.number().nullable().optional(),
            items: z
              .array(
                z.object({
                  _links: z
                    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
                    .nullable()
                    .optional(),
                  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
                  id: z.string().nullable().optional(),
                  worksOrderId: z.string().nullable().optional(),
                  created: z.string().nullable().optional(),
                  modified: z.string().nullable().optional(),
                  notes: z.string().nullable().optional(),
                  chargeTo: z.string().nullable().optional(),
                  estimate: z.number().nullable().optional(),
                  estimateType: z.string().nullable().optional(),
                  netAmount: z.number().nullable().optional(),
                  vatAmount: z.number().nullable().optional(),
                  grossAmount: z.number().nullable().optional(),
                  reserveAmount: z.number().nullable().optional(),
                  nominalAccountId: z.string().nullable().optional(),
                  _eTag: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            extrasField: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiWorksOrders = (args: UseGetApiWorksOrdersArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateWorksOrderArgs = {
  body: /** Request body used to create a new works order */
  {
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined | null
    propertyId: /** The unique identifier of the property where the work is to be carried out */ string
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined | null
    negotiatorId: /** The unique identifier of the negotiator that booked the works order */ string
    typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined | null
    status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string
    description: /** A free text description of the work required */ string
    reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */ string
    priority?: /** The priority level of the works order (low/medium/high) */ string | undefined | null
    booked?: /** The date when the works order was booked */ string | undefined | null
    required?: /** The date when the work is required to be completed by */ string | undefined | null
    completed?: /** The date when the work was completed */ string | undefined | null
    items: /** Individual work items to attach to the works order */
    Array</** Representation of a works order item */
    {
      notes: /** The notes attached to the works order item */ string
      chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */ string
      estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
      number | undefined | null
      estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined | null
      netAmount?: /** The net cost of the work to be carried out */ number | undefined | null
      vatAmount?: /** The cost of the vat associated with the work */ number | undefined | null
      reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
      number | undefined | null
    }>
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const createWorksOrderFn = async ({ body }: UseCreateWorksOrderArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const useCreateWorksOrder = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdArgs = {
  id: string
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | undefined | null
  extrasField?: Array<string> | undefined | null
}
export const getApiWorksOrdersIdFn = async ({ id, embed, extrasField }: UseGetApiWorksOrdersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}${querySerialiser({ args: { embed, extrasField }, options: defaultQuerySerialiserOptions })}`,
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
      companyId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      reporter: z.string().nullable().optional(),
      priority: z.string().nullable().optional(),
      booked: z.string().nullable().optional(),
      required: z.string().nullable().optional(),
      completed: z.string().nullable().optional(),
      totalNetAmount: z.number().nullable().optional(),
      totalVatAmount: z.number().nullable().optional(),
      totalGrossAmount: z.number().nullable().optional(),
      items: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            worksOrderId: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            chargeTo: z.string().nullable().optional(),
            estimate: z.number().nullable().optional(),
            estimateType: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
            grossAmount: z.number().nullable().optional(),
            reserveAmount: z.number().nullable().optional(),
            nominalAccountId: z.string().nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      extrasField: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiWorksOrdersId = (args: UseGetApiWorksOrdersIdArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdFn(args),
  })

  return result
}
export type UsePatchApiWorksOrdersIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing works order */
  {
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined | null
    propertyId?: /** The unique identifier of the property where the work is to be carried out */
    string | undefined | null
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined | null
    negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | undefined | null
    typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined | null
    status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string | undefined | null
    description?: /** A free text description of the work required */ string | undefined | null
    reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | undefined | null
    priority?: /** The priority level of the works order (low/medium/high) */ string | undefined | null
    booked?: /** The date when the works order was booked */ string | undefined | null
    required?: /** The date when the work is required to be completed by */ string | undefined | null
    completed?: /** The date when the work was completed */ string | undefined | null
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiWorksOrdersIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiWorksOrdersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiWorksOrdersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdItemsArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  id: string
}
export const getApiWorksOrdersIdItemsFn = async ({ pageSize, pageNumber, id }: UseGetApiWorksOrdersIdItemsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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
            worksOrderId: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            chargeTo: z.string().nullable().optional(),
            estimate: z.number().nullable().optional(),
            estimateType: z.string().nullable().optional(),
            netAmount: z.number().nullable().optional(),
            vatAmount: z.number().nullable().optional(),
            grossAmount: z.number().nullable().optional(),
            reserveAmount: z.number().nullable().optional(),
            nominalAccountId: z.string().nullable().optional(),
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
export const useGetApiWorksOrdersIdItems = (args: UseGetApiWorksOrdersIdItemsArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseCreateWorksOrderItemArgs = {
  id: string
  body: /** Representation of a works order item */
  {
    notes: /** The notes attached to the works order item */ string
    chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */ string
    estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    number | undefined | null
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined | null
    netAmount?: /** The net cost of the work to be carried out */ number | undefined | null
    vatAmount?: /** The cost of the vat associated with the work */ number | undefined | null
    reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    number | undefined | null
  }
}
export const createWorksOrderItemFn = async ({ id, body }: UseCreateWorksOrderItemArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
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
export const useCreateWorksOrderItem = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderItemFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UseGetApiWorksOrdersIdItemsItemIdArgs = { id: string; itemId: string }
export const getApiWorksOrdersIdItemsItemIdFn = async ({ id, itemId }: UseGetApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
      worksOrderId: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      notes: z.string().nullable().optional(),
      chargeTo: z.string().nullable().optional(),
      estimate: z.number().nullable().optional(),
      estimateType: z.string().nullable().optional(),
      netAmount: z.number().nullable().optional(),
      vatAmount: z.number().nullable().optional(),
      grossAmount: z.number().nullable().optional(),
      reserveAmount: z.number().nullable().optional(),
      nominalAccountId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiWorksOrdersIdItemsItemId = (args: UseGetApiWorksOrdersIdItemsItemIdArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsItemIdFn(args),
  })

  return result
}
export type UseDeleteApiWorksOrdersIdItemsItemIdArgs = { id: string; itemId: string }
export const deleteApiWorksOrdersIdItemsItemIdFn = async ({ id, itemId }: UseDeleteApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, itemId }),
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
export const useDeleteApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
export type UsePatchApiWorksOrdersIdItemsItemIdArgs = {
  'If-Match'?: string
  id: string
  itemId: string
  body: /** Representation of a works order item */
  {
    notes?: /** The notes attached to the works order item */ string | undefined | null
    chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */ string | undefined | null
    estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    number | undefined | null
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined | null
    netAmount?: /** The net cost of the work to be carried out */ number | undefined | null
    vatAmount?: /** The cost of the vat associated with the work */ number | undefined | null
    reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    number | undefined | null
  }
}
export const patchApiWorksOrdersIdItemsItemIdFn = async ({
  'If-Match': IfMatch,
  id,
  itemId,
  body,
}: UsePatchApiWorksOrdersIdItemsItemIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/worksOrders/${id}/items/${itemId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, itemId, body }),
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
export const usePatchApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    },
  })
}
