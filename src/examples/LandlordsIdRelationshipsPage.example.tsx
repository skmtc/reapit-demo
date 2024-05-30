import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useLandlordsIdRelationshipsTable, getLandlordsIdRelationshipsColumn } from '@/tables/landlords.generated.tsx'
import { LandlordContactRelationshipModel } from '@/schemas/index.ts'
import { landlordContactRelationshipModelConfig } from '@/config/landlordContactRelationshipModel.example.tsx'

const fieldNames = fieldsConfig<LandlordContactRelationshipModel>({
  _links: true,
  _embedded: true,
  id: true,
  landlordId: true,
  created: true,
  modified: true,
  associatedType: true,
  associatedId: true,
  isMain: true,
})

export const LandlordsIdRelationships = () => {
  const columns: ColumnsList<LandlordContactRelationshipModel> = fieldNames.map((col) =>
    getLandlordsIdRelationshipsColumn(col, landlordContactRelationshipModelConfig),
  )

  const { table, dataQuery } = useLandlordsIdRelationshipsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">LandlordsIdRelationships</Typography>
        <Button
          component={RouterLink}
          to="/landlords/{id}/relationshipsnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create landlordContactRelationship
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
