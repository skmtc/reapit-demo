import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { InvoiceDetailModel } from 'schemas/index.ts'

export const InvoiceDetailModel = export const invoiceDetailModelConfig: ModelConfig<InvoiceDetailModel> = {id: {
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
,reference: {
      key: 'reference',
      label: 'reference',
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
,description: {
      key: 'description',
      label: 'description',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,status: {
      key: 'status',
      label: 'status',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,date: {
      key: 'date',
      label: 'date',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,dueDate: {
      key: 'dueDate',
      label: 'dueDate',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,isRaised: {
      key: 'isRaised',
      label: 'isRaised',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,netAmount: {
      key: 'netAmount',
      label: 'netAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,vatAmount: {
      key: 'vatAmount',
      label: 'vatAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,outstandingAmount: {
      key: 'outstandingAmount',
      label: 'outstandingAmount',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,charges: {
      key: 'charges',
      label: 'charges',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,credits: {
      key: 'credits',
      label: 'credits',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,payments: {
      key: 'payments',
      label: 'payments',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_links: {
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
    }};