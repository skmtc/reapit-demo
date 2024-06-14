import { CreateTransactionsSupplierInvoices } from '@/sections/Transactions/forms/CreateTransactionsSupplierInvoices.generated.tsx'
import { createSupplierInvoiceModelConfig } from '@/sections/Transactions/config/createSupplierInvoiceModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateSupplierInvoiceModel } from '@/schemas/createSupplierInvoiceModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateSupplierInvoiceModel>({
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
    <Drawer title="Create new CreateSupplierInvoiceModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTransactionsSupplierInvoices>
          <CreateTransactionsSupplierInvoicesFields />
        </CreateTransactionsSupplierInvoices>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTransactionsSupplierInvoicesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createSupplierInvoiceModelConfig[fieldName]} />
    ))}
  </>
)
