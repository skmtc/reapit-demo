import { useTenanciesIdResponsibilitiesTable, getuseTenanciesIdResponsibilitiesTableColumn } from 'tables/Tenancies.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyResponsibilityModel } from 'schemas/index.ts'
import { tenancyResponsibilityModelConfig } from 'config/tenancyResponsibilityModel.example.tsx'

export const fieldNames = fieldsConfig<TenancyResponsibilityModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
typeId: true,
description: true,
appliesTo: true,
agreements: true,
letterText: true,
tenancyId: true,
_eTag: true
      });
export const TenanciesIdResponsibilitiesTable = () => {
  const columns: ColumnsList<TenancyResponsibilityModel> = fieldNames.map((col) => getuseTenanciesIdResponsibilitiesTableColumn(col, tenancyResponsibilityModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdResponsibilitiesTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdResponsibilitiesTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/responsibilities/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyResponsibility
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;