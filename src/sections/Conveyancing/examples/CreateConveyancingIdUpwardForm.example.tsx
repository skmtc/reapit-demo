import { CreateConveyancingIdUpward } from '@/sections/Conveyancing/forms/CreateConveyancingIdUpward.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createUpwardLinkModelConfig } from '@/sections/Conveyancing/config/createUpwardLinkModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateUpwardLinkModel>({
  offerId: true,
  propertyAddress: true,
  agent: true,
  vendor: true,
  vendorSolicitorId: true,
})
export const CreateConveyancingIdUpwardForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateUpwardLinkModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateConveyancingIdUpward id={id}>
          <CreateConveyancingIdUpwardFields />
        </CreateConveyancingIdUpward>
      </DialogContent>
    </Drawer>
  )
}

export const CreateConveyancingIdUpwardFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createUpwardLinkModelConfig[fieldName]} />
    ))}
  </>
)
