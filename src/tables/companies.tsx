import { companyModel, CompanyModel, companyRoleModel, CompanyRoleModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { z } from 'zod'
import { useGetApiCompanies, useGetApiCompaniesIdRelationships } from '@/services/companies.ts'

export type CompaniesArgs = {
  sortBy?: string | undefined
  embed?: Array<'companyTypes' | 'relationships'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  branch?: string | undefined
  name?: string | undefined
  typeId?: string | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  columns: ColumnsList<CompanyModel>
}
export type CompaniesIdRelationshipsArgs = { id: string; columns: ColumnsList<CompanyRoleModel> }

export const companiesColumnHelper = createColumnHelper<CompanyModel>()

export const getCompaniesColumn = (property: string, modelConfig: ModelConfig<CompanyModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return companiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return companiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return companiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return companiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return companiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('name', () => {
      const { label: header, format } = modelConfig['name']

      return companiesColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('branch', () => {
      const { label: header, format } = modelConfig['branch']

      return companiesColumnHelper.accessor((row) => row.branch, {
        id: 'branch',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return companiesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return companiesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format } = modelConfig['marketingConsent']

      return companiesColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('vatRegistered', () => {
      const { label: header, format } = modelConfig['vatRegistered']

      return companiesColumnHelper.accessor((row) => row.vatRegistered, {
        id: 'vatRegistered',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeIds', () => {
      const { label: header, format } = modelConfig['typeIds']

      return companiesColumnHelper.accessor((row) => row.typeIds, {
        id: 'typeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('supplierTypeId', () => {
      const { label: header, format } = modelConfig['supplierTypeId']

      return companiesColumnHelper.accessor((row) => row.supplierTypeId, {
        id: 'supplierTypeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('workPhone', () => {
      const { label: header, format } = modelConfig['workPhone']

      return companiesColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format } = modelConfig['mobilePhone']

      return companiesColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('email', () => {
      const { label: header, format } = modelConfig['email']

      return companiesColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('archivedOn', () => {
      const { label: header, format } = modelConfig['archivedOn']

      return companiesColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return companiesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('address', () => {
      const { label: header, format } = modelConfig['address']

      return companiesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('payments', () => {
      const { label: header, format } = modelConfig['payments']

      return companiesColumnHelper.accessor((row) => row.payments, {
        id: 'payments',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format } = modelConfig['additionalContactDetails']

      return companiesColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeIds', () => {
      const { label: header, format } = modelConfig['officeIds']

      return companiesColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format } = modelConfig['negotiatorIds']

      return companiesColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceLetter', () => {
      const { label: header, format } = modelConfig['communicationPreferenceLetter']

      return companiesColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceEmail', () => {
      const { label: header, format } = modelConfig['communicationPreferenceEmail']

      return companiesColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferencePhone', () => {
      const { label: header, format } = modelConfig['communicationPreferencePhone']

      return companiesColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('communicationPreferenceSms', () => {
      const { label: header, format } = modelConfig['communicationPreferenceSms']

      return companiesColumnHelper.accessor((row) => row.communicationPreferenceSms, {
        id: 'communicationPreferenceSms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return companiesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return companiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('relationships', () => {
      const { label: header, format } = modelConfig['relationships']

      return companiesColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useCompaniesTable = (args: CompaniesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompanies({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
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
}
export const companiesIdRelationshipsColumnHelper = createColumnHelper<CompanyRoleModel>()

export const getCompaniesIdRelationshipsColumn = (property: string, modelConfig: ModelConfig<CompanyRoleModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('companyId', () => {
      const { label: header, format } = modelConfig['companyId']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return companiesIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useCompaniesIdRelationshipsTable = (args: CompaniesIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiCompaniesIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
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
}
