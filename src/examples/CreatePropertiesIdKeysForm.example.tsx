import { CreatePropertiesIdKeys } from '@/forms/Properties.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createKeyModelConfig } from '@/config/createKeyModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<CreateKeyModel>({
          number: true,
typeId: true,
officeId: true,
keysInSet: true
        });
export const CreatePropertiesIdKeysForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new CreateKeyModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertiesIdKeys id={id}>
              <CreatePropertiesIdKeysFields />
            </CreatePropertiesIdKeys>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertiesIdKeysFields = () => {
      const formConfig = createKeyModelConfig as ModelConfig<CreateKeyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;