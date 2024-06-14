import { useWorksOrdersIdItemsTable } from '@/sections/WorksOrders/tables/WorksOrdersTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

export const fieldNames = fieldsConfig<WorksOrderItemModel>({
  _links: true,
  _embedded: true,
  id: true,
  worksOrderId: true,
  created: true,
  modified: true,
  notes: true,
  chargeTo: true,
  estimate: true,
  estimateType: true,
  netAmount: true,
  vatAmount: true,
  grossAmount: true,
  reserveAmount: true,
  nominalAccountId: true,
  _eTag: true,
})
export const WorksOrdersIdItemsTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useWorksOrdersIdItemsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useWorksOrdersIdItemsTable</Typography>
        <Button
          component={RouterLink}
          to={`/worksOrders/${id}/items/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create worksOrderItem
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
