import { useLandlordsTable } from '@/tables/LandlordsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { LandlordModel } from '@/schemas/landlordModel.generated.tsx'

export const fieldNames = fieldsConfig<LandlordModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  active: true,
  solicitorId: true,
  officeId: true,
  source: true,
  related: true,
  metadata: true,
  extrasField: true,
  _eTag: true,
})
export const LandlordsTable = () => {
  const { rows } = useLandlordsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useLandlordsTable</Typography>
        <Button
          component={RouterLink}
          to={`/landlords/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create landlord
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
