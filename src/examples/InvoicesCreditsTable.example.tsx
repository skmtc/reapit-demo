import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useInvoicesCreditsTable, getuseInvoicesCreditsTableColumn } from '@/tables/invoices.generated.tsx'
import { CreditModel } from '@/schemas/index.ts'
import { creditModelConfig } from '@/config/creditModel.example.tsx'

const fieldNames = fieldsConfig<CreditModel>({
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
  const columns: ColumnsList<CreditModel> = fieldNames.map((col) =>
    getuseInvoicesCreditsTableColumn(col, creditModelConfig),
  )

  const { table, dataQuery } = useInvoicesCreditsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
