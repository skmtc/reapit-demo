import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useContactsIdRelationshipsTable, getContactsIdRelationshipsColumn } from '@/tables/contacts.generated.tsx'
import { ContactRoleModel } from '@/schemas/index.ts'
import { contactRoleModelConfig } from '@/config/contactRoleModel.example.tsx'

const fieldNames = fieldsConfig<ContactRoleModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  contactId: true,
  associatedType: true,
  associatedId: true,
  fromArchive: true,
})

export const ContactsIdRelationships = () => {
  const columns: ColumnsList<ContactRoleModel> = fieldNames.map((col) =>
    getContactsIdRelationshipsColumn(col, contactRoleModelConfig),
  )

  const { table, dataQuery } = useContactsIdRelationshipsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">ContactsIdRelationships</Typography>
        <Button
          component={RouterLink}
          to="/contacts/{id}/relationshipsnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create contactRole
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
