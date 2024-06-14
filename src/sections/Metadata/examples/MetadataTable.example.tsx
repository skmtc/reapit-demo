import { useMetadataTable } from '@/sections/Metadata/tables/MetadataTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { MetadataModel } from '@/schemas/metadataModel.generated.tsx'

export const fieldNames = fieldsConfig<MetadataModel>({
  id: true,
  modified: true,
  entityType: true,
  entityId: true,
  metadata: true,
})
export const MetadataTable = () => {
  const { rows } = useMetadataTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useMetadataTable</Typography>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
