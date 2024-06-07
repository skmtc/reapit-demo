import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { KeysModel } from '@/schemas/keysModel.generated.tsx'

export const keysModelConfig: ModelConfig<KeysModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,number: {
      key: 'number',
      label: 'number',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeId: {
      key: 'officeId',
      label: 'officeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,keysInSet: {
      key: 'keysInSet',
      label: 'keysInSet',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};