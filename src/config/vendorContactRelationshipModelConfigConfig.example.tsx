import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { VendorContactRelationshipModel } from '@/schemas/vendorContactRelationshipModel.generated.tsx'

export const vendorContactRelationshipModelConfig: ModelConfig<VendorContactRelationshipModel> = {_links: {
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
,vendorId: {
      key: 'vendorId',
      label: 'vendorId',
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
,associatedType: {
      key: 'associatedType',
      label: 'associatedType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,associatedId: {
      key: 'associatedId',
      label: 'associatedId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isMain: {
      key: 'isMain',
      label: 'isMain',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};