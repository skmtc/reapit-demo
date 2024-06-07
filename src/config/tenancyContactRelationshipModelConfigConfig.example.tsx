import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyContactRelationshipModel } from '@/schemas/tenancyContactRelationshipModel.generated.tsx'

export const tenancyContactRelationshipModelConfig: ModelConfig<TenancyContactRelationshipModel> = {_links: {
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
,tenancyId: {
      key: 'tenancyId',
      label: 'tenancyId',
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
    }
,fromArchive: {
      key: 'fromArchive',
      label: 'fromArchive',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,guarantors: {
      key: 'guarantors',
      label: 'guarantors',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,references: {
      key: 'references',
      label: 'references',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};