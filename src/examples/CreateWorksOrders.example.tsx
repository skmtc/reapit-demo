import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateWorksOrders } from '@/forms/worksorders.generated.tsx'
import { CreateWorksOrderModel } from '@/schemas/index.ts'
import { worksOrderModelConfig } from '@/config/worksOrderModel.example.tsx'

const fieldNames = fieldsConfig<CreateWorksOrderModel>({
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
    <Drawer title="Create new worksOrder" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateWorksOrders>
          <CreateWorksOrdersFields />
        </CreateWorksOrders>
      </DialogContent>
    </Drawer>
  )
}

export const CreateWorksOrdersFields = () => {
  const formConfig = worksOrderModelConfig as ModelConfig<CreateWorksOrderModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}