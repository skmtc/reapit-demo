import { conveyancingModel, ConveyancingModel } from '@/schemas/conveyancingModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiConveyancing, useGetApiConveyancingIdChain } from 'services/Conveyancing.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useConveyancingTableColumnHelper = createColumnHelper<ConveyancingModel>();
export type UseConveyancingTableArgs = {sortBy?: string | undefined, id?: Array<string> | undefined, propertyId?: Array<string> | undefined, buyerId?: Array<string> | undefined, embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | undefined, metadata?: Array<string> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, columns: ColumnsList<ConveyancingModel>};
export const getuseConveyancingTableColumn = (property:string, modelConfig: ModelConfig<ConveyancingModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useConveyancingTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useConveyancingTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useConveyancingTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useConveyancingTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useConveyancingTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return useConveyancingTableColumnHelper.accessor(row => row.isExternal, {
      id: 'isExternal',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useConveyancingTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyAddress']

      return useConveyancingTableColumnHelper.accessor(row => row.propertyAddress, {
      id: 'propertyAddress',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendor']

      return useConveyancingTableColumnHelper.accessor(row => row.vendor, {
      id: 'vendor',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorId']

      return useConveyancingTableColumnHelper.accessor(row => row.vendorId, {
      id: 'vendorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendorSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorSolicitorId']

      return useConveyancingTableColumnHelper.accessor(row => row.vendorSolicitorId, {
      id: 'vendorSolicitorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyer']

      return useConveyancingTableColumnHelper.accessor(row => row.buyer, {
      id: 'buyer',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerId']

      return useConveyancingTableColumnHelper.accessor(row => row.buyerId, {
      id: 'buyerId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyerSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerSolicitorId']

      return useConveyancingTableColumnHelper.accessor(row => row.buyerSolicitorId, {
      id: 'buyerSolicitorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('externalAgent', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgent']

      return useConveyancingTableColumnHelper.accessor(row => row.externalAgent, {
      id: 'externalAgent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('externalAgentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgentId']

      return useConveyancingTableColumnHelper.accessor(row => row.externalAgentId, {
      id: 'externalAgentId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('upwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['upwardChainId']

      return useConveyancingTableColumnHelper.accessor(row => row.upwardChainId, {
      id: 'upwardChainId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('downwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['downwardChainId']

      return useConveyancingTableColumnHelper.accessor(row => row.downwardChainId, {
      id: 'downwardChainId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fixturesAndFittingsCompleted', () => {
      const { label: header, format, width, minWidth } = modelConfig['fixturesAndFittingsCompleted']

      return useConveyancingTableColumnHelper.accessor(row => row.fixturesAndFittingsCompleted, {
      id: 'fixturesAndFittingsCompleted',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('deedsRequested', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsRequested']

      return useConveyancingTableColumnHelper.accessor(row => row.deedsRequested, {
      id: 'deedsRequested',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('deedsReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsReceived']

      return useConveyancingTableColumnHelper.accessor(row => row.deedsReceived, {
      id: 'deedsReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('enquiriesSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesSent']

      return useConveyancingTableColumnHelper.accessor(row => row.enquiriesSent, {
      id: 'enquiriesSent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('enquiriesAnswered', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesAnswered']

      return useConveyancingTableColumnHelper.accessor(row => row.enquiriesAnswered, {
      id: 'enquiriesAnswered',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesPaid', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesPaid']

      return useConveyancingTableColumnHelper.accessor(row => row.searchesPaid, {
      id: 'searchesPaid',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesApplied', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesApplied']

      return useConveyancingTableColumnHelper.accessor(row => row.searchesApplied, {
      id: 'searchesApplied',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesReceived']

      return useConveyancingTableColumnHelper.accessor(row => row.searchesReceived, {
      id: 'searchesReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractSent']

      return useConveyancingTableColumnHelper.accessor(row => row.contractSent, {
      id: 'contractSent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractReceived']

      return useConveyancingTableColumnHelper.accessor(row => row.contractReceived, {
      id: 'contractReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractApproved']

      return useConveyancingTableColumnHelper.accessor(row => row.contractApproved, {
      id: 'contractApproved',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractVendorSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractVendorSigned']

      return useConveyancingTableColumnHelper.accessor(row => row.contractVendorSigned, {
      id: 'contractVendorSigned',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractBuyerSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractBuyerSigned']

      return useConveyancingTableColumnHelper.accessor(row => row.contractBuyerSigned, {
      id: 'contractBuyerSigned',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageRequired']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageRequired, {
      id: 'mortgageRequired',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageLoanPercentage', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLoanPercentage']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageLoanPercentage, {
      id: 'mortgageLoanPercentage',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSubmitted', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSubmitted']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageSubmitted, {
      id: 'mortgageSubmitted',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageOfferReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageOfferReceived']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageOfferReceived, {
      id: 'mortgageOfferReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageLenderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLenderId']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageLenderId, {
      id: 'mortgageLenderId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageBrokerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageBrokerId']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageBrokerId, {
      id: 'mortgageBrokerId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyDate']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageSurveyDate, {
      id: 'mortgageSurveyDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyorId']

      return useConveyancingTableColumnHelper.accessor(row => row.mortgageSurveyorId, {
      id: 'mortgageSurveyorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyRequired']

      return useConveyancingTableColumnHelper.accessor(row => row.additionalSurveyRequired, {
      id: 'additionalSurveyRequired',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyDate']

      return useConveyancingTableColumnHelper.accessor(row => row.additionalSurveyDate, {
      id: 'additionalSurveyDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyorId']

      return useConveyancingTableColumnHelper.accessor(row => row.additionalSurveyorId, {
      id: 'additionalSurveyorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('exchangedVendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedVendor']

      return useConveyancingTableColumnHelper.accessor(row => row.exchangedVendor, {
      id: 'exchangedVendor',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('exchangedBuyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedBuyer']

      return useConveyancingTableColumnHelper.accessor(row => row.exchangedBuyer, {
      id: 'exchangedBuyer',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('completion', () => {
      const { label: header, format, width, minWidth } = modelConfig['completion']

      return useConveyancingTableColumnHelper.accessor(row => row.completion, {
      id: 'completion',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('checkListItems', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkListItems']

      return useConveyancingTableColumnHelper.accessor(row => row.checkListItems, {
      id: 'checkListItems',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useConveyancingTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useConveyancingTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useConveyancingTable = (args: UseConveyancingTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancing({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};
export const useConveyancingIdChainTableColumnHelper = createColumnHelper<ConveyancingModel>();
export type UseConveyancingIdChainTableArgs = {id: string, sortBy?: string | undefined, columns: ColumnsList<ConveyancingModel>};
export const getuseConveyancingIdChainTableColumn = (property:string, modelConfig: ModelConfig<ConveyancingModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.isExternal, {
      id: 'isExternal',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyAddress', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyAddress']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.propertyAddress, {
      id: 'propertyAddress',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendor']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.vendor, {
      id: 'vendor',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.vendorId, {
      id: 'vendorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('vendorSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['vendorSolicitorId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.vendorSolicitorId, {
      id: 'vendorSolicitorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyer']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.buyer, {
      id: 'buyer',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.buyerId, {
      id: 'buyerId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('buyerSolicitorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['buyerSolicitorId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.buyerSolicitorId, {
      id: 'buyerSolicitorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('externalAgent', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgent']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.externalAgent, {
      id: 'externalAgent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('externalAgentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalAgentId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.externalAgentId, {
      id: 'externalAgentId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('upwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['upwardChainId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.upwardChainId, {
      id: 'upwardChainId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('downwardChainId', () => {
      const { label: header, format, width, minWidth } = modelConfig['downwardChainId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.downwardChainId, {
      id: 'downwardChainId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fixturesAndFittingsCompleted', () => {
      const { label: header, format, width, minWidth } = modelConfig['fixturesAndFittingsCompleted']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.fixturesAndFittingsCompleted, {
      id: 'fixturesAndFittingsCompleted',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('deedsRequested', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsRequested']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.deedsRequested, {
      id: 'deedsRequested',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('deedsReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['deedsReceived']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.deedsReceived, {
      id: 'deedsReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('enquiriesSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesSent']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.enquiriesSent, {
      id: 'enquiriesSent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('enquiriesAnswered', () => {
      const { label: header, format, width, minWidth } = modelConfig['enquiriesAnswered']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.enquiriesAnswered, {
      id: 'enquiriesAnswered',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesPaid', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesPaid']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.searchesPaid, {
      id: 'searchesPaid',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesApplied', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesApplied']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.searchesApplied, {
      id: 'searchesApplied',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('searchesReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['searchesReceived']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.searchesReceived, {
      id: 'searchesReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractSent', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractSent']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.contractSent, {
      id: 'contractSent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractReceived']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.contractReceived, {
      id: 'contractReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractApproved']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.contractApproved, {
      id: 'contractApproved',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractVendorSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractVendorSigned']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.contractVendorSigned, {
      id: 'contractVendorSigned',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('contractBuyerSigned', () => {
      const { label: header, format, width, minWidth } = modelConfig['contractBuyerSigned']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.contractBuyerSigned, {
      id: 'contractBuyerSigned',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageRequired']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageRequired, {
      id: 'mortgageRequired',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageLoanPercentage', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLoanPercentage']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageLoanPercentage, {
      id: 'mortgageLoanPercentage',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSubmitted', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSubmitted']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageSubmitted, {
      id: 'mortgageSubmitted',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageOfferReceived', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageOfferReceived']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageOfferReceived, {
      id: 'mortgageOfferReceived',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageLenderId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageLenderId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageLenderId, {
      id: 'mortgageLenderId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageBrokerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageBrokerId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageBrokerId, {
      id: 'mortgageBrokerId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyDate']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageSurveyDate, {
      id: 'mortgageSurveyDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('mortgageSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['mortgageSurveyorId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.mortgageSurveyorId, {
      id: 'mortgageSurveyorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyRequired']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.additionalSurveyRequired, {
      id: 'additionalSurveyRequired',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyDate']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.additionalSurveyDate, {
      id: 'additionalSurveyDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('additionalSurveyorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalSurveyorId']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.additionalSurveyorId, {
      id: 'additionalSurveyorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('exchangedVendor', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedVendor']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.exchangedVendor, {
      id: 'exchangedVendor',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('exchangedBuyer', () => {
      const { label: header, format, width, minWidth } = modelConfig['exchangedBuyer']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.exchangedBuyer, {
      id: 'exchangedBuyer',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('completion', () => {
      const { label: header, format, width, minWidth } = modelConfig['completion']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.completion, {
      id: 'completion',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('checkListItems', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkListItems']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.checkListItems, {
      id: 'checkListItems',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useConveyancingIdChainTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useConveyancingIdChainTable = (args: UseConveyancingIdChainTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancingIdChain({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
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
};