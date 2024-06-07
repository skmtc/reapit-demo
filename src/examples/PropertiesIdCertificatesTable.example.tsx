import { usePropertiesIdCertificatesTable, getusePropertiesIdCertificatesTableColumn } from '@/tables/Properties.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { certificateModelConfig } from '@/config/certificateModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
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
_eTag: true
      });
export const PropertiesIdCertificatesTable = () => {
  const columns: ColumnsList<CertificateModel> = fieldNames.map((col) => getusePropertiesIdCertificatesTableColumn(col, certificateModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = usePropertiesIdCertificatesTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;