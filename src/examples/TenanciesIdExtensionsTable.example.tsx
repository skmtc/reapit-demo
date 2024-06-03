import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useTenanciesIdExtensionsTable, getuseTenanciesIdExtensionsTableColumn } from '@/tables/tenancies.generated.tsx'
import { TenancyExtensionAlterationModel } from '@/schemas/index.ts'
import { tenancyExtensionAlterationModelConfig } from '@/config/tenancyExtensionAlterationModel.example.tsx'

const fieldNames = fieldsConfig<TenancyExtensionAlterationModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  startDate: true,
  endDate: true,
  type: true,
  negotiatorId: true,
  rent: true,
  rentFrequency: true,
  tenancyId: true,
  fee: true,
  _eTag: true,
})

export const TenanciesIdExtensionsTable = () => {
  const columns: ColumnsList<TenancyExtensionAlterationModel> = fieldNames.map((col) =>
    getuseTenanciesIdExtensionsTableColumn(col, tenancyExtensionAlterationModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdExtensionsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdExtensionsTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/extensions/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyExtensionAlteration
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
