import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  useAppointmentsIdOpenHouseAttendeesTable,
  getAppointmentsIdOpenHouseAttendeesColumn,
} from '@/tables/appointments.generated.tsx'
import { OpenHouseAttendeeModel } from '@/schemas/index.ts'
import { openHouseAttendeeModelConfig } from '@/config/openHouseAttendeeModel.example.tsx'

const fieldNames = fieldsConfig<OpenHouseAttendeeModel>({
  _links: true,
  _embedded: true,
  id: true,
  openHouseId: true,
  created: true,
  modified: true,
  notes: true,
  interestLevel: true,
  attendee: true,
  _eTag: true,
})

export const AppointmentsIdOpenHouseAttendees = () => {
  const columns: ColumnsList<OpenHouseAttendeeModel> = fieldNames.map((col) =>
    getAppointmentsIdOpenHouseAttendeesColumn(col, openHouseAttendeeModelConfig),
  )

  const { table, dataQuery } = useAppointmentsIdOpenHouseAttendeesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">AppointmentsIdOpenHouseAttendees</Typography>
        <Button
          component={RouterLink}
          to="/appointments/{id}/openHouseAttendeesnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create openHouseAttendee
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
