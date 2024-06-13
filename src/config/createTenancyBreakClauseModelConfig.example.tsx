import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'

export const createTenancyBreakClauseModelConfig: ModelConfig<CreateTenancyBreakClauseModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
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
  breakFrom: {
    key: 'breakFrom',
    label: 'breakFrom',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  noticeRequired: {
    key: 'noticeRequired',
    label: 'noticeRequired',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
