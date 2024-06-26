import { CreateIdentityChecks } from '@/sections/IdentityChecks/forms/CreateIdentityChecks.generated.tsx'
import { createIdentityCheckModelConfig } from '@/sections/IdentityChecks/config/createIdentityCheckModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateIdentityCheckModel>({
  contactId: true,
  checkDate: true,
  status: true,
  negotiatorId: true,
  identityDocument1: true,
  identityDocument2: true,
  metadata: true,
})
export const CreateIdentityChecksForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateIdentityCheckModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateIdentityChecks>
          <CreateIdentityChecksFields />
        </CreateIdentityChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateIdentityChecksFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createIdentityCheckModelConfig[fieldName]} />
    ))}
  </>
)
