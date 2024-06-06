import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdAllowances } from '@/examples/CreateTenanciesIdAllowancesForm.example.tsx'
import { CreateTenancyAllowanceModel } from 'schemas/index.ts'
import { createTenancyAllowanceModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateTenancyAllowanceModel>({
          typeId: true,
state: true,
agreements: true
        });
export const CreateTenanciesIdAllowancesForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new createTenancyAllowanceModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateTenanciesIdAllowances id={id}>
              <CreateTenanciesIdAllowancesFields />
            </CreateTenanciesIdAllowances>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateTenanciesIdAllowancesFields = () => {
      const formConfig = createTenancyAllowanceModelConfig as ModelConfig<CreateTenancyAllowanceModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;