import { useMetadataMetadataSchemaTable, getuseMetadataMetadataSchemaTableColumn } from '@/tables/MetadataSchema.generated.tsx'
import { schemaModelConfig } from '@/config/schemaModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { SchemaModel } from '@/schemas/schemaModel.generated.tsx'

export const fieldNames = fieldsConfig<SchemaModel>({
        id: true,
modified: true,
schema: true
      });
export const MetadataMetadataSchemaTable = () => {
  const columns: ColumnsList<SchemaModel> = fieldNames.map((col) => getuseMetadataMetadataSchemaTableColumn(col, schemaModelConfig))

  

  

  const { table, dataQuery } = useMetadataMetadataSchemaTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;