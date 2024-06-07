import { usePropertiesCertificatesTable, getusePropertiesCertificatesTableColumn } from '@/tables/Properties.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
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
export const PropertiesCertificatesTable = () => {
  const columns: ColumnsList<CertificateModel> = fieldNames.map((col) => getusePropertiesCertificatesTableColumn(col, certificateModelConfig))

  

  

  const { table, dataQuery } = usePropertiesCertificatesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesCertificatesTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/certificates/new`}
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