import { useOfficesTable } from '@/tables/OfficesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { OfficeModel } from '@/schemas/officeModel.generated.tsx'

export const fieldNames = fieldsConfig<OfficeModel>({
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
export const OfficesTable = () => {
  const { rows } = useOfficesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useOfficesTable</Typography>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
