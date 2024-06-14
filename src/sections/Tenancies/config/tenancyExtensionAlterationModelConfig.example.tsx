import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { TenancyExtensionAlterationModel } from '@/schemas/tenancyExtensionAlterationModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const tenancyExtensionAlterationModelConfig: ModelConfig<TenancyExtensionAlterationModel> = {
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
  type: {
    key: 'type',
    label: 'type',
    defaultValue: '',
    placeholder: 'type',
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
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    defaultValue: '',
    placeholder: 'tenancyId',
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
