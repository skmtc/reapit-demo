import { usePropertiesIdCertificatesTable } from '@/sections/Properties/tables/PropertiesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { CertificateModel } from '@/schemas/certificateModel.generated.tsx'

export const fieldNames = fieldsConfig<CertificateModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  category: true,
  typeId: true,
  start: true,
  expiry: true,
  propertyId: true,
  companyId: true,
  statusId: true,
  notes: true,
  referenceNumber: true,
  responsibleParty: true,
  _eTag: true,
})
export const PropertiesIdCertificatesTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = usePropertiesIdCertificatesTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesIdCertificatesTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/${id}/certificates/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create certificate
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
