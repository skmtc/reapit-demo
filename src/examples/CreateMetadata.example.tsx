import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateMetadata } from '@/forms/metadata.generated.tsx'
import { CreateMetadataRequest } from '@/schemas/index.ts'
import { metadataRequestConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreateMetadataRequest>({
  entityType: true,
  entityId: true,
  metadata: true,
})

export const CreateMetadataForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new metadataRequest" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateMetadata>
          <CreateMetadataFields />
        </CreateMetadata>
      </DialogContent>
    </Drawer>
  )
}

export const CreateMetadataFields = () => {
  const formConfig = metadataRequestConfig as ModelConfig<CreateMetadataRequest>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
