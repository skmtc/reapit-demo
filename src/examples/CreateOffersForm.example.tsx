import { CreateOffers } from '@/forms/CreateOffers.generated.tsx'
import { createOfferModelConfig } from '@/config/createOfferModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateOfferModel } from '@/schemas/createOfferModel.generated.tsx'

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
  metadata: true,
})
export const CreateOffersForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateOfferModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateOffers>
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
