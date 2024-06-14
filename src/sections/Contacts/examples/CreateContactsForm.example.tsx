import { CreateContacts } from '@/sections/Contacts/forms/CreateContacts.generated.tsx'
import { createContactModelConfig } from '@/sections/Contacts/config/createContactModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
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
          <CreateContactsFields fieldNames={fieldNames} />
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}

type CreateContactsFieldsProps = {
  fieldNames: (keyof CreateContactModel)[]
}

export const CreateContactsFields = ({ fieldNames }: CreateContactsFieldsProps) => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createContactModelConfig[fieldName]} />
    ))}
  </>
)
