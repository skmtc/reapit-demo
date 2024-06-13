import { useMetadataMetadataSchemaTable } from '@/tables/MetadataSchemaTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { SchemaModel } from '@/schemas/schemaModel.generated.tsx'

export const fieldNames = fieldsConfig<SchemaModel>({
  id: true,
  modified: true,
  schema: true,
})
export const MetadataMetadataSchemaTable = () => {
  const { rows } = useMetadataMetadataSchemaTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useMetadataMetadataSchemaTable</Typography>
        <Button
          component={RouterLink}
          to={`/metadata/metadataSchema/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create schema
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
