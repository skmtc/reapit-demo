import { z } from 'zod'

export const tenancyModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the tenancy */ id: z.string().nullable().optional(),
        /** The date and time when the tenancy was created */ created: z.string().nullable().optional(),
        /** The date and time when the tenancy was last modified */ modified: z.string().nullable().optional(),
        /** The start date of the tenancy */ startDate: z.string().nullable().optional(),
        /** The end date of the tenancy */ endDate: z.string().nullable().optional(),
        /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
        status: z.string().nullable().optional(),
        /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
        agentRole: z.string().nullable().optional(),
        /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
        rent: z.number().nullable().optional(),
        /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().nullable().optional(),
        /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
        endDateConfirmed: z.boolean().nullable().optional(),
        /** A flag determining whether or not the tenancy has been extended indefinitely */
        isPeriodic: z.boolean().nullable().optional(),
        /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
        rentInstalmentsFrequency: z.string().nullable().optional(),
        /** The amount due for each rent instalment (where specified) */
        rentInstalmentsAmount: z.number().nullable().optional(),
        /** The date that the first instalment is due */ rentInstalmentsStart: z.string().nullable().optional(),
        /** The recorded utility reading for the gas meter */ meterReadingGas: z.string().nullable().optional(),
        /** Date of when the reading of gas utility was last recorded */
        meterReadingGasLastRead: z.string().nullable().optional(),
        /** The recorded utility reading for the electricity meter */
        meterReadingElectricity: z.string().nullable().optional(),
        /** Date of when the reading of electricity utility was last recorded */
        meterReadingElectricityLastRead: z.string().nullable().optional(),
        /** The recorded utility reading for the water meter */ meterReadingWater: z.string().nullable().optional(),
        /** Date of when the reading of water utility was last recorded */
        meterReadingWaterLastRead: z.string().nullable().optional(),
        /** The unique identifier of the type of tenancy */ typeId: z.string().nullable().optional(),
        /** The unique identifier of the negotiator who is managing the tenancy */
        negotiatorId: z.string().nullable().optional(),
        /** The unique identifier of the property that relates to the tenancy */
        propertyId: z.string().nullable().optional(),
        /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
        applicantId: z.string().nullable().optional(),
        /** The unique identifier of the negotiator assigned as the manager of the tenancy */
        managerId: z.string().nullable().optional(),
        /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
        groupPaymentReference: z.string().nullable().optional(),
        /** Representation of the tenancy letting fee */
        lettingFee: z
          .object({
            /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
            /** The fee amount */ amount: z.number().nullable().optional(),
            /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
            frequency: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of the tenancy management fee */
        managementFee: z
          .object({
            /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
            /** The fee amount */ amount: z.number().nullable().optional(),
            /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
            frequency: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** A tenancy source of enquiry */
        source: z
          .object({
            /** The unique identifier of the source for this tenancy */ id: z.string().nullable().optional(),
            /** The source type (office/source) */ type: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** A tenancy deposit model */
        deposit: z
          .object({
            /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
            heldBy: z.string().nullable().optional(),
            /** The number of weeks or months rent collected as the deposit on the tenancy */
            period: z.number().int().nullable().optional(),
            /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().nullable().optional(),
            /** The amount of deposit held */ sum: z.number().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
        related: z
          .array(
            /** A summarised view of the details of a contact or company associated to a tenancy */
            z.object({
              /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
              /** The complete name of the contact or company */ name: z.string().nullable().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().nullable().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().nullable().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().nullable().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().nullable().optional(),
              /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
              /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
              /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
              /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
              /** The email address of the contact or company */ email: z.string().nullable().optional(),
              /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
              paymentReference: z.string().nullable().optional(),
              /** A flag denoting whether or not this roie on the system is now archived */
              fromArchive: z.boolean().nullable().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().nullable().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().nullable().optional(),
                  /** The building number */ buildingNumber: z.string().nullable().optional(),
                  /** The first line of the address */ line1: z.string().nullable().optional(),
                  /** The second line of the address */ line2: z.string().nullable().optional(),
                  /** The third line of the address */ line3: z.string().nullable().optional(),
                  /** The fourth line of the address */ line4: z.string().nullable().optional(),
                  /** The postcode */ postcode: z.string().nullable().optional(),
                  /** The ISO-3166 country code that the address resides within */
                  countryId: z.string().nullable().optional(),
                })
                .nullable()
                .optional(),
              /** The date the tenant moved in (or will move in) to the property */
              occupyOn: z.string().nullable().optional(),
              /** The date the tenant vacated (or is due to vacate) the property */
              vacateOn: z.string().nullable().optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */ type: z.string().nullable().optional(),
                    /** The contact detail */ value: z.string().nullable().optional(),
                  }),
                )
                .nullable()
                .optional(),
            }),
          )
          .nullable()
          .optional(),
        /** A flag denoting whether or not this tenancy is archived */ fromArchive: z.boolean().nullable().optional(),
        /** App specific metadata that has been set against the tenancy */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** Financial notes set against the tenancy */ feeNotes: z.string().nullable().optional(),
        /** The identifier of the legal status to set against the tenancy */
        legalStatusId: z.string().nullable().optional(),
        /** Representation of renewal options in a tenancy */
        renewalOptions: z
          .object({
            /** The unique identifier of the renewal option */ optionId: z.string().nullable().optional(),
            /** The associated renewal option text */ optionText: z.string().nullable().optional(),
            /** The renewal option expiry date */ expiry: z.string().nullable().optional(),
            /** The renewal options associated condition Ids */ conditionIds: z.array(z.string()).nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
        arrears: z
          .object({
            /** A flag determining whether or not tenancy arrears should be chased */
            chaseArrears: z.boolean().nullable().optional(),
            /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
            paymentPlan: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** The ETag for the current version of the tenancy. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
