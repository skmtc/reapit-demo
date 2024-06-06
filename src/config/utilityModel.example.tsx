import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UtilityModel } from 'schemas/index.ts'

export const UtilityModel = export const utilityModelConfig: ModelConfig<UtilityModel> = {hasGas: {
      key: 'hasGas',
      label: 'hasGas',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,gasCompanyId: {
      key: 'gasCompanyId',
      label: 'gasCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,gasMeterPoint: {
      key: 'gasMeterPoint',
      label: 'gasMeterPoint',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,electricityCompanyId: {
      key: 'electricityCompanyId',
      label: 'electricityCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,electricityMeterPoint: {
      key: 'electricityMeterPoint',
      label: 'electricityMeterPoint',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,waterCompanyId: {
      key: 'waterCompanyId',
      label: 'waterCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,waterMeterPoint: {
      key: 'waterMeterPoint',
      label: 'waterMeterPoint',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,telephoneCompanyId: {
      key: 'telephoneCompanyId',
      label: 'telephoneCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,internetCompanyId: {
      key: 'internetCompanyId',
      label: 'internetCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,cableTvCompanyId: {
      key: 'cableTvCompanyId',
      label: 'cableTvCompanyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};