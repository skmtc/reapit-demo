import { useTransactionsNominalAccountsTable, getuseTransactionsNominalAccountsTableColumn } from 'tables/Transactions.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { NominalAccountModel } from 'schemas/index.ts'
import { nominalAccountModelConfig } from 'config/nominalAccountModel.example.tsx'

export const fieldNames = fieldsConfig<NominalAccountModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
name: true,
appliesToWorksOrders: true
      });
export const TransactionsNominalAccountsTable = () => {
  const columns: ColumnsList<NominalAccountModel> = fieldNames.map((col) => getuseTransactionsNominalAccountsTableColumn(col, nominalAccountModelConfig))

  

  

  const { table, dataQuery } = useTransactionsNominalAccountsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;