import { UpdateMetadataMetadataSchemaId } from '@/forms/MetadataSchema.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateSchemaRequestConfig } from '@/config/updateSchemaRequestConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateSchemaRequest>({
          schema: true
        });
export const UpdateMetadataMetadataSchemaIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateSchemaRequest" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <UpdateMetadataMetadataSchemaId id={id}>
              <UpdateMetadataMetadataSchemaIdFields />
            </UpdateMetadataMetadataSchemaId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const UpdateMetadataMetadataSchemaIdFields = () => {
      const formConfig = updateSchemaRequestConfig as ModelConfig<UpdateSchemaRequest>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;