import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { webhookModelConfig } from '@/config/webhookModelConfig.example.tsx'
import { useGetApiResthooks } from '@/services/RestHooks.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { WebhookModel } from '@/schemas/webhookModel.generated.tsx'

export type UseResthooksTableArgs = {
  sortBy?: string | null | undefined
  active?: boolean | null | undefined
  fieldNames: (keyof WebhookModel)[]
}
export const getResthooksTableColumn = (
  property: string,
  modelConfig: ModelConfig<WebhookModel>,
  row: WebhookModel,
) => {
  return match(property)
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
    .with('url', () => ({
      id: 'url',
      label: modelConfig['url'].label,
      value: modelConfig['url'].format(row['url']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('topicIds', () => ({
      id: 'topicIds',
      label: modelConfig['topicIds'].label,
      value: modelConfig['topicIds'].format(row['topicIds']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('ignoreEtagOnlyChanges', () => ({
      id: 'ignoreEtagOnlyChanges',
      label: modelConfig['ignoreEtagOnlyChanges'].label,
      value: modelConfig['ignoreEtagOnlyChanges'].format(row['ignoreEtagOnlyChanges']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export const useResthooksTable = (args: UseResthooksTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiResthooks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof WebhookModel => c in row)
        .map((fieldName) => getResthooksTableColumn(fieldName, webhookModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
