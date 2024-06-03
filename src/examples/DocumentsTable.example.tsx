import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useDocumentsTable, getuseDocumentsTableColumn } from '@/tables/documents.generated.tsx'
import { DocumentModel } from '@/schemas/index.ts'
import { documentModelConfig } from '@/config/documentModel.example.tsx'

const fieldNames = fieldsConfig<DocumentModel>({
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
  const columns: ColumnsList<DocumentModel> = fieldNames.map((col) =>
    getuseDocumentsTableColumn(col, documentModelConfig),
  )

  const { table, dataQuery } = useDocumentsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
