import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import {
  useTenanciesIdBreakClausesTable,
  getuseTenanciesIdBreakClausesTableColumn,
} from '@/tables/tenancies.generated.tsx'
import { TenancyBreakClauseModel } from '@/schemas/index.ts'
import { tenancyBreakClauseModelConfig } from '@/config/tenancyBreakClauseModel.example.tsx'

const fieldNames = fieldsConfig<TenancyBreakClauseModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  clauseTypeId: true,
  description: true,
  active: true,
  appliesTo: true,
  letterText: true,
  breakFrom: true,
  noticeRequired: true,
  agreements: true,
  tenancyId: true,
  _eTag: true,
})

export const TenanciesIdBreakClausesTable = () => {
  const columns: ColumnsList<TenancyBreakClauseModel> = fieldNames.map((col) =>
    getuseTenanciesIdBreakClausesTableColumn(col, tenancyBreakClauseModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdBreakClausesTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdBreakClausesTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/breakClauses/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyBreakClause
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
