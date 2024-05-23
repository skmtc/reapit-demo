import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, RuntimeConfigMap } from '@/components/ModelRuntimeConfig'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ContactsBody, getContactsColumn, useContactsTable } from '@/tables/contacts'
import { createRuntimeConfig } from '@/components/ModelRuntimeConfig'
import Link from '@mui/joy/Link'

const projectsTableConfig: RuntimeConfigMap<ContactsBody> = {
  '@skmtc/tanstack-table': {
    id: {
      label: 'Id',
      format: (value) => (
        <Link component={RouterLink} to={`/deployments/${value}`}>
          {value}
        </Link>
      )
    },
    surname: {
      label: 'Surname',
      format: (value) => value
    }
  }
}

const formatting = createRuntimeConfig(projectsTableConfig, '@skmtc/tanstack-table')

export const Contacts = () => {
  const cols: (keyof ContactsBody)[] = ['id', 'surname']

  const columns: ColumnsList<ContactsBody> = cols.map(col => getContactsColumn(col, formatting))

  const { table, dataQuery } = useContactsTable({columns})

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
