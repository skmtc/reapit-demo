import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantRentingModel } from '@/schemas/index.ts'

export const applicantRentingModelConfig: ModelConfig<ApplicantRentingModel> = {
  moveDate: {
    key: 'moveDate',
    label: 'moveDate',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  term: {
    key: 'term',
    label: 'term',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrom: {
    key: 'rentFrom',
    label: 'rentFrom',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentTo: {
    key: 'rentTo',
    label: 'rentTo',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  furnishing: {
    key: 'furnishing',
    label: 'furnishing',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  positionId: {
    key: 'positionId',
    label: 'positionId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
