import { schemaModelConfig } from '@/config/schemaModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiMetadataMetadataSchema } from '@/services/MetadataSchema.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { SchemaModel } from '@/schemas/schemaModel.generated.tsx'

export const getMetadataMetadataSchemaTableColumn = (
  property: string,
  modelConfig: ModelConfig<SchemaModel>,
  row: SchemaModel,
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
    .with('schema', () => ({
      id: 'schema',
      label: modelConfig['schema'].label,
      value: modelConfig['schema'].format(row['schema']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseMetadataMetadataSchemaTableArgs = {
  entityType?: string | null | undefined
  fieldNames: (keyof SchemaModel)[]
}
export const useMetadataMetadataSchemaTable = (args: UseMetadataMetadataSchemaTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiMetadataMetadataSchema({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof SchemaModel => c in row)
        .map((fieldName) => getMetadataMetadataSchemaTableColumn(fieldName, schemaModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
