import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateIdentityChecks } from '@/forms/identitychecks.generated.tsx'
import { CreateIdentityCheckModel } from '@/schemas/index.ts'
import { identityCheckModelConfig } from '@/config/identityCheckModel.example.tsx'

const fieldNames = fieldsConfig<CreateIdentityCheckModel>({
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
    <Drawer title="Create new identityCheck" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateIdentityChecks>
          <CreateIdentityChecksFields />
        </CreateIdentityChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateIdentityChecksFields = () => {
  const formConfig = identityCheckModelConfig as ModelConfig<CreateIdentityCheckModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
