import { CreateConveyancingIdDownward } from '@/forms/Conveyancing.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createDownwardLinkModelConfig } from '@/config/createDownwardLinkModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

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
        <Drawer title="Create new CreateDownwardLinkModel" onClose={() => navigate('..')}>
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