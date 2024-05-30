import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateConveyancingIdUpward } from '@/forms/conveyancing.generated.tsx'
import { CreateUpwardLinkModel } from '@/schemas/index.ts'
import { upwardLinkModelConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreateUpwardLinkModel>({
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
    <Drawer title="Create new upwardLink" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateConveyancingIdUpward id={id}>
          <CreateConveyancingIdUpwardFields />
        </CreateConveyancingIdUpward>
      </DialogContent>
    </Drawer>
  )
}

export const CreateConveyancingIdUpwardFields = () => {
  const formConfig = upwardLinkModelConfig as ModelConfig<CreateUpwardLinkModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
