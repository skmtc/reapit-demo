import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import {
  usePropertiesIdKeysKeyIdMovementsTable,
  getPropertiesIdKeysKeyIdMovementsColumn,
} from '@/tables/properties.generated.tsx'
import { KeyMovementModel } from '@/schemas/index.ts'
import { keyMovementModelConfig } from '@/config/keyMovementModel.example.tsx'

const fieldNames = fieldsConfig<KeyMovementModel>({
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

export const PropertiesIdKeysKeyIdMovements = () => {
  const columns: ColumnsList<KeyMovementModel> = fieldNames.map((col) =>
    getPropertiesIdKeysKeyIdMovementsColumn(col, keyMovementModelConfig),
  )

  const { id, keyId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(keyId, 'Expected keyId to be defined')

  const { table, dataQuery } = usePropertiesIdKeysKeyIdMovementsTable({ id, keyId, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertiesIdKeysKeyIdMovements</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
