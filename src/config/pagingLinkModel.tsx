import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { PagingLinkModel } from '@/schemas/index.ts'

export const pagingLinkModelConfig: ModelConfig2<PagingLinkModel> = {
  href: {
    key: 'href',
    label: 'href',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
