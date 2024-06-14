import { CreateWorksOrders } from '@/sections/WorksOrders/forms/CreateWorksOrders.generated.tsx'
import { createWorksOrderModelConfig } from '@/sections/WorksOrders/config/createWorksOrderModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateWorksOrderModel } from '@/schemas/createWorksOrderModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateWorksOrderModel>({
  companyId: true,
  propertyId: true,
  tenancyId: true,
  negotiatorId: true,
  typeId: true,
  status: true,
  description: true,
  reporter: true,
  priority: true,
  booked: true,
  required: true,
  completed: true,
  items: true,
  metadata: true,
})
export const CreateWorksOrdersForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateWorksOrderModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateWorksOrders>
          <CreateWorksOrdersFields />
        </CreateWorksOrders>
      </DialogContent>
    </Drawer>
  )
}

export const CreateWorksOrdersFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createWorksOrderModelConfig[fieldName]} />
    ))}
  </>
)
