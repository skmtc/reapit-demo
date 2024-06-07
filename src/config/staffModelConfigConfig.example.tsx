import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { StaffModel } from '@/schemas/staffModel.generated.tsx'

export const staffModelConfig: ModelConfig<StaffModel> = {name: {
      key: 'name',
      label: 'name',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,jobTitle: {
      key: 'jobTitle',
      label: 'jobTitle',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,workPhone: {
      key: 'workPhone',
      label: 'workPhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,mobilePhone: {
      key: 'mobilePhone',
      label: 'mobilePhone',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,email: {
      key: 'email',
      label: 'email',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,salutation: {
      key: 'salutation',
      label: 'salutation',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};