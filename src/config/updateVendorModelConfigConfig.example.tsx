import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UpdateVendorModel } from '@/schemas/updateVendorModel.generated.tsx'

export const updateVendorModelConfig: ModelConfig<UpdateVendorModel> = {lastCall: {
      key: 'lastCall',
      label: 'lastCall',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,nextCall: {
      key: 'nextCall',
      label: 'nextCall',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sellingReasonId: {
      key: 'sellingReasonId',
      label: 'sellingReasonId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,solicitorId: {
      key: 'solicitorId',
      label: 'solicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,correspondenceAddressType: {
      key: 'correspondenceAddressType',
      label: 'correspondenceAddressType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,source: {
      key: 'source',
      label: 'source',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};