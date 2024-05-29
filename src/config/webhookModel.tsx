import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { WebhookModel } from '@/schemas/index.ts'

export const webhookModelConfig: ModelConfig<WebhookModel> = {
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  url: {
    key: 'url',
    label: 'url',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  topicIds: {
    key: 'topicIds',
    label: 'topicIds',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  ignoreEtagOnlyChanges: {
    key: 'ignoreEtagOnlyChanges',
    label: 'ignoreEtagOnlyChanges',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
