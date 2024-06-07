import { CreateWorksOrders } from '@/forms/WorksOrders.generated.tsx'
import { createWorksOrderModelConfig } from '@/config/createWorksOrderModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateWorksOrderModel>({
          companyId: true,
propertyId: true,
tenancyId: true,
negotiatorId: true,
typeId: true,
status: true,
description: true,
reporter: true,
priority: true,
booked: true,
required: true,
completed: true,
items: true,
metadata: true
        });
export const CreateWorksOrdersForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateWorksOrderModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateWorksOrders >
              <CreateWorksOrdersFields />
            </CreateWorksOrders>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateWorksOrdersFields = () => {
      const formConfig = createWorksOrderModelConfig as ModelConfig<CreateWorksOrderModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;