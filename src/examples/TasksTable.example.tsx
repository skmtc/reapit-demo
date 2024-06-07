import { useTasksTable, getuseTasksTableColumn } from '@/tables/Tasks.generated.tsx'
import { taskModelConfig } from '@/config/taskModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { TaskModel } from '@/schemas/taskModel.generated.tsx'

export const fieldNames = fieldsConfig<TaskModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
activates: true,
completed: true,
typeId: true,
senderId: true,
text: true,
landlordId: true,
propertyId: true,
applicantId: true,
tenancyId: true,
contactId: true,
recipientId: true,
recipientType: true,
metadata: true,
_eTag: true
      });
export const TasksTable = () => {
  const columns: ColumnsList<TaskModel> = fieldNames.map((col) => getuseTasksTableColumn(col, taskModelConfig))

  

  

  const { table, dataQuery } = useTasksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTasksTable</Typography>
        <Button
          component={RouterLink}
          to={`/tasks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create task
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;