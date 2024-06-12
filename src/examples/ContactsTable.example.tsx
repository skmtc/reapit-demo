import { useContactsTable } from '@/tables/ContactsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ContactModel } from '@/schemas/contactModel.generated.tsx'

export const fieldNames = fieldsConfig<ContactModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  title: true,
  forename: true,
  surname: true,
  dateOfBirth: true,
  active: true,
  marketingConsent: true,
  identityCheck: true,
  source: true,
  homePhone: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  archivedOn: true,
  fromArchive: true,
  primaryAddress: true,
  secondaryAddress: true,
  workAddress: true,
  officeIds: true,
  negotiatorIds: true,
  categoryIds: true,
  communicationPreferenceLetter: true,
  communicationPreferenceEmail: true,
  communicationPreferencePhone: true,
  communicationPreferenceSMS: true,
  additionalContactDetails: true,
  metadata: true,
  _eTag: true,
  extrasField: true,
  relationships: true,
})
export const ContactsTable = () => {
  const { rows } = useContactsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useContactsTable</Typography>
        <Button
          component={RouterLink}
          to={`/contacts/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
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
