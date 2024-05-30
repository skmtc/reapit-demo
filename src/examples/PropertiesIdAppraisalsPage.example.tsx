import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { usePropertiesIdAppraisalsTable, getPropertiesIdAppraisalsColumn } from '@/tables/properties.generated.tsx'
import { PropertyAppraisalModel } from '@/schemas/index.ts'
import { propertyAppraisalModelConfig } from '@/config/propertyAppraisalModel.example.tsx'

const fieldNames = fieldsConfig<PropertyAppraisalModel>({
  id: true,
  created: true,
  modified: true,
  companyId: true,
  isExternal: true,
  date: true,
  price: true,
  fee: true,
  notes: true,
  _eTag: true,
})

export const PropertiesIdAppraisals = () => {
  const columns: ColumnsList<PropertyAppraisalModel> = fieldNames.map((col) =>
    getPropertiesIdAppraisalsColumn(col, propertyAppraisalModelConfig),
  )

  const { table, dataQuery } = usePropertiesIdAppraisalsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertiesIdAppraisals</Typography>
        <Button
          component={RouterLink}
          to="/properties/{id}/appraisalsnew"
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
