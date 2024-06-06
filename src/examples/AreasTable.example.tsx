import { useAreasTable, getuseAreasTableColumn } from 'tables/Areas.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { AreaModel } from 'schemas/index.ts'
import { areaModelConfig } from 'config/areaModel.example.tsx'

export const fieldNames = fieldsConfig<AreaModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
name: true,
active: true,
type: true,
area: true,
departmentIds: true,
officeIds: true,
parentIds: true,
_eTag: true
      });
export const AreasTable = () => {
  const columns: ColumnsList<AreaModel> = fieldNames.map((col) => getuseAreasTableColumn(col, areaModelConfig))

  

  

  const { table, dataQuery } = useAreasTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useAreasTable</Typography>
        <Button
          component={RouterLink}
          to={`/areas/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create area
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;