import { companyModelConfig } from '@/sections/Companies/config/companyModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiCompanies,
  useGetApiCompaniesIdRelationships,
} from '@/sections/Companies/services/Companies.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { CompanyModel } from '@/schemas/companyModel.generated.tsx'
import { companyRoleModelConfig } from '@/sections/Companies/config/companyRoleModelConfig.example.tsx'
import { CompanyRoleModel } from '@/schemas/companyRoleModel.generated.tsx'

export const getCompaniesTableColumn = (
  property: string,
  modelConfig: ModelConfig<CompanyModel>,
  row: CompanyModel,
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
    .with('branch', () => ({
      id: 'branch',
      label: modelConfig['branch'].label,
      value: modelConfig['branch'].format(row['branch']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('marketingConsent', () => ({
      id: 'marketingConsent',
      label: modelConfig['marketingConsent'].label,
      value: modelConfig['marketingConsent'].format(row['marketingConsent']),
    }))
    .with('vatRegistered', () => ({
      id: 'vatRegistered',
      label: modelConfig['vatRegistered'].label,
      value: modelConfig['vatRegistered'].format(row['vatRegistered']),
    }))
    .with('typeIds', () => ({
      id: 'typeIds',
      label: modelConfig['typeIds'].label,
      value: modelConfig['typeIds'].format(row['typeIds']),
    }))
    .with('supplierTypeId', () => ({
      id: 'supplierTypeId',
      label: modelConfig['supplierTypeId'].label,
      value: modelConfig['supplierTypeId'].format(row['supplierTypeId']),
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
    .with('archivedOn', () => ({
      id: 'archivedOn',
      label: modelConfig['archivedOn'].label,
      value: modelConfig['archivedOn'].format(row['archivedOn']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('address', () => ({
      id: 'address',
      label: modelConfig['address'].label,
      value: modelConfig['address'].format(row['address']),
    }))
    .with('payments', () => ({
      id: 'payments',
      label: modelConfig['payments'].label,
      value: modelConfig['payments'].format(row['payments']),
    }))
    .with('additionalContactDetails', () => ({
      id: 'additionalContactDetails',
      label: modelConfig['additionalContactDetails'].label,
      value: modelConfig['additionalContactDetails'].format(row['additionalContactDetails']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('negotiatorIds', () => ({
      id: 'negotiatorIds',
      label: modelConfig['negotiatorIds'].label,
      value: modelConfig['negotiatorIds'].format(row['negotiatorIds']),
    }))
    .with('communicationPreferenceLetter', () => ({
      id: 'communicationPreferenceLetter',
      label: modelConfig['communicationPreferenceLetter'].label,
      value: modelConfig['communicationPreferenceLetter'].format(row['communicationPreferenceLetter']),
    }))
    .with('communicationPreferenceEmail', () => ({
      id: 'communicationPreferenceEmail',
      label: modelConfig['communicationPreferenceEmail'].label,
      value: modelConfig['communicationPreferenceEmail'].format(row['communicationPreferenceEmail']),
    }))
    .with('communicationPreferencePhone', () => ({
      id: 'communicationPreferencePhone',
      label: modelConfig['communicationPreferencePhone'].label,
      value: modelConfig['communicationPreferencePhone'].format(row['communicationPreferencePhone']),
    }))
    .with('communicationPreferenceSms', () => ({
      id: 'communicationPreferenceSms',
      label: modelConfig['communicationPreferenceSms'].label,
      value: modelConfig['communicationPreferenceSms'].format(row['communicationPreferenceSms']),
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
    .with('relationships', () => ({
      id: 'relationships',
      label: modelConfig['relationships'].label,
      value: modelConfig['relationships'].format(row['relationships']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseCompaniesTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'companyTypes' | 'relationships'> | null | undefined
  id?: Array<string> | null | undefined
  address?: string | null | undefined
  branch?: string | null | undefined
  name?: string | null | undefined
  typeId?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof CompanyModel)[]
}
export const useCompaniesTable = (args: UseCompaniesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompanies({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof CompanyModel => c in row)
        .map((fieldName) => getCompaniesTableColumn(fieldName, companyModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getCompaniesIdRelationshipsTableColumn = (
  property: string,
  modelConfig: ModelConfig<CompanyRoleModel>,
  row: CompanyRoleModel,
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
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('associatedType', () => ({
      id: 'associatedType',
      label: modelConfig['associatedType'].label,
      value: modelConfig['associatedType'].format(row['associatedType']),
    }))
    .with('associatedId', () => ({
      id: 'associatedId',
      label: modelConfig['associatedId'].label,
      value: modelConfig['associatedId'].format(row['associatedId']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseCompaniesIdRelationshipsTableArgs = { id: string; fieldNames: (keyof CompanyRoleModel)[] }
export const useCompaniesIdRelationshipsTable = (args: UseCompaniesIdRelationshipsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompaniesIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof CompanyRoleModel => c in row)
        .map((fieldName) => getCompaniesIdRelationshipsTableColumn(fieldName, companyRoleModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
