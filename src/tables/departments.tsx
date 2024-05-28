import { departmentModel, DepartmentModel } from '@/models/departmentModel.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { z } from 'zod'
import { useGetApiDepartments } from '@/services/departments.ts'

export type DepartmentsArgs = {
  id?: Array<string> | undefined
  name?: string | undefined
  columns: ColumnsList<DepartmentModel>
}

export const departmentsColumnHelper = createColumnHelper<DepartmentModel>()

export const getDepartmentsColumn = (property: string, modelConfig: ModelConfig<DepartmentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return departmentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return departmentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return departmentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return departmentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return departmentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('name', () => {
      const { label: header, format } = modelConfig['name']

      return departmentsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeOptions', () => {
      const { label: header, format } = modelConfig['typeOptions']

      return departmentsColumnHelper.accessor((row) => row.typeOptions, {
        id: 'typeOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('styleOptions', () => {
      const { label: header, format } = modelConfig['styleOptions']

      return departmentsColumnHelper.accessor((row) => row.styleOptions, {
        id: 'styleOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('situationOptions', () => {
      const { label: header, format } = modelConfig['situationOptions']

      return departmentsColumnHelper.accessor((row) => row.situationOptions, {
        id: 'situationOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parkingOptions', () => {
      const { label: header, format } = modelConfig['parkingOptions']

      return departmentsColumnHelper.accessor((row) => row.parkingOptions, {
        id: 'parkingOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('ageOptions', () => {
      const { label: header, format } = modelConfig['ageOptions']

      return departmentsColumnHelper.accessor((row) => row.ageOptions, {
        id: 'ageOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('localityOptions', () => {
      const { label: header, format } = modelConfig['localityOptions']

      return departmentsColumnHelper.accessor((row) => row.localityOptions, {
        id: 'localityOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('specialFeaturesOptions', () => {
      const { label: header, format } = modelConfig['specialFeaturesOptions']

      return departmentsColumnHelper.accessor((row) => row.specialFeaturesOptions, {
        id: 'specialFeaturesOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('commercialUseClassOptions', () => {
      const { label: header, format } = modelConfig['commercialUseClassOptions']

      return departmentsColumnHelper.accessor((row) => row.commercialUseClassOptions, {
        id: 'commercialUseClassOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('commercialFloorLevelOptions', () => {
      const { label: header, format } = modelConfig['commercialFloorLevelOptions']

      return departmentsColumnHelper.accessor((row) => row.commercialFloorLevelOptions, {
        id: 'commercialFloorLevelOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasBedrooms', () => {
      const { label: header, format } = modelConfig['hasBedrooms']

      return departmentsColumnHelper.accessor((row) => row.hasBedrooms, {
        id: 'hasBedrooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasBathrooms', () => {
      const { label: header, format } = modelConfig['hasBathrooms']

      return departmentsColumnHelper.accessor((row) => row.hasBathrooms, {
        id: 'hasBathrooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasReceptionRooms', () => {
      const { label: header, format } = modelConfig['hasReceptionRooms']

      return departmentsColumnHelper.accessor((row) => row.hasReceptionRooms, {
        id: 'hasReceptionRooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasParkingSpaces', () => {
      const { label: header, format } = modelConfig['hasParkingSpaces']

      return departmentsColumnHelper.accessor((row) => row.hasParkingSpaces, {
        id: 'hasParkingSpaces',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasFloorLevelEnabled', () => {
      const { label: header, format } = modelConfig['hasFloorLevelEnabled']

      return departmentsColumnHelper.accessor((row) => row.hasFloorLevelEnabled, {
        id: 'hasFloorLevelEnabled',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasInternalFloorsEnabled', () => {
      const { label: header, format } = modelConfig['hasInternalFloorsEnabled']

      return departmentsColumnHelper.accessor((row) => row.hasInternalFloorsEnabled, {
        id: 'hasInternalFloorsEnabled',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('hasTotalFloorsEnabled', () => {
      const { label: header, format } = modelConfig['hasTotalFloorsEnabled']

      return departmentsColumnHelper.accessor((row) => row.hasTotalFloorsEnabled, {
        id: 'hasTotalFloorsEnabled',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return departmentsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useDepartmentsTable = (args: DepartmentsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiDepartments({
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
