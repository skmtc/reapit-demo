import { useTenanciesIdExtensionsExtensionIdTable, getuseTenanciesIdExtensionsExtensionIdTableColumn } from 'tables/Tenancies.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyExtensionAlterationModel } from 'schemas/index.ts'
import { tenancyExtensionAlterationModelConfig } from 'config/tenancyExtensionAlterationModel.example.tsx'

export const fieldNames = fieldsConfig<TenancyExtensionAlterationModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
startDate: true,
endDate: true,
type: true,
negotiatorId: true,
rent: true,
rentFrequency: true,
tenancyId: true,
fee: true,
_eTag: true
      });
export const TenanciesIdExtensionsExtensionIdTable = () => {
  const columns: ColumnsList<TenancyExtensionAlterationModel> = fieldNames.map((col) => getuseTenanciesIdExtensionsExtensionIdTableColumn(col, tenancyExtensionAlterationModelConfig))

  const { id, extensionId } = useParams()

  invariant(id, 'Expected id to be defined')
invariant(extensionId, 'Expected extensionId to be defined')

  const { table, dataQuery } = useTenanciesIdExtensionsExtensionIdTable({ id, extensionId, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdExtensionsExtensionIdTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/extensions/${extensionId}/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyExtensionAlteration
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;