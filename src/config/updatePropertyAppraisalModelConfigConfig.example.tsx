import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdatePropertyAppraisalModel } from '@/schemas/updatePropertyAppraisalModel.generated.tsx'

export const updatePropertyAppraisalModelConfig: ModelConfig<UpdatePropertyAppraisalModel> = {companyId: {
      key: 'companyId',
      label: 'companyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,date: {
      key: 'date',
      label: 'date',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,price: {
      key: 'price',
      label: 'price',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fee: {
      key: 'fee',
      label: 'fee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};