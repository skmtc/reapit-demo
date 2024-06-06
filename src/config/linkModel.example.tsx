import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { LinkModel } from 'schemas/index.ts'

export const LinkModel = export const linkModelConfig: ModelConfig<LinkModel> = {href: {
      key: 'href',
      label: 'href',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};