import { propertyImageModelConfig } from '@/config/propertyImageModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiPropertyImages } from '@/services/PropertyImages.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { PropertyImageModel } from '@/schemas/propertyImageModel.generated.tsx'

export const getPropertyImagesTableColumn = (
  property: string,
  modelConfig: ModelConfig<PropertyImageModel>,
  row: PropertyImageModel,
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
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('url', () => ({
      id: 'url',
      label: modelConfig['url'].label,
      value: modelConfig['url'].format(row['url']),
    }))
    .with('caption', () => ({
      id: 'caption',
      label: modelConfig['caption'].label,
      value: modelConfig['caption'].format(row['caption']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('order', () => ({
      id: 'order',
      label: modelConfig['order'].label,
      value: modelConfig['order'].format(row['order']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
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
export type UsePropertyImagesTableArgs = {
  sortBy?: string | null | undefined
  id?: Array<string> | null | undefined
  embed?: Array<'property'> | null | undefined
  propertyId?: Array<string> | null | undefined
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fromArchive?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof PropertyImageModel)[]
}
export const usePropertyImagesTable = (args: UsePropertyImagesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertyImages({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof PropertyImageModel => c in row)
        .map((fieldName) => getPropertyImagesTableColumn(fieldName, propertyImageModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
