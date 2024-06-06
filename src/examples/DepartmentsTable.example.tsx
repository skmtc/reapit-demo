import { useDepartmentsTable, getuseDepartmentsTableColumn } from 'tables/Departments.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { DepartmentModel } from 'schemas/index.ts'
import { departmentModelConfig } from 'config/departmentModel.example.tsx'

export const fieldNames = fieldsConfig<DepartmentModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
name: true,
typeOptions: true,
styleOptions: true,
situationOptions: true,
parkingOptions: true,
ageOptions: true,
localityOptions: true,
specialFeaturesOptions: true,
commercialUseClassOptions: true,
commercialFloorLevelOptions: true,
hasBedrooms: true,
hasBathrooms: true,
hasReceptionRooms: true,
hasParkingSpaces: true,
hasFloorLevelEnabled: true,
hasInternalFloorsEnabled: true,
hasTotalFloorsEnabled: true,
_eTag: true
      });
export const DepartmentsTable = () => {
  const columns: ColumnsList<DepartmentModel> = fieldNames.map((col) => getuseDepartmentsTableColumn(col, departmentModelConfig))

  

  

  const { table, dataQuery } = useDepartmentsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useDepartmentsTable</Typography>
        <Button
          component={RouterLink}
          to={`/departments/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create department
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;