import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { InsertVendorContactRelationshipModel } from '@/schemas/index.ts'

export const insertVendorContactRelationshipModelConfig: ModelConfig2<InsertVendorContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
