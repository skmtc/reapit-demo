import { usePropertiesIdKeysKeyIdMovementsTable } from '@/tables/PropertiesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { KeyMovementModel } from '@/schemas/keyMovementModel.generated.tsx'

export const fieldNames = fieldsConfig<KeyMovementModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  keyId: true,
  propertyId: true,
  checkOutToId: true,
  checkOutToType: true,
  checkOutAt: true,
  checkOutNegotiatorId: true,
  checkInAt: true,
  checkInNegotiatorId: true,
  _eTag: true,
})
export const PropertiesIdKeysKeyIdMovementsTable = () => {
  const { id, keyId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(keyId, 'Expected keyId to be defined')

  const { rows } = usePropertiesIdKeysKeyIdMovementsTable({ fieldNames, id, keyId })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesIdKeysKeyIdMovementsTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/${id}/keys/${keyId}/movements/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create keyMovement
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
