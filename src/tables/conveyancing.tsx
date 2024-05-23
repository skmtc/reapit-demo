import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  isExternal?: boolean | undefined | null
  propertyId?: string | undefined | null
  propertyAddress?: string | undefined | null
  vendor?: string | undefined | null
  vendorId?: string | undefined | null
  vendorSolicitorId?: string | undefined | null
  buyer?: string | undefined | null
  buyerId?: string | undefined | null
  buyerSolicitorId?: string | undefined | null
  externalAgent?: string | undefined | null
  externalAgentId?: string | undefined | null
  upwardChainId?: string | undefined | null
  downwardChainId?: string | undefined | null
  fixturesAndFittingsCompleted?: string | undefined | null
  deedsRequested?: string | undefined | null
  deedsReceived?: string | undefined | null
  enquiriesSent?: string | undefined | null
  enquiriesAnswered?: string | undefined | null
  searchesPaid?: string | undefined | null
  searchesApplied?: string | undefined | null
  searchesReceived?: string | undefined | null
  contractSent?: string | undefined | null
  contractReceived?: string | undefined | null
  contractApproved?: string | undefined | null
  contractVendorSigned?: string | undefined | null
  contractBuyerSigned?: string | undefined | null
  mortgageRequired?: string | undefined | null
  mortgageLoanPercentage?: number | undefined | null
  mortgageSubmitted?: string | undefined | null
  mortgageOfferReceived?: string | undefined | null
  mortgageLenderId?: string | undefined | null
  mortgageBrokerId?: string | undefined | null
  mortgageSurveyDate?: string | undefined | null
  mortgageSurveyorId?: string | undefined | null
  additionalSurveyRequired?: string | undefined | null
  additionalSurveyDate?: string | undefined | null
  additionalSurveyorId?: string | undefined | null
  exchangedVendor?: string | undefined | null
  exchangedBuyer?: string | undefined | null
  completion?: string | undefined | null
  checkListItems?:
    | Array<{
        name?: string | undefined | null
        completed?: boolean | undefined | null
        completedDate?: string | undefined | null
      }>
    | undefined
    | null
  _eTag?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type ConveyancingArgs = {
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  isExternal?: boolean | undefined | null
  propertyId?: string | undefined | null
  propertyAddress?: string | undefined | null
  vendor?: string | undefined | null
  vendorId?: string | undefined | null
  vendorSolicitorId?: string | undefined | null
  buyer?: string | undefined | null
  buyerId?: string | undefined | null
  buyerSolicitorId?: string | undefined | null
  externalAgent?: string | undefined | null
  externalAgentId?: string | undefined | null
  upwardChainId?: string | undefined | null
  downwardChainId?: string | undefined | null
  fixturesAndFittingsCompleted?: string | undefined | null
  deedsRequested?: string | undefined | null
  deedsReceived?: string | undefined | null
  enquiriesSent?: string | undefined | null
  enquiriesAnswered?: string | undefined | null
  searchesPaid?: string | undefined | null
  searchesApplied?: string | undefined | null
  searchesReceived?: string | undefined | null
  contractSent?: string | undefined | null
  contractReceived?: string | undefined | null
  contractApproved?: string | undefined | null
  contractVendorSigned?: string | undefined | null
  contractBuyerSigned?: string | undefined | null
  mortgageRequired?: string | undefined | null
  mortgageLoanPercentage?: number | undefined | null
  mortgageSubmitted?: string | undefined | null
  mortgageOfferReceived?: string | undefined | null
  mortgageLenderId?: string | undefined | null
  mortgageBrokerId?: string | undefined | null
  mortgageSurveyDate?: string | undefined | null
  mortgageSurveyorId?: string | undefined | null
  additionalSurveyRequired?: string | undefined | null
  additionalSurveyDate?: string | undefined | null
  additionalSurveyorId?: string | undefined | null
  exchangedVendor?: string | undefined | null
  exchangedBuyer?: string | undefined | null
  completion?: string | undefined | null
  checkListItems?:
    | Array<{
        name?: string | undefined | null
        completed?: boolean | undefined | null
        completedDate?: string | undefined | null
      }>
    | undefined
    | null
  _eTag?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type ConveyancingIdChainArgs = {
  id: string
  sortBy?: string | undefined | null
  columns: ColumnsList<ConveyancingIdChainBody>
}

export const conveyancingColumnHelper = createColumnHelper<ConveyancingBody>()

export const getConveyancingColumn = (property: string, { label, format }: ConfigItemLookup<ConveyancingBody>) => {
  return match(property)
    .with('_links', () => {
      return conveyancingColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return conveyancingColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return conveyancingColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return conveyancingColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return conveyancingColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('isExternal', () => {
      return conveyancingColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header: label('isExternal'),
        cell: (info) => format(info.getValue(), 'isExternal'),
      })
    })
    .with('propertyId', () => {
      return conveyancingColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('propertyAddress', () => {
      return conveyancingColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header: label('propertyAddress'),
        cell: (info) => format(info.getValue(), 'propertyAddress'),
      })
    })
    .with('vendor', () => {
      return conveyancingColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header: label('vendor'),
        cell: (info) => format(info.getValue(), 'vendor'),
      })
    })
    .with('vendorId', () => {
      return conveyancingColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header: label('vendorId'),
        cell: (info) => format(info.getValue(), 'vendorId'),
      })
    })
    .with('vendorSolicitorId', () => {
      return conveyancingColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header: label('vendorSolicitorId'),
        cell: (info) => format(info.getValue(), 'vendorSolicitorId'),
      })
    })
    .with('buyer', () => {
      return conveyancingColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header: label('buyer'),
        cell: (info) => format(info.getValue(), 'buyer'),
      })
    })
    .with('buyerId', () => {
      return conveyancingColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header: label('buyerId'),
        cell: (info) => format(info.getValue(), 'buyerId'),
      })
    })
    .with('buyerSolicitorId', () => {
      return conveyancingColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header: label('buyerSolicitorId'),
        cell: (info) => format(info.getValue(), 'buyerSolicitorId'),
      })
    })
    .with('externalAgent', () => {
      return conveyancingColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header: label('externalAgent'),
        cell: (info) => format(info.getValue(), 'externalAgent'),
      })
    })
    .with('externalAgentId', () => {
      return conveyancingColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header: label('externalAgentId'),
        cell: (info) => format(info.getValue(), 'externalAgentId'),
      })
    })
    .with('upwardChainId', () => {
      return conveyancingColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header: label('upwardChainId'),
        cell: (info) => format(info.getValue(), 'upwardChainId'),
      })
    })
    .with('downwardChainId', () => {
      return conveyancingColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header: label('downwardChainId'),
        cell: (info) => format(info.getValue(), 'downwardChainId'),
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      return conveyancingColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header: label('fixturesAndFittingsCompleted'),
        cell: (info) => format(info.getValue(), 'fixturesAndFittingsCompleted'),
      })
    })
    .with('deedsRequested', () => {
      return conveyancingColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header: label('deedsRequested'),
        cell: (info) => format(info.getValue(), 'deedsRequested'),
      })
    })
    .with('deedsReceived', () => {
      return conveyancingColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header: label('deedsReceived'),
        cell: (info) => format(info.getValue(), 'deedsReceived'),
      })
    })
    .with('enquiriesSent', () => {
      return conveyancingColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header: label('enquiriesSent'),
        cell: (info) => format(info.getValue(), 'enquiriesSent'),
      })
    })
    .with('enquiriesAnswered', () => {
      return conveyancingColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header: label('enquiriesAnswered'),
        cell: (info) => format(info.getValue(), 'enquiriesAnswered'),
      })
    })
    .with('searchesPaid', () => {
      return conveyancingColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header: label('searchesPaid'),
        cell: (info) => format(info.getValue(), 'searchesPaid'),
      })
    })
    .with('searchesApplied', () => {
      return conveyancingColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header: label('searchesApplied'),
        cell: (info) => format(info.getValue(), 'searchesApplied'),
      })
    })
    .with('searchesReceived', () => {
      return conveyancingColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header: label('searchesReceived'),
        cell: (info) => format(info.getValue(), 'searchesReceived'),
      })
    })
    .with('contractSent', () => {
      return conveyancingColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header: label('contractSent'),
        cell: (info) => format(info.getValue(), 'contractSent'),
      })
    })
    .with('contractReceived', () => {
      return conveyancingColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header: label('contractReceived'),
        cell: (info) => format(info.getValue(), 'contractReceived'),
      })
    })
    .with('contractApproved', () => {
      return conveyancingColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header: label('contractApproved'),
        cell: (info) => format(info.getValue(), 'contractApproved'),
      })
    })
    .with('contractVendorSigned', () => {
      return conveyancingColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header: label('contractVendorSigned'),
        cell: (info) => format(info.getValue(), 'contractVendorSigned'),
      })
    })
    .with('contractBuyerSigned', () => {
      return conveyancingColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header: label('contractBuyerSigned'),
        cell: (info) => format(info.getValue(), 'contractBuyerSigned'),
      })
    })
    .with('mortgageRequired', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header: label('mortgageRequired'),
        cell: (info) => format(info.getValue(), 'mortgageRequired'),
      })
    })
    .with('mortgageLoanPercentage', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header: label('mortgageLoanPercentage'),
        cell: (info) => format(info.getValue(), 'mortgageLoanPercentage'),
      })
    })
    .with('mortgageSubmitted', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header: label('mortgageSubmitted'),
        cell: (info) => format(info.getValue(), 'mortgageSubmitted'),
      })
    })
    .with('mortgageOfferReceived', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header: label('mortgageOfferReceived'),
        cell: (info) => format(info.getValue(), 'mortgageOfferReceived'),
      })
    })
    .with('mortgageLenderId', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header: label('mortgageLenderId'),
        cell: (info) => format(info.getValue(), 'mortgageLenderId'),
      })
    })
    .with('mortgageBrokerId', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header: label('mortgageBrokerId'),
        cell: (info) => format(info.getValue(), 'mortgageBrokerId'),
      })
    })
    .with('mortgageSurveyDate', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header: label('mortgageSurveyDate'),
        cell: (info) => format(info.getValue(), 'mortgageSurveyDate'),
      })
    })
    .with('mortgageSurveyorId', () => {
      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header: label('mortgageSurveyorId'),
        cell: (info) => format(info.getValue(), 'mortgageSurveyorId'),
      })
    })
    .with('additionalSurveyRequired', () => {
      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header: label('additionalSurveyRequired'),
        cell: (info) => format(info.getValue(), 'additionalSurveyRequired'),
      })
    })
    .with('additionalSurveyDate', () => {
      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header: label('additionalSurveyDate'),
        cell: (info) => format(info.getValue(), 'additionalSurveyDate'),
      })
    })
    .with('additionalSurveyorId', () => {
      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header: label('additionalSurveyorId'),
        cell: (info) => format(info.getValue(), 'additionalSurveyorId'),
      })
    })
    .with('exchangedVendor', () => {
      return conveyancingColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header: label('exchangedVendor'),
        cell: (info) => format(info.getValue(), 'exchangedVendor'),
      })
    })
    .with('exchangedBuyer', () => {
      return conveyancingColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header: label('exchangedBuyer'),
        cell: (info) => format(info.getValue(), 'exchangedBuyer'),
      })
    })
    .with('completion', () => {
      return conveyancingColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header: label('completion'),
        cell: (info) => format(info.getValue(), 'completion'),
      })
    })
    .with('checkListItems', () => {
      return conveyancingColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header: label('checkListItems'),
        cell: (info) => format(info.getValue(), 'checkListItems'),
      })
    })
    .with('_eTag', () => {
      return conveyancingColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .with('metadata', () => {
      return conveyancingColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
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

export const getConveyancingIdChainColumn = (
  property: string,
  { label, format }: ConfigItemLookup<ConveyancingIdChainBody>,
) => {
  return match(property)
    .with('_links', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('isExternal', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header: label('isExternal'),
        cell: (info) => format(info.getValue(), 'isExternal'),
      })
    })
    .with('propertyId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('propertyAddress', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header: label('propertyAddress'),
        cell: (info) => format(info.getValue(), 'propertyAddress'),
      })
    })
    .with('vendor', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header: label('vendor'),
        cell: (info) => format(info.getValue(), 'vendor'),
      })
    })
    .with('vendorId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header: label('vendorId'),
        cell: (info) => format(info.getValue(), 'vendorId'),
      })
    })
    .with('vendorSolicitorId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header: label('vendorSolicitorId'),
        cell: (info) => format(info.getValue(), 'vendorSolicitorId'),
      })
    })
    .with('buyer', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header: label('buyer'),
        cell: (info) => format(info.getValue(), 'buyer'),
      })
    })
    .with('buyerId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header: label('buyerId'),
        cell: (info) => format(info.getValue(), 'buyerId'),
      })
    })
    .with('buyerSolicitorId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header: label('buyerSolicitorId'),
        cell: (info) => format(info.getValue(), 'buyerSolicitorId'),
      })
    })
    .with('externalAgent', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header: label('externalAgent'),
        cell: (info) => format(info.getValue(), 'externalAgent'),
      })
    })
    .with('externalAgentId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header: label('externalAgentId'),
        cell: (info) => format(info.getValue(), 'externalAgentId'),
      })
    })
    .with('upwardChainId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header: label('upwardChainId'),
        cell: (info) => format(info.getValue(), 'upwardChainId'),
      })
    })
    .with('downwardChainId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header: label('downwardChainId'),
        cell: (info) => format(info.getValue(), 'downwardChainId'),
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header: label('fixturesAndFittingsCompleted'),
        cell: (info) => format(info.getValue(), 'fixturesAndFittingsCompleted'),
      })
    })
    .with('deedsRequested', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header: label('deedsRequested'),
        cell: (info) => format(info.getValue(), 'deedsRequested'),
      })
    })
    .with('deedsReceived', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header: label('deedsReceived'),
        cell: (info) => format(info.getValue(), 'deedsReceived'),
      })
    })
    .with('enquiriesSent', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header: label('enquiriesSent'),
        cell: (info) => format(info.getValue(), 'enquiriesSent'),
      })
    })
    .with('enquiriesAnswered', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header: label('enquiriesAnswered'),
        cell: (info) => format(info.getValue(), 'enquiriesAnswered'),
      })
    })
    .with('searchesPaid', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header: label('searchesPaid'),
        cell: (info) => format(info.getValue(), 'searchesPaid'),
      })
    })
    .with('searchesApplied', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header: label('searchesApplied'),
        cell: (info) => format(info.getValue(), 'searchesApplied'),
      })
    })
    .with('searchesReceived', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header: label('searchesReceived'),
        cell: (info) => format(info.getValue(), 'searchesReceived'),
      })
    })
    .with('contractSent', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header: label('contractSent'),
        cell: (info) => format(info.getValue(), 'contractSent'),
      })
    })
    .with('contractReceived', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header: label('contractReceived'),
        cell: (info) => format(info.getValue(), 'contractReceived'),
      })
    })
    .with('contractApproved', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header: label('contractApproved'),
        cell: (info) => format(info.getValue(), 'contractApproved'),
      })
    })
    .with('contractVendorSigned', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header: label('contractVendorSigned'),
        cell: (info) => format(info.getValue(), 'contractVendorSigned'),
      })
    })
    .with('contractBuyerSigned', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header: label('contractBuyerSigned'),
        cell: (info) => format(info.getValue(), 'contractBuyerSigned'),
      })
    })
    .with('mortgageRequired', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header: label('mortgageRequired'),
        cell: (info) => format(info.getValue(), 'mortgageRequired'),
      })
    })
    .with('mortgageLoanPercentage', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header: label('mortgageLoanPercentage'),
        cell: (info) => format(info.getValue(), 'mortgageLoanPercentage'),
      })
    })
    .with('mortgageSubmitted', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header: label('mortgageSubmitted'),
        cell: (info) => format(info.getValue(), 'mortgageSubmitted'),
      })
    })
    .with('mortgageOfferReceived', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header: label('mortgageOfferReceived'),
        cell: (info) => format(info.getValue(), 'mortgageOfferReceived'),
      })
    })
    .with('mortgageLenderId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header: label('mortgageLenderId'),
        cell: (info) => format(info.getValue(), 'mortgageLenderId'),
      })
    })
    .with('mortgageBrokerId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header: label('mortgageBrokerId'),
        cell: (info) => format(info.getValue(), 'mortgageBrokerId'),
      })
    })
    .with('mortgageSurveyDate', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header: label('mortgageSurveyDate'),
        cell: (info) => format(info.getValue(), 'mortgageSurveyDate'),
      })
    })
    .with('mortgageSurveyorId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header: label('mortgageSurveyorId'),
        cell: (info) => format(info.getValue(), 'mortgageSurveyorId'),
      })
    })
    .with('additionalSurveyRequired', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header: label('additionalSurveyRequired'),
        cell: (info) => format(info.getValue(), 'additionalSurveyRequired'),
      })
    })
    .with('additionalSurveyDate', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header: label('additionalSurveyDate'),
        cell: (info) => format(info.getValue(), 'additionalSurveyDate'),
      })
    })
    .with('additionalSurveyorId', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header: label('additionalSurveyorId'),
        cell: (info) => format(info.getValue(), 'additionalSurveyorId'),
      })
    })
    .with('exchangedVendor', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header: label('exchangedVendor'),
        cell: (info) => format(info.getValue(), 'exchangedVendor'),
      })
    })
    .with('exchangedBuyer', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header: label('exchangedBuyer'),
        cell: (info) => format(info.getValue(), 'exchangedBuyer'),
      })
    })
    .with('completion', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header: label('completion'),
        cell: (info) => format(info.getValue(), 'completion'),
      })
    })
    .with('checkListItems', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header: label('checkListItems'),
        cell: (info) => format(info.getValue(), 'checkListItems'),
      })
    })
    .with('_eTag', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
      })
    })
    .with('metadata', () => {
      return conveyancingIdChainColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
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
