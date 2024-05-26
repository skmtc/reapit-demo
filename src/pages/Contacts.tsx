import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, ModelConfig } from '@/components/ModelRuntimeConfig'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  ContactsBody,
  getContactsColumn,
  useContactsTable
} from '@/tables/contacts'
import { createConfig } from '@/components/ModelRuntimeConfig'
import { createContactsConfig } from '@/forms/contacts'

const contactTableConfig: ModelConfig<ContactsBody> = createConfig(
  createContactsConfig,
  createContactsConfig
)

console.log('contactTableConfig', contactTableConfig)

export const Contacts = () => {
  const cols: (keyof ContactsBody)[] = ['id', 'surname']

  console.log('contactTableConfig', contactTableConfig)

  const columns: ColumnsList<ContactsBody> = cols.map(col =>
    getContactsColumn(col, contactTableConfig)
  )

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
              color: 'white'
            }
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
