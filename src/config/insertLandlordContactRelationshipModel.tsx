import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InsertLandlordContactRelationshipModel } from '@/schemas/index.ts'

export const insertLandlordContactRelationshipModelConfig: ModelConfig<InsertLandlordContactRelationshipModel> = {
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