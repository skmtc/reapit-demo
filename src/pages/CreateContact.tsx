import { Drawer } from '@/components/Drawer'
import { FormConfig } from '@/components/ModelRuntimeConfig'
import {
  CreateContacts,
  CreateContactsBody,
  getCreateContactsField
} from '@/forms/contacts'
import DialogContent from '@mui/joy/DialogContent'
import { Control, FieldPath } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@mui/joy/Input'

const formConfig: FormConfig<CreateContactsBody> = {
  surname: {
    key: 'surname',
    label: 'Surname',
    Input: props => <Input {...props} />
  }
}

export const CreateContact = () => {
  const navigate = useNavigate()

  const formFields: FieldPath<CreateContactsBody>[] = ['surname']

  return (
    <Drawer title="Create new contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          {(control: Control<CreateContactsBody, any>) => {
            return formFields.map(fieldName => {
              return getCreateContactsField({
                fieldName,
                control,
                formConfig
              })
            })
          }}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
