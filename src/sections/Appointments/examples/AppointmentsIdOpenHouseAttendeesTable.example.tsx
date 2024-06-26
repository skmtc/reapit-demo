import { useAppointmentsIdOpenHouseAttendeesTable } from '@/sections/Appointments/tables/AppointmentsTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { OpenHouseAttendeeModel } from '@/schemas/openHouseAttendeeModel.generated.tsx'

export const fieldNames = fieldsConfig<OpenHouseAttendeeModel>({
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
export const AppointmentsIdOpenHouseAttendeesTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useAppointmentsIdOpenHouseAttendeesTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useAppointmentsIdOpenHouseAttendeesTable</Typography>
        <Button
          component={RouterLink}
          to={`/appointments/${id}/openHouseAttendees/new`}
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
