import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'

export const updateWebhookModelConfig: ModelConfig<UpdateWebhookModel> = {
  url: {
    key: 'url',
    label: 'url',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  topicIds: {
    key: 'topicIds',
    label: 'topicIds',
    defaultValue: [],
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
  ignoreEtagOnlyChanges: {
    key: 'ignoreEtagOnlyChanges',
    label: 'ignoreEtagOnlyChanges',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
