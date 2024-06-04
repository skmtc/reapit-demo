import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import {
  useTenanciesIdRenewalNegotiationsTable,
  getTenanciesIdRenewalNegotiationsColumn,
} from '@/tables/tenancies.generated.tsx'
import { TenancyRenewalModel } from '@/schemas/index.ts'
import { tenancyRenewalModelConfig } from '@/config/tenancyRenewalModel.example.tsx'

const fieldNames = fieldsConfig<TenancyRenewalModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  startDate: true,
  endDate: true,
  status: true,
  negotiatorId: true,
  rent: true,
  rentFrequency: true,
  rentChange: true,
  tenancyId: true,
  lettingFee: true,
  managementFee: true,
  _eTag: true,
})

export const TenanciesIdRenewalNegotiations = () => {
  const columns: ColumnsList<TenancyRenewalModel> = fieldNames.map((col) =>
    getTenanciesIdRenewalNegotiationsColumn(col, tenancyRenewalModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdRenewalNegotiationsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdRenewalNegotiations</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/renewalNegotiations/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyRenewal
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
