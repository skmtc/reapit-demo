import { CreateOffices } from '@/forms/CreateOffices.generated.tsx'
import { createOfficeModelConfig } from '@/config/createOfficeModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateOfficeModel } from '@/schemas/createOfficeModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateOfficeModel>({
  name: true,
  active: true,
  manager: true,
  address: true,
  workPhone: true,
  email: true,
  metadata: true,
})
export const CreateOfficesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateOfficeModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateOffices>
          <CreateOfficesFields />
        </CreateOffices>
      </DialogContent>
    </Drawer>
  )
}

export const CreateOfficesFields = () => {
  const formConfig = createOfficeModelConfig as ModelConfig<CreateOfficeModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
