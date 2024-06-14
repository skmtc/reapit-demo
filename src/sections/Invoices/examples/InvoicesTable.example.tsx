import { useInvoicesTable } from '@/sections/Invoices/tables/InvoicesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { InvoiceModel } from '@/schemas/invoiceModel.generated.tsx'

export const fieldNames = fieldsConfig<InvoiceModel>({
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
  const { rows } = useInvoicesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
