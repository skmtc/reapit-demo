import { useWorksOrdersTable, getuseWorksOrdersTableColumn } from 'tables/WorksOrders.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { WorksOrderModel } from 'schemas/index.ts'
import { worksOrderModelConfig } from 'config/worksOrderModel.example.tsx'

export const fieldNames = fieldsConfig<WorksOrderModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
companyId: true,
propertyId: true,
tenancyId: true,
negotiatorId: true,
typeId: true,
status: true,
description: true,
reporter: true,
priority: true,
booked: true,
required: true,
completed: true,
totalNetAmount: true,
totalVatAmount: true,
totalGrossAmount: true,
items: true,
metadata: true,
extrasField: true,
_eTag: true
      });
export const WorksOrdersTable = () => {
  const columns: ColumnsList<WorksOrderModel> = fieldNames.map((col) => getuseWorksOrdersTableColumn(col, worksOrderModelConfig))

  

  

  const { table, dataQuery } = useWorksOrdersTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useWorksOrdersTable</Typography>
        <Button
          component={RouterLink}
          to={`/worksOrders/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create worksOrder
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;