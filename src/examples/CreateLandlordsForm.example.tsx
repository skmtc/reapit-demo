import { CreateLandlords } from '@/forms/CreateLandlords.generated.tsx'
import { createLandlordModelConfig } from '@/config/createLandlordModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateLandlordModel>({
  active: true,
  solicitorId: true,
  officeId: true,
  source: true,
  related: true,
  metadata: true,
})
export const CreateLandlordsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateLandlordModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateLandlords>
          <CreateLandlordsFields />
        </CreateLandlords>
      </DialogContent>
    </Drawer>
  )
}

export const CreateLandlordsFields = () => {
  const formConfig = createLandlordModelConfig as ModelConfig<CreateLandlordModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
