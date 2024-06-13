import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyResponsibilityModel } from '@/schemas/createTenancyResponsibilityModel.generated.tsx'

export const createTenancyResponsibilityModelConfig: ModelConfig<CreateTenancyResponsibilityModel> = {
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    placeholder: 'typeId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  appliesTo: {
    key: 'appliesTo',
    label: 'appliesTo',
    defaultValue: '',
    placeholder: 'appliesTo',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  agreements: {
    key: 'agreements',
    label: 'agreements',
    defaultValue: null,
    placeholder: 'agreements',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
