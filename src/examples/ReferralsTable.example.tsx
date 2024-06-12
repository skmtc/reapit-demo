import { useReferralsTable } from '@/tables/ReferralsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ReferralModel } from '@/schemas/referralModel.generated.tsx'

export const fieldNames = fieldsConfig<ReferralModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  referralTypeId: true,
  type: true,
  negotiatorId: true,
  propertyId: true,
  applicantId: true,
  contactId: true,
  status: true,
  amount: true,
  paid: true,
  accepted: true,
  related: true,
  metadata: true,
  _eTag: true,
})
export const ReferralsTable = () => {
  const { rows } = useReferralsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useReferralsTable</Typography>
        <Button
          component={RouterLink}
          to={`/referrals/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create referral
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
