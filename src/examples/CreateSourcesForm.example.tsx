import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateSources } from '@/examples/CreateSourcesForm.example.tsx'
import { CreateSourceModel } from 'schemas/index.ts'
import { createSourceModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateSourceModel>({
          name: true,
type: true,
officeIds: true,
departmentIds: true
        });
export const CreateSourcesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createSourceModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateSources >
              <CreateSourcesFields />
            </CreateSources>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateSourcesFields = () => {
      const formConfig = createSourceModelConfig as ModelConfig<CreateSourceModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;