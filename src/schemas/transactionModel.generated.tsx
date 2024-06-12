import { LinkModel, linkModel } from '@/schemas/linkModel.generated.tsx'
import { z } from 'zod'

export type TransactionModel =
  /** Model representing a transaction */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the transaction */ string | null | undefined
    created?: /** The date and time when the transaction was created */ string | null | undefined
    modified?: /** The date and time when the transaction was last modified */ string | null | undefined
    category?:
      | /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
      string
      | null
      | undefined
    type?:
      | /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
      string
      | null
      | undefined
    transactionType?: /** The type of transaction (credit/debit) */ string | null | undefined
    description?: /** The transaction description */ string | null | undefined
    status?:
      | /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
      string
      | null
      | undefined
    ledger?: /** The ledger the transaction is recorded in */ string | null | undefined
    netAmount?: /** The transaction net amount */ number | null | undefined
    taxAmount?: /** The transaction tax amount */ number | null | undefined
    grossAmount?: /** The transaction gross amount */ number | null | undefined
    outstanding?: /** The amount outstanding that remains to be paid */ number | null | undefined
    companyId?:
      | /** The unique identifier of the company the transaction is associated with, where applicable */
      string
      | null
      | undefined
    landlordId?:
      | /** The unique identifier of the landlord the transaction is associated with, where applicable */
      string
      | null
      | undefined
    propertyId?:
      | /** The unique identifier of the property the transaction is associated with, where applicable */
      string
      | null
      | undefined
    tenancyId?:
      | /** The unique identifier of the tenancy the transaction is associated with, where applicable */
      string
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the transaction. Used for managing update concurrency */
      string
      | null
      | undefined
  }
/** Model representing a transaction */
export const transactionModel =
  /** Model representing a transaction */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the transaction */ id: z.string().optional().nullable(),
    /** The date and time when the transaction was created */ created: z.string().optional().nullable(),
    /** The date and time when the transaction was last modified */ modified: z.string().optional().nullable(),
    /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
    category: z.string().optional().nullable(),
    /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
    type: z.string().optional().nullable(),
    /** The type of transaction (credit/debit) */ transactionType: z.string().optional().nullable(),
    /** The transaction description */ description: z.string().optional().nullable(),
    /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
    status: z.string().optional().nullable(),
    /** The ledger the transaction is recorded in */ ledger: z.string().optional().nullable(),
    /** The transaction net amount */ netAmount: z.number().optional().nullable(),
    /** The transaction tax amount */ taxAmount: z.number().optional().nullable(),
    /** The transaction gross amount */ grossAmount: z.number().optional().nullable(),
    /** The amount outstanding that remains to be paid */ outstanding: z.number().optional().nullable(),
    /** The unique identifier of the company the transaction is associated with, where applicable */
    companyId: z.string().optional().nullable(),
    /** The unique identifier of the landlord the transaction is associated with, where applicable */
    landlordId: z.string().optional().nullable(),
    /** The unique identifier of the property the transaction is associated with, where applicable */
    propertyId: z.string().optional().nullable(),
    /** The unique identifier of the tenancy the transaction is associated with, where applicable */
    tenancyId: z.string().optional().nullable(),
    /** The ETag for the current version of the transaction. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
