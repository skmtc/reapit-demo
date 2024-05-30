import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  useTenanciesIdRenewalNegotiationsRenewalIdChecksTable,
  getTenanciesIdRenewalNegotiationsRenewalIdChecksColumn,
} from '@/tables/tenancies.generated.tsx'
import { TenancyRenewalCheckModel } from '@/schemas/index.ts'
import { tenancyRenewalCheckModelConfig } from '@/config/tenancyRenewalCheckModel.example.tsx'

const fieldNames = fieldsConfig<TenancyRenewalCheckModel>({
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

export const TenanciesIdRenewalNegotiationsRenewalIdChecks = () => {
  const columns: ColumnsList<TenancyRenewalCheckModel> = fieldNames.map((col) =>
    getTenanciesIdRenewalNegotiationsRenewalIdChecksColumn(col, tenancyRenewalCheckModelConfig),
  )

  const { table, dataQuery } = useTenanciesIdRenewalNegotiationsRenewalIdChecksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdRenewalNegotiationsRenewalIdChecks</Typography>
        <Button
          component={RouterLink}
          to="/tenancies/{id}/renewalNegotiations/{renewalId}/checksnew"
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
