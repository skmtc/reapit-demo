import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { RenewalOptionsModel } from '@/schemas/index.ts'

export const renewalOptionsModelConfig: ModelConfig<RenewalOptionsModel> = {
  optionId: {
    key: 'optionId',
    label: 'optionId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  optionText: {
    key: 'optionText',
    label: 'optionText',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  expiry: {
    key: 'expiry',
    label: 'expiry',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  conditionIds: {
    key: 'conditionIds',
    label: 'conditionIds',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
