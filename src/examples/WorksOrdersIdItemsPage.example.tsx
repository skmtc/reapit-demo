import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useWorksOrdersIdItemsTable, getWorksOrdersIdItemsColumn } from '@/tables/worksorders.generated.tsx'
import { WorksOrderItemModel } from '@/schemas/index.ts'
import { worksOrderItemModelConfig } from '@/config/worksOrderItemModel.example.tsx'

const fieldNames = fieldsConfig<WorksOrderItemModel>({
  _links: true,
  _embedded: true,
  id: true,
  worksOrderId: true,
  created: true,
  modified: true,
  notes: true,
  chargeTo: true,
  estimate: true,
  estimateType: true,
  netAmount: true,
  vatAmount: true,
  grossAmount: true,
  reserveAmount: true,
  nominalAccountId: true,
  _eTag: true,
})

export const WorksOrdersIdItems = () => {
  const columns: ColumnsList<WorksOrderItemModel> = fieldNames.map((col) =>
    getWorksOrdersIdItemsColumn(col, worksOrderItemModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useWorksOrdersIdItemsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">WorksOrdersIdItems</Typography>
        <Button
          component={RouterLink}
          to={`/worksOrders/${id}/items/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create worksOrderItem
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
