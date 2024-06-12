import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { tenancyModelConfig } from '@/config/tenancyModelConfig.example.tsx'
import { useGetApiTenancies } from '@/services/Tenancies.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { TenancyModel } from '@/schemas/tenancyModel.generated.tsx'

export type UseTenanciesTableArgs = {
  sortBy?: string | null | undefined
  fromArchive?: boolean | null | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | null
    | undefined
  id?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | null
    | undefined
  email?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  endDateFrom?: string | null | undefined
  endDateTo?: string | null | undefined
  startDateFrom?: string | null | undefined
  startDateTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof TenancyModel)[]
}
export const getTenanciesTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyModel>,
  row: TenancyModel,
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
    .with('startDate', () => ({
      id: 'startDate',
      label: modelConfig['startDate'].label,
      value: modelConfig['startDate'].format(row['startDate']),
    }))
    .with('endDate', () => ({
      id: 'endDate',
      label: modelConfig['endDate'].label,
      value: modelConfig['endDate'].format(row['endDate']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('agentRole', () => ({
      id: 'agentRole',
      label: modelConfig['agentRole'].label,
      value: modelConfig['agentRole'].format(row['agentRole']),
    }))
    .with('rent', () => ({
      id: 'rent',
      label: modelConfig['rent'].label,
      value: modelConfig['rent'].format(row['rent']),
    }))
    .with('rentFrequency', () => ({
      id: 'rentFrequency',
      label: modelConfig['rentFrequency'].label,
      value: modelConfig['rentFrequency'].format(row['rentFrequency']),
    }))
    .with('endDateConfirmed', () => ({
      id: 'endDateConfirmed',
      label: modelConfig['endDateConfirmed'].label,
      value: modelConfig['endDateConfirmed'].format(row['endDateConfirmed']),
    }))
    .with('isPeriodic', () => ({
      id: 'isPeriodic',
      label: modelConfig['isPeriodic'].label,
      value: modelConfig['isPeriodic'].format(row['isPeriodic']),
    }))
    .with('rentInstalmentsFrequency', () => ({
      id: 'rentInstalmentsFrequency',
      label: modelConfig['rentInstalmentsFrequency'].label,
      value: modelConfig['rentInstalmentsFrequency'].format(row['rentInstalmentsFrequency']),
    }))
    .with('rentInstalmentsAmount', () => ({
      id: 'rentInstalmentsAmount',
      label: modelConfig['rentInstalmentsAmount'].label,
      value: modelConfig['rentInstalmentsAmount'].format(row['rentInstalmentsAmount']),
    }))
    .with('rentInstalmentsStart', () => ({
      id: 'rentInstalmentsStart',
      label: modelConfig['rentInstalmentsStart'].label,
      value: modelConfig['rentInstalmentsStart'].format(row['rentInstalmentsStart']),
    }))
    .with('meterReadingGas', () => ({
      id: 'meterReadingGas',
      label: modelConfig['meterReadingGas'].label,
      value: modelConfig['meterReadingGas'].format(row['meterReadingGas']),
    }))
    .with('meterReadingGasLastRead', () => ({
      id: 'meterReadingGasLastRead',
      label: modelConfig['meterReadingGasLastRead'].label,
      value: modelConfig['meterReadingGasLastRead'].format(row['meterReadingGasLastRead']),
    }))
    .with('meterReadingElectricity', () => ({
      id: 'meterReadingElectricity',
      label: modelConfig['meterReadingElectricity'].label,
      value: modelConfig['meterReadingElectricity'].format(row['meterReadingElectricity']),
    }))
    .with('meterReadingElectricityLastRead', () => ({
      id: 'meterReadingElectricityLastRead',
      label: modelConfig['meterReadingElectricityLastRead'].label,
      value: modelConfig['meterReadingElectricityLastRead'].format(row['meterReadingElectricityLastRead']),
    }))
    .with('meterReadingWater', () => ({
      id: 'meterReadingWater',
      label: modelConfig['meterReadingWater'].label,
      value: modelConfig['meterReadingWater'].format(row['meterReadingWater']),
    }))
    .with('meterReadingWaterLastRead', () => ({
      id: 'meterReadingWaterLastRead',
      label: modelConfig['meterReadingWaterLastRead'].label,
      value: modelConfig['meterReadingWaterLastRead'].format(row['meterReadingWaterLastRead']),
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
    .with('managerId', () => ({
      id: 'managerId',
      label: modelConfig['managerId'].label,
      value: modelConfig['managerId'].format(row['managerId']),
    }))
    .with('groupPaymentReference', () => ({
      id: 'groupPaymentReference',
      label: modelConfig['groupPaymentReference'].label,
      value: modelConfig['groupPaymentReference'].format(row['groupPaymentReference']),
    }))
    .with('lettingFee', () => ({
      id: 'lettingFee',
      label: modelConfig['lettingFee'].label,
      value: modelConfig['lettingFee'].format(row['lettingFee']),
    }))
    .with('managementFee', () => ({
      id: 'managementFee',
      label: modelConfig['managementFee'].label,
      value: modelConfig['managementFee'].format(row['managementFee']),
    }))
    .with('source', () => ({
      id: 'source',
      label: modelConfig['source'].label,
      value: modelConfig['source'].format(row['source']),
    }))
    .with('deposit', () => ({
      id: 'deposit',
      label: modelConfig['deposit'].label,
      value: modelConfig['deposit'].format(row['deposit']),
    }))
    .with('related', () => ({
      id: 'related',
      label: modelConfig['related'].label,
      value: modelConfig['related'].format(row['related']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .with('feeNotes', () => ({
      id: 'feeNotes',
      label: modelConfig['feeNotes'].label,
      value: modelConfig['feeNotes'].format(row['feeNotes']),
    }))
    .with('legalStatusId', () => ({
      id: 'legalStatusId',
      label: modelConfig['legalStatusId'].label,
      value: modelConfig['legalStatusId'].format(row['legalStatusId']),
    }))
    .with('renewalOptions', () => ({
      id: 'renewalOptions',
      label: modelConfig['renewalOptions'].label,
      value: modelConfig['renewalOptions'].format(row['renewalOptions']),
    }))
    .with('arrears', () => ({
      id: 'arrears',
      label: modelConfig['arrears'].label,
      value: modelConfig['arrears'].format(row['arrears']),
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
export const useTenanciesTable = (args: UseTenanciesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenancies({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyModel => c in row)
        .map((fieldName) => getTenanciesTableColumn(fieldName, tenancyModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
