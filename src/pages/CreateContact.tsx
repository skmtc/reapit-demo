import { Drawer } from '@/components/Drawer'
import { FieldController, KeyPath } from '@/components/ModelRuntimeConfig'
import {
  CreateContacts,
  CreateContactsBody,
  createContactsConfig
} from '@/forms/contacts'
import DialogContent from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const CreateContact = () => {
  const navigate = useNavigate()

  const formFields: KeyPath<CreateContactsBody>[] = ['surname']

  return (
    <Drawer title="Create new contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          {control => {
            return formFields.map(fieldName => (
              <FieldController
                key={fieldName}
                fieldName={fieldName}
                control={control}
                config={createContactsConfig[fieldName]}
              />
            ))
          }}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
