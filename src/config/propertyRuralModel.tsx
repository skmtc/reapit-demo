import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertyRuralModel } from '@/schemas/index.ts'

export const propertyRuralModelConfig: ModelConfig<PropertyRuralModel> = {
  tenureId: {
    key: 'tenureId',
    label: 'tenureId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  buildingsDescription: {
    key: 'buildingsDescription',
    label: 'buildingsDescription',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  landDescription: {
    key: 'landDescription',
    label: 'landDescription',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
