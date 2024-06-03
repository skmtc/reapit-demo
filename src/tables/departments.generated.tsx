import { departmentModel, DepartmentModel } from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiDepartments } from '@/services/departments.generated.ts'
import { useMemo, useReducer, useState } from 'react'

export type UseDepartmentsTableArgs = {
  id?: Array<string> | undefined
  name?: string | undefined
  columns: ColumnsList<DepartmentModel>
}

export const useDepartmentsTableColumnHelper = createColumnHelper<DepartmentModel>()

export const getuseDepartmentsTableColumn = (property: string, modelConfig: ModelConfig<DepartmentModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return useDepartmentsTableColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return useDepartmentsTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return useDepartmentsTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return useDepartmentsTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return useDepartmentsTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('name', () => {
      const { label: header, format, width, minWidth } = modelConfig['name']

      return useDepartmentsTableColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.typeOptions, {
        id: 'typeOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('styleOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['styleOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.styleOptions, {
        id: 'styleOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('situationOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['situationOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.situationOptions, {
        id: 'situationOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parkingOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['parkingOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.parkingOptions, {
        id: 'parkingOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('ageOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['ageOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.ageOptions, {
        id: 'ageOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('localityOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['localityOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.localityOptions, {
        id: 'localityOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('specialFeaturesOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['specialFeaturesOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.specialFeaturesOptions, {
        id: 'specialFeaturesOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('commercialUseClassOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['commercialUseClassOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.commercialUseClassOptions, {
        id: 'commercialUseClassOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('commercialFloorLevelOptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['commercialFloorLevelOptions']

      return useDepartmentsTableColumnHelper.accessor((row) => row.commercialFloorLevelOptions, {
        id: 'commercialFloorLevelOptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasBedrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasBedrooms']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasBedrooms, {
        id: 'hasBedrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasBathrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasBathrooms']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasBathrooms, {
        id: 'hasBathrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasReceptionRooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasReceptionRooms']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasReceptionRooms, {
        id: 'hasReceptionRooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasParkingSpaces', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasParkingSpaces']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasParkingSpaces, {
        id: 'hasParkingSpaces',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasFloorLevelEnabled', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasFloorLevelEnabled']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasFloorLevelEnabled, {
        id: 'hasFloorLevelEnabled',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasInternalFloorsEnabled', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasInternalFloorsEnabled']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasInternalFloorsEnabled, {
        id: 'hasInternalFloorsEnabled',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('hasTotalFloorsEnabled', () => {
      const { label: header, format, width, minWidth } = modelConfig['hasTotalFloorsEnabled']

      return useDepartmentsTableColumnHelper.accessor((row) => row.hasTotalFloorsEnabled, {
        id: 'hasTotalFloorsEnabled',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return useDepartmentsTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
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

export const useDepartmentsTable = (args: UseDepartmentsTableArgs) => {
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
