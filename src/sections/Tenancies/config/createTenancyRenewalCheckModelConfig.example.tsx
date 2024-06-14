import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyRenewalCheckModel } from '@/schemas/createTenancyRenewalCheckModel.generated.tsx'

export const createTenancyRenewalCheckModelConfig: ModelConfig<CreateTenancyRenewalCheckModel> = {
  status: {
    key: 'status',
    label: 'status',
    defaultValue: '',
    placeholder: 'status',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  checkTypeId: {
    key: 'checkTypeId',
    label: 'checkTypeId',
    defaultValue: '',
    placeholder: 'checkTypeId',
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
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
