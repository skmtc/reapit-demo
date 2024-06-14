import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'

export const createWorksOrderItemModelConfig: ModelConfig<CreateWorksOrderItemModel> = {
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    placeholder: 'notes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  chargeTo: {
    key: 'chargeTo',
    label: 'chargeTo',
    defaultValue: '',
    placeholder: 'chargeTo',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  estimate: {
    key: 'estimate',
    label: 'estimate',
    defaultValue: null,
    placeholder: 'estimate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  estimateType: {
    key: 'estimateType',
    label: 'estimateType',
    defaultValue: '',
    placeholder: 'estimateType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    defaultValue: null,
    placeholder: 'netAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  vatAmount: {
    key: 'vatAmount',
    label: 'vatAmount',
    defaultValue: null,
    placeholder: 'vatAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  reserveAmount: {
    key: 'reserveAmount',
    label: 'reserveAmount',
    defaultValue: null,
    placeholder: 'reserveAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
}
