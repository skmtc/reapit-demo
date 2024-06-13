import { CreateWorksOrdersIdItems } from '@/forms/CreateWorksOrdersIdItems.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createWorksOrderItemModelConfig } from '@/config/createWorksOrderItemModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateWorksOrderItemModel>({
  notes: true,
  chargeTo: true,
  estimate: true,
  estimateType: true,
  netAmount: true,
  vatAmount: true,
  reserveAmount: true,
})
export const CreateWorksOrdersIdItemsForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateWorksOrderItemModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateWorksOrdersIdItems id={id}>
          <CreateWorksOrdersIdItemsFields />
        </CreateWorksOrdersIdItems>
      </DialogContent>
    </Drawer>
  )
}

export const CreateWorksOrdersIdItemsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createWorksOrderItemModelConfig[fieldName]} />
    ))}
  </>
)
