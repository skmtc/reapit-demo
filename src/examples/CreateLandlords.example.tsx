import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateLandlords } from '@/forms/landlords.generated.tsx'
import { CreateLandlordModel } from '@/schemas/index.ts'
import { landlordModelConfig } from '@/config/landlordModel.example.tsx'

const fieldNames = fieldsConfig<CreateLandlordModel>({
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
    <Drawer title="Create new landlord" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateLandlords>
          <CreateLandlordsFields />
        </CreateLandlords>
      </DialogContent>
    </Drawer>
  )
}

export const CreateLandlordsFields = () => {
  const formConfig = landlordModelConfig as ModelConfig<CreateLandlordModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
