import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateTransactionsSupplierInvoices } from '@/forms/transactions.generated.tsx'
import { CreateSupplierInvoiceModel } from '@/schemas/index.ts'
import { supplierInvoiceModelConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreateSupplierInvoiceModel>({
  worksOrderId: true,
  propertyId: true,
  companyId: true,
  tenancyId: true,
  description: true,
  accountId: true,
  invoiceRef: true,
  negotiatorId: true,
  invoiceDate: true,
  dueDate: true,
  netAmount: true,
  taxAmount: true,
})

export const CreateTransactionsSupplierInvoicesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new supplierInvoice" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTransactionsSupplierInvoices>
          <CreateTransactionsSupplierInvoicesFields />
        </CreateTransactionsSupplierInvoices>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTransactionsSupplierInvoicesFields = () => {
  const formConfig = supplierInvoiceModelConfig as ModelConfig<CreateSupplierInvoiceModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
