import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { UtilityModel } from '@/schemas/index.ts'

export const utilityModelConfig: ModelConfig<UtilityModel> = {
  hasGas: {
    key: 'hasGas',
    label: 'hasGas',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  gasCompanyId: {
    key: 'gasCompanyId',
    label: 'gasCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  gasMeterPoint: {
    key: 'gasMeterPoint',
    label: 'gasMeterPoint',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  electricityCompanyId: {
    key: 'electricityCompanyId',
    label: 'electricityCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  electricityMeterPoint: {
    key: 'electricityMeterPoint',
    label: 'electricityMeterPoint',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  waterCompanyId: {
    key: 'waterCompanyId',
    label: 'waterCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  waterMeterPoint: {
    key: 'waterMeterPoint',
    label: 'waterMeterPoint',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  telephoneCompanyId: {
    key: 'telephoneCompanyId',
    label: 'telephoneCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  internetCompanyId: {
    key: 'internetCompanyId',
    label: 'internetCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  cableTvCompanyId: {
    key: 'cableTvCompanyId',
    label: 'cableTvCompanyId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
