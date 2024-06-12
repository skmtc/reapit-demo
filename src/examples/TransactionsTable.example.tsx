import { useTransactionsTable } from '@/tables/TransactionsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { TransactionModel } from '@/schemas/transactionModel.generated.tsx'

export const fieldNames = fieldsConfig<TransactionModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  category: true,
  type: true,
  transactionType: true,
  description: true,
  status: true,
  ledger: true,
  netAmount: true,
  taxAmount: true,
  grossAmount: true,
  outstanding: true,
  companyId: true,
  landlordId: true,
  propertyId: true,
  tenancyId: true,
  _eTag: true,
})
export const TransactionsTable = () => {
  const { rows } = useTransactionsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTransactionsTable</Typography>
        <Button
          component={RouterLink}
          to={`/transactions/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create transaction
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
