import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateIdentityChecks } from '@/examples/CreateIdentityChecksForm.example.tsx'
import { CreateIdentityCheckModel } from 'schemas/index.ts'
import { createIdentityCheckModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateIdentityCheckModel>({
          contactId: true,
checkDate: true,
status: true,
negotiatorId: true,
identityDocument1: true,
identityDocument2: true,
metadata: true
        });
export const CreateIdentityChecksForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createIdentityCheckModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateIdentityChecks >
              <CreateIdentityChecksFields />
            </CreateIdentityChecks>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateIdentityChecksFields = () => {
      const formConfig = createIdentityCheckModelConfig as ModelConfig<CreateIdentityCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;