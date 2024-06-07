import { PatchOffersId } from '@/forms/Offers.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateOfferModelConfig } from '@/config/updateOfferModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateOfferModel>({
          negotiatorId: true,
date: true,
amount: true,
status: true,
inclusions: true,
exclusions: true,
conditions: true,
metadata: true
        });
export const PatchOffersIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateOfferModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchOffersId id={id}>
              <PatchOffersIdFields />
            </PatchOffersId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchOffersIdFields = () => {
      const formConfig = updateOfferModelConfig as ModelConfig<UpdateOfferModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;