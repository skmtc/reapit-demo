import { useNegotiatorsTable, getuseNegotiatorsTableColumn } from '@/tables/NegotiatorsTable.generated.tsx'
import { negotiatorModelConfig } from '@/config/negotiatorModelConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { NegotiatorModel } from '@/schemas/negotiatorModel.generated.tsx'

export const fieldNames = fieldsConfig<NegotiatorModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  name: true,
  jobTitle: true,
  officeId: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  profileImageUrl: true,
  active: true,
  diaryNegotiatorIds: true,
  diaryOfficeIds: true,
  additionalContactDetails: true,
  metadata: true,
  _eTag: true,
})
export const NegotiatorsTable = () => {
  const columns: ColumnsList<NegotiatorModel> = fieldNames.map((col) =>
    getuseNegotiatorsTableColumn(col, negotiatorModelConfig),
  )

  const { table, dataQuery } = useNegotiatorsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useNegotiatorsTable</Typography>
        <Button
          component={RouterLink}
          to={`/negotiators/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create negotiator
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
