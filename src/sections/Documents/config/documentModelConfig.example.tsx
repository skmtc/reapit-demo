import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { DocumentModel } from '@/schemas/documentModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const documentModelConfig: ModelConfig<DocumentModel> = {
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
  isPrivate: {
    key: 'isPrivate',
    label: 'isPrivate',
    defaultValue: false,
    placeholder: 'isPrivate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
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
  name: {
    key: 'name',
    label: 'name',
    defaultValue: '',
    placeholder: 'name',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
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
