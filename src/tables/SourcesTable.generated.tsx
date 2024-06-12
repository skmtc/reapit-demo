import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { sourceModelConfig } from '@/config/sourceModelConfig.example.tsx'
import { useGetApiSources } from '@/services/Sources.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { SourceModel } from '@/schemas/sourceModel.generated.tsx'

export type UseSourcesTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  departmentId?: Array<string> | null | undefined
  name?: string | null | undefined
  type?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof SourceModel)[]
}
export const getSourcesTableColumn = (property: string, modelConfig: ModelConfig<SourceModel>, row: SourceModel) => {
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
    .with('name', () => ({
      id: 'name',
      label: modelConfig['name'].label,
      value: modelConfig['name'].format(row['name']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('departmentIds', () => ({
      id: 'departmentIds',
      label: modelConfig['departmentIds'].label,
      value: modelConfig['departmentIds'].format(row['departmentIds']),
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
export const useSourcesTable = (args: UseSourcesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiSources({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof SourceModel => c in row)
        .map((fieldName) => getSourcesTableColumn(fieldName, sourceModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
