import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useTransactionsTable, getuseTransactionsTableColumn } from '@/tables/transactions.generated.tsx'
import { TransactionModel } from '@/schemas/index.ts'
import { transactionModelConfig } from '@/config/transactionModel.example.tsx'

const fieldNames = fieldsConfig<TransactionModel>({
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
  const columns: ColumnsList<TransactionModel> = fieldNames.map((col) =>
    getuseTransactionsTableColumn(col, transactionModelConfig),
  )

  const { table, dataQuery } = useTransactionsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
