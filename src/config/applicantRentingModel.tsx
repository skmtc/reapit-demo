import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantRentingModel } from '@/schemas/index.ts'

export const applicantRentingModelConfig: ModelConfig<ApplicantRentingModel> = {
  moveDate: {
    key: 'moveDate',
    label: 'moveDate',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  term: {
    key: 'term',
    label: 'term',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentFrom: {
    key: 'rentFrom',
    label: 'rentFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentTo: {
    key: 'rentTo',
    label: 'rentTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  furnishing: {
    key: 'furnishing',
    label: 'furnishing',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  positionId: {
    key: 'positionId',
    label: 'positionId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
