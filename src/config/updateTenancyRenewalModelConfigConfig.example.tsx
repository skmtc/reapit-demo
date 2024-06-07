import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateTenancyRenewalModel } from '@/schemas/updateTenancyRenewalModel.generated.tsx'

export const updateTenancyRenewalModelConfig: ModelConfig<UpdateTenancyRenewalModel> = {startDate: {
      key: 'startDate',
      label: 'startDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,endDate: {
      key: 'endDate',
      label: 'endDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rent: {
      key: 'rent',
      label: 'rent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentFrequency: {
      key: 'rentFrequency',
      label: 'rentFrequency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,lettingFee: {
      key: 'lettingFee',
      label: 'lettingFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,managementFee: {
      key: 'managementFee',
      label: 'managementFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};