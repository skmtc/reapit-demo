import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PagingLinkModel } from '@/schemas/index.ts'

export const pagingLinkModelConfig: ModelConfig<PagingLinkModel> = {
  href: {
    key: 'href',
    label: 'href',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
