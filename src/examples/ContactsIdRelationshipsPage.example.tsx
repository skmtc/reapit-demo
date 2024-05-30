import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
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

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useContactsIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">ContactsIdRelationships</Typography>
        <Button
          component={RouterLink}
          to={`/contacts/${id}/relationships/new`}
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
