import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useOfficesTable, getOfficesColumn } from '@/tables/offices.generated.tsx'
import { OfficeModel } from '@/schemas/index.ts'
import { officeModelConfig } from '@/config/officeModel.example.tsx'

const fieldNames = fieldsConfig<OfficeModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  name: true,
  manager: true,
  active: true,
  region: true,
  address: true,
  additionalContactDetails: true,
  workPhone: true,
  email: true,
  metadata: true,
  _eTag: true,
  extrasField: true,
})

export const Offices = () => {
  const columns: ColumnsList<OfficeModel> = fieldNames.map((col) => getOfficesColumn(col, officeModelConfig))

  const { table, dataQuery } = useOfficesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Offices</Typography>
        <Button
          component={RouterLink}
          to={`/offices/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create office
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
