import { useJournalEntriesLandlordsTable } from '@/tables/JournalEntriesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { LandlordJournalEntryModel } from '@/schemas/landlordJournalEntryModel.generated.tsx'

export const fieldNames = fieldsConfig<LandlordJournalEntryModel>({
  _links: true,
  _embedded: true,
  created: true,
  propertyId: true,
  landlordId: true,
  type: true,
  negotiatorId: true,
  description: true,
})
export const JournalEntriesLandlordsTable = () => {
  const { rows } = useJournalEntriesLandlordsTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useJournalEntriesLandlordsTable</Typography>
        <Button
          component={RouterLink}
          to={`/journalEntries/landlords/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create landlordJournalEntry
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
