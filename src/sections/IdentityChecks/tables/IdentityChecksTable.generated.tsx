import { identityCheckModelConfig } from '@/sections/IdentityChecks/config/identityCheckModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiIdentityChecks } from '@/sections/IdentityChecks/services/IdentityChecks.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { IdentityCheckModel } from '@/schemas/identityCheckModel.generated.tsx'

export const getIdentityChecksTableColumn = (
  property: string,
  modelConfig: ModelConfig<IdentityCheckModel>,
  row: IdentityCheckModel,
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
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
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
    .with('checkDate', () => ({
      id: 'checkDate',
      label: modelConfig['checkDate'].label,
      value: modelConfig['checkDate'].format(row['checkDate']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('identityDocument1', () => ({
      id: 'identityDocument1',
      label: modelConfig['identityDocument1'].label,
      value: modelConfig['identityDocument1'].format(row['identityDocument1']),
    }))
    .with('identityDocument2', () => ({
      id: 'identityDocument2',
      label: modelConfig['identityDocument2'].label,
      value: modelConfig['identityDocument2'].format(row['identityDocument2']),
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
export type UseIdentityChecksTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'contact' | 'document1' | 'document2' | 'documentType1' | 'documentType2'> | null | undefined
  id?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  status?: Array<'unknown' | 'unchecked' | 'pending' | 'fail' | 'cancelled' | 'warnings' | 'pass'> | null | undefined
  checkDateFrom?: string | null | undefined
  checkDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof IdentityCheckModel)[]
}
export const useIdentityChecksTable = (args: UseIdentityChecksTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiIdentityChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof IdentityCheckModel => c in row)
        .map((fieldName) => getIdentityChecksTableColumn(fieldName, identityCheckModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
