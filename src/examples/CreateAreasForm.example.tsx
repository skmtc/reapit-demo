import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateAreas } from '@/examples/CreateAreasForm.example.tsx'
import { CreateAreaModel } from 'schemas/index.ts'
import { createAreaModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateAreaModel>({
          name: true,
type: true,
area: true,
departmentIds: true,
officeIds: true,
parentId: true
        });
export const CreateAreasForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createAreaModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateAreas >
              <CreateAreasFields />
            </CreateAreas>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateAreasFields = () => {
      const formConfig = createAreaModelConfig as ModelConfig<CreateAreaModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;