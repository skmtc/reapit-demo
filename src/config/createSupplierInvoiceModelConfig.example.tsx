import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreateSupplierInvoiceModel } from '@/schemas/createSupplierInvoiceModel.generated.tsx'

export const createSupplierInvoiceModelConfig: ModelConfig<CreateSupplierInvoiceModel> = {
  worksOrderId: {
    key: 'worksOrderId',
    label: 'worksOrderId',
    defaultValue: '',
    placeholder: 'worksOrderId',
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
  companyId: {
    key: 'companyId',
    label: 'companyId',
    defaultValue: '',
    placeholder: 'companyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    defaultValue: '',
    placeholder: 'tenancyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    placeholder: 'description',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  accountId: {
    key: 'accountId',
    label: 'accountId',
    defaultValue: '',
    placeholder: 'accountId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  invoiceRef: {
    key: 'invoiceRef',
    label: 'invoiceRef',
    defaultValue: '',
    placeholder: 'invoiceRef',
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
  invoiceDate: {
    key: 'invoiceDate',
    label: 'invoiceDate',
    defaultValue: '',
    placeholder: 'invoiceDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  dueDate: {
    key: 'dueDate',
    label: 'dueDate',
    defaultValue: '',
    placeholder: 'dueDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  netAmount: {
    key: 'netAmount',
    label: 'netAmount',
    defaultValue: null,
    placeholder: 'netAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  taxAmount: {
    key: 'taxAmount',
    label: 'taxAmount',
    defaultValue: null,
    placeholder: 'taxAmount',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
}
