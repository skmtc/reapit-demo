import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { AppointmentFollowUpModel } from '@/schemas/index.ts'

export const appointmentFollowUpModelConfig: ModelConfig<AppointmentFollowUpModel> = {
  due: {
    key: 'due',
    label: 'due',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  responseId: {
    key: 'responseId',
    label: 'responseId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}