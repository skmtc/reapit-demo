import { useReferralsTypesTable } from '@/sections/Referrals/tables/ReferralsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ReferralTypeModel } from '@/schemas/referralTypeModel.generated.tsx'

export const fieldNames = fieldsConfig<ReferralTypeModel>({
  _links: true,
  _embedded: true,
  id: true,
  name: true,
})
export const ReferralsTypesTable = () => {
  const { rows } = useReferralsTypesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useReferralsTypesTable</Typography>
        <Button
          component={RouterLink}
          to={`/referrals/types/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create referralType
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
