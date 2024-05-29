import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertySharedOwnershipModel } from '@/schemas/index.ts'

export const propertySharedOwnershipModelConfig: ModelConfig<PropertySharedOwnershipModel> = {
  sharedPercentage: {
    key: 'sharedPercentage',
    label: 'sharedPercentage',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rent: {
    key: 'rent',
    label: 'rent',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
