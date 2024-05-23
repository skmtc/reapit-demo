import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiConveyancingArgs = {
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
  id?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  buyerId?: Array<string> | undefined | null
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined | null
  metadata?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
}
export const getApiConveyancingFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  id,
  propertyId,
  buyerId,
  embed,
  metadata,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
}: UseGetApiConveyancingArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${querySerialiser({ args: { pageSize, pageNumber, sortBy, id, propertyId, buyerId, embed, metadata, createdFrom, createdTo, modifiedFrom, modifiedTo }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
            isExternal: z.boolean().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            propertyAddress: z.string().nullable().optional(),
            vendor: z.string().nullable().optional(),
            vendorId: z.string().nullable().optional(),
            vendorSolicitorId: z.string().nullable().optional(),
            buyer: z.string().nullable().optional(),
            buyerId: z.string().nullable().optional(),
            buyerSolicitorId: z.string().nullable().optional(),
            externalAgent: z.string().nullable().optional(),
            externalAgentId: z.string().nullable().optional(),
            upwardChainId: z.string().nullable().optional(),
            downwardChainId: z.string().nullable().optional(),
            fixturesAndFittingsCompleted: z.string().nullable().optional(),
            deedsRequested: z.string().nullable().optional(),
            deedsReceived: z.string().nullable().optional(),
            enquiriesSent: z.string().nullable().optional(),
            enquiriesAnswered: z.string().nullable().optional(),
            searchesPaid: z.string().nullable().optional(),
            searchesApplied: z.string().nullable().optional(),
            searchesReceived: z.string().nullable().optional(),
            contractSent: z.string().nullable().optional(),
            contractReceived: z.string().nullable().optional(),
            contractApproved: z.string().nullable().optional(),
            contractVendorSigned: z.string().nullable().optional(),
            contractBuyerSigned: z.string().nullable().optional(),
            mortgageRequired: z.string().nullable().optional(),
            mortgageLoanPercentage: z.number().int().nullable().optional(),
            mortgageSubmitted: z.string().nullable().optional(),
            mortgageOfferReceived: z.string().nullable().optional(),
            mortgageLenderId: z.string().nullable().optional(),
            mortgageBrokerId: z.string().nullable().optional(),
            mortgageSurveyDate: z.string().nullable().optional(),
            mortgageSurveyorId: z.string().nullable().optional(),
            additionalSurveyRequired: z.string().nullable().optional(),
            additionalSurveyDate: z.string().nullable().optional(),
            additionalSurveyorId: z.string().nullable().optional(),
            exchangedVendor: z.string().nullable().optional(),
            exchangedBuyer: z.string().nullable().optional(),
            completion: z.string().nullable().optional(),
            checkListItems: z
              .array(
                z.object({
                  name: z.string().nullable().optional(),
                  completed: z.boolean().nullable().optional(),
                  completedDate: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
            _eTag: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiConveyancing = (args: UseGetApiConveyancingArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiConveyancingIdArgs = {
  id: string
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined | null
}
export const getApiConveyancingIdFn = async ({ id, embed }: UseGetApiConveyancingIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
      isExternal: z.boolean().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      propertyAddress: z.string().nullable().optional(),
      vendor: z.string().nullable().optional(),
      vendorId: z.string().nullable().optional(),
      vendorSolicitorId: z.string().nullable().optional(),
      buyer: z.string().nullable().optional(),
      buyerId: z.string().nullable().optional(),
      buyerSolicitorId: z.string().nullable().optional(),
      externalAgent: z.string().nullable().optional(),
      externalAgentId: z.string().nullable().optional(),
      upwardChainId: z.string().nullable().optional(),
      downwardChainId: z.string().nullable().optional(),
      fixturesAndFittingsCompleted: z.string().nullable().optional(),
      deedsRequested: z.string().nullable().optional(),
      deedsReceived: z.string().nullable().optional(),
      enquiriesSent: z.string().nullable().optional(),
      enquiriesAnswered: z.string().nullable().optional(),
      searchesPaid: z.string().nullable().optional(),
      searchesApplied: z.string().nullable().optional(),
      searchesReceived: z.string().nullable().optional(),
      contractSent: z.string().nullable().optional(),
      contractReceived: z.string().nullable().optional(),
      contractApproved: z.string().nullable().optional(),
      contractVendorSigned: z.string().nullable().optional(),
      contractBuyerSigned: z.string().nullable().optional(),
      mortgageRequired: z.string().nullable().optional(),
      mortgageLoanPercentage: z.number().int().nullable().optional(),
      mortgageSubmitted: z.string().nullable().optional(),
      mortgageOfferReceived: z.string().nullable().optional(),
      mortgageLenderId: z.string().nullable().optional(),
      mortgageBrokerId: z.string().nullable().optional(),
      mortgageSurveyDate: z.string().nullable().optional(),
      mortgageSurveyorId: z.string().nullable().optional(),
      additionalSurveyRequired: z.string().nullable().optional(),
      additionalSurveyDate: z.string().nullable().optional(),
      additionalSurveyorId: z.string().nullable().optional(),
      exchangedVendor: z.string().nullable().optional(),
      exchangedBuyer: z.string().nullable().optional(),
      completion: z.string().nullable().optional(),
      checkListItems: z
        .array(
          z.object({
            name: z.string().nullable().optional(),
            completed: z.boolean().nullable().optional(),
            completedDate: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      _eTag: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
    })
    .parse(data)
}
export const useGetApiConveyancingId = (args: UseGetApiConveyancingIdArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdFn(args),
  })

  return result
}
export type UsePatchApiConveyancingIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body for updating sales progression information on an existing offer */
  {
    vendorSolicitorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    string | undefined | null
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
    string | undefined | null
    fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
    string | undefined | null
    deedsRequested?: /** The date when the title deeds were requested from land registry */ string | undefined | null
    deedsReceived?: /** The date when the title deeds were received from land registry */ string | undefined | null
    enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */
    string | undefined | null
    enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
    string | undefined | null
    searchesPaid?: /** The date when the buyer paid for conveyancing searches */ string | undefined | null
    searchesApplied?: /** The date when conveyancing searches were applied for */ string | undefined | null
    searchesReceived?: /** The date when conveyancing searches were received */ string | undefined | null
    contractSent?: /** The date when the draft contract was sent */ string | undefined | null
    contractReceived?: /** The date when the draft contract was received */ string | undefined | null
    contractApproved?: /** The date when the contract was approved */ string | undefined | null
    contractVendorSigned?: /** The date when the vendor signed the approved contract */ string | undefined | null
    contractBuyerSigned?: /** The date when the buyer signed the approved contract */ string | undefined | null
    mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
    string | undefined | null
    mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */ number | undefined | null
    mortgageSubmitted?: /** The date when the mortgage application was submitted */ string | undefined | null
    mortgageOfferReceived?: /** The date when the mortgage offer was received */ string | undefined | null
    mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */
    string | undefined | null
    mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */ string | undefined | null
    mortgageSurveyDate?: /** The date of the mortgage valuation/survey */ string | undefined | null
    mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
    string | undefined | null
    additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
    string | undefined | null
    additionalSurveyDate?: /** The date of the additional survey */ string | undefined | null
    additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
    string | undefined | null
    exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | undefined | null
    exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | undefined | null
    completion?: /** The date when the sale completed */ string | undefined | null
    metadata?: /** App specific metadata to set against this conveyancing record */
    Record<string, Record<string, never>> | undefined | null
  }
}
export const patchApiConveyancingIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiConveyancingIdArgs) => {
  const res = await fetch(
    `/conveyancing/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiConveyancingId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiConveyancingIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseGetApiConveyancingIdChainArgs = {
  id: string
  pageSize?: number | undefined | null
  pageNumber?: number | undefined | null
  sortBy?: string | undefined | null
}
export const getApiConveyancingIdChainFn = async ({
  id,
  pageSize,
  pageNumber,
  sortBy,
}: UseGetApiConveyancingIdChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/conveyancing/${id}/chain${querySerialiser({ args: { pageSize, pageNumber, sortBy }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJraWQiOiJFXC9TcnVuTzVCR0xBMk1yT3phY2RjWFkwVVdqRVB1cVB5N3hIb1FWbnJGdz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQiLCJjb2duaXRvOmdyb3VwcyI6WyJGb3VuZGF0aW9uc0RldmVsb3BlckFkbWluIiwiRm91bmRhdGlvbnNEZXZlbG9wZXIiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfZVE3ZHJlTnpKIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNGo3dTQ5Ym5pcDhnc2Y0dWp0ZXU3b2prb3EiLCJvcmlnaW5fanRpIjoiNGJjMzM0MjQtMTJiZC00YTc0LTkwMTItOWU4ZTY0MjI4MzRkIiwiZXZlbnRfaWQiOiJlYTkyODNmZi1mMTc3LTRiYTMtOTM0MS1jNTYyYWZlZjc1N2UiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFnZW5jeUNsb3VkXC9sYW5kbG9yZHMucmVhZCBhZ2VuY3lDbG91ZFwvb2ZmaWNlcy53cml0ZSBhZ2VuY3lDbG91ZFwvb2ZmZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL3Byb3BlcnRpZXMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3Rhc2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLnJlYWQgYWdlbmN5Q2xvdWRcL2lkZW50aXR5Y2hlY2tzLndyaXRlIGFnZW5jeUNsb3VkXC9rZXlzLnJlYWQgYWdlbmN5Q2xvdWRcL2xhbmRsb3Jkcy53cml0ZSBhZ2VuY3lDbG91ZFwvY29udmV5YW5jaW5nLndyaXRlIGFnZW5jeUNsb3VkXC9lbnF1aXJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvc291cmNlcy53cml0ZSBvcGVuaWQgcHJvZmlsZSBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2FwcGxpY2FudHMucmVhZCBhZ2VuY3lDbG91ZFwvbmVnb3RpYXRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvdmVuZG9ycy53cml0ZSBwaG9uZSBhZ2VuY3lDbG91ZFwvaW52b2ljZXMucmVhZCBhZ2VuY3lDbG91ZFwvam91cm5hbGVudHJpZXMucmVhZCBhZ2VuY3lDbG91ZFwvY29tcGFuaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9wcm9wZXJ0aWVzLnJlYWQgYWdlbmN5Q2xvdWRcL3ZlbmRvcnMucmVhZCBhZ2VuY3lDbG91ZFwvY29udGFjdHMucmVhZCBhZ2VuY3lDbG91ZFwvZG9jdW1lbnRzLndyaXRlIGFnZW5jeUNsb3VkXC90YXNrcy53cml0ZSBhZ2VuY3lDbG91ZFwvdGVuYW5jaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb21wYW5pZXMucmVhZCBhZ2VuY3lDbG91ZFwvZW5xdWlyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9jb252ZXlhbmNpbmcucmVhZCBhZ2VuY3lDbG91ZFwva2V5cy53cml0ZSBhZ2VuY3lDbG91ZFwvd29ya3NvcmRlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2RvY3VtZW50cy5yZWFkIGFnZW5jeUNsb3VkXC9vZmZlcnMud3JpdGUgYWdlbmN5Q2xvdWRcL2pvdXJuYWxlbnRyaWVzLndyaXRlIGFnZW5jeUNsb3VkXC9hcHBvaW50bWVudHMud3JpdGUgYWdlbmN5Q2xvdWRcL3RlbmFuY2llcy5yZWFkIGFnZW5jeUNsb3VkXC90cmFuc2FjdGlvbnMud3JpdGUgZW1haWwgYWdlbmN5Q2xvdWRcL2FyZWFzLndyaXRlIGFnZW5jeUNsb3VkXC9yZWZlcnJhbHMud3JpdGUgYWdlbmN5Q2xvdWRcL3JlZmVycmFscy5yZWFkIGFnZW5jeUNsb3VkXC9jb250YWN0cy53cml0ZSBhZ2VuY3lDbG91ZFwvcHJvZHVjdC5hcHAgYWdlbmN5Q2xvdWRcL3dvcmtzb3JkZXJzLnJlYWQgYWdlbmN5Q2xvdWRcL29mZmljZXMucmVhZCBhZ2VuY3lDbG91ZFwvYXBwb2ludG1lbnRzLnJlYWQgYWdlbmN5Q2xvdWRcL3RyYW5zYWN0aW9ucy5yZWFkIiwiYXV0aF90aW1lIjoxNzE2NDEwNjMyLCJleHAiOjE3MTY0MTQyNDAsImlhdCI6MTcxNjQxMDY0MCwianRpIjoiMTI5YTA4YzYtMmI3Yy00OGRhLTg5YjUtZTM3MmYzZTIyZmJhIiwidXNlcm5hbWUiOiJmMzhiN2Y4Yi02ZDEzLTRiYWYtYjE4ZS03OTM5MWNiNmMxNGQifQ.JxgKXe_FdMeU0yMIsiMqE9xNjfkvmeQcl3R3MB_do_J7gvGEgx7m-2yGJqxE5_l-fK4v3b6KnJLyYhdWaF0rqlkjEYmx477K69XCQf8Y_WxoEEiD33Z6sJiMxlF3X0lPwNhswtuzxHPDq3ZQqhjNT_dTVuGT-XFILbKn0ZYeVjVezgs-YSq6ZTEGZwhMt8DFDRezWj8q0gyR1IO51zW8gf7vLrVV5nKmPPWAgDiObSaZQGxPMhwopiENVLK3DTeF1d1214VESQQaEwxA0WZLZXxDidtH9vc2vFyvQ_9Fb_j-Mz1d47WOgWyGwyuYbLtIse3EltHowig7k2BFMa4cCQ`,
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
            isExternal: z.boolean().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            propertyAddress: z.string().nullable().optional(),
            vendor: z.string().nullable().optional(),
            vendorId: z.string().nullable().optional(),
            vendorSolicitorId: z.string().nullable().optional(),
            buyer: z.string().nullable().optional(),
            buyerId: z.string().nullable().optional(),
            buyerSolicitorId: z.string().nullable().optional(),
            externalAgent: z.string().nullable().optional(),
            externalAgentId: z.string().nullable().optional(),
            upwardChainId: z.string().nullable().optional(),
            downwardChainId: z.string().nullable().optional(),
            fixturesAndFittingsCompleted: z.string().nullable().optional(),
            deedsRequested: z.string().nullable().optional(),
            deedsReceived: z.string().nullable().optional(),
            enquiriesSent: z.string().nullable().optional(),
            enquiriesAnswered: z.string().nullable().optional(),
            searchesPaid: z.string().nullable().optional(),
            searchesApplied: z.string().nullable().optional(),
            searchesReceived: z.string().nullable().optional(),
            contractSent: z.string().nullable().optional(),
            contractReceived: z.string().nullable().optional(),
            contractApproved: z.string().nullable().optional(),
            contractVendorSigned: z.string().nullable().optional(),
            contractBuyerSigned: z.string().nullable().optional(),
            mortgageRequired: z.string().nullable().optional(),
            mortgageLoanPercentage: z.number().int().nullable().optional(),
            mortgageSubmitted: z.string().nullable().optional(),
            mortgageOfferReceived: z.string().nullable().optional(),
            mortgageLenderId: z.string().nullable().optional(),
            mortgageBrokerId: z.string().nullable().optional(),
            mortgageSurveyDate: z.string().nullable().optional(),
            mortgageSurveyorId: z.string().nullable().optional(),
            additionalSurveyRequired: z.string().nullable().optional(),
            additionalSurveyDate: z.string().nullable().optional(),
            additionalSurveyorId: z.string().nullable().optional(),
            exchangedVendor: z.string().nullable().optional(),
            exchangedBuyer: z.string().nullable().optional(),
            completion: z.string().nullable().optional(),
            checkListItems: z
              .array(
                z.object({
                  name: z.string().nullable().optional(),
                  completed: z.boolean().nullable().optional(),
                  completedDate: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
            _eTag: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
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
export const useGetApiConveyancingIdChain = (args: UseGetApiConveyancingIdChainArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdChainFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiConveyancingIdDownwardArgs = {
  id: string
  body: /** Request body for associating this offer to another one below it in the chain */
  {
    offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined | null
    propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined | null
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined | null
    buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
    string | undefined | null
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
    string | undefined | null
  }
}
export const postApiConveyancingIdDownwardFn = async ({ id, body }: UsePostApiConveyancingIdDownwardArgs) => {
  const res = await fetch(
    `/conveyancing/${id}/downward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiConveyancingIdDownward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiConveyancingIdDownwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseDeleteApiConveyancingIdDownwardArgs = { id: string }
export const deleteApiConveyancingIdDownwardFn = async ({ id }: UseDeleteApiConveyancingIdDownwardArgs) => {
  const res = await fetch(
    `/conveyancing/${id}/downward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiConveyancingIdDownward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdDownwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UsePostApiConveyancingIdUpwardArgs = {
  id: string
  body: /** Request body for associating this offer to another one above it in the chain */
  {
    offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined | null
    propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined | null
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined | null
    vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
    string | undefined | null
    vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
    string | undefined | null
  }
}
export const postApiConveyancingIdUpwardFn = async ({ id, body }: UsePostApiConveyancingIdUpwardArgs) => {
  const res = await fetch(
    `/conveyancing/${id}/upward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiConveyancingIdUpward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiConveyancingIdUpwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
export type UseDeleteApiConveyancingIdUpwardArgs = { id: string }
export const deleteApiConveyancingIdUpwardFn = async ({ id }: UseDeleteApiConveyancingIdUpwardArgs) => {
  const res = await fetch(
    `/conveyancing/${id}/upward${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_DENO_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiConveyancingIdUpward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdUpwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    },
  })
}
