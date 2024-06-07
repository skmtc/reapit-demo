import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateEnquiryModel } from '@/schemas/updateEnquiryModel.generated.tsx'

export const updateEnquiryModelConfig: ModelConfig<UpdateEnquiryModel> = {applicantId: {
      key: 'applicantId',
      label: 'applicantId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};