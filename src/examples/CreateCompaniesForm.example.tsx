import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateCompanies } from '@/examples/CreateCompaniesForm.example.tsx'
import { CreateCompanyModel } from 'schemas/index.ts'
import { createCompanyModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateCompanyModel>({
          name: true,
branch: true,
notes: true,
active: true,
marketingConsent: true,
vatRegistered: true,
typeIds: true,
supplierTypeId: true,
workPhone: true,
mobilePhone: true,
email: true,
address: true,
communicationPreferenceLetter: true,
communicationPreferenceEmail: true,
communicationPreferencePhone: true,
communicationPreferenceSms: true,
metadata: true
        });
export const CreateCompaniesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createCompanyModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateCompanies >
              <CreateCompaniesFields />
            </CreateCompanies>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateCompaniesFields = () => {
      const formConfig = createCompanyModelConfig as ModelConfig<CreateCompanyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;