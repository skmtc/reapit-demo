import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'

export const createTenancyRenewalModelConfig: ModelConfig<CreateTenancyRenewalModel> = {
  startDate: {
    key: 'startDate',
    label: 'startDate',
    defaultValue: '',
    placeholder: 'startDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  endDate: {
    key: 'endDate',
    label: 'endDate',
    defaultValue: '',
    placeholder: 'endDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    placeholder: 'negotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  rent: {
    key: 'rent',
    label: 'rent',
    defaultValue: null,
    placeholder: 'rent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    defaultValue: '',
    placeholder: 'rentFrequency',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lettingFee: {
    key: 'lettingFee',
    label: 'lettingFee',
    defaultValue: null,
    placeholder: 'lettingFee',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  managementFee: {
    key: 'managementFee',
    label: 'managementFee',
    defaultValue: null,
    placeholder: 'managementFee',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
