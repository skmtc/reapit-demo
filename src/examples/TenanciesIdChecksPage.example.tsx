import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useTenanciesIdChecksTable, getTenanciesIdChecksColumn } from '@/tables/tenancies.generated.tsx'
import { TenancyCheckModel } from '@/schemas/index.ts'
import { tenancyCheckModelConfig } from '@/config/tenancyCheckModel.example.tsx'

const fieldNames = fieldsConfig<TenancyCheckModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  description: true,
  status: true,
  type: true,
  checkTypeId: true,
  tenancyId: true,
  metadata: true,
  _eTag: true,
})

export const TenanciesIdChecks = () => {
  const columns: ColumnsList<TenancyCheckModel> = fieldNames.map((col) =>
    getTenanciesIdChecksColumn(col, tenancyCheckModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdChecksTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">TenanciesIdChecks</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/checks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyCheck
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
