import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { usePropertiesIdChecksTable, getPropertiesIdChecksColumn } from '@/tables/properties.generated.tsx'
import { PropertyCheckModel } from '@/schemas/index.ts'
import { propertyCheckModelConfig } from '@/config/propertyCheckModel.example.tsx'

const fieldNames = fieldsConfig<PropertyCheckModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  description: true,
  status: true,
  type: true,
  propertyId: true,
  _eTag: true,
})

export const PropertiesIdChecks = () => {
  const columns: ColumnsList<PropertyCheckModel> = fieldNames.map((col) =>
    getPropertiesIdChecksColumn(col, propertyCheckModelConfig),
  )

  const { table, dataQuery } = usePropertiesIdChecksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertiesIdChecks</Typography>
        <Button
          component={RouterLink}
          to="/properties/{id}/checksnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create propertyCheck
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
