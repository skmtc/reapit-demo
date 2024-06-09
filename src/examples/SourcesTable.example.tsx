import { useSourcesTable, getuseSourcesTableColumn } from '@/tables/SourcesTable.generated.tsx'
import { sourceModelConfig } from '@/config/sourceModelConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { SourceModel } from '@/schemas/sourceModel.generated.tsx'

export const fieldNames = fieldsConfig<SourceModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  name: true,
  type: true,
  officeIds: true,
  departmentIds: true,
  _eTag: true,
})
export const SourcesTable = () => {
  const columns: ColumnsList<SourceModel> = fieldNames.map((col) => getuseSourcesTableColumn(col, sourceModelConfig))

  const { table, dataQuery } = useSourcesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useSourcesTable</Typography>
        <Button
          component={RouterLink}
          to={`/sources/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create source
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
