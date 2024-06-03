import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useInvoicesTable, getuseInvoicesTableColumn } from '@/tables/invoices.generated.tsx'
import { InvoiceModel } from '@/schemas/index.ts'
import { invoiceModelConfig } from '@/config/invoiceModel.example.tsx'

const fieldNames = fieldsConfig<InvoiceModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  reference: true,
  negotiatorId: true,
  propertyId: true,
  description: true,
  status: true,
  date: true,
  dueDate: true,
  isRaised: true,
  netAmount: true,
  vatAmount: true,
  outstandingAmount: true,
})

export const InvoicesTable = () => {
  const columns: ColumnsList<InvoiceModel> = fieldNames.map((col) => getuseInvoicesTableColumn(col, invoiceModelConfig))

  const { table, dataQuery } = useInvoicesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useInvoicesTable</Typography>
        <Button
          component={RouterLink}
          to={`/invoices/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create invoice
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
