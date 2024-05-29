import { Drawer } from '@/components/Drawer'
import { FieldController, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
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

  const formConfig = officeModelConfig as ModelConfig<CreateOfficeModel>

  return (
    <Drawer title="Create new office" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateOffices>
          {(control) => {
            return fieldNames.map((fieldName) => (
              <FieldController
                key={fieldName}
                fieldName={fieldName}
                control={control}
                fieldConfig={formConfig[fieldName]}
              />
            ))
          }}
        </CreateOffices>
      </DialogContent>
    </Drawer>
  )
}
