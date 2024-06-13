import { metadataModelConfig } from '@/config/metadataModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiMetadata } from '@/services/Metadata.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { MetadataModel } from '@/schemas/metadataModel.generated.tsx'

export const getMetadataTableColumn = (
  property: string,
  modelConfig: ModelConfig<MetadataModel>,
  row: MetadataModel,
) => {
  return match(property)
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('entityType', () => ({
      id: 'entityType',
      label: modelConfig['entityType'].label,
      value: modelConfig['entityType'].format(row['entityType']),
    }))
    .with('entityId', () => ({
      id: 'entityId',
      label: modelConfig['entityId'].label,
      value: modelConfig['entityId'].format(row['entityId']),
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
export type UseMetadataTableArgs = {
  entityType?: string | null | undefined
  id?: Array<string> | null | undefined
  entityId?: Array<string> | null | undefined
  filter?: Array<string> | null | undefined
  fieldNames: (keyof MetadataModel)[]
}
export const useMetadataTable = (args: UseMetadataTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiMetadata({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof MetadataModel => c in row)
        .map((fieldName) => getMetadataTableColumn(fieldName, metadataModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
