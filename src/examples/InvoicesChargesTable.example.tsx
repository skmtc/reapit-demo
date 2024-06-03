import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useInvoicesChargesTable, getuseInvoicesChargesTableColumn } from '@/tables/invoices.generated.tsx'
import { ChargeModel } from '@/schemas/index.ts'
import { chargeModelConfig } from '@/config/chargeModel.example.tsx'

const fieldNames = fieldsConfig<ChargeModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  type: true,
  invoiceId: true,
  propertyId: true,
  negotiatorId: true,
  vatCode: true,
  description: true,
  netAmount: true,
  vatAmount: true,
})

export const InvoicesChargesTable = () => {
  const columns: ColumnsList<ChargeModel> = fieldNames.map((col) =>
    getuseInvoicesChargesTableColumn(col, chargeModelConfig),
  )

  const { table, dataQuery } = useInvoicesChargesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useInvoicesChargesTable</Typography>
        <Button
          component={RouterLink}
          to={`/invoices/charges/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create charge
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
