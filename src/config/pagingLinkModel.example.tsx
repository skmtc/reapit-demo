import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PagingLinkModel } from 'schemas/index.ts'

export const PagingLinkModel = export const pagingLinkModelConfig: ModelConfig<PagingLinkModel> = {href: {
      key: 'href',
      label: 'href',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};