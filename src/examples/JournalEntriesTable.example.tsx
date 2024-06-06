import { useJournalEntriesTable, getuseJournalEntriesTableColumn } from 'tables/JournalEntries.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { JournalEntryModel } from 'schemas/index.ts'
import { journalEntryModelConfig } from 'config/journalEntryModel.example.tsx'

export const fieldNames = fieldsConfig<JournalEntryModel>({
        _links: true,
_embedded: true,
created: true,
propertyId: true,
associatedType: true,
associatedId: true,
typeId: true,
negotiatorId: true,
description: true
      });
export const JournalEntriesTable = () => {
  const columns: ColumnsList<JournalEntryModel> = fieldNames.map((col) => getuseJournalEntriesTableColumn(col, journalEntryModelConfig))

  

  

  const { table, dataQuery } = useJournalEntriesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;