import { conveyancingModel, ConveyancingModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiConveyancing, useGetApiConveyancingIdChain } from '@/services/conveyancing.generated.ts'

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
  columns: ColumnsList<ConveyancingModel>
}
export type ConveyancingIdChainArgs = {
  id: string
  sortBy?: string | undefined
  columns: ColumnsList<ConveyancingModel>
}

export const conveyancingColumnHelper = createColumnHelper<ConveyancingModel>()

export const getConveyancingColumn = (property: string, modelConfig: ModelConfig<ConveyancingModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return conveyancingColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return conveyancingColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return conveyancingColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return conveyancingColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return conveyancingColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return conveyancingColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return conveyancingColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyAddress']

      return conveyancingColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendor']

      return conveyancingColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorId']

      return conveyancingColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendorSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorSolicitorId']

      return conveyancingColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyer']

      return conveyancingColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerId']

      return conveyancingColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyerSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerSolicitorId']

      return conveyancingColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalAgent', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgent']

      return conveyancingColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalAgentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgentId']

      return conveyancingColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('upwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['upwardChainId']

      return conveyancingColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('downwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['downwardChainId']

      return conveyancingColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      const { label: header, format, width, minWidth } = modelConfig['fixturesAndFittingsCompleted']

      return conveyancingColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deedsRequested', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsRequested']

      return conveyancingColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deedsReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsReceived']

      return conveyancingColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('enquiriesSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesSent']

      return conveyancingColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('enquiriesAnswered', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesAnswered']

      return conveyancingColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesPaid', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesPaid']

      return conveyancingColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesApplied', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesApplied']

      return conveyancingColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesReceived']

      return conveyancingColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractSent']

      return conveyancingColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractReceived']

      return conveyancingColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractApproved']

      return conveyancingColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractVendorSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractVendorSigned']

      return conveyancingColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractBuyerSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractBuyerSigned']

      return conveyancingColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageRequired']

      return conveyancingColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageLoanPercentage', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLoanPercentage']

      return conveyancingColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSubmitted', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSubmitted']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageOfferReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageOfferReceived']

      return conveyancingColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageLenderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLenderId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageBrokerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageBrokerId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyDate']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyorId']

      return conveyancingColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyRequired']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyDate']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyorId']

      return conveyancingColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('exchangedVendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedVendor']

      return conveyancingColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('exchangedBuyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedBuyer']

      return conveyancingColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('completion', () => {
      const { label: header, format, width, minWidth } = modelConfig['completion']

      return conveyancingColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkListItems', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkListItems']

      return conveyancingColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return conveyancingColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return conveyancingColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
export const conveyancingIdChainColumnHelper = createColumnHelper<ConveyancingModel>()

export const getConveyancingIdChainColumn = (property: string, modelConfig: ModelConfig<ConveyancingModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return conveyancingIdChainColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return conveyancingIdChainColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return conveyancingIdChainColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return conveyancingIdChainColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return conveyancingIdChainColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return conveyancingIdChainColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyAddress']

      return conveyancingIdChainColumnHelper.accessor((row) => row.propertyAddress, {
        id: 'propertyAddress',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendor']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendor, {
        id: 'vendor',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorId, {
        id: 'vendorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vendorSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorSolicitorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.vendorSolicitorId, {
        id: 'vendorSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyer']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyer, {
        id: 'buyer',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerId, {
        id: 'buyerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('buyerSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerSolicitorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.buyerSolicitorId, {
        id: 'buyerSolicitorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalAgent', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgent, {
        id: 'externalAgent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalAgentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgentId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.externalAgentId, {
        id: 'externalAgentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('upwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['upwardChainId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.upwardChainId, {
        id: 'upwardChainId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('downwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['downwardChainId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.downwardChainId, {
        id: 'downwardChainId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fixturesAndFittingsCompleted', () => {
      const { label: header, format, width, minWidth } = modelConfig['fixturesAndFittingsCompleted']

      return conveyancingIdChainColumnHelper.accessor((row) => row.fixturesAndFittingsCompleted, {
        id: 'fixturesAndFittingsCompleted',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deedsRequested', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsRequested']

      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsRequested, {
        id: 'deedsRequested',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('deedsReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.deedsReceived, {
        id: 'deedsReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('enquiriesSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesSent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesSent, {
        id: 'enquiriesSent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('enquiriesAnswered', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesAnswered']

      return conveyancingIdChainColumnHelper.accessor((row) => row.enquiriesAnswered, {
        id: 'enquiriesAnswered',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesPaid', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesPaid']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesPaid, {
        id: 'searchesPaid',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesApplied', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesApplied']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesApplied, {
        id: 'searchesApplied',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('searchesReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.searchesReceived, {
        id: 'searchesReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractSent']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractSent, {
        id: 'contractSent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractReceived, {
        id: 'contractReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractApproved']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractApproved, {
        id: 'contractApproved',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractVendorSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractVendorSigned']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractVendorSigned, {
        id: 'contractVendorSigned',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('contractBuyerSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractBuyerSigned']

      return conveyancingIdChainColumnHelper.accessor((row) => row.contractBuyerSigned, {
        id: 'contractBuyerSigned',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageRequired']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageRequired, {
        id: 'mortgageRequired',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageLoanPercentage', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLoanPercentage']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLoanPercentage, {
        id: 'mortgageLoanPercentage',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSubmitted', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSubmitted']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSubmitted, {
        id: 'mortgageSubmitted',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageOfferReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageOfferReceived']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageOfferReceived, {
        id: 'mortgageOfferReceived',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageLenderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLenderId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageLenderId, {
        id: 'mortgageLenderId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageBrokerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageBrokerId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageBrokerId, {
        id: 'mortgageBrokerId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyDate']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyDate, {
        id: 'mortgageSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mortgageSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.mortgageSurveyorId, {
        id: 'mortgageSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyRequired']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyRequired, {
        id: 'additionalSurveyRequired',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyDate']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyDate, {
        id: 'additionalSurveyDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyorId']

      return conveyancingIdChainColumnHelper.accessor((row) => row.additionalSurveyorId, {
        id: 'additionalSurveyorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('exchangedVendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedVendor']

      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedVendor, {
        id: 'exchangedVendor',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('exchangedBuyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedBuyer']

      return conveyancingIdChainColumnHelper.accessor((row) => row.exchangedBuyer, {
        id: 'exchangedBuyer',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('completion', () => {
      const { label: header, format, width, minWidth } = modelConfig['completion']

      return conveyancingIdChainColumnHelper.accessor((row) => row.completion, {
        id: 'completion',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkListItems', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkListItems']

      return conveyancingIdChainColumnHelper.accessor((row) => row.checkListItems, {
        id: 'checkListItems',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return conveyancingIdChainColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return conveyancingIdChainColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
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
