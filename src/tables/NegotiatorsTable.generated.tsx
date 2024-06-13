import { negotiatorModelConfig } from '@/config/negotiatorModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiNegotiators } from '@/services/Negotiators.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { NegotiatorModel } from '@/schemas/negotiatorModel.generated.tsx'

export const getNegotiatorsTableColumn = (
  property: string,
  modelConfig: ModelConfig<NegotiatorModel>,
  row: NegotiatorModel,
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
    .with('name', () => ({
      id: 'name',
      label: modelConfig['name'].label,
      value: modelConfig['name'].format(row['name']),
    }))
    .with('jobTitle', () => ({
      id: 'jobTitle',
      label: modelConfig['jobTitle'].label,
      value: modelConfig['jobTitle'].format(row['jobTitle']),
    }))
    .with('officeId', () => ({
      id: 'officeId',
      label: modelConfig['officeId'].label,
      value: modelConfig['officeId'].format(row['officeId']),
    }))
    .with('workPhone', () => ({
      id: 'workPhone',
      label: modelConfig['workPhone'].label,
      value: modelConfig['workPhone'].format(row['workPhone']),
    }))
    .with('mobilePhone', () => ({
      id: 'mobilePhone',
      label: modelConfig['mobilePhone'].label,
      value: modelConfig['mobilePhone'].format(row['mobilePhone']),
    }))
    .with('email', () => ({
      id: 'email',
      label: modelConfig['email'].label,
      value: modelConfig['email'].format(row['email']),
    }))
    .with('profileImageUrl', () => ({
      id: 'profileImageUrl',
      label: modelConfig['profileImageUrl'].label,
      value: modelConfig['profileImageUrl'].format(row['profileImageUrl']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('diaryNegotiatorIds', () => ({
      id: 'diaryNegotiatorIds',
      label: modelConfig['diaryNegotiatorIds'].label,
      value: modelConfig['diaryNegotiatorIds'].format(row['diaryNegotiatorIds']),
    }))
    .with('diaryOfficeIds', () => ({
      id: 'diaryOfficeIds',
      label: modelConfig['diaryOfficeIds'].label,
      value: modelConfig['diaryOfficeIds'].format(row['diaryOfficeIds']),
    }))
    .with('additionalContactDetails', () => ({
      id: 'additionalContactDetails',
      label: modelConfig['additionalContactDetails'].label,
      value: modelConfig['additionalContactDetails'].format(row['additionalContactDetails']),
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
export type UseNegotiatorsTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'office'> | null | undefined
  id?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  email?: string | null | undefined
  name?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  active?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof NegotiatorModel)[]
}
export const useNegotiatorsTable = (args: UseNegotiatorsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiNegotiators({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof NegotiatorModel => c in row)
        .map((fieldName) => getNegotiatorsTableColumn(fieldName, negotiatorModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
