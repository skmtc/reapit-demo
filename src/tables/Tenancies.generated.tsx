import { tenancyModel, TenancyModel, tenancyContactRelationshipModel, TenancyContactRelationshipModel, tenancyCheckModel, TenancyCheckModel, tenancyBreakClauseModel, TenancyBreakClauseModel, tenancyAllowanceModel, TenancyAllowanceModel, tenancyResponsibilityModel, TenancyResponsibilityModel, tenancyRenewalModel, TenancyRenewalModel, tenancyExtensionAlterationModel, TenancyExtensionAlterationModel, tenancyRenewalCheckModel, TenancyRenewalCheckModel } from 'schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiTenancies, useGetApiTenanciesIdRelationships, useGetApiTenanciesIdChecks, useGetApiTenanciesIdBreakClauses, useGetApiTenanciesIdAllowances, useGetApiTenanciesIdResponsibilities, useGetApiTenanciesIdRenewalNegotiations, useGetApiTenanciesIdRenewalNegotiationsRenewalId, useGetApiTenanciesIdExtensions, useGetApiTenanciesIdExtensionsExtensionId, useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks } from 'services/Tenancies.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useTenanciesTableColumnHelper = createColumnHelper<TenancyModel>();
export type UseTenanciesTableArgs = {sortBy?: string | undefined, fromArchive?: boolean | undefined, embed?: Array<'appointments' | 'applicant' | 'extensions' | 'documents' | 'negotiator' | 'property' | 'source' | 'tasks' | 'type'> | undefined, id?: Array<string> | undefined, negotiatorId?: Array<string> | undefined, applicantId?: Array<string> | undefined, propertyId?: Array<string> | undefined, name?: string | undefined, nameType?: string | undefined, status?: Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'> | undefined, email?: Array<string> | undefined, createdFrom?: string | undefined, createdTo?: string | undefined, modifiedFrom?: string | undefined, modifiedTo?: string | undefined, endDateFrom?: string | undefined, endDateTo?: string | undefined, startDateFrom?: string | undefined, startDateTo?: string | undefined, metadata?: Array<string> | undefined, columns: ColumnsList<TenancyModel>};
export const getuseTenanciesTableColumn = (property:string, modelConfig: ModelConfig<TenancyModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesTableColumnHelper.accessor(row => row.startDate, {
      id: 'startDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesTableColumnHelper.accessor(row => row.endDate, {
      id: 'endDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('agentRole', () => {
      const { label: header, format, width, minWidth } = modelConfig['agentRole']

      return useTenanciesTableColumnHelper.accessor(row => row.agentRole, {
      id: 'agentRole',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesTableColumnHelper.accessor(row => row.rent, {
      id: 'rent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesTableColumnHelper.accessor(row => row.rentFrequency, {
      id: 'rentFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDateConfirmed', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDateConfirmed']

      return useTenanciesTableColumnHelper.accessor(row => row.endDateConfirmed, {
      id: 'endDateConfirmed',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('isPeriodic', () => {
      const { label: header, format, width, minWidth } = modelConfig['isPeriodic']

      return useTenanciesTableColumnHelper.accessor(row => row.isPeriodic, {
      id: 'isPeriodic',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentInstalmentsFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsFrequency']

      return useTenanciesTableColumnHelper.accessor(row => row.rentInstalmentsFrequency, {
      id: 'rentInstalmentsFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentInstalmentsAmount', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsAmount']

      return useTenanciesTableColumnHelper.accessor(row => row.rentInstalmentsAmount, {
      id: 'rentInstalmentsAmount',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentInstalmentsStart', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentInstalmentsStart']

      return useTenanciesTableColumnHelper.accessor(row => row.rentInstalmentsStart, {
      id: 'rentInstalmentsStart',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingGas', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGas']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingGas, {
      id: 'meterReadingGas',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingGasLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingGasLastRead']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingGasLastRead, {
      id: 'meterReadingGasLastRead',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingElectricity', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricity']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingElectricity, {
      id: 'meterReadingElectricity',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingElectricityLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingElectricityLastRead']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingElectricityLastRead, {
      id: 'meterReadingElectricityLastRead',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingWater', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWater']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingWater, {
      id: 'meterReadingWater',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('meterReadingWaterLastRead', () => {
      const { label: header, format, width, minWidth } = modelConfig['meterReadingWaterLastRead']

      return useTenanciesTableColumnHelper.accessor(row => row.meterReadingWaterLastRead, {
      id: 'meterReadingWaterLastRead',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useTenanciesTableColumnHelper.accessor(row => row.typeId, {
      id: 'typeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return useTenanciesTableColumnHelper.accessor(row => row.propertyId, {
      id: 'propertyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('applicantId', () => {
      const { label: header, format, width, minWidth } = modelConfig['applicantId']

      return useTenanciesTableColumnHelper.accessor(row => row.applicantId, {
      id: 'applicantId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('managerId', () => {
      const { label: header, format, width, minWidth } = modelConfig['managerId']

      return useTenanciesTableColumnHelper.accessor(row => row.managerId, {
      id: 'managerId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('groupPaymentReference', () => {
      const { label: header, format, width, minWidth } = modelConfig['groupPaymentReference']

      return useTenanciesTableColumnHelper.accessor(row => row.groupPaymentReference, {
      id: 'groupPaymentReference',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return useTenanciesTableColumnHelper.accessor(row => row.lettingFee, {
      id: 'lettingFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return useTenanciesTableColumnHelper.accessor(row => row.managementFee, {
      id: 'managementFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('source', () => {
      const { label: header, format, width, minWidth } = modelConfig['source']

      return useTenanciesTableColumnHelper.accessor(row => row.source, {
      id: 'source',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('deposit', () => {
      const { label: header, format, width, minWidth } = modelConfig['deposit']

      return useTenanciesTableColumnHelper.accessor(row => row.deposit, {
      id: 'deposit',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('related', () => {
      const { label: header, format, width, minWidth } = modelConfig['related']

      return useTenanciesTableColumnHelper.accessor(row => row.related, {
      id: 'related',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useTenanciesTableColumnHelper.accessor(row => row.fromArchive, {
      id: 'fromArchive',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useTenanciesTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('feeNotes', () => {
      const { label: header, format, width, minWidth } = modelConfig['feeNotes']

      return useTenanciesTableColumnHelper.accessor(row => row.feeNotes, {
      id: 'feeNotes',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('legalStatusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['legalStatusId']

      return useTenanciesTableColumnHelper.accessor(row => row.legalStatusId, {
      id: 'legalStatusId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('renewalOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['renewalOptions']

      return useTenanciesTableColumnHelper.accessor(row => row.renewalOptions, {
      id: 'renewalOptions',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('arrears', () => {
      const { label: header, format, width, minWidth } = modelConfig['arrears']

      return useTenanciesTableColumnHelper.accessor(row => row.arrears, {
      id: 'arrears',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesTable = (args: UseTenanciesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenancies({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdRelationshipsTableColumnHelper = createColumnHelper<TenancyContactRelationshipModel>();
export type UseTenanciesIdRelationshipsTableArgs = {id: string, columns: ColumnsList<TenancyContactRelationshipModel>};
export const getuseTenanciesIdRelationshipsTableColumn = (property:string, modelConfig: ModelConfig<TenancyContactRelationshipModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedType', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedType']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.associatedType, {
      id: 'associatedType',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('associatedId', () => {
      const { label: header, format, width, minWidth } = modelConfig['associatedId']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.associatedId, {
      id: 'associatedId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('isMain', () => {
      const { label: header, format, width, minWidth } = modelConfig['isMain']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.isMain, {
      id: 'isMain',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.fromArchive, {
      id: 'fromArchive',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('guarantors', () => {
      const { label: header, format, width, minWidth } = modelConfig['guarantors']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.guarantors, {
      id: 'guarantors',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('references', () => {
      const { label: header, format, width, minWidth } = modelConfig['references']

      return useTenanciesIdRelationshipsTableColumnHelper.accessor(row => row.references, {
      id: 'references',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdRelationshipsTable = (args: UseTenanciesIdRelationshipsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdChecksTableColumnHelper = createColumnHelper<TenancyCheckModel>();
export type UseTenanciesIdChecksTableArgs = {id: string, type?: string | undefined, status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined, columns: ColumnsList<TenancyCheckModel>};
export const getuseTenanciesIdChecksTableColumn = (property:string, modelConfig: ModelConfig<TenancyCheckModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('checkTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkTypeId']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.checkTypeId, {
      id: 'checkTypeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdChecksTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdChecksTable = (args: UseTenanciesIdChecksTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdBreakClausesTableColumnHelper = createColumnHelper<TenancyBreakClauseModel>();
export type UseTenanciesIdBreakClausesTableArgs = {id: string, columns: ColumnsList<TenancyBreakClauseModel>};
export const getuseTenanciesIdBreakClausesTableColumn = (property:string, modelConfig: ModelConfig<TenancyBreakClauseModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('clauseTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['clauseTypeId']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.clauseTypeId, {
      id: 'clauseTypeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.active, {
      id: 'active',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('appliesTo', () => {
      const { label: header, format, width, minWidth } = modelConfig['appliesTo']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.appliesTo, {
      id: 'appliesTo',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.letterText, {
      id: 'letterText',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('breakFrom', () => {
      const { label: header, format, width, minWidth } = modelConfig['breakFrom']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.breakFrom, {
      id: 'breakFrom',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('noticeRequired', () => {
      const { label: header, format, width, minWidth } = modelConfig['noticeRequired']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.noticeRequired, {
      id: 'noticeRequired',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.agreements, {
      id: 'agreements',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdBreakClausesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdBreakClausesTable = (args: UseTenanciesIdBreakClausesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdBreakClauses({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdAllowancesTableColumnHelper = createColumnHelper<TenancyAllowanceModel>();
export type UseTenanciesIdAllowancesTableArgs = {id: string, columns: ColumnsList<TenancyAllowanceModel>};
export const getuseTenanciesIdAllowancesTableColumn = (property:string, modelConfig: ModelConfig<TenancyAllowanceModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.typeId, {
      id: 'typeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('state', () => {
      const { label: header, format, width, minWidth } = modelConfig['state']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.state, {
      id: 'state',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.agreements, {
      id: 'agreements',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.letterText, {
      id: 'letterText',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdAllowancesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdAllowancesTable = (args: UseTenanciesIdAllowancesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdAllowances({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdResponsibilitiesTableColumnHelper = createColumnHelper<TenancyResponsibilityModel>();
export type UseTenanciesIdResponsibilitiesTableArgs = {id: string, columns: ColumnsList<TenancyResponsibilityModel>};
export const getuseTenanciesIdResponsibilitiesTableColumn = (property:string, modelConfig: ModelConfig<TenancyResponsibilityModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.typeId, {
      id: 'typeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('appliesTo', () => {
      const { label: header, format, width, minWidth } = modelConfig['appliesTo']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.appliesTo, {
      id: 'appliesTo',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('agreements', () => {
      const { label: header, format, width, minWidth } = modelConfig['agreements']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.agreements, {
      id: 'agreements',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('letterText', () => {
      const { label: header, format, width, minWidth } = modelConfig['letterText']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.letterText, {
      id: 'letterText',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdResponsibilitiesTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdResponsibilitiesTable = (args: UseTenanciesIdResponsibilitiesTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdResponsibilities({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdRenewalNegotiationsTableColumnHelper = createColumnHelper<TenancyRenewalModel>();
export type UseTenanciesIdRenewalNegotiationsTableArgs = {id: string, columns: ColumnsList<TenancyRenewalModel>};
export const getuseTenanciesIdRenewalNegotiationsTableColumn = (property:string, modelConfig: ModelConfig<TenancyRenewalModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.startDate, {
      id: 'startDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.endDate, {
      id: 'endDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.rent, {
      id: 'rent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.rentFrequency, {
      id: 'rentFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentChange', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentChange']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.rentChange, {
      id: 'rentChange',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.lettingFee, {
      id: 'lettingFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row.managementFee, {
      id: 'managementFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdRenewalNegotiationsTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdRenewalNegotiationsTable = (args: UseTenanciesIdRenewalNegotiationsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiations({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper = createColumnHelper<TenancyRenewalModel>();
export type UseTenanciesIdRenewalNegotiationsRenewalIdTableArgs = {id: string, renewalId: string, columns: ColumnsList<TenancyRenewalModel>};
export const getuseTenanciesIdRenewalNegotiationsRenewalIdTableColumn = (property:string, modelConfig: ModelConfig<TenancyRenewalModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.startDate, {
      id: 'startDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.endDate, {
      id: 'endDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.rent, {
      id: 'rent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.rentFrequency, {
      id: 'rentFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentChange', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentChange']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.rentChange, {
      id: 'rentChange',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('lettingFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['lettingFee']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.lettingFee, {
      id: 'lettingFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('managementFee', () => {
      const { label: header, format, width, minWidth } = modelConfig['managementFee']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row.managementFee, {
      id: 'managementFee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdRenewalNegotiationsRenewalIdTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdRenewalNegotiationsRenewalIdTable = (args: UseTenanciesIdRenewalNegotiationsRenewalIdTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiationsRenewalId({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdExtensionsTableColumnHelper = createColumnHelper<TenancyExtensionAlterationModel>();
export type UseTenanciesIdExtensionsTableArgs = {id: string, columns: ColumnsList<TenancyExtensionAlterationModel>};
export const getuseTenanciesIdExtensionsTableColumn = (property:string, modelConfig: ModelConfig<TenancyExtensionAlterationModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.startDate, {
      id: 'startDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.endDate, {
      id: 'endDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.rent, {
      id: 'rent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.rentFrequency, {
      id: 'rentFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fee', () => {
      const { label: header, format, width, minWidth } = modelConfig['fee']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row.fee, {
      id: 'fee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdExtensionsTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdExtensionsTable = (args: UseTenanciesIdExtensionsTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdExtensions({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdExtensionsExtensionIdTableColumnHelper = createColumnHelper<TenancyExtensionAlterationModel>();
export type UseTenanciesIdExtensionsExtensionIdTableArgs = {id: string, extensionId: string, columns: ColumnsList<TenancyExtensionAlterationModel>};
export const getuseTenanciesIdExtensionsExtensionIdTableColumn = (property:string, modelConfig: ModelConfig<TenancyExtensionAlterationModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('startDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['startDate']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.startDate, {
      id: 'startDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('endDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['endDate']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.endDate, {
      id: 'endDate',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.type, {
      id: 'type',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.negotiatorId, {
      id: 'negotiatorId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rent', () => {
      const { label: header, format, width, minWidth } = modelConfig['rent']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.rent, {
      id: 'rent',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('rentFrequency', () => {
      const { label: header, format, width, minWidth } = modelConfig['rentFrequency']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.rentFrequency, {
      id: 'rentFrequency',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('fee', () => {
      const { label: header, format, width, minWidth } = modelConfig['fee']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row.fee, {
      id: 'fee',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdExtensionsExtensionIdTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdExtensionsExtensionIdTable = (args: UseTenanciesIdExtensionsExtensionIdTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdExtensionsExtensionId({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};
export const useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper = createColumnHelper<TenancyRenewalCheckModel>();
export type UseTenanciesIdRenewalNegotiationsRenewalIdChecksTableArgs = {id: string, renewalId: string, columns: ColumnsList<TenancyRenewalCheckModel>};
export const getuseTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumn = (property:string, modelConfig: ModelConfig<TenancyRenewalCheckModel>) => {
      return match(property).with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row._links, {
      id: '_links',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row._embedded, {
      id: '_embedded',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.id, {
      id: 'id',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.created, {
      id: 'created',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.modified, {
      id: 'modified',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.status, {
      id: 'status',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.description, {
      id: 'description',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('checkTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkTypeId']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.checkTypeId, {
      id: 'checkTypeId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('tenancyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['tenancyId']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.tenancyId, {
      id: 'tenancyId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('renewalId', () => {
      const { label: header, format, width, minWidth } = modelConfig['renewalId']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.renewalId, {
      id: 'renewalId',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row.metadata, {
      id: 'metadata',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })})
.with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useTenanciesIdRenewalNegotiationsRenewalIdChecksTableColumnHelper.accessor(row => row._eTag, {
      id: '_eTag',
      header,
      cell: info => format(info.getValue()),
      size: width,
      minSize: minWidth
    })}).otherwise(() => {
        throw new Error (`Unknown column: ${property}`)
    })
  };
export const useTenanciesIdRenewalNegotiationsRenewalIdChecksTable = (args: UseTenanciesIdRenewalNegotiationsRenewalIdChecksTableArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
};