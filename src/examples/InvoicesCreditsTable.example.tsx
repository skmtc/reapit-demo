import { useInvoicesCreditsTable } from '@/tables/InvoicesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { CreditModel } from '@/schemas/creditModel.generated.tsx'

export const fieldNames = fieldsConfig<CreditModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  negotiatorId: true,
  propertyId: true,
  invoiceId: true,
  description: true,
  date: true,
  netAmount: true,
  vatAmount: true,
})
export const InvoicesCreditsTable = () => {
  const { rows } = useInvoicesCreditsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useInvoicesCreditsTable</Typography>
        <Button
          component={RouterLink}
          to={`/invoices/credits/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create credit
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
