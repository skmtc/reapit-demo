import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyAppraisalModel } from '@/schemas/createPropertyAppraisalModel.generated.tsx'

export const createPropertyAppraisalModelConfig: ModelConfig<CreatePropertyAppraisalModel> = {
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
}
