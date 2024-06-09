import { companyModel, CompanyModel } from '@/schemas/companyModel.generated.tsx'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiCompanies } from 'services/Companies.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export const useCompaniesTableColumnHelper = createColumnHelper<CompanyModel>()
export type UseCompaniesTableArgs = {
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
export const getuseCompaniesTableColumn = (property: string, modelConfig: ModelConfig<CompanyModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useCompaniesTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useCompaniesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useCompaniesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useCompaniesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useCompaniesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return useCompaniesTableColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('branch', () => {
      const { label: header, format, width, minWidth } = modelConfig['branch']

      return useCompaniesTableColumnHelper.accessor((row) => row.branch, {
        id: 'branch',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return useCompaniesTableColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('active', () => {
      const { label: header, format, width, minWidth } = modelConfig['active']

      return useCompaniesTableColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingConsent', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingConsent']

      return useCompaniesTableColumnHelper.accessor((row) => row.marketingConsent, {
        id: 'marketingConsent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('vatRegistered', () => {
      const { label: header, format, width, minWidth } = modelConfig['vatRegistered']

      return useCompaniesTableColumnHelper.accessor((row) => row.vatRegistered, {
        id: 'vatRegistered',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeIds']

      return useCompaniesTableColumnHelper.accessor((row) => row.typeIds, {
        id: 'typeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('supplierTypeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['supplierTypeId']

      return useCompaniesTableColumnHelper.accessor((row) => row.supplierTypeId, {
        id: 'supplierTypeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('workPhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['workPhone']

      return useCompaniesTableColumnHelper.accessor((row) => row.workPhone, {
        id: 'workPhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('mobilePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['mobilePhone']

      return useCompaniesTableColumnHelper.accessor((row) => row.mobilePhone, {
        id: 'mobilePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('email', () => {
      const { label: header, format, width, minWidth } = modelConfig['email']

      return useCompaniesTableColumnHelper.accessor((row) => row.email, {
        id: 'email',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return useCompaniesTableColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return useCompaniesTableColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('address', () => {
      const { label: header, format, width, minWidth } = modelConfig['address']

      return useCompaniesTableColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('payments', () => {
      const { label: header, format, width, minWidth } = modelConfig['payments']

      return useCompaniesTableColumnHelper.accessor((row) => row.payments, {
        id: 'payments',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('additionalContactDetails', () => {
      const { label: header, format, width, minWidth } = modelConfig['additionalContactDetails']

      return useCompaniesTableColumnHelper.accessor((row) => row.additionalContactDetails, {
        id: 'additionalContactDetails',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return useCompaniesTableColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorIds']

      return useCompaniesTableColumnHelper.accessor((row) => row.negotiatorIds, {
        id: 'negotiatorIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceLetter', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceLetter']

      return useCompaniesTableColumnHelper.accessor((row) => row.communicationPreferenceLetter, {
        id: 'communicationPreferenceLetter',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceEmail', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceEmail']

      return useCompaniesTableColumnHelper.accessor((row) => row.communicationPreferenceEmail, {
        id: 'communicationPreferenceEmail',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferencePhone', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferencePhone']

      return useCompaniesTableColumnHelper.accessor((row) => row.communicationPreferencePhone, {
        id: 'communicationPreferencePhone',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('communicationPreferenceSms', () => {
      const { label: header, format, width, minWidth } = modelConfig['communicationPreferenceSms']

      return useCompaniesTableColumnHelper.accessor((row) => row.communicationPreferenceSms, {
        id: 'communicationPreferenceSms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return useCompaniesTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useCompaniesTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('relationships', () => {
      const { label: header, format, width, minWidth } = modelConfig['relationships']

      return useCompaniesTableColumnHelper.accessor((row) => row.relationships, {
        id: 'relationships',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export const useCompaniesTable = (args: UseCompaniesTableArgs) => {
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
