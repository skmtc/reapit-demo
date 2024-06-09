import { useResthooksTable, getuseResthooksTableColumn } from '@/tables/RestHooksTable.generated.tsx'
import { webhookModelConfig } from '@/config/webhookModelConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { WebhookModel } from '@/schemas/webhookModel.generated.tsx'

export const fieldNames = fieldsConfig<WebhookModel>({
  id: true,
  created: true,
  modified: true,
  url: true,
  description: true,
  topicIds: true,
  active: true,
  ignoreEtagOnlyChanges: true,
})
export const ResthooksTable = () => {
  const columns: ColumnsList<WebhookModel> = fieldNames.map((col) =>
    getuseResthooksTableColumn(col, webhookModelConfig),
  )

  const { table, dataQuery } = useResthooksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useResthooksTable</Typography>
        <Button
          component={RouterLink}
          to={`/resthooks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create webhook
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
