import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { PropertyAppraisalModel } from '@/schemas/propertyAppraisalModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const propertyAppraisalModelConfig: ModelConfig<PropertyAppraisalModel> = {
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
  companyId: {
    key: 'companyId',
    label: 'companyId',
    defaultValue: '',
    placeholder: 'companyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  isExternal: {
    key: 'isExternal',
    label: 'isExternal',
    defaultValue: false,
    placeholder: 'isExternal',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  date: {
    key: 'date',
    label: 'date',
    defaultValue: '',
    placeholder: 'date',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  price: {
    key: 'price',
    label: 'price',
    defaultValue: null,
    placeholder: 'price',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  fee: {
    key: 'fee',
    label: 'fee',
    defaultValue: null,
    placeholder: 'fee',
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
