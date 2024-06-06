import { useContactsTable, getuseContactsTableColumn } from 'tables/Contacts.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ContactModel } from 'schemas/index.ts'
import { contactModelConfig } from 'config/contactModel.example.tsx'

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
relationships: true
      });
export const ContactsTable = () => {
  const columns: ColumnsList<ContactModel> = fieldNames.map((col) => getuseContactsTableColumn(col, contactModelConfig))

  

  

  const { table, dataQuery } = useContactsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;