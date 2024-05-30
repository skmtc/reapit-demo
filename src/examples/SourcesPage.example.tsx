import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useSourcesTable, getSourcesColumn } from '@/tables/sources.generated.tsx'
import { SourceModel } from '@/schemas/index.ts'
import { sourceModelConfig } from '@/config/sourceModel.example.tsx'

const fieldNames = fieldsConfig<SourceModel>({
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

export const Sources = () => {
  const columns: ColumnsList<SourceModel> = fieldNames.map((col) => getSourcesColumn(col, sourceModelConfig))

  const { table, dataQuery } = useSourcesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Sources</Typography>
        <Button
          component={RouterLink}
          to="/sources/new"
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
