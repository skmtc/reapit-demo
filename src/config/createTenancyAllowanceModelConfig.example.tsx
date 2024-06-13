import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyAllowanceModel } from '@/schemas/createTenancyAllowanceModel.generated.tsx'

export const createTenancyAllowanceModelConfig: ModelConfig<CreateTenancyAllowanceModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  state: {
    key: 'state',
    label: 'state',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  agreements: {
    key: 'agreements',
    label: 'agreements',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
