import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'

export const createDownwardLinkModelConfig: ModelConfig<CreateDownwardLinkModel> = {
  offerId: {
    key: 'offerId',
    label: 'offerId',
    defaultValue: '',
    placeholder: 'offerId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  propertyAddress: {
    key: 'propertyAddress',
    label: 'propertyAddress',
    defaultValue: '',
    placeholder: 'propertyAddress',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  agent: {
    key: 'agent',
    label: 'agent',
    defaultValue: '',
    placeholder: 'agent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buyer: {
    key: 'buyer',
    label: 'buyer',
    defaultValue: '',
    placeholder: 'buyer',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  buyerSolicitorId: {
    key: 'buyerSolicitorId',
    label: 'buyerSolicitorId',
    defaultValue: '',
    placeholder: 'buyerSolicitorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
