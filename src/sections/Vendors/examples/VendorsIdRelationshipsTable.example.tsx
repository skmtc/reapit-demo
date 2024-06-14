import { useVendorsIdRelationshipsTable } from '@/sections/Vendors/tables/VendorsTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { VendorContactRelationshipModel } from '@/schemas/vendorContactRelationshipModel.generated.tsx'

export const fieldNames = fieldsConfig<VendorContactRelationshipModel>({
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
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useVendorsIdRelationshipsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
