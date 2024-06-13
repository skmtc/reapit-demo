import { CreatePropertiesIdChecks } from '@/forms/CreatePropertiesIdChecks.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createPropertyCheckModelConfig } from '@/config/createPropertyCheckModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertyCheckModel } from '@/schemas/createPropertyCheckModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePropertyCheckModel>({
  description: true,
  type: true,
  status: true,
})
export const CreatePropertiesIdChecksForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreatePropertyCheckModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdChecks id={id}>
          <CreatePropertiesIdChecksFields />
        </CreatePropertiesIdChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdChecksFields = () => {
  const formConfig = createPropertyCheckModelConfig as ModelConfig<CreatePropertyCheckModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
