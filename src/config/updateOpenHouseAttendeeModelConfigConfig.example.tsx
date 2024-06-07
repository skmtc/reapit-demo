import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateOpenHouseAttendeeModel } from '@/schemas/updateOpenHouseAttendeeModel.generated.tsx'

export const updateOpenHouseAttendeeModelConfig: ModelConfig<UpdateOpenHouseAttendeeModel> = {interestLevel: {
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
    }};