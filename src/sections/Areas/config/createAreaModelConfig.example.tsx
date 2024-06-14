import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateAreaModel } from '@/schemas/createAreaModel.generated.tsx'

export const createAreaModelConfig: ModelConfig<CreateAreaModel> = {
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
  area: {
    key: 'area',
    label: 'area',
    defaultValue: [],
    placeholder: 'area',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  departmentIds: {
    key: 'departmentIds',
    label: 'departmentIds',
    defaultValue: [],
    placeholder: 'departmentIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    placeholder: 'officeIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parentId: {
    key: 'parentId',
    label: 'parentId',
    defaultValue: '',
    placeholder: 'parentId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
