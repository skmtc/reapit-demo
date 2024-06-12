import { useDepartmentsTable } from '@/tables/DepartmentsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { DepartmentModel } from '@/schemas/departmentModel.generated.tsx'

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
  _eTag: true,
})
export const DepartmentsTable = () => {
  const { rows } = useDepartmentsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
