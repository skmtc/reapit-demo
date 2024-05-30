import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useContactsTable, getContactsColumn } from '@/tables/contacts.generated.tsx'
import { ContactModel } from '@/schemas/index.ts'
import { contactModelConfig } from '@/config/contactModel.example.tsx'

const fieldNames = fieldsConfig<ContactModel>({
  _links: false,
  _embedded: false,
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

export const Contacts = () => {
  const columns: ColumnsList<ContactModel> = fieldNames.map((col) => getContactsColumn(col, contactModelConfig))

  const { table, dataQuery } = useContactsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Contacts</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
