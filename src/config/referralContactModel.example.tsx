import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ReferralContactModel } from 'schemas/index.ts'

export const ReferralContactModel = export const referralContactModelConfig: ModelConfig<ReferralContactModel> = {id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,title: {
      key: 'title',
      label: 'title',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,forename: {
      key: 'forename',
      label: 'forename',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,surname: {
      key: 'surname',
      label: 'surname',
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
    }};