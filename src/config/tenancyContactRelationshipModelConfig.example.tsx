import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyContactRelationshipModel } from '@/schemas/tenancyContactRelationshipModel.generated.tsx'

export const tenancyContactRelationshipModelConfig: ModelConfig<TenancyContactRelationshipModel> = {
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  guarantors: {
    key: 'guarantors',
    label: 'guarantors',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  references: {
    key: 'references',
    label: 'references',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
