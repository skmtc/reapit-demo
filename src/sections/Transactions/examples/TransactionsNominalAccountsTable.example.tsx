import { useTransactionsNominalAccountsTable } from '@/sections/Transactions/tables/TransactionsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { NominalAccountModel } from '@/schemas/nominalAccountModel.generated.tsx'

export const fieldNames = fieldsConfig<NominalAccountModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  name: true,
  appliesToWorksOrders: true,
})
export const TransactionsNominalAccountsTable = () => {
  const { rows } = useTransactionsNominalAccountsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTransactionsNominalAccountsTable</Typography>
        <Button
          component={RouterLink}
          to={`/transactions/nominalAccounts/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create nominalAccount
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
