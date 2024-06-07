import { usePropertiesIdKeysKeyIdMovementsTable, getusePropertiesIdKeysKeyIdMovementsTableColumn } from '@/tables/Properties.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { keyMovementModelConfig } from '@/config/keyMovementModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
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
_eTag: true
      });
export const PropertiesIdKeysKeyIdMovementsTable = () => {
  const columns: ColumnsList<KeyMovementModel> = fieldNames.map((col) => getusePropertiesIdKeysKeyIdMovementsTableColumn(col, keyMovementModelConfig))

  const { id, keyId } = useParams()

  invariant(id, 'Expected id to be defined')
invariant(keyId, 'Expected keyId to be defined')

  const { table, dataQuery } = usePropertiesIdKeysKeyIdMovementsTable({ id, keyId, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;