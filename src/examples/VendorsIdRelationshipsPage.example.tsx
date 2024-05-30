import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useVendorsIdRelationshipsTable, getVendorsIdRelationshipsColumn } from '@/tables/vendors.generated.tsx'
import { VendorContactRelationshipModel } from '@/schemas/index.ts'
import { vendorContactRelationshipModelConfig } from '@/config/vendorContactRelationshipModel.example.tsx'

const fieldNames = fieldsConfig<VendorContactRelationshipModel>({
  _links: true,
  _embedded: true,
  id: true,
  vendorId: true,
  created: true,
  modified: true,
  associatedType: true,
  associatedId: true,
  isMain: true,
})

export const VendorsIdRelationships = () => {
  const columns: ColumnsList<VendorContactRelationshipModel> = fieldNames.map((col) =>
    getVendorsIdRelationshipsColumn(col, vendorContactRelationshipModelConfig),
  )

  const { table, dataQuery } = useVendorsIdRelationshipsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">VendorsIdRelationships</Typography>
        <Button
          component={RouterLink}
          to="/vendors/{id}/relationshipsnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create vendorContactRelationship
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
