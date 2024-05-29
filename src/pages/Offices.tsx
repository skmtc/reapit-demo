import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { OfficeModel } from '@/schemas'
import { getOfficesColumn, useOfficesTable } from '@/tables/offices'
import { officeModelConfig } from '@/config/officeModel'

const fieldNames = fieldsConfig<OfficeModel>({
  id: true,
  name: true,
})

export const Offices = () => {
  const columns: ColumnsList<OfficeModel> = fieldNames.map((col) => getOfficesColumn(col, officeModelConfig))

  const { table, dataQuery } = useOfficesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Offices</Typography>
        <Button
          component={RouterLink}
          to="/offices/new"
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
