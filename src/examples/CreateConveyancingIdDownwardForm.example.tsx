import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateConveyancingIdDownward } from '@/examples/CreateConveyancingIdDownwardForm.example.tsx'
import { CreateDownwardLinkModel } from 'schemas/index.ts'
import { createDownwardLinkModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateDownwardLinkModel>({
          offerId: true,
propertyAddress: true,
agent: true,
buyer: true,
buyerSolicitorId: true
        });
export const CreateConveyancingIdDownwardForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new createDownwardLinkModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateConveyancingIdDownward id={id}>
              <CreateConveyancingIdDownwardFields />
            </CreateConveyancingIdDownward>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateConveyancingIdDownwardFields = () => {
      const formConfig = createDownwardLinkModelConfig as ModelConfig<CreateDownwardLinkModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;