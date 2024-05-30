import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { usePropertyImagesTable, getPropertyImagesColumn } from '@/tables/propertyimages.generated.tsx'
import { PropertyImageModel } from '@/schemas/index.ts'
import { propertyImageModelConfig } from '@/config/propertyImageModel.example.tsx'

const fieldNames = fieldsConfig<PropertyImageModel>({
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

export const PropertyImages = () => {
  const columns: ColumnsList<PropertyImageModel> = fieldNames.map((col) =>
    getPropertyImagesColumn(col, propertyImageModelConfig),
  )

  const { table, dataQuery } = usePropertyImagesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertyImages</Typography>
        <Button
          component={RouterLink}
          to="/propertyImages/new"
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
