import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'

export const updateWebhookModelConfig: ModelConfig<UpdateWebhookModel> = {url: {
      key: 'url',
      label: 'url',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,topicIds: {
      key: 'topicIds',
      label: 'topicIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,ignoreEtagOnlyChanges: {
      key: 'ignoreEtagOnlyChanges',
      label: 'ignoreEtagOnlyChanges',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};