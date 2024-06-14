import { flexRender, Table } from '@tanstack/react-table'
import { UseQueryResult } from '@tanstack/react-query'
import { default as MuiTable } from '@mui/joy/Table'
import { type Embedded } from '@/components/Pagination'
import Box from '@mui/joy/Box'
import { useNavigate } from 'react-router-dom'

type SharedTableProps<Model, Response extends Embedded<Model>> = {
  table: Table<Model>
  dataQuery: UseQueryResult<Response>
}

export const SharedTable = <Model, Response extends Embedded<Model>>({ table }: SharedTableProps<Model, Response>) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <MuiTable aria-label="basic table" sx={{ tableLayout: 'fixed', width: 'auto' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(({ id, colSpan, column }) => {
                const header = column.columnDef.header as string | undefined
                const minWidth = column.columnDef.minSize
                const width = column.columnDef.size

                return (
                  <th key={id} colSpan={colSpan} style={{ minWidth, width }}>
                    {header ?? id}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  onClick={() => {
                    if (row.original && typeof row.original === 'object' && 'id' in row.original) {
                      return navigate(`./${row.original.id}`)
                    }
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </MuiTable>
    </Box>
  )
}
