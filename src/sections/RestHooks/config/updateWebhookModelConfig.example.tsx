import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'

export const updateWebhookModelConfig: ModelConfig<UpdateWebhookModel> = {
  url: {
    key: 'url',
    label: 'url',
    defaultValue: '',
    placeholder: 'url',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    placeholder: 'description',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  topicIds: {
    key: 'topicIds',
    label: 'topicIds',
    defaultValue: [],
    placeholder: 'topicIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  active: {
    key: 'active',
    label: 'active',
    defaultValue: false,
    placeholder: 'active',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  ignoreEtagOnlyChanges: {
    key: 'ignoreEtagOnlyChanges',
    label: 'ignoreEtagOnlyChanges',
    defaultValue: false,
    placeholder: 'ignoreEtagOnlyChanges',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
}
