import { useInvoicesChargesTable } from '@/sections/Invoices/tables/InvoicesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ChargeModel } from '@/schemas/chargeModel.generated.tsx'

export const fieldNames = fieldsConfig<ChargeModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  type: true,
  invoiceId: true,
  propertyId: true,
  negotiatorId: true,
  vatCode: true,
  description: true,
  netAmount: true,
  vatAmount: true,
})
export const InvoicesChargesTable = () => {
  const { rows } = useInvoicesChargesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useInvoicesChargesTable</Typography>
        <Button
          component={RouterLink}
          to={`/invoices/charges/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create charge
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
