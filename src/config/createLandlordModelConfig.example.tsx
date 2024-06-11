import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateLandlordModel } from '@/schemas/createLandlordModel.generated.tsx'

export const createLandlordModelConfig: ModelConfig<CreateLandlordModel> = {
  active: {
    key: 'active',
    label: 'active',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  solicitorId: {
    key: 'solicitorId',
    label: 'solicitorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeId: {
    key: 'officeId',
    label: 'officeId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  source: {
    key: 'source',
    label: 'source',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  related: {
    key: 'related',
    label: 'related',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
