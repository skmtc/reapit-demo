import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyLettingRentInsuranceModel } from '@/schemas/index.ts'

export const propertyLettingRentInsuranceModelConfig: ModelConfig<PropertyLettingRentInsuranceModel> = {
  status: {
    key: 'status',
    label: 'status',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  referenceNumber: {
    key: 'referenceNumber',
    label: 'referenceNumber',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  start: {
    key: 'start',
    label: 'start',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  end: {
    key: 'end',
    label: 'end',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  cancelledReasonId: {
    key: 'cancelledReasonId',
    label: 'cancelledReasonId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  cancelledComment: {
    key: 'cancelledComment',
    label: 'cancelledComment',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  autoRenew: {
    key: 'autoRenew',
    label: 'autoRenew',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
