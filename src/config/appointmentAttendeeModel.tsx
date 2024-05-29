import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentAttendeeModel } from '@/schemas/index.ts'

export const appointmentAttendeeModelConfig: ModelConfig<AppointmentAttendeeModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  contacts: {
    key: 'contacts',
    label: 'contacts',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
