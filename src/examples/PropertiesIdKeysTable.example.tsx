import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { usePropertiesIdKeysTable, getusePropertiesIdKeysTableColumn } from '@/tables/properties.generated.tsx'
import { KeysModel } from '@/schemas/index.ts'
import { keysModelConfig } from '@/config/keysModel.example.tsx'

const fieldNames = fieldsConfig<KeysModel>({
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
  const columns: ColumnsList<KeysModel> = fieldNames.map((col) =>
    getusePropertiesIdKeysTableColumn(col, keysModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = usePropertiesIdKeysTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
