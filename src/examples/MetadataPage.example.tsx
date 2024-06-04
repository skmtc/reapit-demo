import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useMetadataTable, getMetadataColumn } from '@/tables/metadata.generated.tsx'
import { MetadataModel } from '@/schemas/index.ts'
import { metadataModelConfig } from '@/config/metadataModel.example.tsx'

const fieldNames = fieldsConfig<MetadataModel>({
  id: true,
  modified: true,
  entityType: true,
  entityId: true,
  metadata: true,
})

export const Metadata = () => {
  const columns: ColumnsList<MetadataModel> = fieldNames.map((col) => getMetadataColumn(col, metadataModelConfig))

  const { table, dataQuery } = useMetadataTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Metadata</Typography>
        <Button
          component={RouterLink}
          to={`/metadata/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create metadata
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
