import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useContactsIdSubscriptionsTable, getContactsIdSubscriptionsColumn } from '@/tables/contacts.generated.tsx'
import { ContactSubscriptionModel } from '@/schemas/index.ts'
import { contactSubscriptionModelConfig } from '@/config/contactSubscriptionModel.example.tsx'

const fieldNames = fieldsConfig<ContactSubscriptionModel>({
  _links: true,
  _embedded: true,
  id: true,
  contactId: true,
  name: true,
  group: true,
  status: true,
  type: true,
  subscribedOn: true,
  unsubscribedOn: true,
})

export const ContactsIdSubscriptions = () => {
  const columns: ColumnsList<ContactSubscriptionModel> = fieldNames.map((col) =>
    getContactsIdSubscriptionsColumn(col, contactSubscriptionModelConfig),
  )

  const { table, dataQuery } = useContactsIdSubscriptionsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">ContactsIdSubscriptions</Typography>
        <Button
          component={RouterLink}
          to="/contacts/{id}/subscriptionsnew"
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create contactSubscription
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
