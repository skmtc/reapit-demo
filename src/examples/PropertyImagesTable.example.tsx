import { usePropertyImagesTable } from '@/tables/PropertyImagesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { PropertyImageModel } from '@/schemas/propertyImageModel.generated.tsx'

export const fieldNames = fieldsConfig<PropertyImageModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  propertyId: true,
  url: true,
  caption: true,
  type: true,
  order: true,
  fromArchive: true,
  _eTag: true,
})
export const PropertyImagesTable = () => {
  const { rows } = usePropertyImagesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertyImagesTable</Typography>
        <Button
          component={RouterLink}
          to={`/propertyImages/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create propertyImage
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
