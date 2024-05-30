import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertiesIdChecks } from '@/forms/properties.generated.tsx'
import { CreatePropertyCheckModel } from '@/schemas/index.ts'
import { propertyCheckModelConfig } from '@/config/propertyCheckModel.example.tsx'

const fieldNames = fieldsConfig<CreatePropertyCheckModel>({
  description: true,
  type: true,
  status: true,
})

export const CreatePropertiesIdChecksForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new propertyCheck" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdChecks id={id}>
          <CreatePropertiesIdChecksFields />
        </CreatePropertiesIdChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdChecksFields = () => {
  const formConfig = propertyCheckModelConfig as ModelConfig<CreatePropertyCheckModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
