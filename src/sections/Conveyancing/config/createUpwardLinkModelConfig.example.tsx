import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'

export const createUpwardLinkModelConfig: ModelConfig<CreateUpwardLinkModel> = {
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
  vendor: {
    key: 'vendor',
    label: 'vendor',
    defaultValue: '',
    placeholder: 'vendor',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  vendorSolicitorId: {
    key: 'vendorSolicitorId',
    label: 'vendorSolicitorId',
    defaultValue: '',
    placeholder: 'vendorSolicitorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
