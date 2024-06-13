import { usePropertiesIdChecksTable } from '@/tables/PropertiesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { PropertyCheckModel } from '@/schemas/propertyCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<PropertyCheckModel>({
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
export const PropertiesIdChecksTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = usePropertiesIdChecksTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesIdChecksTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/${id}/checks/new`}
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
