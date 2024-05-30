import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
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

  const { table, dataQuery } = usePropertiesIdCertificatesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">PropertiesIdCertificates</Typography>
        <Button
          component={RouterLink}
          to="/properties/{id}/certificatesnew"
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
