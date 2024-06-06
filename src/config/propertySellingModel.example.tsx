import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { PropertySellingModel } from 'schemas/index.ts'

export const PropertySellingModel = export const propertySellingModelConfig: ModelConfig<PropertySellingModel> = {instructed: {
      key: 'instructed',
      label: 'instructed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,price: {
      key: 'price',
      label: 'price',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,priceTo: {
      key: 'priceTo',
      label: 'priceTo',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,reservationFee: {
      key: 'reservationFee',
      label: 'reservationFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,qualifier: {
      key: 'qualifier',
      label: 'qualifier',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,disposal: {
      key: 'disposal',
      label: 'disposal',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,completed: {
      key: 'completed',
      label: 'completed',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchanged: {
      key: 'exchanged',
      label: 'exchanged',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,accountPaid: {
      key: 'accountPaid',
      label: 'accountPaid',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,tenure: {
      key: 'tenure',
      label: 'tenure',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vendorId: {
      key: 'vendorId',
      label: 'vendorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agency: {
      key: 'agency',
      label: 'agency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agencyId: {
      key: 'agencyId',
      label: 'agencyId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,agreementExpiry: {
      key: 'agreementExpiry',
      label: 'agreementExpiry',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fee: {
      key: 'fee',
      label: 'fee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchangedCompanyFee: {
      key: 'exchangedCompanyFee',
      label: 'exchangedCompanyFee',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,recommendedPrice: {
      key: 'recommendedPrice',
      label: 'recommendedPrice',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,valuationPrice: {
      key: 'valuationPrice',
      label: 'valuationPrice',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,brochureId: {
      key: 'brochureId',
      label: 'brochureId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,publicBrochureUrl: {
      key: 'publicBrochureUrl',
      label: 'publicBrochureUrl',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchangedPrice: {
      key: 'exchangedPrice',
      label: 'exchangedPrice',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,exchangedOfficeId: {
      key: 'exchangedOfficeId',
      label: 'exchangedOfficeId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,decoration: {
      key: 'decoration',
      label: 'decoration',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sharedOwnership: {
      key: 'sharedOwnership',
      label: 'sharedOwnership',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,subAgentTerms: {
      key: 'subAgentTerms',
      label: 'subAgentTerms',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};