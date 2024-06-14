import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertVendorContactRelationshipModel } from '@/schemas/insertVendorContactRelationshipModel.generated.tsx'

export const insertVendorContactRelationshipModelConfig: ModelConfig<InsertVendorContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    defaultValue: '',
    placeholder: 'associatedId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    defaultValue: '',
    placeholder: 'associatedType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    defaultValue: false,
    placeholder: 'isMain',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
}
