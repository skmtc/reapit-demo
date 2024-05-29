import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { WebhookModel } from '@/schemas/index.ts'

export const webhookModelConfig: ModelConfig2<WebhookModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  url: {
    key: 'url',
    label: 'url',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  topicIds: {
    key: 'topicIds',
    label: 'topicIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  ignoreEtagOnlyChanges: {
    key: 'ignoreEtagOnlyChanges',
    label: 'ignoreEtagOnlyChanges',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
