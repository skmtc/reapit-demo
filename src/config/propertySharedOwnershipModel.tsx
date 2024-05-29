import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PropertySharedOwnershipModel } from '@/schemas/index.ts'

export const propertySharedOwnershipModelConfig: ModelConfig2<PropertySharedOwnershipModel> = {
  sharedPercentage: {
    key: 'sharedPercentage',
    label: 'sharedPercentage',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rent: {
    key: 'rent',
    label: 'rent',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
