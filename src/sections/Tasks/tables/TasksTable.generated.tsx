import { taskModelConfig } from '@/sections/Tasks/config/taskModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiTasks } from '@/sections/Tasks/services/Tasks.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { TaskModel } from '@/schemas/taskModel.generated.tsx'

export const getTasksTableColumn = (property: string, modelConfig: ModelConfig<TaskModel>, row: TaskModel) => {
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
    .with('activates', () => ({
      id: 'activates',
      label: modelConfig['activates'].label,
      value: modelConfig['activates'].format(row['activates']),
    }))
    .with('completed', () => ({
      id: 'completed',
      label: modelConfig['completed'].label,
      value: modelConfig['completed'].format(row['completed']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('senderId', () => ({
      id: 'senderId',
      label: modelConfig['senderId'].label,
      value: modelConfig['senderId'].format(row['senderId']),
    }))
    .with('text', () => ({
      id: 'text',
      label: modelConfig['text'].label,
      value: modelConfig['text'].format(row['text']),
    }))
    .with('landlordId', () => ({
      id: 'landlordId',
      label: modelConfig['landlordId'].label,
      value: modelConfig['landlordId'].format(row['landlordId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('applicantId', () => ({
      id: 'applicantId',
      label: modelConfig['applicantId'].label,
      value: modelConfig['applicantId'].format(row['applicantId']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
    }))
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
    }))
    .with('recipientId', () => ({
      id: 'recipientId',
      label: modelConfig['recipientId'].label,
      value: modelConfig['recipientId'].format(row['recipientId']),
    }))
    .with('recipientType', () => ({
      id: 'recipientType',
      label: modelConfig['recipientType'].label,
      value: modelConfig['recipientType'].format(row['recipientType']),
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
export type UseTasksTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'> | null | undefined
  id?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  recipientId?: Array<string> | null | undefined
  senderId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  tenancyId?: Array<string> | null | undefined
  activatesFrom?: string | null | undefined
  activatesTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof TaskModel)[]
}
export const useTasksTable = (args: UseTasksTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTasks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TaskModel => c in row)
        .map((fieldName) => getTasksTableColumn(fieldName, taskModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
