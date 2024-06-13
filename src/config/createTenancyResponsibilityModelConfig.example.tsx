import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'

export const createTenancyResponsibilityModelConfig: ModelConfig<CreateTenancyResponsibilityModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  appliesTo: {
    key: 'appliesTo',
    label: 'appliesTo',
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
