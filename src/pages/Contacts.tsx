import { SharedTable } from '@/components/SharedTable'
import { ColumnsList } from '@/components/ModelRuntimeConfig'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { getContactsColumn, useContactsTable } from '@/tables/contacts'
import { ContactModel } from '@/schemas'
import { contactModelConfig } from '@/config/contactModel'

export const Contacts = () => {
  const cols: (keyof ContactModel)[] = ['id', 'surname']

  console.log('contactTableConfig', contactModelConfig)

  const columns: ColumnsList<ContactModel> = cols.map((col) => getContactsColumn(col, contactModelConfig))

  const { table, dataQuery } = useContactsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Contacts</Typography>
        <Button
          component={RouterLink}
          to="/contacts/new"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create contact
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
