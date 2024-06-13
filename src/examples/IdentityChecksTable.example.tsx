import { useIdentityChecksTable } from '@/tables/IdentityChecksTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { IdentityCheckModel } from '@/schemas/identityCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<IdentityCheckModel>({
  _links: true,
  _embedded: true,
  id: true,
  contactId: true,
  created: true,
  modified: true,
  checkDate: true,
  status: true,
  negotiatorId: true,
  identityDocument1: true,
  identityDocument2: true,
  metadata: true,
  _eTag: true,
})
export const IdentityChecksTable = () => {
  const { rows } = useIdentityChecksTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useIdentityChecksTable</Typography>
        <Button
          component={RouterLink}
          to={`/identityChecks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create identityCheck
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
