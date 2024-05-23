import { z } from 'zod'

export const propertyModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
      z.object({
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the property */ id: z.string().nullable().optional(),
        /** The date and time when the property was created */ created: z.string().nullable().optional(),
        /** The date and time when the property was last modified */ modified: z.string().nullable().optional(),
        /** The date the owner of the property was last called */ lastCall: z.string().nullable().optional(),
        /** The date the owner of the property is next due to be called */ nextCall: z.string().nullable().optional(),
        /** The marketing mode of the property (selling/letting/sellingAndLetting) */
        marketingMode: z.string().nullable().optional(),
        /** The currency that applies to monetary amounts exposed in the model */
        currency: z.string().nullable().optional(),
        /** An optional alternative identifier specified for this property */
        alternateId: z.string().nullable().optional(),
        /** Representation of the physical address of a building or premise */
        address: z
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
            /** The local timezone for the address, based on the Geolocation coordinates */
            localTimeZone: z.string().nullable().optional(),
            /** Representation of the geographical location of an address using coordinates */
            geolocation: z
              .object({
                /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
                /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
          })
          .nullable()
          .optional(),
        /** The unique identifier of the area that the property resides in */ areaId: z.string().nullable().optional(),
        /** The strapline description containing a short summary about the property */
        strapline: z.string().nullable().optional(),
        /** The brief description of the property */ description: z.string().nullable().optional(),
        /** The long description of the property */ longDescription: z.string().nullable().optional(),
        /** The property's local authority */ localAuthorityCompanyId: z.string().nullable().optional(),
        /** The name of the property's local authority */ localAuthorityCompanyName: z.string().nullable().optional(),
        /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
        summary: z.string().nullable().optional(),
        /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
        departmentId: z.string().nullable().optional(),
        /** The unique identifier of the negotiator managing the property */
        negotiatorId: z.string().nullable().optional(),
        /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedrooms: z.number().int().nullable().optional(),
        /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedroomsMax: z.number().int().nullable().optional(),
        /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptions: z.number().int().nullable().optional(),
        /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptionsMax: z.number().int().nullable().optional(),
        /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathrooms: z.number().int().nullable().optional(),
        /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathroomsMax: z.number().int().nullable().optional(),
        /** The number of units offered on the market. This is typically used when marketing development sites. */
        numberOfUnits: z.number().int().nullable().optional(),
        /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        parkingSpaces: z.number().int().nullable().optional(),
        /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
        councilTax: z.string().nullable().optional(),
        /** A collection of identifiers of portals that the property should not be displayed on */
        disabledPortalIds: z.array(z.string()).nullable().optional(),
        /** A flag denoting whether or not this property can be advertised on the internet */
        internetAdvertising: z.boolean().nullable().optional(),
        /** A flag denoting whether or not the property has been instructed by another estate agent */
        isExternal: z.boolean().nullable().optional(),
        /** The arrangements regarding viewing the property */ viewingArrangements: z.string().nullable().optional(),
        /** The url of a video associated with this property, such as a virtual tour */
        videoUrl: z.string().nullable().optional(),
        /** The caption for the video url associated with this property */
        videoCaption: z.string().nullable().optional(),
        /** The url of a second video associated with this property, such as a virtual tour */
        video2Url: z.string().nullable().optional(),
        /** The caption for the second video url associated with this property */
        video2Caption: z.string().nullable().optional(),
        /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
        notes: z.string().nullable().optional(),
        /** The status of the advertising board sited outside or near to the property */
        boardStatus: z.string().nullable().optional(),
        /** Any notes relevant to the advertising board sited outside or near to the property */
        boardNotes: z.string().nullable().optional(),
        /** The properties featured image url */ featuredImageUrl: z.string().nullable().optional(),
        /** The url to the property on an external website */ url: z.string().nullable().optional(),
        /** The caption to accompany the url to the property on an external website */
        urlCaption: z.string().nullable().optional(),
        /** Any ground rent payment that applies to the property */ groundRent: z.number().nullable().optional(),
        /** Comments regarding the ground rent of the property */ groundRentComment: z.string().nullable().optional(),
        /** The date when the ground rent payable on the property should be reviewed */
        groundRentReviewDate: z.string().nullable().optional(),
        /** The annual percentage increase of the ground rent after being reviewed */
        groundRentIncrease: z.number().nullable().optional(),
        /** Any service charge payment that applies to the property */ serviceCharge: z.number().nullable().optional(),
        /** Comments regarding the service charge of the property */
        serviceChargeComment: z.string().nullable().optional(),
        /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        floorLevel: z.number().int().nullable().optional(),
        /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        internalFloors: z.number().int().nullable().optional(),
        /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        totalFloors: z.number().int().nullable().optional(),
        /** The date the advertising board was last updated (or should be updated when the date is in the future) */
        boardUpdated: z.string().nullable().optional(),
        /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
        valuation: z.string().nullable().optional(),
        /** The date and time the property was archived */ archivedOn: z.string().nullable().optional(),
        /** A flag determining whether or not the property is archived */
        fromArchive: z.boolean().nullable().optional(),
        /** Details specific to rural properties */
        rural: z
          .object({
            /** Details of the rural tenure associated with the property. */ tenureId: z.string().nullable().optional(),
            /** Details of the buildings associated with the property. */
            buildingsDescription: z.string().nullable().optional(),
            /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of the external land area of a property */
        externalArea: z
          .object({
            /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
            /** The minimum area bound */ min: z.number().nullable().optional(),
            /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
            max: z.number().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of the internal dimensions of a property */
        internalArea: z
          .object({
            /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
            /** The minimum area bound */ min: z.number().nullable().optional(),
            /** The maximum area bound */ max: z.number().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of EPC statistics */
        epc: z
          .object({
            /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
            exempt: z.boolean().nullable().optional(),
            /** The current energy efficiency rating */ eer: z.number().int().nullable().optional(),
            /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
            eerRating: z.string().nullable().optional(),
            /** The potential energy efficiency rating */ eerPotential: z.number().int().nullable().optional(),
            /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
            eerPotentialRating: z.string().nullable().optional(),
            /** The current environmental impact rating */ eir: z.number().int().nullable().optional(),
            /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
            eirRating: z.string().nullable().optional(),
            /** The potential environmental impact rating */ eirPotential: z.number().int().nullable().optional(),
            /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
            eirPotentialRating: z.string().nullable().optional(),
            /** The URL to access the full EPC document */ fullDocumentUrl: z.string().nullable().optional(),
            /** The URL to access the first page of the EPC document */
            firstPageDocumentUrl: z.string().nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Representation of property details specific to sales marketing */
        selling: z
          .object({
            /** The date that the property was marked as for sale */ instructed: z.string().nullable().optional(),
            /** The marketing price of the property */ price: z.number().nullable().optional(),
            /** The maximum price of a property on the development plot */ priceTo: z.number().nullable().optional(),
            /** The fee charged by the agent to reserve a property (typically a new build) */
            reservationFee: z.number().int().nullable().optional(),
            /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
            qualifier: z.string().nullable().optional(),
            /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
            status: z.string().nullable().optional(),
            /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
            disposal: z.string().nullable().optional(),
            /** The date the property sale was completed */ completed: z.string().nullable().optional(),
            /** The date the property was exchanged */ exchanged: z.string().nullable().optional(),
            /** The date the property account was paid */ accountPaid: z.string().nullable().optional(),
            /** Representation of the tenure of a property */
            tenure: z
              .object({
                /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                type: z.string().nullable().optional(),
                /** The tenure expiration date */ expiry: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** The unique identifier of the vendor selling the property */ vendorId: z.string().nullable().optional(),
            /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
            agency: z.string().nullable().optional(),
            /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
            agencyId: z.string().nullable().optional(),
            /** The date on which the agreement between the vendor and agent expires */
            agreementExpiry: z.string().nullable().optional(),
            /** Representation of the the commission fee for a property */
            fee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
                /** The commission letting fee amount */ amount: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
            exchangedCompanyFee: z.number().nullable().optional(),
            /** The agent's recommended asking price */ recommendedPrice: z.number().int().nullable().optional(),
            /** The agent's valuation price */ valuationPrice: z.number().int().nullable().optional(),
            /** The unique identifier of the document used for the sales brochure */
            brochureId: z.string().nullable().optional(),
            /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
            publicBrochureUrl: z.string().nullable().optional(),
            /** The price the property exchanged/sold for */ exchangedPrice: z.number().int().nullable().optional(),
            /** The unique identifier of the office that sold the property */
            exchangedOfficeId: z.string().nullable().optional(),
            /** The property's decorative condition (unmodernised/fair/good/veryGood) */
            decoration: z.array(z.string()).nullable().optional(),
            /** Details relating to the shared ownership of the property */
            sharedOwnership: z
              .object({
                /** The percentage of the shared ownership property being sold by the vendor */
                sharedPercentage: z.number().nullable().optional(),
                /** The rent payable on the remainder of the shared ownership property */
                rent: z.number().nullable().optional(),
                /** The frequency at which the shared ownership rent should be paid */
                rentFrequency: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Representation of the sub agent terms */
            subAgentTerms: z
              .object({
                /** A flag denoting whether or not fee is available */ feeAvailable: z.boolean().nullable().optional(),
                /** The type of fee (percent/fixed/callForFees) */ type: z.string().nullable().optional(),
                /** The fee amount */ amount: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
          })
          .nullable()
          .optional(),
        /** Representation of property details specific to lettings marketing */
        letting: z
          .object({
            /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
            /** The date the property is next available from */ availableFrom: z.string().nullable().optional(),
            /** The date the property is available to */ availableTo: z.string().nullable().optional(),
            /** The date the letting agreement between the landlord and agent was signed */
            agreementSigned: z.string().nullable().optional(),
            /** The rent being charged for the property */ rent: z.number().nullable().optional(),
            /** The frequency at which rent will be collected (weekly/monthly/annually) */
            rentFrequency: z.string().nullable().optional(),
            /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
            /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
            furnishing: z.array(z.string()).nullable().optional(),
            /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
            /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
            status: z.string().nullable().optional(),
            /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
            agentRole: z.string().nullable().optional(),
            /** The unique identifier of the landlord letting the property */
            landlordId: z.string().nullable().optional(),
            /** A note to accompany any works orders created for the property */
            worksOrderNote: z.string().nullable().optional(),
            /** The minimum number of months the property can be let out for */
            minimumTerm: z.number().int().nullable().optional(),
            /** The unique identifier of the negotiator that manages the property */
            propertyManagerId: z.string().nullable().optional(),
            /** The unique identifiers of the management companies associated to the property */
            managementCompanyIds: z.array(z.string()).nullable().optional(),
            /** The unique identifier of the document used for the lettings brochure */
            brochureId: z.string().nullable().optional(),
            /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
            publicBrochureUrl: z.string().nullable().optional(),
            /** Representation of the the commission fee for a property */
            managementFee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
                /** The commission letting fee amount */ amount: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Representation of the the commission fee for a property */
            lettingFee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
                /** The commission letting fee amount */ amount: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
            /** Representation of property details specific to utilities */
            utilities: z
              .object({
                /** A flag denoting whether or not the property has gas connected */
                hasGas: z.boolean().nullable().optional(),
                /** The unique identifier of the company supplying the gas to the property */
                gasCompanyId: z.string().nullable().optional(),
                /** The gas meter point number */ gasMeterPoint: z.string().nullable().optional(),
                /** The unique identifier of the company supplying the electricity to the property */
                electricityCompanyId: z.string().nullable().optional(),
                /** The electricity meter point number */ electricityMeterPoint: z.string().nullable().optional(),
                /** The unique identifier of the company supplying the water to the property */
                waterCompanyId: z.string().nullable().optional(),
                /** The water meter point number */ waterMeterPoint: z.string().nullable().optional(),
                /** The unique identifier of the company supplying the telephone to the property */
                telephoneCompanyId: z.string().nullable().optional(),
                /** The unique identifier of the company supplying the internet to the property */
                internetCompanyId: z.string().nullable().optional(),
                /** The unique identifier of the company supplying the cable tv to the property */
                cableTvCompanyId: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Representation of a property details related to deposit */
            deposit: z
              .object({
                /** The type of deposit (weeks/months/fixed) */ type: z.string().nullable().optional(),
                /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                amount: z.number().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Representation of property details specific to rent insurance associated with a lettings property */
            rentInsurance: z
              .object({
                /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
                status: z.string().nullable().optional(),
                /** The reference number of the insurance policy when rent protection insurance has been taken out */
                referenceNumber: z.string().nullable().optional(),
                /** The insurance policy start date */ start: z.string().nullable().optional(),
                /** The insurance policy end date */ end: z.string().nullable().optional(),
                /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
                cancelledReasonId: z.string().nullable().optional(),
                /** A textual comment or note entered by the agent when an insurance policy was cancelled */
                cancelledComment: z.string().nullable().optional(),
                /** Flag indicating whether or not the insurance policy should auto renew */
                autoRenew: z.boolean().nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Representation of property details specific to property Licencing */
            licencing: z
              .object({
                /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
                licenceRequired: z.boolean().nullable().optional(),
                /** The type of licence (additional/mandatory/none/notSet/selective) */
                licenceType: z.string().nullable().optional(),
                /** The number of households that the licence permits in the property */
                households: z.number().int().nullable().optional(),
                /** The number of occupants that the licence permits in the property */
                occupants: z.number().int().nullable().optional(),
                /** A flag determining whether or not the property is above commercial premises */
                aboveCommercialPremises: z.boolean().nullable().optional(),
                /** Representation of property details specific to property licence application */
                application: z
                  .object({
                    /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
                    status: z.string().nullable().optional(),
                    /** The licence application reference number */ referenceNumber: z.string().nullable().optional(),
                    /** The date the licence was applied for */ date: z.string().nullable().optional(),
                    /** The date the licence application was granted */ granted: z.string().nullable().optional(),
                    /** The date the licence will expire */ expiry: z.string().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
          })
          .nullable()
          .optional(),
        /** An properties commercial details */
        commercial: z
          .object({
            /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            useClass: z.array(z.string()).nullable().optional(),
            /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            floorLevel: z.array(z.string()).nullable().optional(),
          })
          .nullable()
          .optional(),
        /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
        regional: z
          .object({
            /** Any specific details relating to the marketing of a property in Guernsey */
            ggy: z
              .object({
                /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
                market: z.array(z.string()).nullable().optional(),
              })
              .nullable()
              .optional(),
            /** Any specific details relating to the marketing of a property in Ireland */
            irl: z
              .object({
                /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
                buildingEnergyRating: z
                  .object({
                    /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                    exempt: z.boolean().nullable().optional(),
                    /** The BER rating of the property */ rating: z.string().nullable().optional(),
                    /** The BER certificate reference number */ refNumber: z.string().nullable().optional(),
                    /** The energy performance indicator for the property */ epi: z.string().nullable().optional(),
                  })
                  .nullable()
                  .optional(),
              })
              .nullable()
              .optional(),
          })
          .nullable()
          .optional(),
        /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        type: z.array(z.string()).nullable().optional(),
        /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        style: z.array(z.string()).nullable().optional(),
        /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        situation: z.array(z.string()).nullable().optional(),
        /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        parking: z.array(z.string()).nullable().optional(),
        /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        age: z.array(z.string()).nullable().optional(),
        /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        locality: z.array(z.string()).nullable().optional(),
        /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        specialFeatures: z.array(z.string()).nullable().optional(),
        /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        unmappedAttributes: z
          .array(
            /** Represents an unmapped attribute type */
            z.object({
              /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
              type: z.string().nullable().optional(),
              /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
            }),
          )
          .nullable()
          .optional(),
        /** Identifiers of any services connected at the property */
        availableServicesIds: z.array(z.string()).nullable().optional(),
        /** Details of each room in the property */
        rooms: z
          .array(
            /** Representation of a single room in a property */
            z.object({
              /** The name of the room */ name: z.string().nullable().optional(),
              /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
              /** Details about the alternate dimensions of the room */ dimensionsAlt: z.string().nullable().optional(),
              /** Short description of the room */ description: z.string().nullable().optional(),
            }),
          )
          .nullable()
          .optional(),
        /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
        roomDetailsApproved: z.boolean().nullable().optional(),
        /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).nullable().optional(),
        /** The date that this property became a lost instruction */
        lostInstructionDate: z.string().nullable().optional(),
        /** The notes regarding the lost instruction */ lostInstructionNote: z.string().nullable().optional(),
        /** The type of development */ developmentSiteType: z.string().nullable().optional(),
        /** App specific metadata that has been set against the property */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The keywords associated with property */ keywords: z.array(z.string()).nullable().optional(),
        /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the property. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
        /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
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
