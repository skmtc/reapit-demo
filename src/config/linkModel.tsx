import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { LinkModel } from '@/schemas/index.ts'

export const linkModelConfig: ModelConfig<LinkModel> = {
  href: {
    key: 'href',
    label: 'href',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
