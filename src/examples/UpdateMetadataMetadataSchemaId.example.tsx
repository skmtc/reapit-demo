import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateMetadataMetadataSchemaId } from '@/forms/metadataschema.generated.tsx'
import { UpdateSchemaRequest } from '@/schemas/index.ts'
import { schemaRequestConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<UpdateSchemaRequest>({
  schema: true,
})

export const UpdateMetadataMetadataSchemaIdForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new schemaRequest" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <UpdateMetadataMetadataSchemaId id={id}>
          <UpdateMetadataMetadataSchemaIdFields />
        </UpdateMetadataMetadataSchemaId>
      </DialogContent>
    </Drawer>
  )
}

export const UpdateMetadataMetadataSchemaIdFields = () => {
  const formConfig = schemaRequestConfig as ModelConfig<UpdateSchemaRequest>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
