import { landlordModelConfig } from '@/config/landlordModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiLandlords } from '@/services/Landlords.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { LandlordModel } from '@/schemas/landlordModel.generated.tsx'

export const getLandlordsTableColumn = (
  property: string,
  modelConfig: ModelConfig<LandlordModel>,
  row: LandlordModel,
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
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('solicitorId', () => ({
      id: 'solicitorId',
      label: modelConfig['solicitorId'].label,
      value: modelConfig['solicitorId'].format(row['solicitorId']),
    }))
    .with('officeId', () => ({
      id: 'officeId',
      label: modelConfig['officeId'].label,
      value: modelConfig['officeId'].format(row['officeId']),
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
export type UseLandlordsTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'appointments' | 'documents' | 'office' | 'properties' | 'solicitor' | 'source'> | null | undefined
  id?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  active?: boolean | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof LandlordModel)[]
}
export const useLandlordsTable = (args: UseLandlordsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiLandlords({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof LandlordModel => c in row)
        .map((fieldName) => getLandlordsTableColumn(fieldName, landlordModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
