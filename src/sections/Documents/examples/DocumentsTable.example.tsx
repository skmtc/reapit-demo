import { useDocumentsTable } from '@/sections/Documents/tables/DocumentsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { DocumentModel } from '@/schemas/documentModel.generated.tsx'

export const fieldNames = fieldsConfig<DocumentModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  associatedType: true,
  isPrivate: true,
  associatedId: true,
  typeId: true,
  name: true,
  metadata: true,
  _eTag: true,
})
export const DocumentsTable = () => {
  const { rows } = useDocumentsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useDocumentsTable</Typography>
        <Button
          component={RouterLink}
          to={`/documents/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create document
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
