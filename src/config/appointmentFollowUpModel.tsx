import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentFollowUpModel } from '@/schemas/index.ts'

export const appointmentFollowUpModelConfig: ModelConfig<AppointmentFollowUpModel> = {
  due: {
    key: 'due',
    label: 'due',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  responseId: {
    key: 'responseId',
    label: 'responseId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
