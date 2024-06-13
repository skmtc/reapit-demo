import { useContactsIdRelationshipsTable } from '@/tables/ContactsTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { ContactRoleModel } from '@/schemas/contactRoleModel.generated.tsx'

export const fieldNames = fieldsConfig<ContactRoleModel>({
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
export const ContactsIdRelationshipsTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useContactsIdRelationshipsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useContactsIdRelationshipsTable</Typography>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
