import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useReferralsTable, getReferralsColumn } from '@/tables/referrals.generated.tsx'
import { ReferralModel } from '@/schemas/index.ts'
import { referralModelConfig } from '@/config/referralModel.example.tsx'

const fieldNames = fieldsConfig<ReferralModel>({
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

export const Referrals = () => {
  const columns: ColumnsList<ReferralModel> = fieldNames.map((col) => getReferralsColumn(col, referralModelConfig))

  const { table, dataQuery } = useReferralsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Referrals</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
