import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateWorksOrderModel } from '@/schemas/createWorksOrderModel.generated.tsx'

export const createWorksOrderModelConfig: ModelConfig<CreateWorksOrderModel> = {companyId: {
      key: 'companyId',
      label: 'companyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,tenancyId: {
      key: 'tenancyId',
      label: 'tenancyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,reporter: {
      key: 'reporter',
      label: 'reporter',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,priority: {
      key: 'priority',
      label: 'priority',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,booked: {
      key: 'booked',
      label: 'booked',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,required: {
      key: 'required',
      label: 'required',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,completed: {
      key: 'completed',
      label: 'completed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,items: {
      key: 'items',
      label: 'items',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};