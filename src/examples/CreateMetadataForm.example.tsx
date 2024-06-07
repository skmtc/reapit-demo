import { CreateMetadata } from '@/forms/Metadata.generated.tsx'
import { createMetadataRequestConfig } from '@/config/createMetadataRequestConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateMetadataRequest>({
          entityType: true,
entityId: true,
metadata: true
        });
export const CreateMetadataForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateMetadataRequest" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateMetadata >
              <CreateMetadataFields />
            </CreateMetadata>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateMetadataFields = () => {
      const formConfig = createMetadataRequestConfig as ModelConfig<CreateMetadataRequest>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;