import { usePropertiesIdChecksTable, getusePropertiesIdChecksTableColumn } from 'tables/Properties.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { PropertyCheckModel } from 'schemas/index.ts'
import { propertyCheckModelConfig } from 'config/propertyCheckModel.example.tsx'

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
_eTag: true
      });
export const PropertiesIdChecksTable = () => {
  const columns: ColumnsList<PropertyCheckModel> = fieldNames.map((col) => getusePropertiesIdChecksTableColumn(col, propertyCheckModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = usePropertiesIdChecksTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;