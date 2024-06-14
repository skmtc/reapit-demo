import { CreateOffices } from '@/sections/Offices/forms/CreateOffices.generated.tsx'
import { createOfficeModelConfig } from '@/sections/Offices/config/createOfficeModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
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

export const CreateOfficesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createOfficeModelConfig[fieldName]} />
    ))}
  </>
)
