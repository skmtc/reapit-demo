import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  useTenanciesIdResponsibilitiesTable,
  getTenanciesIdResponsibilitiesColumn,
} from '@/tables/tenancies.generated.tsx'
import { TenancyResponsibilityModel } from '@/schemas/index.ts'
import { tenancyResponsibilityModelConfig } from '@/config/tenancyResponsibilityModel.example.tsx'

const fieldNames = fieldsConfig<TenancyResponsibilityModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  typeId: true,
  description: true,
  appliesTo: true,
  agreements: true,
  letterText: true,
  tenancyId: true,
  _eTag: true,
})

export const TenanciesIdResponsibilities = () => {
  const columns: ColumnsList<TenancyResponsibilityModel> = fieldNames.map((col) =>
    getTenanciesIdResponsibilitiesColumn(col, tenancyResponsibilityModelConfig),
  )

  const { table, dataQuery } = useTenanciesIdResponsibilitiesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdResponsibilities</Typography>
        <Button
          component={RouterLink}
          to="/tenancies/{id}/responsibilitiesnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyResponsibility
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
