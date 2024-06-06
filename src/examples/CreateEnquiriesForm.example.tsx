import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateEnquiries } from '@/examples/CreateEnquiriesForm.example.tsx'
import { CreateEnquiryModel } from 'schemas/index.ts'
import { createEnquiryModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateEnquiryModel>({
          title: true,
forename: true,
surname: true,
position: true,
enquiryType: true,
message: true,
officeId: true,
marketingConsent: true,
sourceName: true,
homePhone: true,
workPhone: true,
mobilePhone: true,
email: true,
address: true,
buying: true,
renting: true,
bedrooms: true,
propertyIds: true
        });
export const CreateEnquiriesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createEnquiryModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateEnquiries >
              <CreateEnquiriesFields />
            </CreateEnquiries>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateEnquiriesFields = () => {
      const formConfig = createEnquiryModelConfig as ModelConfig<CreateEnquiryModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;