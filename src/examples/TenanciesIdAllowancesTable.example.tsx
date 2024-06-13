import { useTenanciesIdAllowancesTable } from '@/tables/TenanciesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyAllowanceModel } from '@/schemas/tenancyAllowanceModel.generated.tsx'

export const fieldNames = fieldsConfig<TenancyAllowanceModel>({
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
export const TenanciesIdAllowancesTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useTenanciesIdAllowancesTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdAllowancesTable</Typography>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
