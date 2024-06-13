import { CreateConveyancingIdDownward } from '@/forms/CreateConveyancingIdDownward.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createDownwardLinkModelConfig } from '@/config/createDownwardLinkModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateDownwardLinkModel>({
  offerId: true,
  propertyAddress: true,
  agent: true,
  buyer: true,
  buyerSolicitorId: true,
})
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

export const CreateConveyancingIdDownwardFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createDownwardLinkModelConfig[fieldName]} />
    ))}
  </>
)
