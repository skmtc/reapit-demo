import { z } from 'zod'

/** Model representing a transaction */
export const transactionModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
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
