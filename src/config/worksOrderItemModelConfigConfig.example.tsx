import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { WorksOrderItemModel } from '@/schemas/worksOrderItemModel.generated.tsx'

export const worksOrderItemModelConfig: ModelConfig<WorksOrderItemModel> = {_links: {
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
,worksOrderId: {
      key: 'worksOrderId',
      label: 'worksOrderId',
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
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,chargeTo: {
      key: 'chargeTo',
      label: 'chargeTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,estimate: {
      key: 'estimate',
      label: 'estimate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,estimateType: {
      key: 'estimateType',
      label: 'estimateType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,netAmount: {
      key: 'netAmount',
      label: 'netAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vatAmount: {
      key: 'vatAmount',
      label: 'vatAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,grossAmount: {
      key: 'grossAmount',
      label: 'grossAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,reserveAmount: {
      key: 'reserveAmount',
      label: 'reserveAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,nominalAccountId: {
      key: 'nominalAccountId',
      label: 'nominalAccountId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};