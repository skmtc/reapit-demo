import { journalEntryModelConfig } from '@/config/journalEntryModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiJournalEntries, useGetApiJournalEntriesLandlords } from '@/services/JournalEntries.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { JournalEntryModel } from '@/schemas/journalEntryModel.generated.tsx'
import { landlordJournalEntryModelConfig } from '@/config/landlordJournalEntryModelConfig.example.tsx'
import { LandlordJournalEntryModel } from '@/schemas/landlordJournalEntryModel.generated.tsx'

export const getJournalEntriesTableColumn = (
  property: string,
  modelConfig: ModelConfig<JournalEntryModel>,
  row: JournalEntryModel,
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
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
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
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseJournalEntriesTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | null | undefined
  associatedType?: string | null | undefined
  associatedId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  typeId?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  fieldNames: (keyof JournalEntryModel)[]
}
export const useJournalEntriesTable = (args: UseJournalEntriesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntries({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof JournalEntryModel => c in row)
        .map((fieldName) => getJournalEntriesTableColumn(fieldName, journalEntryModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getJournalEntriesLandlordsTableColumn = (
  property: string,
  modelConfig: ModelConfig<LandlordJournalEntryModel>,
  row: LandlordJournalEntryModel,
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
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('landlordId', () => ({
      id: 'landlordId',
      label: modelConfig['landlordId'].label,
      value: modelConfig['landlordId'].format(row['landlordId']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseJournalEntriesLandlordsTableArgs = {
  sortBy?: string | null | undefined
  landlordId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  type?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  fieldNames: (keyof LandlordJournalEntryModel)[]
}
export const useJournalEntriesLandlordsTable = (args: UseJournalEntriesLandlordsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiJournalEntriesLandlords({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof LandlordJournalEntryModel => c in row)
        .map((fieldName) => getJournalEntriesLandlordsTableColumn(fieldName, landlordJournalEntryModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
