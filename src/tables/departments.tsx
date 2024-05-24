import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import { useGetApiDepartments } from '@/services/departments.ts'

export const departmentsBody = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  modified: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  typeOptions: z.array(z.string()).nullable().optional(),
  styleOptions: z.array(z.string()).nullable().optional(),
  situationOptions: z.array(z.string()).nullable().optional(),
  parkingOptions: z.array(z.string()).nullable().optional(),
  ageOptions: z.array(z.string()).nullable().optional(),
  localityOptions: z.array(z.string()).nullable().optional(),
  specialFeaturesOptions: z.array(z.string()).nullable().optional(),
  commercialUseClassOptions: z.array(z.string()).nullable().optional(),
  commercialFloorLevelOptions: z.array(z.string()).nullable().optional(),
  hasBedrooms: z.boolean().nullable().optional(),
  hasBathrooms: z.boolean().nullable().optional(),
  hasReceptionRooms: z.boolean().nullable().optional(),
  hasParkingSpaces: z.boolean().nullable().optional(),
  hasFloorLevelEnabled: z.boolean().nullable().optional(),
  hasInternalFloorsEnabled: z.boolean().nullable().optional(),
  hasTotalFloorsEnabled: z.boolean().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
export type DepartmentsBody = {
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  name?: string | undefined | null
  typeOptions?: Array<string> | undefined | null
  styleOptions?: Array<string> | undefined | null
  situationOptions?: Array<string> | undefined | null
  parkingOptions?: Array<string> | undefined | null
  ageOptions?: Array<string> | undefined | null
  localityOptions?: Array<string> | undefined | null
  specialFeaturesOptions?: Array<string> | undefined | null
  commercialUseClassOptions?: Array<string> | undefined | null
  commercialFloorLevelOptions?: Array<string> | undefined | null
  hasBedrooms?: boolean | undefined | null
  hasBathrooms?: boolean | undefined | null
  hasReceptionRooms?: boolean | undefined | null
  hasParkingSpaces?: boolean | undefined | null
  hasFloorLevelEnabled?: boolean | undefined | null
  hasInternalFloorsEnabled?: boolean | undefined | null
  hasTotalFloorsEnabled?: boolean | undefined | null
  _eTag?: string | undefined | null
}
export type DepartmentsArgs = {
  id?: Array<string> | undefined | null
  name?: string | undefined | null
  columns: ColumnsList<DepartmentsBody>
}

export const departmentsColumnHelper = createColumnHelper<DepartmentsBody>()

export const getDepartmentsColumn = (property: string, { label, format }: ConfigItemLookup<DepartmentsBody>) => {
  return match(property)
    .with('_links', () => {
      return departmentsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format('_links', info.getValue()),
      })
    })
    .with('_embedded', () => {
      return departmentsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format('_embedded', info.getValue()),
      })
    })
    .with('id', () => {
      return departmentsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format('id', info.getValue()),
      })
    })
    .with('created', () => {
      return departmentsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format('created', info.getValue()),
      })
    })
    .with('modified', () => {
      return departmentsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format('modified', info.getValue()),
      })
    })
    .with('name', () => {
      return departmentsColumnHelper.accessor((row) => row.name, {
        id: 'name',
        header: label('name'),
        cell: (info) => format('name', info.getValue()),
      })
    })
    .with('typeOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.typeOptions, {
        id: 'typeOptions',
        header: label('typeOptions'),
        cell: (info) => format('typeOptions', info.getValue()),
      })
    })
    .with('styleOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.styleOptions, {
        id: 'styleOptions',
        header: label('styleOptions'),
        cell: (info) => format('styleOptions', info.getValue()),
      })
    })
    .with('situationOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.situationOptions, {
        id: 'situationOptions',
        header: label('situationOptions'),
        cell: (info) => format('situationOptions', info.getValue()),
      })
    })
    .with('parkingOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.parkingOptions, {
        id: 'parkingOptions',
        header: label('parkingOptions'),
        cell: (info) => format('parkingOptions', info.getValue()),
      })
    })
    .with('ageOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.ageOptions, {
        id: 'ageOptions',
        header: label('ageOptions'),
        cell: (info) => format('ageOptions', info.getValue()),
      })
    })
    .with('localityOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.localityOptions, {
        id: 'localityOptions',
        header: label('localityOptions'),
        cell: (info) => format('localityOptions', info.getValue()),
      })
    })
    .with('specialFeaturesOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.specialFeaturesOptions, {
        id: 'specialFeaturesOptions',
        header: label('specialFeaturesOptions'),
        cell: (info) => format('specialFeaturesOptions', info.getValue()),
      })
    })
    .with('commercialUseClassOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.commercialUseClassOptions, {
        id: 'commercialUseClassOptions',
        header: label('commercialUseClassOptions'),
        cell: (info) => format('commercialUseClassOptions', info.getValue()),
      })
    })
    .with('commercialFloorLevelOptions', () => {
      return departmentsColumnHelper.accessor((row) => row.commercialFloorLevelOptions, {
        id: 'commercialFloorLevelOptions',
        header: label('commercialFloorLevelOptions'),
        cell: (info) => format('commercialFloorLevelOptions', info.getValue()),
      })
    })
    .with('hasBedrooms', () => {
      return departmentsColumnHelper.accessor((row) => row.hasBedrooms, {
        id: 'hasBedrooms',
        header: label('hasBedrooms'),
        cell: (info) => format('hasBedrooms', info.getValue()),
      })
    })
    .with('hasBathrooms', () => {
      return departmentsColumnHelper.accessor((row) => row.hasBathrooms, {
        id: 'hasBathrooms',
        header: label('hasBathrooms'),
        cell: (info) => format('hasBathrooms', info.getValue()),
      })
    })
    .with('hasReceptionRooms', () => {
      return departmentsColumnHelper.accessor((row) => row.hasReceptionRooms, {
        id: 'hasReceptionRooms',
        header: label('hasReceptionRooms'),
        cell: (info) => format('hasReceptionRooms', info.getValue()),
      })
    })
    .with('hasParkingSpaces', () => {
      return departmentsColumnHelper.accessor((row) => row.hasParkingSpaces, {
        id: 'hasParkingSpaces',
        header: label('hasParkingSpaces'),
        cell: (info) => format('hasParkingSpaces', info.getValue()),
      })
    })
    .with('hasFloorLevelEnabled', () => {
      return departmentsColumnHelper.accessor((row) => row.hasFloorLevelEnabled, {
        id: 'hasFloorLevelEnabled',
        header: label('hasFloorLevelEnabled'),
        cell: (info) => format('hasFloorLevelEnabled', info.getValue()),
      })
    })
    .with('hasInternalFloorsEnabled', () => {
      return departmentsColumnHelper.accessor((row) => row.hasInternalFloorsEnabled, {
        id: 'hasInternalFloorsEnabled',
        header: label('hasInternalFloorsEnabled'),
        cell: (info) => format('hasInternalFloorsEnabled', info.getValue()),
      })
    })
    .with('hasTotalFloorsEnabled', () => {
      return departmentsColumnHelper.accessor((row) => row.hasTotalFloorsEnabled, {
        id: 'hasTotalFloorsEnabled',
        header: label('hasTotalFloorsEnabled'),
        cell: (info) => format('hasTotalFloorsEnabled', info.getValue()),
      })
    })
    .with('_eTag', () => {
      return departmentsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format('_eTag', info.getValue()),
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
