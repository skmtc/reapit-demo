import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useTasksTable, getTasksColumn } from '@/tables/tasks.generated.tsx'
import { TaskModel } from '@/schemas/index.ts'
import { taskModelConfig } from '@/config/taskModel.example.tsx'

const fieldNames = fieldsConfig<TaskModel>({
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
  _eTag: true,
})

export const Tasks = () => {
  const columns: ColumnsList<TaskModel> = fieldNames.map((col) => getTasksColumn(col, taskModelConfig))

  const { table, dataQuery } = useTasksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Tasks</Typography>
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
