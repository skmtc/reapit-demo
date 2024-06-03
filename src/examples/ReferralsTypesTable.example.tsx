import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useReferralsTypesTable, getuseReferralsTypesTableColumn } from '@/tables/referrals.generated.tsx'
import { ReferralTypeModel } from '@/schemas/index.ts'
import { referralTypeModelConfig } from '@/config/referralTypeModel.example.tsx'

const fieldNames = fieldsConfig<ReferralTypeModel>({
  _links: true,
  _embedded: true,
  id: true,
  name: true,
})

export const ReferralsTypesTable = () => {
  const columns: ColumnsList<ReferralTypeModel> = fieldNames.map((col) =>
    getuseReferralsTypesTableColumn(col, referralTypeModelConfig),
  )

  const { table, dataQuery } = useReferralsTypesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
