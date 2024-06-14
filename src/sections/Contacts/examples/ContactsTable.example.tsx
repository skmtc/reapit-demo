import { useContactsTable } from '@/sections/Contacts/tables/ContactsTable.generated.tsx'
import { Button, Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { Outlet, useNavigate } from 'react-router-dom'
import { ContactModel } from '@/schemas/contactModel.generated.tsx'
import { navigateRoute } from '@/lib/navigate'

export const fieldNames = fieldsConfig<ContactModel>({
  _links: false,
  _embedded: false,
  id: false,
  created: false,
  modified: false,
  title: true,
  forename: true,
  surname: true,
  dateOfBirth: false,
  active: true,
  marketingConsent: false,
  identityCheck: false,
  source: false,
  homePhone: false,
  workPhone: false,
  mobilePhone: true,
  email: true,
  archivedOn: false,
  fromArchive: false,
  primaryAddress: false,
  secondaryAddress: false,
  workAddress: false,
  officeIds: false,
  negotiatorIds: false,
  categoryIds: false,
  communicationPreferenceLetter: false,
  communicationPreferenceEmail: false,
  communicationPreferencePhone: false,
  communicationPreferenceSMS: false,
  additionalContactDetails: false,
  metadata: false,
  _eTag: false,
  extrasField: false,
  relationships: false,
})
export const ContactsTable = () => {
  const { rows } = useContactsTable({ fieldNames })
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Contacts</Typography>
        <Button intent="primary" onClick={navigateRoute(navigate, '/contacts/new')}>
          Create contact
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
