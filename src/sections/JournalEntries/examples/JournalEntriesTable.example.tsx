import { useJournalEntriesTable } from '@/sections/JournalEntries/tables/JournalEntriesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { JournalEntryModel } from '@/schemas/journalEntryModel.generated.tsx'

export const fieldNames = fieldsConfig<JournalEntryModel>({
  _links: true,
  _embedded: true,
  created: true,
  propertyId: true,
  associatedType: true,
  associatedId: true,
  typeId: true,
  negotiatorId: true,
  description: true,
})
export const JournalEntriesTable = () => {
  const { rows } = useJournalEntriesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useJournalEntriesTable</Typography>
        <Button
          component={RouterLink}
          to={`/journalEntries/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create journalEntry
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
