import { usePropertiesIdAppraisalsTable } from '@/tables/PropertiesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { PropertyAppraisalModel } from '@/schemas/propertyAppraisalModel.generated.tsx'

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
  _eTag: true,
})
export const PropertiesIdAppraisalsTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = usePropertiesIdAppraisalsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
