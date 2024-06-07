import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyModel } from '@/schemas/tenancyModel.generated.tsx'

export const tenancyModelConfig: ModelConfig<TenancyModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,startDate: {
      key: 'startDate',
      label: 'startDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,endDate: {
      key: 'endDate',
      label: 'endDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agentRole: {
      key: 'agentRole',
      label: 'agentRole',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rent: {
      key: 'rent',
      label: 'rent',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentFrequency: {
      key: 'rentFrequency',
      label: 'rentFrequency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,endDateConfirmed: {
      key: 'endDateConfirmed',
      label: 'endDateConfirmed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isPeriodic: {
      key: 'isPeriodic',
      label: 'isPeriodic',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentInstalmentsFrequency: {
      key: 'rentInstalmentsFrequency',
      label: 'rentInstalmentsFrequency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentInstalmentsAmount: {
      key: 'rentInstalmentsAmount',
      label: 'rentInstalmentsAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,rentInstalmentsStart: {
      key: 'rentInstalmentsStart',
      label: 'rentInstalmentsStart',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingGas: {
      key: 'meterReadingGas',
      label: 'meterReadingGas',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingGasLastRead: {
      key: 'meterReadingGasLastRead',
      label: 'meterReadingGasLastRead',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingElectricity: {
      key: 'meterReadingElectricity',
      label: 'meterReadingElectricity',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingElectricityLastRead: {
      key: 'meterReadingElectricityLastRead',
      label: 'meterReadingElectricityLastRead',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingWater: {
      key: 'meterReadingWater',
      label: 'meterReadingWater',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,meterReadingWaterLastRead: {
      key: 'meterReadingWaterLastRead',
      label: 'meterReadingWaterLastRead',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,typeId: {
      key: 'typeId',
      label: 'typeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorId: {
      key: 'negotiatorId',
      label: 'negotiatorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,propertyId: {
      key: 'propertyId',
      label: 'propertyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,applicantId: {
      key: 'applicantId',
      label: 'applicantId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,managerId: {
      key: 'managerId',
      label: 'managerId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,groupPaymentReference: {
      key: 'groupPaymentReference',
      label: 'groupPaymentReference',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,lettingFee: {
      key: 'lettingFee',
      label: 'lettingFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,managementFee: {
      key: 'managementFee',
      label: 'managementFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,source: {
      key: 'source',
      label: 'source',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,deposit: {
      key: 'deposit',
      label: 'deposit',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,related: {
      key: 'related',
      label: 'related',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fromArchive: {
      key: 'fromArchive',
      label: 'fromArchive',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,feeNotes: {
      key: 'feeNotes',
      label: 'feeNotes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,legalStatusId: {
      key: 'legalStatusId',
      label: 'legalStatusId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,renewalOptions: {
      key: 'renewalOptions',
      label: 'renewalOptions',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,arrears: {
      key: 'arrears',
      label: 'arrears',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};