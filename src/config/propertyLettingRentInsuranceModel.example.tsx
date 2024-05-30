import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingRentInsuranceModel } from '@/schemas/index.ts'

export const propertyLettingRentInsuranceModelConfig: ModelConfig<PropertyLettingRentInsuranceModel> = {
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  referenceNumber: {
    key: 'referenceNumber',
    label: 'referenceNumber',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  start: {
    key: 'start',
    label: 'start',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  end: {
    key: 'end',
    label: 'end',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  cancelledReasonId: {
    key: 'cancelledReasonId',
    label: 'cancelledReasonId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  cancelledComment: {
    key: 'cancelledComment',
    label: 'cancelledComment',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  autoRenew: {
    key: 'autoRenew',
    label: 'autoRenew',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
