import { CreatePropertiesIdCertificates } from '@/sections/Properties/forms/CreatePropertiesIdCertificates.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createCertificateModelConfig } from '@/sections/Properties/config/createCertificateModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateCertificateModel } from '@/schemas/createCertificateModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateCertificateModel>({
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
    <Drawer title="Create new CreateCertificateModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertiesIdCertificates id={id}>
          <CreatePropertiesIdCertificatesFields />
        </CreatePropertiesIdCertificates>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesIdCertificatesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createCertificateModelConfig[fieldName]} />
    ))}
  </>
)
