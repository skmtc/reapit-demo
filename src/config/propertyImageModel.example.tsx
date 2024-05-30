import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyImageModel } from '@/schemas/index.ts'

export const propertyImageModelConfig: ModelConfig<PropertyImageModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  url: {
    key: 'url',
    label: 'url',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  caption: {
    key: 'caption',
    label: 'caption',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  order: {
    key: 'order',
    label: 'order',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
