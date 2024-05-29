import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { LinkModel } from '@/schemas/index.ts'

export const linkModelConfig: ModelConfig2<LinkModel> = {
  href: {
    key: 'href',
    label: 'href',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
