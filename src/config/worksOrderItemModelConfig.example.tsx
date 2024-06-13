import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

export const worksOrderItemModelConfig: ModelConfig<WorksOrderItemModel> = {
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: null,
    placeholder: '_links',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: null,
    placeholder: '_embedded',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    placeholder: 'id',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  worksOrderId: {
    key: 'worksOrderId',
    label: 'worksOrderId',
    defaultValue: '',
    placeholder: 'worksOrderId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    placeholder: 'created',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    placeholder: 'modified',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
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
  grossAmount: {
    key: 'grossAmount',
    label: 'grossAmount',
    defaultValue: null,
    placeholder: 'grossAmount',
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
  nominalAccountId: {
    key: 'nominalAccountId',
    label: 'nominalAccountId',
    defaultValue: '',
    placeholder: 'nominalAccountId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    defaultValue: '',
    placeholder: '_eTag',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
