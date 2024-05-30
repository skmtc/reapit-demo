import { Drawer } from '@/components/Drawer'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { officeModelConfig } from '@/config/officeModel'
import { CreateOffices } from '@/forms/offices'
import { CreateOfficeModel } from '@/schemas'
import DialogContent from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

const fieldNames = fieldsConfig<CreateOfficeModel>({
  name: true,
  email: true,
  address: true,
})

export const CreateOffice = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new office" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateOffices>
          <CreateOfficeFields />
        </CreateOffices>
      </DialogContent>
    </Drawer>
  )
}

export const CreateOfficeFields = () => {
  const formConfig = officeModelConfig as ModelConfig<CreateOfficeModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
