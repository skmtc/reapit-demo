import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { usePropertiesIdCertificatesTable, getPropertiesIdCertificatesColumn } from '@/tables/properties.generated.tsx'
import { CertificateModel } from '@/schemas/index.ts'
import { certificateModelConfig } from '@/config/certificateModel.example.tsx'

const fieldNames = fieldsConfig<CertificateModel>({
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

export const PropertiesIdCertificates = () => {
  const columns: ColumnsList<CertificateModel> = fieldNames.map((col) =>
    getPropertiesIdCertificatesColumn(col, certificateModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = usePropertiesIdCertificatesTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertiesIdCertificates</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
