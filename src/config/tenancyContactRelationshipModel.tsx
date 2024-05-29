import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyContactRelationshipModel } from '@/schemas/index.ts'

export const tenancyContactRelationshipModelConfig: ModelConfig<TenancyContactRelationshipModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  guarantors: {
    key: 'guarantors',
    label: 'guarantors',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  references: {
    key: 'references',
    label: 'references',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}