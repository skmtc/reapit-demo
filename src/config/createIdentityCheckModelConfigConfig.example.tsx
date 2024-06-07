import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateIdentityCheckModel } from '@/schemas/createIdentityCheckModel.generated.tsx'

export const createIdentityCheckModelConfig: ModelConfig<CreateIdentityCheckModel> = {contactId: {
      key: 'contactId',
      label: 'contactId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,checkDate: {
      key: 'checkDate',
      label: 'checkDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,identityDocument1: {
      key: 'identityDocument1',
      label: 'identityDocument1',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,identityDocument2: {
      key: 'identityDocument2',
      label: 'identityDocument2',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};