import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreatePropertiesIdAppraisals } from '@/examples/CreatePropertiesIdAppraisalsForm.example.tsx'
import { CreatePropertyAppraisalModel } from 'schemas/index.ts'
import { createPropertyAppraisalModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreatePropertyAppraisalModel>({
          companyId: true,
date: true,
price: true,
fee: true,
notes: true
        });
export const CreatePropertiesIdAppraisalsForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new createPropertyAppraisalModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertiesIdAppraisals id={id}>
              <CreatePropertiesIdAppraisalsFields />
            </CreatePropertiesIdAppraisals>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertiesIdAppraisalsFields = () => {
      const formConfig = createPropertyAppraisalModelConfig as ModelConfig<CreatePropertyAppraisalModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;