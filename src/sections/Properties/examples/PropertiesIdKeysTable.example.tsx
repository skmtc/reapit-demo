import { usePropertiesIdKeysTable } from '@/sections/Properties/tables/PropertiesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { KeysModel } from '@/schemas/keysModel.generated.tsx'

export const fieldNames = fieldsConfig<KeysModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  number: true,
  typeId: true,
  officeId: true,
  propertyId: true,
  status: true,
  keysInSet: true,
  _eTag: true,
})
export const PropertiesIdKeysTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = usePropertiesIdKeysTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesIdKeysTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/${id}/keys/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create keys
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
