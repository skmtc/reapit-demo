import { useTenanciesIdRenewalNegotiationsRenewalIdChecksTable } from '@/sections/Tenancies/tables/TenanciesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyRenewalCheckModel } from '@/schemas/tenancyRenewalCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<TenancyRenewalCheckModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  status: true,
  description: true,
  checkTypeId: true,
  tenancyId: true,
  renewalId: true,
  metadata: true,
  _eTag: true,
})
export const TenanciesIdRenewalNegotiationsRenewalIdChecksTable = () => {
  const { id, renewalId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(renewalId, 'Expected renewalId to be defined')

  const { rows } = useTenanciesIdRenewalNegotiationsRenewalIdChecksTable({ fieldNames, id, renewalId })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdRenewalNegotiationsRenewalIdChecksTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/renewalNegotiations/${renewalId}/checks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyRenewalCheck
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
