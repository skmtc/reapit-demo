import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'

export const createOpenHouseAttendeeModelConfig: ModelConfig<CreateOpenHouseAttendeeModel> = {interestLevel: {
      key: 'interestLevel',
      label: 'interestLevel',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,attendee: {
      key: 'attendee',
      label: 'attendee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};