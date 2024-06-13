import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { Switch } from '@/inputs/Switch.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateTenancyModel } from '@/schemas/createTenancyModel.generated.tsx'

export const createTenancyModelConfig: ModelConfig<CreateTenancyModel> = {
  startDate: {
    key: 'startDate',
    label: 'startDate',
    defaultValue: '',
    placeholder: 'startDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  endDate: {
    key: 'endDate',
    label: 'endDate',
    defaultValue: '',
    placeholder: 'endDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  status: {
    key: 'status',
    label: 'status',
    defaultValue: '',
    placeholder: 'status',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  agentRole: {
    key: 'agentRole',
    label: 'agentRole',
    defaultValue: '',
    placeholder: 'agentRole',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  rent: {
    key: 'rent',
    label: 'rent',
    defaultValue: null,
    placeholder: 'rent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  rentFrequency: {
    key: 'rentFrequency',
    label: 'rentFrequency',
    defaultValue: '',
    placeholder: 'rentFrequency',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  rentInstalmentsFrequency: {
    key: 'rentInstalmentsFrequency',
    label: 'rentInstalmentsFrequency',
    defaultValue: '',
    placeholder: 'rentInstalmentsFrequency',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  rentInstalmentsAmount: {
    key: 'rentInstalmentsAmount',
    label: 'rentInstalmentsAmount',
    defaultValue: null,
    placeholder: 'rentInstalmentsAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  rentInstalmentsStart: {
    key: 'rentInstalmentsStart',
    label: 'rentInstalmentsStart',
    defaultValue: '',
    placeholder: 'rentInstalmentsStart',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingGas: {
    key: 'meterReadingGas',
    label: 'meterReadingGas',
    defaultValue: '',
    placeholder: 'meterReadingGas',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingGasLastRead: {
    key: 'meterReadingGasLastRead',
    label: 'meterReadingGasLastRead',
    defaultValue: '',
    placeholder: 'meterReadingGasLastRead',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingElectricity: {
    key: 'meterReadingElectricity',
    label: 'meterReadingElectricity',
    defaultValue: '',
    placeholder: 'meterReadingElectricity',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingElectricityLastRead: {
    key: 'meterReadingElectricityLastRead',
    label: 'meterReadingElectricityLastRead',
    defaultValue: '',
    placeholder: 'meterReadingElectricityLastRead',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingWater: {
    key: 'meterReadingWater',
    label: 'meterReadingWater',
    defaultValue: '',
    placeholder: 'meterReadingWater',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  meterReadingWaterLastRead: {
    key: 'meterReadingWaterLastRead',
    label: 'meterReadingWaterLastRead',
    defaultValue: '',
    placeholder: 'meterReadingWaterLastRead',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  isPeriodic: {
    key: 'isPeriodic',
    label: 'isPeriodic',
    defaultValue: false,
    placeholder: 'isPeriodic',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  typeId: {
    key: 'typeId',
    label: 'typeId',
    defaultValue: '',
    placeholder: 'typeId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    placeholder: 'negotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  propertyId: {
    key: 'propertyId',
    label: 'propertyId',
    defaultValue: '',
    placeholder: 'propertyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  applicantId: {
    key: 'applicantId',
    label: 'applicantId',
    defaultValue: '',
    placeholder: 'applicantId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  feeNotes: {
    key: 'feeNotes',
    label: 'feeNotes',
    defaultValue: '',
    placeholder: 'feeNotes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lettingFee: {
    key: 'lettingFee',
    label: 'lettingFee',
    defaultValue: null,
    placeholder: 'lettingFee',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  managementFee: {
    key: 'managementFee',
    label: 'managementFee',
    defaultValue: null,
    placeholder: 'managementFee',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  deposit: {
    key: 'deposit',
    label: 'deposit',
    defaultValue: null,
    placeholder: 'deposit',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  source: {
    key: 'source',
    label: 'source',
    defaultValue: null,
    placeholder: 'source',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
