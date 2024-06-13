import { worksOrderModelConfig } from '@/config/worksOrderModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiWorksOrders, useGetApiWorksOrdersIdItems } from '@/services/WorksOrders.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { WorksOrderModel } from '@/schemas/worksOrderModel.generated.tsx'
import { worksOrderItemModelConfig } from '@/config/worksOrderItemModelConfig.example.tsx'
import { WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

export const getWorksOrdersTableColumn = (
  property: string,
  modelConfig: ModelConfig<WorksOrderModel>,
  row: WorksOrderModel,
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
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('reporter', () => ({
      id: 'reporter',
      label: modelConfig['reporter'].label,
      value: modelConfig['reporter'].format(row['reporter']),
    }))
    .with('priority', () => ({
      id: 'priority',
      label: modelConfig['priority'].label,
      value: modelConfig['priority'].format(row['priority']),
    }))
    .with('booked', () => ({
      id: 'booked',
      label: modelConfig['booked'].label,
      value: modelConfig['booked'].format(row['booked']),
    }))
    .with('required', () => ({
      id: 'required',
      label: modelConfig['required'].label,
      value: modelConfig['required'].format(row['required']),
    }))
    .with('completed', () => ({
      id: 'completed',
      label: modelConfig['completed'].label,
      value: modelConfig['completed'].format(row['completed']),
    }))
    .with('totalNetAmount', () => ({
      id: 'totalNetAmount',
      label: modelConfig['totalNetAmount'].label,
      value: modelConfig['totalNetAmount'].format(row['totalNetAmount']),
    }))
    .with('totalVatAmount', () => ({
      id: 'totalVatAmount',
      label: modelConfig['totalVatAmount'].label,
      value: modelConfig['totalVatAmount'].format(row['totalVatAmount']),
    }))
    .with('totalGrossAmount', () => ({
      id: 'totalGrossAmount',
      label: modelConfig['totalGrossAmount'].label,
      value: modelConfig['totalGrossAmount'].format(row['totalGrossAmount']),
    }))
    .with('items', () => ({
      id: 'items',
      label: modelConfig['items'].label,
      value: modelConfig['items'].format(row['items']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .with('extrasField', () => ({
      id: 'extrasField',
      label: modelConfig['extrasField'].label,
      value: modelConfig['extrasField'].format(row['extrasField']),
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
export type UseWorksOrdersTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  companyId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
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
    | null
    | undefined
  tenancyId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  completedFrom?: string | null | undefined
  completedTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  requiredFrom?: string | null | undefined
  requiredTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof WorksOrderModel)[]
}
export const useWorksOrdersTable = (args: UseWorksOrdersTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrders({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof WorksOrderModel => c in row)
        .map((fieldName) => getWorksOrdersTableColumn(fieldName, worksOrderModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getWorksOrdersIdItemsTableColumn = (
  property: string,
  modelConfig: ModelConfig<WorksOrderItemModel>,
  row: WorksOrderItemModel,
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
    .with('worksOrderId', () => ({
      id: 'worksOrderId',
      label: modelConfig['worksOrderId'].label,
      value: modelConfig['worksOrderId'].format(row['worksOrderId']),
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
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('chargeTo', () => ({
      id: 'chargeTo',
      label: modelConfig['chargeTo'].label,
      value: modelConfig['chargeTo'].format(row['chargeTo']),
    }))
    .with('estimate', () => ({
      id: 'estimate',
      label: modelConfig['estimate'].label,
      value: modelConfig['estimate'].format(row['estimate']),
    }))
    .with('estimateType', () => ({
      id: 'estimateType',
      label: modelConfig['estimateType'].label,
      value: modelConfig['estimateType'].format(row['estimateType']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('vatAmount', () => ({
      id: 'vatAmount',
      label: modelConfig['vatAmount'].label,
      value: modelConfig['vatAmount'].format(row['vatAmount']),
    }))
    .with('grossAmount', () => ({
      id: 'grossAmount',
      label: modelConfig['grossAmount'].label,
      value: modelConfig['grossAmount'].format(row['grossAmount']),
    }))
    .with('reserveAmount', () => ({
      id: 'reserveAmount',
      label: modelConfig['reserveAmount'].label,
      value: modelConfig['reserveAmount'].format(row['reserveAmount']),
    }))
    .with('nominalAccountId', () => ({
      id: 'nominalAccountId',
      label: modelConfig['nominalAccountId'].label,
      value: modelConfig['nominalAccountId'].format(row['nominalAccountId']),
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
export type UseWorksOrdersIdItemsTableArgs = { id: string; fieldNames: (keyof WorksOrderItemModel)[] }
export const useWorksOrdersIdItemsTable = (args: UseWorksOrdersIdItemsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiWorksOrdersIdItems({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof WorksOrderItemModel => c in row)
        .map((fieldName) => getWorksOrdersIdItemsTableColumn(fieldName, worksOrderItemModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
