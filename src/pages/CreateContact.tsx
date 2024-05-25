import { Drawer } from '@/components/Drawer'
import {
  FieldController,
  FormConfig,
  KeyPath,
  createRuntimeConfig
} from '@/components/ModelRuntimeConfig'
import { CreateContacts, CreateContactsBody } from '@/forms/contacts'
import DialogContent from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import Input from '@mui/joy/Input'
import { contactConfig } from '@/pages/Contacts'
import { match } from 'ts-pattern'

const config = createRuntimeConfig<CreateContactsBody>(
  {
    type: 'form',
    config: {
      surname: {
        key: 'surname',
        label: 'Surname',
        Input: props => <Input {...props} />
      }
    }
  },
  contactConfig
)

export const CreateContact = () => {
  const navigate = useNavigate()

  const formFields: KeyPath<CreateContactsBody>[] = ['surname']

  const formConfig: FormConfig<CreateContactsBody> = match(config)
    .with({ type: 'form' }, ({ config }) => config)
    .otherwise(() => {
      throw new Error('Unknown type')
    })

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
                config={formConfig[fieldName]}
              />
            ))
          }}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
