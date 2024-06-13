import { areaModelConfig } from '@/config/areaModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiAreas } from '@/services/Areas.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { AreaModel } from '@/schemas/areaModel.generated.tsx'

export const getAreasTableColumn = (property: string, modelConfig: ModelConfig<AreaModel>, row: AreaModel) => {
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
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('area', () => ({
      id: 'area',
      label: modelConfig['area'].label,
      value: modelConfig['area'].format(row['area']),
    }))
    .with('departmentIds', () => ({
      id: 'departmentIds',
      label: modelConfig['departmentIds'].label,
      value: modelConfig['departmentIds'].format(row['departmentIds']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('parentIds', () => ({
      id: 'parentIds',
      label: modelConfig['parentIds'].label,
      value: modelConfig['parentIds'].format(row['parentIds']),
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
export type UseAreasTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  departmentId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  name?: string | null | undefined
  active?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof AreaModel)[]
}
export const useAreasTable = (args: UseAreasTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiAreas({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof AreaModel => c in row)
        .map((fieldName) => getAreasTableColumn(fieldName, areaModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
