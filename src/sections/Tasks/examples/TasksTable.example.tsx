import { useTasksTable } from '@/sections/Tasks/tables/TasksTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
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
  _eTag: true,
})
export const TasksTable = () => {
  const { rows } = useTasksTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
