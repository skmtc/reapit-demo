import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useVendorsIdRelationshipsTable, getuseVendorsIdRelationshipsTableColumn } from '@/tables/vendors.generated.tsx'
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

export const VendorsIdRelationshipsTable = () => {
  const columns: ColumnsList<VendorContactRelationshipModel> = fieldNames.map((col) =>
    getuseVendorsIdRelationshipsTableColumn(col, vendorContactRelationshipModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useVendorsIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useVendorsIdRelationshipsTable</Typography>
        <Button
          component={RouterLink}
          to={`/vendors/${id}/relationships/new`}
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
