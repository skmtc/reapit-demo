import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  useJournalEntriesLandlordsTable,
  getJournalEntriesLandlordsColumn,
} from '@/tables/journalentries.generated.tsx'
import { LandlordJournalEntryModel } from '@/schemas/index.ts'
import { landlordJournalEntryModelConfig } from '@/config/landlordJournalEntryModel.example.tsx'

const fieldNames = fieldsConfig<LandlordJournalEntryModel>({
  _links: true,
  _embedded: true,
  created: true,
  propertyId: true,
  landlordId: true,
  type: true,
  negotiatorId: true,
  description: true,
})

export const JournalEntriesLandlords = () => {
  const columns: ColumnsList<LandlordJournalEntryModel> = fieldNames.map((col) =>
    getJournalEntriesLandlordsColumn(col, landlordJournalEntryModelConfig),
  )

  const { table, dataQuery } = useJournalEntriesLandlordsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">JournalEntriesLandlords</Typography>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
