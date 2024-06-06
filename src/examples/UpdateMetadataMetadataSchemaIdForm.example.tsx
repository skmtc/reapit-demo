import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateMetadataMetadataSchemaId } from '@/examples/UpdateMetadataMetadataSchemaIdForm.example.tsx'
import { UpdateSchemaRequest } from 'schemas/index.ts'
import { updateSchemaRequestConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateSchemaRequest>({
          schema: true
        });
export const UpdateMetadataMetadataSchemaIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateSchemaRequestConfig" onClose={() => navigate('..')}>
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