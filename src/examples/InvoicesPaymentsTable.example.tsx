import { useInvoicesPaymentsTable } from '@/tables/InvoicesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { PaymentModel } from '@/schemas/paymentModel.generated.tsx'

export const fieldNames = fieldsConfig<PaymentModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  negotiatorId: true,
  propertyId: true,
  invoiceId: true,
  description: true,
  type: true,
  date: true,
  netAmount: true,
  vatAmount: true,
})
export const InvoicesPaymentsTable = () => {
  const { rows } = useInvoicesPaymentsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useInvoicesPaymentsTable</Typography>
        <Button
          component={RouterLink}
          to={`/invoices/payments/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create payment
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
