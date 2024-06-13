import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyBreakClauseModel } from '@/schemas/createTenancyBreakClauseModel.generated.tsx'

export const createTenancyBreakClauseModelConfig: ModelConfig<CreateTenancyBreakClauseModel> = {
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
  active: {
    key: 'active',
    label: 'active',
    defaultValue: '',
    placeholder: 'active',
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
  breakFrom: {
    key: 'breakFrom',
    label: 'breakFrom',
    defaultValue: null,
    placeholder: 'breakFrom',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  noticeRequired: {
    key: 'noticeRequired',
    label: 'noticeRequired',
    defaultValue: null,
    placeholder: 'noticeRequired',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
