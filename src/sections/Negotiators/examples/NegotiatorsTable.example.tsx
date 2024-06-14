import { useNegotiatorsTable } from '@/sections/Negotiators/tables/NegotiatorsTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
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
  const { rows } = useNegotiatorsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
