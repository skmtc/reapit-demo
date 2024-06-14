import { useWorksOrdersTable } from '@/sections/WorksOrders/tables/WorksOrdersTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { WorksOrderModel } from '@/schemas/worksOrderModel.generated.tsx'

export const fieldNames = fieldsConfig<WorksOrderModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  companyId: true,
  propertyId: true,
  tenancyId: true,
  negotiatorId: true,
  typeId: true,
  status: true,
  description: true,
  reporter: true,
  priority: true,
  booked: true,
  required: true,
  completed: true,
  totalNetAmount: true,
  totalVatAmount: true,
  totalGrossAmount: true,
  items: true,
  metadata: true,
  extrasField: true,
  _eTag: true,
})
export const WorksOrdersTable = () => {
  const { rows } = useWorksOrdersTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useWorksOrdersTable</Typography>
        <Button
          component={RouterLink}
          to={`/worksOrders/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create worksOrder
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
