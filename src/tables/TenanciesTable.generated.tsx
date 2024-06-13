import { tenancyModelConfig } from '@/config/tenancyModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiTenancies,
  useGetApiTenanciesIdRelationships,
  useGetApiTenanciesIdChecks,
  useGetApiTenanciesIdBreakClauses,
  useGetApiTenanciesIdAllowances,
  useGetApiTenanciesIdResponsibilities,
  useGetApiTenanciesIdRenewalNegotiations,
  useGetApiTenanciesIdExtensions,
  useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks,
} from '@/services/Tenancies.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { TenancyModel } from '@/schemas/tenancyModel.generated.tsx'
import { tenancyContactRelationshipModelConfig } from '@/config/tenancyContactRelationshipModelConfig.example.tsx'
import { TenancyContactRelationshipModel } from '@/schemas/tenancyContactRelationshipModel.generated.tsx'
import { tenancyCheckModelConfig } from '@/config/tenancyCheckModelConfig.example.tsx'
import { TenancyCheckModel } from '@/schemas/tenancyCheckModel.generated.tsx'
import { tenancyBreakClauseModelConfig } from '@/config/tenancyBreakClauseModelConfig.example.tsx'
import { TenancyBreakClauseModel } from '@/schemas/tenancyBreakClauseModel.generated.tsx'
import { tenancyAllowanceModelConfig } from '@/config/tenancyAllowanceModelConfig.example.tsx'
import { TenancyAllowanceModel } from '@/schemas/tenancyAllowanceModel.generated.tsx'
import { tenancyResponsibilityModelConfig } from '@/config/tenancyResponsibilityModelConfig.example.tsx'
import { TenancyResponsibilityModel } from '@/schemas/tenancyResponsibilityModel.generated.tsx'
import { tenancyRenewalModelConfig } from '@/config/tenancyRenewalModelConfig.example.tsx'
import { TenancyRenewalModel } from '@/schemas/tenancyRenewalModel.generated.tsx'
import { tenancyExtensionAlterationModelConfig } from '@/config/tenancyExtensionAlterationModelConfig.example.tsx'
import { TenancyExtensionAlterationModel } from '@/schemas/tenancyExtensionAlterationModel.generated.tsx'
import { tenancyRenewalCheckModelConfig } from '@/config/tenancyRenewalCheckModelConfig.example.tsx'
import { TenancyRenewalCheckModel } from '@/schemas/tenancyRenewalCheckModel.generated.tsx'

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
export const getTenanciesIdRelationshipsTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyContactRelationshipModel>,
  row: TenancyContactRelationshipModel,
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
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
    .with('isMain', () => ({
      id: 'isMain',
      label: modelConfig['isMain'].label,
      value: modelConfig['isMain'].format(row['isMain']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('guarantors', () => ({
      id: 'guarantors',
      label: modelConfig['guarantors'].label,
      value: modelConfig['guarantors'].format(row['guarantors']),
    }))
    .with('references', () => ({
      id: 'references',
      label: modelConfig['references'].label,
      value: modelConfig['references'].format(row['references']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseTenanciesIdRelationshipsTableArgs = { id: string; fieldNames: (keyof TenancyContactRelationshipModel)[] }
export const useTenanciesIdRelationshipsTable = (args: UseTenanciesIdRelationshipsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyContactRelationshipModel => c in row)
        .map((fieldName) =>
          getTenanciesIdRelationshipsTableColumn(fieldName, tenancyContactRelationshipModelConfig, row),
        ),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdChecksTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyCheckModel>,
  row: TenancyCheckModel,
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
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('checkTypeId', () => ({
      id: 'checkTypeId',
      label: modelConfig['checkTypeId'].label,
      value: modelConfig['checkTypeId'].format(row['checkTypeId']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
export type UseTenanciesIdChecksTableArgs = {
  id: string
  type?: string | null | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | null | undefined
  fieldNames: (keyof TenancyCheckModel)[]
}
export const useTenanciesIdChecksTable = (args: UseTenanciesIdChecksTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyCheckModel => c in row)
        .map((fieldName) => getTenanciesIdChecksTableColumn(fieldName, tenancyCheckModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdBreakClausesTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyBreakClauseModel>,
  row: TenancyBreakClauseModel,
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
    .with('clauseTypeId', () => ({
      id: 'clauseTypeId',
      label: modelConfig['clauseTypeId'].label,
      value: modelConfig['clauseTypeId'].format(row['clauseTypeId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('appliesTo', () => ({
      id: 'appliesTo',
      label: modelConfig['appliesTo'].label,
      value: modelConfig['appliesTo'].format(row['appliesTo']),
    }))
    .with('letterText', () => ({
      id: 'letterText',
      label: modelConfig['letterText'].label,
      value: modelConfig['letterText'].format(row['letterText']),
    }))
    .with('breakFrom', () => ({
      id: 'breakFrom',
      label: modelConfig['breakFrom'].label,
      value: modelConfig['breakFrom'].format(row['breakFrom']),
    }))
    .with('noticeRequired', () => ({
      id: 'noticeRequired',
      label: modelConfig['noticeRequired'].label,
      value: modelConfig['noticeRequired'].format(row['noticeRequired']),
    }))
    .with('agreements', () => ({
      id: 'agreements',
      label: modelConfig['agreements'].label,
      value: modelConfig['agreements'].format(row['agreements']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
export type UseTenanciesIdBreakClausesTableArgs = { id: string; fieldNames: (keyof TenancyBreakClauseModel)[] }
export const useTenanciesIdBreakClausesTable = (args: UseTenanciesIdBreakClausesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdBreakClauses({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyBreakClauseModel => c in row)
        .map((fieldName) => getTenanciesIdBreakClausesTableColumn(fieldName, tenancyBreakClauseModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdAllowancesTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyAllowanceModel>,
  row: TenancyAllowanceModel,
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
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('state', () => ({
      id: 'state',
      label: modelConfig['state'].label,
      value: modelConfig['state'].format(row['state']),
    }))
    .with('agreements', () => ({
      id: 'agreements',
      label: modelConfig['agreements'].label,
      value: modelConfig['agreements'].format(row['agreements']),
    }))
    .with('letterText', () => ({
      id: 'letterText',
      label: modelConfig['letterText'].label,
      value: modelConfig['letterText'].format(row['letterText']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
export type UseTenanciesIdAllowancesTableArgs = { id: string; fieldNames: (keyof TenancyAllowanceModel)[] }
export const useTenanciesIdAllowancesTable = (args: UseTenanciesIdAllowancesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdAllowances({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyAllowanceModel => c in row)
        .map((fieldName) => getTenanciesIdAllowancesTableColumn(fieldName, tenancyAllowanceModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdResponsibilitiesTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyResponsibilityModel>,
  row: TenancyResponsibilityModel,
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
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('appliesTo', () => ({
      id: 'appliesTo',
      label: modelConfig['appliesTo'].label,
      value: modelConfig['appliesTo'].format(row['appliesTo']),
    }))
    .with('agreements', () => ({
      id: 'agreements',
      label: modelConfig['agreements'].label,
      value: modelConfig['agreements'].format(row['agreements']),
    }))
    .with('letterText', () => ({
      id: 'letterText',
      label: modelConfig['letterText'].label,
      value: modelConfig['letterText'].format(row['letterText']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
export type UseTenanciesIdResponsibilitiesTableArgs = { id: string; fieldNames: (keyof TenancyResponsibilityModel)[] }
export const useTenanciesIdResponsibilitiesTable = (args: UseTenanciesIdResponsibilitiesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdResponsibilities({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyResponsibilityModel => c in row)
        .map((fieldName) =>
          getTenanciesIdResponsibilitiesTableColumn(fieldName, tenancyResponsibilityModelConfig, row),
        ),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdRenewalNegotiationsTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyRenewalModel>,
  row: TenancyRenewalModel,
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
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
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
    .with('rentChange', () => ({
      id: 'rentChange',
      label: modelConfig['rentChange'].label,
      value: modelConfig['rentChange'].format(row['rentChange']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
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
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseTenanciesIdRenewalNegotiationsTableArgs = { id: string; fieldNames: (keyof TenancyRenewalModel)[] }
export const useTenanciesIdRenewalNegotiationsTable = (args: UseTenanciesIdRenewalNegotiationsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiations({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyRenewalModel => c in row)
        .map((fieldName) => getTenanciesIdRenewalNegotiationsTableColumn(fieldName, tenancyRenewalModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdExtensionsTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyExtensionAlterationModel>,
  row: TenancyExtensionAlterationModel,
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
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
    }))
    .with('fee', () => ({
      id: 'fee',
      label: modelConfig['fee'].label,
      value: modelConfig['fee'].format(row['fee']),
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
export type UseTenanciesIdExtensionsTableArgs = { id: string; fieldNames: (keyof TenancyExtensionAlterationModel)[] }
export const useTenanciesIdExtensionsTable = (args: UseTenanciesIdExtensionsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdExtensions({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyExtensionAlterationModel => c in row)
        .map((fieldName) => getTenanciesIdExtensionsTableColumn(fieldName, tenancyExtensionAlterationModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumn = (
  property: string,
  modelConfig: ModelConfig<TenancyRenewalCheckModel>,
  row: TenancyRenewalCheckModel,
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
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('checkTypeId', () => ({
      id: 'checkTypeId',
      label: modelConfig['checkTypeId'].label,
      value: modelConfig['checkTypeId'].format(row['checkTypeId']),
    }))
    .with('tenancyId', () => ({
      id: 'tenancyId',
      label: modelConfig['tenancyId'].label,
      value: modelConfig['tenancyId'].format(row['tenancyId']),
    }))
    .with('renewalId', () => ({
      id: 'renewalId',
      label: modelConfig['renewalId'].label,
      value: modelConfig['renewalId'].format(row['renewalId']),
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
export type UseTenanciesIdRenewalNegotiationsRenewalIdChecksTableArgs = {
  id: string
  renewalId: string
  fieldNames: (keyof TenancyRenewalCheckModel)[]
}
export const useTenanciesIdRenewalNegotiationsRenewalIdChecksTable = (
  args: UseTenanciesIdRenewalNegotiationsRenewalIdChecksTableArgs,
) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof TenancyRenewalCheckModel => c in row)
        .map((fieldName) =>
          getTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumn(fieldName, tenancyRenewalCheckModelConfig, row),
        ),
    })) ?? []

  return { rows, dataQuery }
}
