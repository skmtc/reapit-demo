import { useInvoicesPaymentsTable, getuseInvoicesPaymentsTableColumn } from '@/tables/Invoices.generated.tsx'
import { paymentModelConfig } from '@/config/paymentModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
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
vatAmount: true
      });
export const InvoicesPaymentsTable = () => {
  const columns: ColumnsList<PaymentModel> = fieldNames.map((col) => getuseInvoicesPaymentsTableColumn(col, paymentModelConfig))

  

  

  const { table, dataQuery } = useInvoicesPaymentsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;