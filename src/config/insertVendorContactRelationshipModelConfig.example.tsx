import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertVendorContactRelationshipModel } from '@/schemas/insertVendorContactRelationshipModel.generated.tsx'

export const insertVendorContactRelationshipModelConfig: ModelConfig<InsertVendorContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
