import { usePropertiesIdAppraisalsTable, getusePropertiesIdAppraisalsTableColumn } from 'tables/Properties.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { PropertyAppraisalModel } from 'schemas/index.ts'
import { propertyAppraisalModelConfig } from 'config/propertyAppraisalModel.example.tsx'

export const fieldNames = fieldsConfig<PropertyAppraisalModel>({
        id: true,
created: true,
modified: true,
companyId: true,
isExternal: true,
date: true,
price: true,
fee: true,
notes: true,
_eTag: true
      });
export const PropertiesIdAppraisalsTable = () => {
  const columns: ColumnsList<PropertyAppraisalModel> = fieldNames.map((col) => getusePropertiesIdAppraisalsTableColumn(col, propertyAppraisalModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = usePropertiesIdAppraisalsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesIdAppraisalsTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/${id}/appraisals/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create propertyAppraisal
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;