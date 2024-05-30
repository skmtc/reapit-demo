import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateMetadataMetadataSchema } from '@/forms/metadataschema.generated.tsx'
import { CreateSchemaRequest } from '@/schemas/index.ts'
import { schemaRequestConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreateSchemaRequest>({
  entityType: true,
  schema: true,
})

export const CreateMetadataMetadataSchemaForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new schemaRequest" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateMetadataMetadataSchema>
          <CreateMetadataMetadataSchemaFields />
        </CreateMetadataMetadataSchema>
      </DialogContent>
    </Drawer>
  )
}

export const CreateMetadataMetadataSchemaFields = () => {
  const formConfig = schemaRequestConfig as ModelConfig<CreateSchemaRequest>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
