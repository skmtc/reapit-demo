import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useInvoicesPaymentsTable, getInvoicesPaymentsColumn } from '@/tables/invoices.generated.tsx'
import { PaymentModel } from '@/schemas/index.ts'
import { paymentModelConfig } from '@/config/paymentModel.example.tsx'

const fieldNames = fieldsConfig<PaymentModel>({
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

export const InvoicesPayments = () => {
  const columns: ColumnsList<PaymentModel> = fieldNames.map((col) => getInvoicesPaymentsColumn(col, paymentModelConfig))

  const { table, dataQuery } = useInvoicesPaymentsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">InvoicesPayments</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
