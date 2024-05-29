import { Drawer } from '@/components/Drawer'
import { FieldParent, ModelConfig2, fieldsConfig } from '@/components/ModelRuntimeConfig'
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

  const formConfig = officeModelConfig as ModelConfig2<CreateOfficeModel>

  return (
    <Drawer title="Create new office" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateOffices>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </CreateOffices>
      </DialogContent>
    </Drawer>
  )
}
