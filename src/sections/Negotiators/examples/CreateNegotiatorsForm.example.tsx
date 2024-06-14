import { CreateNegotiators } from '@/sections/Negotiators/forms/CreateNegotiators.generated.tsx'
import { createNegotiatorModelConfig } from '@/sections/Negotiators/config/createNegotiatorModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateNegotiatorModel>({
  name: true,
  jobTitle: true,
  active: true,
  officeId: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  diaryNegotiatorIds: true,
  diaryOfficeIds: true,
  metadata: true,
})
export const CreateNegotiatorsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateNegotiatorModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateNegotiators>
          <CreateNegotiatorsFields />
        </CreateNegotiators>
      </DialogContent>
    </Drawer>
  )
}

export const CreateNegotiatorsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createNegotiatorModelConfig[fieldName]} />
    ))}
  </>
)
