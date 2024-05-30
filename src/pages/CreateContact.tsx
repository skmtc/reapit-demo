import { Drawer } from '@/components/Drawer'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { contactModelConfig } from '@/config/contactModel'
import { CreateContacts } from '@/forms/contacts'
import { CreateContactModel } from '@/schemas'
import DialogContent from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

const fieldNames = fieldsConfig<CreateContactModel>({
  surname: true,
  marketingConsent: true,
  officeIds: true,
  negotiatorIds: true,
})

export const CreateContact = () => {
  const navigate = useNavigate()

  const formConfig = contactModelConfig as ModelConfig<CreateContactModel>

  return (
    <Drawer title="Create new contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
