import { flexRender, Table } from '@tanstack/react-table'
import { useReducer } from 'react'
import { UseQueryResult } from '@tanstack/react-query'
import { default as MuiTable } from '@mui/joy/Table'
import { Pagination, type Embedded } from '@/components/Pagination'

type SharedTableProps<Model, Response extends Embedded<Model>> = {
  table: Table<Model>
  dataQuery: UseQueryResult<Response>
}

export const SharedTable = <Model, Response extends Embedded<Model>>({
  table,
  dataQuery
}: SharedTableProps<Model, Response>) => {
  const rerender = useReducer(() => ({}), {})[1]

  return (
    <div>
      <MuiTable aria-label="basic table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(({ id, colSpan, column }) => {
                  const header = column.columnDef.header as string | undefined

                  return (
                    <th key={id} colSpan={colSpan}>
                      {header ?? id}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </MuiTable>
      <Pagination table={table} dataQuery={dataQuery} rerender={rerender} />
    </div>
  )
}
