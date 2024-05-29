import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertVendorContactRelationshipModel } from '@/schemas/index.ts'

export const insertVendorContactRelationshipModelConfig: ModelConfig<InsertVendorContactRelationshipModel> = {
  associatedId: {
    key: 'associatedId',
    label: 'associatedId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  associatedType: {
    key: 'associatedType',
    label: 'associatedType',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  isMain: {
    key: 'isMain',
    label: 'isMain',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}