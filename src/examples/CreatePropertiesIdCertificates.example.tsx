import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertiesIdCertificates } from '@/forms/properties.generated.tsx'
import { CreateCertificateModel } from '@/schemas/index.ts'
import { certificateModelConfig } from '@/config/certificateModel.example.tsx'

const fieldNames = fieldsConfig<CreateCertificateModel>({
  category: true,
  typeId: true,
  start: true,
  expiry: true,
  companyId: true,
  notes: true,
  referenceNumber: true,
})

export const CreatePropertiesIdCertificatesForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new certificate" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdCertificates id={id}>
          <CreatePropertiesIdCertificatesFields />
        </CreatePropertiesIdCertificates>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdCertificatesFields = () => {
  const formConfig = certificateModelConfig as ModelConfig<CreateCertificateModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
