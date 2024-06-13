import { CreatePropertiesIdAppraisals } from '@/forms/CreatePropertiesIdAppraisals.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createPropertyAppraisalModelConfig } from '@/config/createPropertyAppraisalModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertyAppraisalModel } from '@/schemas/createPropertyAppraisalModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePropertyAppraisalModel>({
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
    <Drawer title="Create new CreatePropertyAppraisalModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdAppraisals id={id}>
          <CreatePropertiesIdAppraisalsFields />
        </CreatePropertiesIdAppraisals>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdAppraisalsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createPropertyAppraisalModelConfig[fieldName]} />
    ))}
  </>
)
