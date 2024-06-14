import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'

export const createPreSignedUrlsModelConfig: ModelConfig<CreatePreSignedUrlsModel> = {
  amount: {
    key: 'amount',
    label: 'amount',
    defaultValue: null,
    placeholder: 'amount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
