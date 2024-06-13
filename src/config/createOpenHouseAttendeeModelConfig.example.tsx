import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'

export const createOpenHouseAttendeeModelConfig: ModelConfig<CreateOpenHouseAttendeeModel> = {
  interestLevel: {
    key: 'interestLevel',
    label: 'interestLevel',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  attendee: {
    key: 'attendee',
    label: 'attendee',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
