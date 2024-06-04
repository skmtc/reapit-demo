import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useTenanciesIdAllowancesTable, getTenanciesIdAllowancesColumn } from '@/tables/tenancies.generated.tsx'
import { TenancyAllowanceModel } from '@/schemas/index.ts'
import { tenancyAllowanceModelConfig } from '@/config/tenancyAllowanceModel.example.tsx'

const fieldNames = fieldsConfig<TenancyAllowanceModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  typeId: true,
  description: true,
  state: true,
  agreements: true,
  letterText: true,
  tenancyId: true,
  _eTag: true,
})

export const TenanciesIdAllowances = () => {
  const columns: ColumnsList<TenancyAllowanceModel> = fieldNames.map((col) =>
    getTenanciesIdAllowancesColumn(col, tenancyAllowanceModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdAllowancesTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdAllowances</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/allowances/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyAllowance
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
