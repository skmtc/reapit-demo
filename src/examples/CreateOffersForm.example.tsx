import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateOffers } from '@/examples/CreateOffersForm.example.tsx'
import { CreateOfferModel } from 'schemas/index.ts'
import { createOfferModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateOfferModel>({
          applicantId: true,
propertyId: true,
negotiatorId: true,
date: true,
amount: true,
status: true,
inclusions: true,
exclusions: true,
conditions: true,
metadata: true
        });
export const CreateOffersForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createOfferModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateOffers >
              <CreateOffersFields />
            </CreateOffers>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateOffersFields = () => {
      const formConfig = createOfferModelConfig as ModelConfig<CreateOfferModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;