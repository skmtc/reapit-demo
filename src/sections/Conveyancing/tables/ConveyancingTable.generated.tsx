import { conveyancingModelConfig } from '@/sections/Conveyancing/config/conveyancingModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiConveyancing,
  useGetApiConveyancingIdChain,
} from '@/sections/Conveyancing/services/Conveyancing.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { ConveyancingModel } from '@/schemas/conveyancingModel.generated.tsx'

export const getConveyancingTableColumn = (
  property: string,
  modelConfig: ModelConfig<ConveyancingModel>,
  row: ConveyancingModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('isExternal', () => ({
      id: 'isExternal',
      label: modelConfig['isExternal'].label,
      value: modelConfig['isExternal'].format(row['isExternal']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('propertyAddress', () => ({
      id: 'propertyAddress',
      label: modelConfig['propertyAddress'].label,
      value: modelConfig['propertyAddress'].format(row['propertyAddress']),
    }))
    .with('vendor', () => ({
      id: 'vendor',
      label: modelConfig['vendor'].label,
      value: modelConfig['vendor'].format(row['vendor']),
    }))
    .with('vendorId', () => ({
      id: 'vendorId',
      label: modelConfig['vendorId'].label,
      value: modelConfig['vendorId'].format(row['vendorId']),
    }))
    .with('vendorSolicitorId', () => ({
      id: 'vendorSolicitorId',
      label: modelConfig['vendorSolicitorId'].label,
      value: modelConfig['vendorSolicitorId'].format(row['vendorSolicitorId']),
    }))
    .with('buyer', () => ({
      id: 'buyer',
      label: modelConfig['buyer'].label,
      value: modelConfig['buyer'].format(row['buyer']),
    }))
    .with('buyerId', () => ({
      id: 'buyerId',
      label: modelConfig['buyerId'].label,
      value: modelConfig['buyerId'].format(row['buyerId']),
    }))
    .with('buyerSolicitorId', () => ({
      id: 'buyerSolicitorId',
      label: modelConfig['buyerSolicitorId'].label,
      value: modelConfig['buyerSolicitorId'].format(row['buyerSolicitorId']),
    }))
    .with('externalAgent', () => ({
      id: 'externalAgent',
      label: modelConfig['externalAgent'].label,
      value: modelConfig['externalAgent'].format(row['externalAgent']),
    }))
    .with('externalAgentId', () => ({
      id: 'externalAgentId',
      label: modelConfig['externalAgentId'].label,
      value: modelConfig['externalAgentId'].format(row['externalAgentId']),
    }))
    .with('upwardChainId', () => ({
      id: 'upwardChainId',
      label: modelConfig['upwardChainId'].label,
      value: modelConfig['upwardChainId'].format(row['upwardChainId']),
    }))
    .with('downwardChainId', () => ({
      id: 'downwardChainId',
      label: modelConfig['downwardChainId'].label,
      value: modelConfig['downwardChainId'].format(row['downwardChainId']),
    }))
    .with('fixturesAndFittingsCompleted', () => ({
      id: 'fixturesAndFittingsCompleted',
      label: modelConfig['fixturesAndFittingsCompleted'].label,
      value: modelConfig['fixturesAndFittingsCompleted'].format(row['fixturesAndFittingsCompleted']),
    }))
    .with('deedsRequested', () => ({
      id: 'deedsRequested',
      label: modelConfig['deedsRequested'].label,
      value: modelConfig['deedsRequested'].format(row['deedsRequested']),
    }))
    .with('deedsReceived', () => ({
      id: 'deedsReceived',
      label: modelConfig['deedsReceived'].label,
      value: modelConfig['deedsReceived'].format(row['deedsReceived']),
    }))
    .with('enquiriesSent', () => ({
      id: 'enquiriesSent',
      label: modelConfig['enquiriesSent'].label,
      value: modelConfig['enquiriesSent'].format(row['enquiriesSent']),
    }))
    .with('enquiriesAnswered', () => ({
      id: 'enquiriesAnswered',
      label: modelConfig['enquiriesAnswered'].label,
      value: modelConfig['enquiriesAnswered'].format(row['enquiriesAnswered']),
    }))
    .with('searchesPaid', () => ({
      id: 'searchesPaid',
      label: modelConfig['searchesPaid'].label,
      value: modelConfig['searchesPaid'].format(row['searchesPaid']),
    }))
    .with('searchesApplied', () => ({
      id: 'searchesApplied',
      label: modelConfig['searchesApplied'].label,
      value: modelConfig['searchesApplied'].format(row['searchesApplied']),
    }))
    .with('searchesReceived', () => ({
      id: 'searchesReceived',
      label: modelConfig['searchesReceived'].label,
      value: modelConfig['searchesReceived'].format(row['searchesReceived']),
    }))
    .with('contractSent', () => ({
      id: 'contractSent',
      label: modelConfig['contractSent'].label,
      value: modelConfig['contractSent'].format(row['contractSent']),
    }))
    .with('contractReceived', () => ({
      id: 'contractReceived',
      label: modelConfig['contractReceived'].label,
      value: modelConfig['contractReceived'].format(row['contractReceived']),
    }))
    .with('contractApproved', () => ({
      id: 'contractApproved',
      label: modelConfig['contractApproved'].label,
      value: modelConfig['contractApproved'].format(row['contractApproved']),
    }))
    .with('contractVendorSigned', () => ({
      id: 'contractVendorSigned',
      label: modelConfig['contractVendorSigned'].label,
      value: modelConfig['contractVendorSigned'].format(row['contractVendorSigned']),
    }))
    .with('contractBuyerSigned', () => ({
      id: 'contractBuyerSigned',
      label: modelConfig['contractBuyerSigned'].label,
      value: modelConfig['contractBuyerSigned'].format(row['contractBuyerSigned']),
    }))
    .with('mortgageRequired', () => ({
      id: 'mortgageRequired',
      label: modelConfig['mortgageRequired'].label,
      value: modelConfig['mortgageRequired'].format(row['mortgageRequired']),
    }))
    .with('mortgageLoanPercentage', () => ({
      id: 'mortgageLoanPercentage',
      label: modelConfig['mortgageLoanPercentage'].label,
      value: modelConfig['mortgageLoanPercentage'].format(row['mortgageLoanPercentage']),
    }))
    .with('mortgageSubmitted', () => ({
      id: 'mortgageSubmitted',
      label: modelConfig['mortgageSubmitted'].label,
      value: modelConfig['mortgageSubmitted'].format(row['mortgageSubmitted']),
    }))
    .with('mortgageOfferReceived', () => ({
      id: 'mortgageOfferReceived',
      label: modelConfig['mortgageOfferReceived'].label,
      value: modelConfig['mortgageOfferReceived'].format(row['mortgageOfferReceived']),
    }))
    .with('mortgageLenderId', () => ({
      id: 'mortgageLenderId',
      label: modelConfig['mortgageLenderId'].label,
      value: modelConfig['mortgageLenderId'].format(row['mortgageLenderId']),
    }))
    .with('mortgageBrokerId', () => ({
      id: 'mortgageBrokerId',
      label: modelConfig['mortgageBrokerId'].label,
      value: modelConfig['mortgageBrokerId'].format(row['mortgageBrokerId']),
    }))
    .with('mortgageSurveyDate', () => ({
      id: 'mortgageSurveyDate',
      label: modelConfig['mortgageSurveyDate'].label,
      value: modelConfig['mortgageSurveyDate'].format(row['mortgageSurveyDate']),
    }))
    .with('mortgageSurveyorId', () => ({
      id: 'mortgageSurveyorId',
      label: modelConfig['mortgageSurveyorId'].label,
      value: modelConfig['mortgageSurveyorId'].format(row['mortgageSurveyorId']),
    }))
    .with('additionalSurveyRequired', () => ({
      id: 'additionalSurveyRequired',
      label: modelConfig['additionalSurveyRequired'].label,
      value: modelConfig['additionalSurveyRequired'].format(row['additionalSurveyRequired']),
    }))
    .with('additionalSurveyDate', () => ({
      id: 'additionalSurveyDate',
      label: modelConfig['additionalSurveyDate'].label,
      value: modelConfig['additionalSurveyDate'].format(row['additionalSurveyDate']),
    }))
    .with('additionalSurveyorId', () => ({
      id: 'additionalSurveyorId',
      label: modelConfig['additionalSurveyorId'].label,
      value: modelConfig['additionalSurveyorId'].format(row['additionalSurveyorId']),
    }))
    .with('exchangedVendor', () => ({
      id: 'exchangedVendor',
      label: modelConfig['exchangedVendor'].label,
      value: modelConfig['exchangedVendor'].format(row['exchangedVendor']),
    }))
    .with('exchangedBuyer', () => ({
      id: 'exchangedBuyer',
      label: modelConfig['exchangedBuyer'].label,
      value: modelConfig['exchangedBuyer'].format(row['exchangedBuyer']),
    }))
    .with('completion', () => ({
      id: 'completion',
      label: modelConfig['completion'].label,
      value: modelConfig['completion'].format(row['completion']),
    }))
    .with('checkListItems', () => ({
      id: 'checkListItems',
      label: modelConfig['checkListItems'].label,
      value: modelConfig['checkListItems'].format(row['checkListItems']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseConveyancingTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  buyerId?: Array<string> | null | undefined
  embed?: Array<'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'> | null | undefined
  metadata?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof ConveyancingModel)[]
}
export const useConveyancingTable = (args: UseConveyancingTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancing({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ConveyancingModel => c in row)
        .map((fieldName) => getConveyancingTableColumn(fieldName, conveyancingModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getConveyancingIdChainTableColumn = (
  property: string,
  modelConfig: ModelConfig<ConveyancingModel>,
  row: ConveyancingModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('isExternal', () => ({
      id: 'isExternal',
      label: modelConfig['isExternal'].label,
      value: modelConfig['isExternal'].format(row['isExternal']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('propertyAddress', () => ({
      id: 'propertyAddress',
      label: modelConfig['propertyAddress'].label,
      value: modelConfig['propertyAddress'].format(row['propertyAddress']),
    }))
    .with('vendor', () => ({
      id: 'vendor',
      label: modelConfig['vendor'].label,
      value: modelConfig['vendor'].format(row['vendor']),
    }))
    .with('vendorId', () => ({
      id: 'vendorId',
      label: modelConfig['vendorId'].label,
      value: modelConfig['vendorId'].format(row['vendorId']),
    }))
    .with('vendorSolicitorId', () => ({
      id: 'vendorSolicitorId',
      label: modelConfig['vendorSolicitorId'].label,
      value: modelConfig['vendorSolicitorId'].format(row['vendorSolicitorId']),
    }))
    .with('buyer', () => ({
      id: 'buyer',
      label: modelConfig['buyer'].label,
      value: modelConfig['buyer'].format(row['buyer']),
    }))
    .with('buyerId', () => ({
      id: 'buyerId',
      label: modelConfig['buyerId'].label,
      value: modelConfig['buyerId'].format(row['buyerId']),
    }))
    .with('buyerSolicitorId', () => ({
      id: 'buyerSolicitorId',
      label: modelConfig['buyerSolicitorId'].label,
      value: modelConfig['buyerSolicitorId'].format(row['buyerSolicitorId']),
    }))
    .with('externalAgent', () => ({
      id: 'externalAgent',
      label: modelConfig['externalAgent'].label,
      value: modelConfig['externalAgent'].format(row['externalAgent']),
    }))
    .with('externalAgentId', () => ({
      id: 'externalAgentId',
      label: modelConfig['externalAgentId'].label,
      value: modelConfig['externalAgentId'].format(row['externalAgentId']),
    }))
    .with('upwardChainId', () => ({
      id: 'upwardChainId',
      label: modelConfig['upwardChainId'].label,
      value: modelConfig['upwardChainId'].format(row['upwardChainId']),
    }))
    .with('downwardChainId', () => ({
      id: 'downwardChainId',
      label: modelConfig['downwardChainId'].label,
      value: modelConfig['downwardChainId'].format(row['downwardChainId']),
    }))
    .with('fixturesAndFittingsCompleted', () => ({
      id: 'fixturesAndFittingsCompleted',
      label: modelConfig['fixturesAndFittingsCompleted'].label,
      value: modelConfig['fixturesAndFittingsCompleted'].format(row['fixturesAndFittingsCompleted']),
    }))
    .with('deedsRequested', () => ({
      id: 'deedsRequested',
      label: modelConfig['deedsRequested'].label,
      value: modelConfig['deedsRequested'].format(row['deedsRequested']),
    }))
    .with('deedsReceived', () => ({
      id: 'deedsReceived',
      label: modelConfig['deedsReceived'].label,
      value: modelConfig['deedsReceived'].format(row['deedsReceived']),
    }))
    .with('enquiriesSent', () => ({
      id: 'enquiriesSent',
      label: modelConfig['enquiriesSent'].label,
      value: modelConfig['enquiriesSent'].format(row['enquiriesSent']),
    }))
    .with('enquiriesAnswered', () => ({
      id: 'enquiriesAnswered',
      label: modelConfig['enquiriesAnswered'].label,
      value: modelConfig['enquiriesAnswered'].format(row['enquiriesAnswered']),
    }))
    .with('searchesPaid', () => ({
      id: 'searchesPaid',
      label: modelConfig['searchesPaid'].label,
      value: modelConfig['searchesPaid'].format(row['searchesPaid']),
    }))
    .with('searchesApplied', () => ({
      id: 'searchesApplied',
      label: modelConfig['searchesApplied'].label,
      value: modelConfig['searchesApplied'].format(row['searchesApplied']),
    }))
    .with('searchesReceived', () => ({
      id: 'searchesReceived',
      label: modelConfig['searchesReceived'].label,
      value: modelConfig['searchesReceived'].format(row['searchesReceived']),
    }))
    .with('contractSent', () => ({
      id: 'contractSent',
      label: modelConfig['contractSent'].label,
      value: modelConfig['contractSent'].format(row['contractSent']),
    }))
    .with('contractReceived', () => ({
      id: 'contractReceived',
      label: modelConfig['contractReceived'].label,
      value: modelConfig['contractReceived'].format(row['contractReceived']),
    }))
    .with('contractApproved', () => ({
      id: 'contractApproved',
      label: modelConfig['contractApproved'].label,
      value: modelConfig['contractApproved'].format(row['contractApproved']),
    }))
    .with('contractVendorSigned', () => ({
      id: 'contractVendorSigned',
      label: modelConfig['contractVendorSigned'].label,
      value: modelConfig['contractVendorSigned'].format(row['contractVendorSigned']),
    }))
    .with('contractBuyerSigned', () => ({
      id: 'contractBuyerSigned',
      label: modelConfig['contractBuyerSigned'].label,
      value: modelConfig['contractBuyerSigned'].format(row['contractBuyerSigned']),
    }))
    .with('mortgageRequired', () => ({
      id: 'mortgageRequired',
      label: modelConfig['mortgageRequired'].label,
      value: modelConfig['mortgageRequired'].format(row['mortgageRequired']),
    }))
    .with('mortgageLoanPercentage', () => ({
      id: 'mortgageLoanPercentage',
      label: modelConfig['mortgageLoanPercentage'].label,
      value: modelConfig['mortgageLoanPercentage'].format(row['mortgageLoanPercentage']),
    }))
    .with('mortgageSubmitted', () => ({
      id: 'mortgageSubmitted',
      label: modelConfig['mortgageSubmitted'].label,
      value: modelConfig['mortgageSubmitted'].format(row['mortgageSubmitted']),
    }))
    .with('mortgageOfferReceived', () => ({
      id: 'mortgageOfferReceived',
      label: modelConfig['mortgageOfferReceived'].label,
      value: modelConfig['mortgageOfferReceived'].format(row['mortgageOfferReceived']),
    }))
    .with('mortgageLenderId', () => ({
      id: 'mortgageLenderId',
      label: modelConfig['mortgageLenderId'].label,
      value: modelConfig['mortgageLenderId'].format(row['mortgageLenderId']),
    }))
    .with('mortgageBrokerId', () => ({
      id: 'mortgageBrokerId',
      label: modelConfig['mortgageBrokerId'].label,
      value: modelConfig['mortgageBrokerId'].format(row['mortgageBrokerId']),
    }))
    .with('mortgageSurveyDate', () => ({
      id: 'mortgageSurveyDate',
      label: modelConfig['mortgageSurveyDate'].label,
      value: modelConfig['mortgageSurveyDate'].format(row['mortgageSurveyDate']),
    }))
    .with('mortgageSurveyorId', () => ({
      id: 'mortgageSurveyorId',
      label: modelConfig['mortgageSurveyorId'].label,
      value: modelConfig['mortgageSurveyorId'].format(row['mortgageSurveyorId']),
    }))
    .with('additionalSurveyRequired', () => ({
      id: 'additionalSurveyRequired',
      label: modelConfig['additionalSurveyRequired'].label,
      value: modelConfig['additionalSurveyRequired'].format(row['additionalSurveyRequired']),
    }))
    .with('additionalSurveyDate', () => ({
      id: 'additionalSurveyDate',
      label: modelConfig['additionalSurveyDate'].label,
      value: modelConfig['additionalSurveyDate'].format(row['additionalSurveyDate']),
    }))
    .with('additionalSurveyorId', () => ({
      id: 'additionalSurveyorId',
      label: modelConfig['additionalSurveyorId'].label,
      value: modelConfig['additionalSurveyorId'].format(row['additionalSurveyorId']),
    }))
    .with('exchangedVendor', () => ({
      id: 'exchangedVendor',
      label: modelConfig['exchangedVendor'].label,
      value: modelConfig['exchangedVendor'].format(row['exchangedVendor']),
    }))
    .with('exchangedBuyer', () => ({
      id: 'exchangedBuyer',
      label: modelConfig['exchangedBuyer'].label,
      value: modelConfig['exchangedBuyer'].format(row['exchangedBuyer']),
    }))
    .with('completion', () => ({
      id: 'completion',
      label: modelConfig['completion'].label,
      value: modelConfig['completion'].format(row['completion']),
    }))
    .with('checkListItems', () => ({
      id: 'checkListItems',
      label: modelConfig['checkListItems'].label,
      value: modelConfig['checkListItems'].format(row['checkListItems']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseConveyancingIdChainTableArgs = {
  id: string
  sortBy?: string | null | undefined
  fieldNames: (keyof ConveyancingModel)[]
}
export const useConveyancingIdChainTable = (args: UseConveyancingIdChainTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiConveyancingIdChain({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ConveyancingModel => c in row)
        .map((fieldName) => getConveyancingIdChainTableColumn(fieldName, conveyancingModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
