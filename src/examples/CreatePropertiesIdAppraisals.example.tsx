import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertiesIdAppraisals } from '@/forms/properties.generated.tsx'
import { CreatePropertyAppraisalModel } from '@/schemas/index.ts'
import { propertyAppraisalModelConfig } from '@/config/propertyAppraisalModel.example.tsx'

const fieldNames = fieldsConfig<CreatePropertyAppraisalModel>({
  companyId: true,
  date: true,
  price: true,
  fee: true,
  notes: true,
})

export const CreatePropertiesIdAppraisalsForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new propertyAppraisal" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdAppraisals id={id}>
          <CreatePropertiesIdAppraisalsFields />
        </CreatePropertiesIdAppraisals>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdAppraisalsFields = () => {
  const formConfig = propertyAppraisalModelConfig as ModelConfig<CreatePropertyAppraisalModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
