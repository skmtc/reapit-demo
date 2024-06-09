import { CreateContacts } from '@/forms/CreateContacts.generated.tsx'
import { createContactModelConfig } from '@/config/createContactModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateContactModel } from '@/schemas/createContactModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateContactModel>({
  title: true,
  forename: true,
  surname: true,
  dateOfBirth: true,
  active: true,
  marketingConsent: true,
  source: true,
  homePhone: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  officeIds: true,
  negotiatorIds: true,
  categoryIds: true,
  primaryAddress: true,
  secondaryAddress: true,
  workAddress: true,
  communicationPreferenceLetter: true,
  communicationPreferenceEmail: true,
  communicationPreferencePhone: true,
  communicationPreferenceSMS: true,
  metadata: true,
})
export const CreateContactsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateContactModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          <CreateContactsFields />
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}

export const CreateContactsFields = () => {
  const formConfig = createContactModelConfig as ModelConfig<CreateContactModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
