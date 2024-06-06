import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateWorksOrdersIdItems } from '@/examples/CreateWorksOrdersIdItemsForm.example.tsx'
import { CreateWorksOrderItemModel } from 'schemas/index.ts'
import { createWorksOrderItemModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateWorksOrderItemModel>({
          notes: true,
chargeTo: true,
estimate: true,
estimateType: true,
netAmount: true,
vatAmount: true,
reserveAmount: true
        });
export const CreateWorksOrdersIdItemsForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new createWorksOrderItemModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateWorksOrdersIdItems id={id}>
              <CreateWorksOrdersIdItemsFields />
            </CreateWorksOrdersIdItems>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateWorksOrdersIdItemsFields = () => {
      const formConfig = createWorksOrderItemModelConfig as ModelConfig<CreateWorksOrderItemModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;