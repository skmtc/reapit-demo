import { useAppointmentsTable } from '@/tables/AppointmentsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { AppointmentModel } from '@/schemas/appointmentModel.generated.tsx'

export const fieldNames = fieldsConfig<AppointmentModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  start: true,
  end: true,
  typeId: true,
  description: true,
  recurring: true,
  recurrence: true,
  cancelled: true,
  followUp: true,
  propertyId: true,
  organiserId: true,
  negotiatorIds: true,
  officeIds: true,
  attendee: true,
  attended: true,
  accompanied: true,
  isRepeat: true,
  virtual: true,
  negotiatorConfirmed: true,
  attendeeConfirmed: true,
  propertyConfirmed: true,
  fromArchive: true,
  otherAgentId: true,
  documents: true,
  metadata: true,
  extrasField: true,
  _eTag: true,
})
export const AppointmentsTable = () => {
  const { rows } = useAppointmentsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useAppointmentsTable</Typography>
        <Button
          component={RouterLink}
          to={`/appointments/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create appointment
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
