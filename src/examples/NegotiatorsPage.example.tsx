import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useNegotiatorsTable, getNegotiatorsColumn } from '@/tables/negotiators.generated.tsx'
import { NegotiatorModel } from '@/schemas/index.ts'
import { negotiatorModelConfig } from '@/config/negotiatorModel.example.tsx'

const fieldNames = fieldsConfig<NegotiatorModel>({
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

export const Negotiators = () => {
  const columns: ColumnsList<NegotiatorModel> = fieldNames.map((col) =>
    getNegotiatorsColumn(col, negotiatorModelConfig),
  )

  const { table, dataQuery } = useNegotiatorsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Negotiators</Typography>
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
