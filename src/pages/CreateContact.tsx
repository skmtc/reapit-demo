import { Drawer } from '@/components/Drawer'
import {
  FieldController,
  FormConfig,
  KeyPath,
  ModelConfig,
  createRuntimeConfig
} from '@/components/ModelRuntimeConfig'
import {
  CreateContacts,
  CreateContactsBody,
  createContactsBody
} from '@/forms/contacts'
import DialogContent from '@mui/joy/DialogContent'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '@mui/joy/Input'
import { contactConfig } from '@/pages/Contacts'
import { zodResolver } from '@hookform/resolvers/zod'

const formConfig = createRuntimeConfig<CreateContactsBody>(
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
  contactConfig as ModelConfig<CreateContactsBody>
)

type CreateContactProps = {
  config: FormConfig<CreateContactsBody>
}

export const CreateContact = ({ config }: CreateContactProps) => {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<CreateContactsBody>({
    resolver: zodResolver(createContactsBody)
  })

  const formFields: KeyPath<CreateContactsBody>[] = ['surname']

  return (
    <Drawer title="Create new contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          {formFields.map(fieldName => (
            <FieldController
              key={fieldName}
              fieldName={fieldName}
              control={control}
              config={config[fieldName]}
            />
          ))}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
