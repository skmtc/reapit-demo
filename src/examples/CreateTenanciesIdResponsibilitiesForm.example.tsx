import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdResponsibilities } from '@/examples/CreateTenanciesIdResponsibilitiesForm.example.tsx'
import { CreateTenancyResponsibilityModel } from 'schemas/index.ts'
import { createTenancyResponsibilityModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateTenancyResponsibilityModel>({
          typeId: true,
appliesTo: true,
agreements: true
        });
export const CreateTenanciesIdResponsibilitiesForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new createTenancyResponsibilityModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateTenanciesIdResponsibilities id={id}>
              <CreateTenanciesIdResponsibilitiesFields />
            </CreateTenanciesIdResponsibilities>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateTenanciesIdResponsibilitiesFields = () => {
      const formConfig = createTenancyResponsibilityModelConfig as ModelConfig<CreateTenancyResponsibilityModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;