import { officeModelConfig } from '@/config/officeModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiOffices } from '@/services/Offices.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { OfficeModel } from '@/schemas/officeModel.generated.tsx'

export const getOfficesTableColumn = (property: string, modelConfig: ModelConfig<OfficeModel>, row: OfficeModel) => {
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
    .with('manager', () => ({
      id: 'manager',
      label: modelConfig['manager'].label,
      value: modelConfig['manager'].format(row['manager']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('region', () => ({
      id: 'region',
      label: modelConfig['region'].label,
      value: modelConfig['region'].format(row['region']),
    }))
    .with('address', () => ({
      id: 'address',
      label: modelConfig['address'].label,
      value: modelConfig['address'].format(row['address']),
    }))
    .with('additionalContactDetails', () => ({
      id: 'additionalContactDetails',
      label: modelConfig['additionalContactDetails'].label,
      value: modelConfig['additionalContactDetails'].format(row['additionalContactDetails']),
    }))
    .with('workPhone', () => ({
      id: 'workPhone',
      label: modelConfig['workPhone'].label,
      value: modelConfig['workPhone'].format(row['workPhone']),
    }))
    .with('email', () => ({
      id: 'email',
      label: modelConfig['email'].label,
      value: modelConfig['email'].format(row['email']),
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
    .with('extrasField', () => ({
      id: 'extrasField',
      label: modelConfig['extrasField'].label,
      value: modelConfig['extrasField'].format(row['extrasField']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseOfficesTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'negotiators'> | null | undefined
  id?: Array<string> | null | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  region?: string | null | undefined
  active?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  fieldNames: (keyof OfficeModel)[]
}
export const useOfficesTable = (args: UseOfficesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffices({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof OfficeModel => c in row)
        .map((fieldName) => getOfficesTableColumn(fieldName, officeModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
