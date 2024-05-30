import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
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

  const { table, dataQuery } = useTenanciesIdAllowancesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdAllowances</Typography>
        <Button
          component={RouterLink}
          to="/tenancies/{id}/allowancesnew"
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
