import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyEpcModel } from '@/schemas/index.ts'

export const propertyEpcModelConfig: ModelConfig<PropertyEpcModel> = {
  exempt: {
    key: 'exempt',
    label: 'exempt',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eer: {
    key: 'eer',
    label: 'eer',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eerRating: {
    key: 'eerRating',
    label: 'eerRating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eerPotential: {
    key: 'eerPotential',
    label: 'eerPotential',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eerPotentialRating: {
    key: 'eerPotentialRating',
    label: 'eerPotentialRating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eir: {
    key: 'eir',
    label: 'eir',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eirRating: {
    key: 'eirRating',
    label: 'eirRating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eirPotential: {
    key: 'eirPotential',
    label: 'eirPotential',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  eirPotentialRating: {
    key: 'eirPotentialRating',
    label: 'eirPotentialRating',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  fullDocumentUrl: {
    key: 'fullDocumentUrl',
    label: 'fullDocumentUrl',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  firstPageDocumentUrl: {
    key: 'firstPageDocumentUrl',
    label: 'firstPageDocumentUrl',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
