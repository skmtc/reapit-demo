import { z } from 'zod'
import { linkModel, LinkModel } from '@/models/linkModel.ts'

/** Model representing a transaction */
export const transactionModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the transaction */ id: z.string().nullable().optional(),
  /** The date and time when the transaction was created */ created: z.string().nullable().optional(),
  /** The date and time when the transaction was last modified */ modified: z.string().nullable().optional(),
  /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
  category: z.string().nullable().optional(),
  /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
  type: z.string().nullable().optional(),
  /** The type of transaction (credit/debit) */ transactionType: z.string().nullable().optional(),
  /** The transaction description */ description: z.string().nullable().optional(),
  /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
  status: z.string().nullable().optional(),
  /** The ledger the transaction is recorded in */ ledger: z.string().nullable().optional(),
  /** The transaction net amount */ netAmount: z.number().nullable().optional(),
  /** The transaction tax amount */ taxAmount: z.number().nullable().optional(),
  /** The transaction gross amount */ grossAmount: z.number().nullable().optional(),
  /** The amount outstanding that remains to be paid */ outstanding: z.number().nullable().optional(),
  /** The unique identifier of the company the transaction is associated with, where applicable */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the landlord the transaction is associated with, where applicable */
  landlordId: z.string().nullable().optional(),
  /** The unique identifier of the property the transaction is associated with, where applicable */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the transaction is associated with, where applicable */
  tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the transaction. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Model representing a transaction */
export type TransactionModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the transaction */ string | undefined
  created?: /** The date and time when the transaction was created */ string | undefined
  modified?: /** The date and time when the transaction was last modified */ string | undefined
  category?: /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
  string | undefined
  type?: /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
  string | undefined
  transactionType?: /** The type of transaction (credit/debit) */ string | undefined
  description?: /** The transaction description */ string | undefined
  status?: /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
  string | undefined
  ledger?: /** The ledger the transaction is recorded in */ string | undefined
  netAmount?: /** The transaction net amount */ number | undefined
  taxAmount?: /** The transaction tax amount */ number | undefined
  grossAmount?: /** The transaction gross amount */ number | undefined
  outstanding?: /** The amount outstanding that remains to be paid */ number | undefined
  companyId?: /** The unique identifier of the company the transaction is associated with, where applicable */
  string | undefined
  landlordId?: /** The unique identifier of the landlord the transaction is associated with, where applicable */
  string | undefined
  propertyId?: /** The unique identifier of the property the transaction is associated with, where applicable */
  string | undefined
  tenancyId?: /** The unique identifier of the tenancy the transaction is associated with, where applicable */
  string | undefined
  _eTag?: /** The ETag for the current version of the transaction. Used for managing update concurrency */
  string | undefined
}
