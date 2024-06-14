import { useTenanciesIdExtensionsTable } from '@/sections/Tenancies/tables/TenanciesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyExtensionAlterationModel } from '@/schemas/tenancyExtensionAlterationModel.generated.tsx'

export const fieldNames = fieldsConfig<TenancyExtensionAlterationModel>({
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
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useTenanciesIdExtensionsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
