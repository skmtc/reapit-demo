import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiConveyancing, useGetApiConveyancingIdChain } from '@/services/conveyancing.ts'

export const conveyancingBody = z.object({
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
export type ConveyancingBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  isExternal?: boolean | undefined
  propertyId?: string | undefined
  propertyAddress?: string | undefined
  vendor?: string | undefined
  vendorId?: string | undefined
  vendorSolicitorId?: string | undefined
  buyer?: string | undefined
  buyerId?: string | undefined
  buyerSolicitorId?: string | undefined
  externalAgent?: string | undefined
  externalAgentId?: string | undefined
  upwardChainId?: string | undefined
  downwardChainId?: string | undefined
  fixturesAndFittingsCompleted?: string | undefined
  deedsRequested?: string | undefined
  deedsReceived?: string | undefined
  enquiriesSent?: string | undefined
  enquiriesAnswered?: string | undefined
  searchesPaid?: string | undefined
  searchesApplied?: string | undefined
  searchesReceived?: string | undefined
  contractSent?: string | undefined
  contractReceived?: string | undefined
  contractApproved?: string | undefined
  contractVendorSigned?: string | undefined
  contractBuyerSigned?: string | undefined
  mortgageRequired?: string | undefined
  mortgageLoanPercentage?: number | undefined
  mortgageSubmitted?: string | undefined
  mortgageOfferReceived?: string | undefined
  mortgageLenderId?: string | undefined
  mortgageBrokerId?: string | undefined
  mortgageSurveyDate?: string | undefined
  mortgageSurveyorId?: string | undefined
  additionalSurveyRequired?: string | undefined
  additionalSurveyDate?: string | undefined
  additionalSurveyorId?: string | undefined
  exchangedVendor?: string | undefined
  exchangedBuyer?: string | undefined
  completion?: string | undefined
  checkListItems?:
    | Array<{ name?: string | undefined; completed?: boolean | undefined; completedDate?: string | undefined }>
    | undefined
  _eTag?: string | undefined
  metadata?: Record<string, Record<string, never>> | undefined
}
export type ConveyancingArgs = {
  sortBy?: string | undefined
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  buyerId?: Array<string> | undefined
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined
  metadata?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  columns: ColumnsList<ConveyancingBody>
}
export const conveyancingIdChainBody = z.object({
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
export type ConveyancingIdChainBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  isExternal?: boolean | undefined
  propertyId?: string | undefined
  propertyAddress?: string | undefined
  vendor?: string | undefined
  vendorId?: string | undefined
  vendorSolicitorId?: string | undefined
  buyer?: string | undefined
  buyerId?: string | undefined
  buyerSolicitorId?: string | undefined
  externalAgent?: string | undefined
  externalAgentId?: string | undefined
  upwardChainId?: string | undefined
  downwardChainId?: string | undefined
  fixturesAndFittingsCompleted?: string | undefined
  deedsRequested?: string | undefined
  deedsReceived?: string | undefined
  enquiriesSent?: string | undefined
  enquiriesAnswered?: string | undefined
  searchesPaid?: string | undefined
  searchesApplied?: string | undefined
  searchesReceived?: string | undefined
  contractSent?: string | undefined
  contractReceived?: string | undefined
  contractApproved?: string | undefined
  contractVendorSigned?: string | undefined
  contractBuyerSigned?: string | undefined
  mortgageRequired?: string | undefined
  mortgageLoanPercentage?: number | undefined
  mortgageSubmitted?: string | undefined
  mortgageOfferReceived?: string | undefined
  mortgageLenderId?: string | undefined
  mortgageBrokerId?: string | undefined
  mortgageSurveyDate?: string | undefined
  mortgageSurveyorId?: string | undefined
  additionalSurveyRequired?: string | undefined
  additionalSurveyDate?: string | undefined
  additionalSurveyorId?: string | undefined
  exchangedVendor?: string | undefined
  exchangedBuyer?: string | undefined
  completion?: string | undefined
  checkListItems?:
    | Array<{ name?: string | undefined; completed?: boolean | undefined; completedDate?: string | undefined }>
    | undefined
  _eTag?: string | undefined
  metadata?: Record<string, Record<string, never>> | undefined
}
export type ConveyancingIdChainArgs = {
  id: string
  sortBy?: string | undefined
  columns: ColumnsList<ConveyancingIdChainBody>
}

export const conveyancingColumnHelper = createColumnHelper<ConveyancingBody>()

export const getConveyancingColumn = (property: string, modelConfig: ModelConfig<ConveyancingBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return conveyancingColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return conveyancingColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return conveyancingColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return conveyancingColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return conveyancingColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isExternal', () => {
      const { label: header, format } = modelConfig['isExternal']

      return conveyancingColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return conveyancingColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyAddress', () => {
      const { label: header, format } = modelConfig['propertyAddress']

      return conveyancingColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendor', () => {
      const { label: header, format } = modelConfig['vendor']

      return conveyancingColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendorId', () => {
      const { label: header, format } = modelConfig['vendorId']

      return conveyancingColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendorSolicitorId', () => {
      const { label: header, format } = modelConfig['vendorSolicitorId']

      return conveyancingColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyer', () => {
      const { label: header, format } = modelConfig['buyer']

      return conveyancingColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyerId', () => {
      const { label: header, format } = modelConfig['buyerId']

      return conveyancingColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyerSolicitorId', () => {
      const { label: header, format } = modelConfig['buyerSolicitorId']

      return conveyancingColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalAgent', () => {
      const { label: header, format } = modelConfig['externalAgent']

      return conveyancingColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalAgentId', () => {
      const { label: header, format } = modelConfig['externalAgentId']

      return conveyancingColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('upwardChainId', () => {
      const { label: header, format } = modelConfig['upwardChainId']

      return conveyancingColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('downwardChainId', () => {
      const { label: header, format } = modelConfig['downwardChainId']

      return conveyancingColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      const { label: header, format } = modelConfig['fixturesAndFittingsCompleted']

      return conveyancingColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('deedsRequested', () => {
      const { label: header, format } = modelConfig['deedsRequested']

      return conveyancingColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('deedsReceived', () => {
      const { label: header, format } = modelConfig['deedsReceived']

      return conveyancingColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('enquiriesSent', () => {
      const { label: header, format } = modelConfig['enquiriesSent']

      return conveyancingColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('enquiriesAnswered', () => {
      const { label: header, format } = modelConfig['enquiriesAnswered']

      return conveyancingColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesPaid', () => {
      const { label: header, format } = modelConfig['searchesPaid']

      return conveyancingColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesApplied', () => {
      const { label: header, format } = modelConfig['searchesApplied']

      return conveyancingColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesReceived', () => {
      const { label: header, format } = modelConfig['searchesReceived']

      return conveyancingColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractSent', () => {
      const { label: header, format } = modelConfig['contractSent']

      return conveyancingColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractReceived', () => {
      const { label: header, format } = modelConfig['contractReceived']

      return conveyancingColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractApproved', () => {
      const { label: header, format } = modelConfig['contractApproved']

      return conveyancingColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractVendorSigned', () => {
      const { label: header, format } = modelConfig['contractVendorSigned']

      return conveyancingColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractBuyerSigned', () => {
      const { label: header, format } = modelConfig['contractBuyerSigned']

      return conveyancingColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageRequired', () => {
      const { label: header, format } = modelConfig['mortgageRequired']

      return conveyancingColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageLoanPercentage', () => {
      const { label: header, format } = modelConfig['mortgageLoanPercentage']

      return conveyancingColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSubmitted', () => {
      const { label: header, format } = modelConfig['mortgageSubmitted']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageOfferReceived', () => {
      const { label: header, format } = modelConfig['mortgageOfferReceived']

      return conveyancingColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageLenderId', () => {
      const { label: header, format } = modelConfig['mortgageLenderId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageBrokerId', () => {
      const { label: header, format } = modelConfig['mortgageBrokerId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSurveyDate', () => {
      const { label: header, format } = modelConfig['mortgageSurveyDate']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSurveyorId', () => {
      const { label: header, format } = modelConfig['mortgageSurveyorId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyRequired', () => {
      const { label: header, format } = modelConfig['additionalSurveyRequired']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyDate', () => {
      const { label: header, format } = modelConfig['additionalSurveyDate']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyorId', () => {
      const { label: header, format } = modelConfig['additionalSurveyorId']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('exchangedVendor', () => {
      const { label: header, format } = modelConfig['exchangedVendor']

      return conveyancingColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('exchangedBuyer', () => {
      const { label: header, format } = modelConfig['exchangedBuyer']

      return conveyancingColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('completion', () => {
      const { label: header, format } = modelConfig['completion']

      return conveyancingColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkListItems', () => {
      const { label: header, format } = modelConfig['checkListItems']

      return conveyancingColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return conveyancingColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return conveyancingColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useConveyancingTable = (args: ConveyancingArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancing({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const conveyancingIdChainColumnHelper = createColumnHelper<ConveyancingIdChainBody>()

export const getConveyancingIdChainColumn = (property: string, modelConfig: ModelConfig<ConveyancingIdChainBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return conveyancingIdChainColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return conveyancingIdChainColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return conveyancingIdChainColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return conveyancingIdChainColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return conveyancingIdChainColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isExternal', () => {
      const { label: header, format } = modelConfig['isExternal']

      return conveyancingIdChainColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyAddress', () => {
      const { label: header, format } = modelConfig['propertyAddress']

      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendor', () => {
      const { label: header, format } = modelConfig['vendor']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendorId', () => {
      const { label: header, format } = modelConfig['vendorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vendorSolicitorId', () => {
      const { label: header, format } = modelConfig['vendorSolicitorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyer', () => {
      const { label: header, format } = modelConfig['buyer']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyerId', () => {
      const { label: header, format } = modelConfig['buyerId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('buyerSolicitorId', () => {
      const { label: header, format } = modelConfig['buyerSolicitorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalAgent', () => {
      const { label: header, format } = modelConfig['externalAgent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalAgentId', () => {
      const { label: header, format } = modelConfig['externalAgentId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('upwardChainId', () => {
      const { label: header, format } = modelConfig['upwardChainId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('downwardChainId', () => {
      const { label: header, format } = modelConfig['downwardChainId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      const { label: header, format } = modelConfig['fixturesAndFittingsCompleted']

      return conveyancingIdChainColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('deedsRequested', () => {
      const { label: header, format } = modelConfig['deedsRequested']

      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('deedsReceived', () => {
      const { label: header, format } = modelConfig['deedsReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('enquiriesSent', () => {
      const { label: header, format } = modelConfig['enquiriesSent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('enquiriesAnswered', () => {
      const { label: header, format } = modelConfig['enquiriesAnswered']

      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesPaid', () => {
      const { label: header, format } = modelConfig['searchesPaid']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesApplied', () => {
      const { label: header, format } = modelConfig['searchesApplied']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('searchesReceived', () => {
      const { label: header, format } = modelConfig['searchesReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractSent', () => {
      const { label: header, format } = modelConfig['contractSent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractReceived', () => {
      const { label: header, format } = modelConfig['contractReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractApproved', () => {
      const { label: header, format } = modelConfig['contractApproved']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractVendorSigned', () => {
      const { label: header, format } = modelConfig['contractVendorSigned']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('contractBuyerSigned', () => {
      const { label: header, format } = modelConfig['contractBuyerSigned']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageRequired', () => {
      const { label: header, format } = modelConfig['mortgageRequired']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageLoanPercentage', () => {
      const { label: header, format } = modelConfig['mortgageLoanPercentage']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSubmitted', () => {
      const { label: header, format } = modelConfig['mortgageSubmitted']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageOfferReceived', () => {
      const { label: header, format } = modelConfig['mortgageOfferReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageLenderId', () => {
      const { label: header, format } = modelConfig['mortgageLenderId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageBrokerId', () => {
      const { label: header, format } = modelConfig['mortgageBrokerId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSurveyDate', () => {
      const { label: header, format } = modelConfig['mortgageSurveyDate']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mortgageSurveyorId', () => {
      const { label: header, format } = modelConfig['mortgageSurveyorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyRequired', () => {
      const { label: header, format } = modelConfig['additionalSurveyRequired']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyDate', () => {
      const { label: header, format } = modelConfig['additionalSurveyDate']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalSurveyorId', () => {
      const { label: header, format } = modelConfig['additionalSurveyorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('exchangedVendor', () => {
      const { label: header, format } = modelConfig['exchangedVendor']

      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('exchangedBuyer', () => {
      const { label: header, format } = modelConfig['exchangedBuyer']

      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('completion', () => {
      const { label: header, format } = modelConfig['completion']

      return conveyancingIdChainColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkListItems', () => {
      const { label: header, format } = modelConfig['checkListItems']

      return conveyancingIdChainColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return conveyancingIdChainColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return conveyancingIdChainColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useConveyancingIdChainTable = (args: ConveyancingIdChainArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancingIdChain({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
