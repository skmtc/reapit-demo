import { vendorModelConfig } from '@/config/vendorModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiVendors } from '@/services/Vendors.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { VendorModel } from '@/schemas/vendorModel.generated.tsx'

export const getVendorsTableColumn = (property: string, modelConfig: ModelConfig<VendorModel>, row: VendorModel) => {
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
    .with('lastCall', () => ({
      id: 'lastCall',
      label: modelConfig['lastCall'].label,
      value: modelConfig['lastCall'].format(row['lastCall']),
    }))
    .with('nextCall', () => ({
      id: 'nextCall',
      label: modelConfig['nextCall'].label,
      value: modelConfig['nextCall'].format(row['nextCall']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('sellingReasonId', () => ({
      id: 'sellingReasonId',
      label: modelConfig['sellingReasonId'].label,
      value: modelConfig['sellingReasonId'].format(row['sellingReasonId']),
    }))
    .with('solicitorId', () => ({
      id: 'solicitorId',
      label: modelConfig['solicitorId'].label,
      value: modelConfig['solicitorId'].format(row['solicitorId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('source', () => ({
      id: 'source',
      label: modelConfig['source'].label,
      value: modelConfig['source'].format(row['source']),
    }))
    .with('related', () => ({
      id: 'related',
      label: modelConfig['related'].label,
      value: modelConfig['related'].format(row['related']),
    }))
    .with('correspondenceAddressType', () => ({
      id: 'correspondenceAddressType',
      label: modelConfig['correspondenceAddressType'].label,
      value: modelConfig['correspondenceAddressType'].format(row['correspondenceAddressType']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('archivedOn', () => ({
      id: 'archivedOn',
      label: modelConfig['archivedOn'].label,
      value: modelConfig['archivedOn'].format(row['archivedOn']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseVendorsTableArgs = {
  sortBy?: string | null | undefined
  embed?:
    | Array<'negotiator' | 'offices' | 'property' | 'sellingReason' | 'solicitor' | 'source' | 'type'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  fromArchive?: boolean | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  lastCallFrom?: string | null | undefined
  lastCallTo?: string | null | undefined
  nextCallFrom?: string | null | undefined
  nextCallTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof VendorModel)[]
}
export const useVendorsTable = (args: UseVendorsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiVendors({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof VendorModel => c in row)
        .map((fieldName) => getVendorsTableColumn(fieldName, vendorModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
