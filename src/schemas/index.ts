import { z } from 'zod'

/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const applicantLeaseRemaining = z.object({
  /** The minimum number of years that must remain on the lease of a leasehold property */
  min: z.number().int().nullable().optional(),
  /** The maximum number of years that must remain on the lease of a leasehold property */
  max: z.number().int().nullable().optional(),
})
/** The details specific to applicants with a marketingMode of buying */
export const createApplicantBuyingModel = z.object({
  /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
  /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
  priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
  priceTo: z.number().int().nullable().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).nullable().optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().nullable().optional(),
  leaseRemaining: applicantLeaseRemaining.nullable().optional(),
})
/** The details specific to applicants with a marketingMode of renting */
export const createApplicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */ moveDate: z.string().nullable().optional(),
  /** The applicant's preferred letting term (long/short/any) */ term: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
  rentFrom: z.number().nullable().optional(),
  /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
  rentTo: z.number().nullable().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
  rentFrequency: z.string().nullable().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's renting position */ positionId: z.string().nullable().optional(),
})
/** The applicant's outdoor space requirements */
export const applicantExternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum unit value of outside space that the applicant is looking for */
  amountFrom: z.number().nullable().optional(),
  /** The maximum unit value of outside space that the applicant is looking for */
  amountTo: z.number().nullable().optional(),
})
/** The applicant's indoor space requirements */
export const applicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().nullable().optional(),
  /** The unit value of inside space that the applicant is looking for */ amount: z.number().nullable().optional(),
})
/** An applicant's source of enquiry */
export const applicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Details of regional information specific to Guernsey */
export const applicantGuernseyModel = z.object({
  /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).nullable().optional(),
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const applicantRegionalModel = z.object({ ggy: applicantGuernseyModel.nullable().optional() })
/** Request body used to create a relationship between an applicant and a contact or company */
export const createApplicantContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
})
/** Request body used to create a new applicant */
export const createApplicantModel = z.object({
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ marketingMode: z.string(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  currency: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().nullable().optional(),
  /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().nullable().optional(),
  /** The status id of the applicant */ statusId: z.string().nullable().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().nullable().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().nullable().optional(),
  /** The date when the applicant was last contacted */ lastCall: z.string().nullable().optional(),
  /** The date when the applicant is next due to be contacted */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().nullable().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).nullable().optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).nullable().optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).nullable().optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).nullable().optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).nullable().optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).nullable().optional(),
  /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The minimum number of bedrooms the applicant requires */ bedroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms the applicant requires */ bedroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of reception rooms the applicant requires */
  receptionsMin: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms the applicant requires */
  receptionsMax: z.number().int().nullable().optional(),
  /** The minimum number of bathrooms the applicant requires */ bathroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms the applicant requires */ bathroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of parking spaces the applicant requires */
  parkingSpacesMin: z.number().int().nullable().optional(),
  /** The maximum number of parking spaces the applicant requires */
  parkingSpacesMax: z.number().int().nullable().optional(),
  /** The applicant's location type (areas/addresses/none) */ locationType: z.string().nullable().optional(),
  /** The applicant's location options */ locationOptions: z.array(z.string()).nullable().optional(),
  buying: createApplicantBuyingModel.nullable().optional(),
  renting: createApplicantRentingModel.nullable().optional(),
  externalArea: applicantExternalAreaModel.nullable().optional(),
  internalArea: applicantInternalAreaModel.nullable().optional(),
  source: applicantSourceModel.nullable().optional(),
  regional: applicantRegionalModel.nullable().optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z.array(createApplicantContactRelationshipModel),
  /** App specific metadata to set against the applicant */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export type ApplicantLeaseRemaining = {
  min?: /** The minimum number of years that must remain on the lease of a leasehold property */ number | undefined
  max?: /** The maximum number of years that must remain on the lease of a leasehold property */ number | undefined
}
/** The details specific to applicants with a marketingMode of buying */
export type CreateApplicantBuyingModel = {
  reasonId?: /** The identifier of the applicant's buying reason */ string | undefined
  positionId?: /** The identifier of the applicant's selling position */ string | undefined
  priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
  number | undefined
  priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
  number | undefined
  decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  Array<string> | undefined
  tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  Array<string> | undefined
  mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */ string | undefined
  leaseRemaining?: ApplicantLeaseRemaining | undefined
}
/** The details specific to applicants with a marketingMode of renting */
export type CreateApplicantRentingModel = {
  moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
  term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
  rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
  number | undefined
  rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
  number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
  string | undefined
  furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
  Array<string> | undefined
  positionId?: /** The identifier of the applicant's renting position */ string | undefined
}
/** The applicant's outdoor space requirements */
export type ApplicantExternalAreaModel = {
  type?: /** The unit of area that each amount corresponds to (acres/hectares) */ string | undefined
  amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */ number | undefined
  amountTo?: /** The maximum unit value of outside space that the applicant is looking for */ number | undefined
}
/** The applicant's indoor space requirements */
export type ApplicantInternalAreaModel = {
  type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */ string | undefined
  amount?: /** The unit value of inside space that the applicant is looking for */ number | undefined
}
/** An applicant's source of enquiry */
export type ApplicantSourceModel = {
  id?: /** The unique identifier of the applicant's source */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Details of regional information specific to Guernsey */
export type ApplicantGuernseyModel = {
  market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  Array<string> | undefined
}
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type ApplicantRegionalModel = { ggy?: ApplicantGuernseyModel | undefined }
/** Request body used to create a relationship between an applicant and a contact or company */
export type CreateApplicantContactRelationshipModel = {
  associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
  associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
}
/** Request body used to create a new applicant */
export type CreateApplicantModel = {
  marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */ string
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  buying?: CreateApplicantBuyingModel | undefined
  renting?: CreateApplicantRentingModel | undefined
  externalArea?: ApplicantExternalAreaModel | undefined
  internalArea?: ApplicantInternalAreaModel | undefined
  source?: ApplicantSourceModel | undefined
  regional?: ApplicantRegionalModel | undefined
  officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string>
  negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string>
  related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  Array<CreateApplicantContactRelationshipModel>
  metadata?: /** App specific metadata to set against the applicant */ Record<string, Record<string, never>> | undefined
}
/** Request body used to create or update a relationship between an applicant and a contact or company */
export const insertApplicantContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string().nullable().optional(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean().nullable().optional(),
})
/** Request body used to create or update a relationship between an applicant and a contact or company */
export type InsertApplicantContactRelationshipModel = {
  associatedId?: /** The unique identifier of the contact or company to create a relationship with */ string | undefined
  associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
  isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  boolean | undefined
}
/** Request body used to create a new area */
export const createAreaModel = z.object({
  /** The name of the area */ name: z.string(),
  /** The type of area (postcodes/polygon/group) */ type: z.string(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
  parentId: z.string().nullable().optional(),
})
/** Request body used to create a new area */
export type CreateAreaModel = {
  name: /** The name of the area */ string
  type: /** The type of area (postcodes/polygon/group) */ string
  area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  Array<string>
  departmentIds?: /** A collection of unique identifiers of departments associated to the area */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  Array<string> | undefined
  parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
  string | undefined
}
/** Represents an external attendee on an appointment */
export const createAppointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
  /** The type of attendee (applicant/contact/landlord/tenant) */ type: z.string().nullable().optional(),
})
/** Details of an appointment's recurrence pattern */
export const createAppointmentRecurrenceModel = z.object({
  /** The numeric value denoting how often the appointment will recur */
  interval: z.number().int().nullable().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().nullable().optional(),
  /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
  until: z.string().nullable().optional(),
})
/** A view of the documents associated to the appointment */
export const appointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().nullable().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().nullable().optional(),
})
export const createAppointmentDocumentModel = appointmentDocumentModel
/** Request body used to create a new calendar appointment */
export const createAppointmentModel = z.object({
  /** The date and time when the appointment will start */ start: z.string(),
  /** The date and time when the appointment will end */ end: z.string(),
  /** The date when the appointment should be followed up */ followUpOn: z.string().nullable().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string(),
  /** A free text description about the appointment */ description: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  attendee: createAppointmentAttendeeModel.nullable().optional(),
  /** The unique identifier of the property related to the appointment */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().nullable().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().nullable().optional(),
  recurrence: createAppointmentRecurrenceModel.nullable().optional(),
  documents: createAppointmentDocumentModel.nullable().optional(),
  /** App specific metadata to set against the appointment */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Represents an external attendee on an appointment */
export type CreateAppointmentAttendeeModel = {
  id?: /** The unique identifier of the attendee */ string | undefined
  type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
}
/** Details of an appointment's recurrence pattern */
export type CreateAppointmentRecurrenceModel = {
  interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
  string | undefined
}
/** A view of the documents associated to the appointment */
export type AppointmentDocumentModel = {
  draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
  string | undefined
  finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
  string | undefined
}
export type CreateAppointmentDocumentModel = AppointmentDocumentModel
/** Request body used to create a new calendar appointment */
export type CreateAppointmentModel = {
  start: /** The date and time when the appointment will start */ string
  end: /** The date and time when the appointment will end */ string
  followUpOn?: /** The date when the appointment should be followed up */ string | undefined
  typeId: /** The unique identifier of the appointment type */ string
  description?: /** A free text description about the appointment */ string | undefined
  organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  Array<string> | undefined
  attendee?: CreateAppointmentAttendeeModel | undefined
  propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
  otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  string | undefined
  accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  boolean | undefined
  negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  boolean | undefined
  attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
  boolean | undefined
  propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  boolean | undefined
  virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
  isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  boolean | undefined
  attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
  recurrence?: CreateAppointmentRecurrenceModel | undefined
  documents?: CreateAppointmentDocumentModel | undefined
  metadata?: /** App specific metadata to set against the appointment */
  Record<string, Record<string, never>> | undefined
}
/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().nullable().optional(),
  /** Notes on this open house attendee */ notes: z.string().nullable().optional(),
  attendee: createAppointmentAttendeeModel.nullable().optional(),
})
/** Request body used to create a new open house attendee */
export type CreateOpenHouseAttendeeModel = {
  interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  string | undefined
  notes?: /** Notes on this open house attendee */ string | undefined
  attendee?: CreateAppointmentAttendeeModel | undefined
}
/** Request body to set the address of a new company */
export const createCompanyAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().nullable().optional(),
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** Request body used to create a new company */
export const createCompanyModel = z.object({
  /** The name of the company */ name: z.string(),
  /** The branch name of the company */ branch: z.string().nullable().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().nullable().optional(),
  /** A flag determining whether or not the company is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().nullable().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().nullable().optional(),
  /** The work phone number of the company. (Required when no other company or address details are provided) */
  workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the company. (Required when no other company or address details are provided) */
  mobilePhone: z.string().nullable().optional(),
  /** The email address of the company. (Required when no other company or address details are provided) */
  email: z.string().nullable().optional(),
  address: createCompanyAddressModel.nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().nullable().optional(),
  /** App specific metadata to set against the company */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body to set the address of a new company */
export type CreateCompanyAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** Request body used to create a new company */
export type CreateCompanyModel = {
  name: /** The name of the company */ string
  branch?: /** The branch name of the company */ string | undefined
  notes?: /** A free text field containing notes that describe the company's business or service offering */
  string | undefined
  active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
  vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
  typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  Array<string>
  supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
  workPhone?: /** The work phone number of the company. (Required when no other company or address details are provided) */
  string | undefined
  mobilePhone?: /** The mobile phone number of the company. (Required when no other company or address details are provided) */
  string | undefined
  email?: /** The email address of the company. (Required when no other company or address details are provided) */
  string | undefined
  address?: CreateCompanyAddressModel | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
  boolean | undefined
  metadata?: /** App specific metadata to set against the company */ Record<string, Record<string, never>> | undefined
}
/** Request body used to set the source of a new contact */
export const createContactSourceModel = z.object({
  /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Request body used to set an address against a new contact */
export const createContactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().nullable().optional(),
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
})
/** Request body used to create a new contact */
export const createContactModel = z.object({
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string(),
  /** The contact's date of birth */ dateOfBirth: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */ marketingConsent: z.string(),
  source: createContactSourceModel.nullable().optional(),
  /** The home phone number of the contact (Required when no other contact details are provided) */
  homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact (Required when no other contact details are provided) */
  workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact (Required when no other contact details are provided) */
  mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact (Required when no other contact details are provided) */
  email: z.string().nullable().optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).nullable().optional(),
  primaryAddress: createContactAddressModel.nullable().optional(),
  secondaryAddress: createContactAddressModel.nullable().optional(),
  workAddress: createContactAddressModel.nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().nullable().optional(),
  /** App specific metadata to set against the contact */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to set the source of a new contact */
export type CreateContactSourceModel = {
  id?: /** The unique identifier of the source of the contact */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Request body used to set an address against a new contact */
export type CreateContactAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
}
/** Request body used to create a new contact */
export type CreateContactModel = {
  title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
  forename?: /** The contact's forename */ string | undefined
  surname: /** The contact's surname */ string
  dateOfBirth?: /** The contact's date of birth */ string | undefined
  active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
  marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */ string
  source?: CreateContactSourceModel | undefined
  homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
  string | undefined
  workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
  string | undefined
  mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
  string | undefined
  email?: /** The email address of the contact (Required when no other contact details are provided) */
  string | undefined
  officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  Array<string>
  negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  Array<string>
  categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
  primaryAddress?: CreateContactAddressModel | undefined
  secondaryAddress?: CreateContactAddressModel | undefined
  workAddress?: CreateContactAddressModel | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
  boolean | undefined
  metadata?: /** App specific metadata to set against the contact */ Record<string, Record<string, never>> | undefined
}
/** Request body used to update an existing contact subscription */
export const updateContactSubscriptionModel = z.object({
  /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().nullable().optional(),
})
/** Request body used to update an existing contact subscription */
export type UpdateContactSubscriptionModel = {
  status?: /** The status of the subscription (subscribed/unsubscribed) */ string | undefined
}
/** Request body for associating this offer to another one below it in the chain */
export const createDownwardLinkModel = z.object({
  /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().nullable().optional(),
  /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().nullable().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().nullable().optional(),
  /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
  buyer: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
  buyerSolicitorId: z.string().nullable().optional(),
})
/** Request body for associating this offer to another one below it in the chain */
export type CreateDownwardLinkModel = {
  offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  string | undefined
  propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
  string | undefined
  agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  string | undefined
  buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
  string | undefined
  buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
  string | undefined
}
/** Request body for associating this offer to another one above it in the chain */
export const createUpwardLinkModel = z.object({
  /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().nullable().optional(),
  /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().nullable().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().nullable().optional(),
  /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
  vendor: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
  vendorSolicitorId: z.string().nullable().optional(),
})
/** Request body for associating this offer to another one above it in the chain */
export type CreateUpwardLinkModel = {
  offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  string | undefined
  propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
  string | undefined
  agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  string | undefined
  vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
  string | undefined
  vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
  string | undefined
}
/** Request body used to create a new document */
export const createDocumentModel = z.object({
  /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
  associatedType: z.string(),
  /** The unique identifier of the entity that the document is associated with */ associatedId: z.string(),
  /** The unique identifier of the type of document */ typeId: z.string(),
  /** The filename of the document */ name: z.string(),
  /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().nullable().optional(),
  /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
  fileData: z.string().nullable().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().nullable().optional(),
  /** App specific metadata to set against the document */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new document */
export type CreateDocumentModel = {
  associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
  string
  associatedId: /** The unique identifier of the entity that the document is associated with */ string
  typeId: /** The unique identifier of the type of document */ string
  name: /** The filename of the document */ string
  isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
  fileData?: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
  string | undefined
  fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  string | undefined
  metadata?: /** App specific metadata to set against the document */ Record<string, Record<string, never>> | undefined
}
/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export const createPreSignedUrlsModel = z.object({
  /** The number of pre signed urls to create */ amount: z.number().int(),
})
/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export type CreatePreSignedUrlsModel = { amount: /** The number of pre signed urls to create */ number }
/** Request body used to create a enquiries address */
export const createEnquiryAddressModel = z.object({
  /** Sets the building name */ buildingName: z.string().nullable().optional(),
  /** Sets the building number */ buildingNumber: z.string().nullable().optional(),
  /** Sets the first line of the address */ line1: z.string().nullable().optional(),
  /** Sets the second line of the address */ line2: z.string().nullable().optional(),
  /** Sets the third line of the address */ line3: z.string().nullable().optional(),
  /** Sets the fourth line of the address */ line4: z.string().nullable().optional(),
  /** Sets the postcode */ postcode: z.string().nullable().optional(),
  /** Sets the ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** The details specific to a buying enquiry */
export const createEnquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().nullable().optional(),
})
/** The details specific to renting enquiry. When type is renting. */
export const createEnquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective tenant's budget */ rentTo: z.number().int().nullable().optional(),
  /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
  rentFrequency: z.string().nullable().optional(),
})
/** Request body used to create an enquiry */
export const createEnquiryModel = z.object({
  /** The title of the individual making the enquiry */ title: z.string(),
  /** The forename of the individual making the enquiry */ forename: z.string(),
  /** The surname of the individual making the enquiry */ surname: z.string(),
  /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  position: z.string().nullable().optional(),
  /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  enquiryType: z.string(),
  /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  message: z.string(),
  /** The unique identifier of the related office */ officeId: z.string(),
  /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  marketingConsent: z.string(),
  /** The name of the source that the enquiry was generated from */ sourceName: z.string(),
  /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
  homePhone: z.string().nullable().optional(),
  /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
  workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
  mobilePhone: z.string().nullable().optional(),
  /** The email of the individual making the enquiry (Required when no other contact details are given) */
  email: z.string().nullable().optional(),
  address: createEnquiryAddressModel.nullable().optional(),
  buying: createEnquiryBuyingModel.nullable().optional(),
  renting: createEnquiryRentingModel.nullable().optional(),
  /** The number of bedrooms the prospective buyer or tenant requires */
  bedrooms: z.number().int().nullable().optional(),
  /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  propertyIds: z.array(z.string()).nullable().optional(),
})
/** Request body used to create a enquiries address */
export type CreateEnquiryAddressModel = {
  buildingName?: /** Sets the building name */ string | undefined
  buildingNumber?: /** Sets the building number */ string | undefined
  line1?: /** Sets the first line of the address */ string | undefined
  line2?: /** Sets the second line of the address */ string | undefined
  line3?: /** Sets the third line of the address */ string | undefined
  line4?: /** Sets the fourth line of the address */ string | undefined
  postcode?: /** Sets the postcode */ string | undefined
  countryId?: /** Sets the ISO-3166 country code that the address resides within */ string | undefined
}
/** The details specific to a buying enquiry */
export type CreateEnquiryBuyingModel = {
  priceFrom?: /** The lower bound of the prospective buyer's budget */ number | undefined
  priceTo?: /** The upper bound of the prospective buyer's budget */ number | undefined
}
/** The details specific to renting enquiry. When type is renting. */
export type CreateEnquiryRentingModel = {
  rentFrom?: /** The lower bound of the prospective tenant's budget */ number | undefined
  rentTo?: /** The upper bound of the prospective tenant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
  string | undefined
}
/** Request body used to create an enquiry */
export type CreateEnquiryModel = {
  title: /** The title of the individual making the enquiry */ string
  forename: /** The forename of the individual making the enquiry */ string
  surname: /** The surname of the individual making the enquiry */ string
  position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  string | undefined
  enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  string
  message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  string
  officeId: /** The unique identifier of the related office */ string
  marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  string
  sourceName: /** The name of the source that the enquiry was generated from */ string
  homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
  string | undefined
  workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
  string | undefined
  mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
  string | undefined
  email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
  string | undefined
  address?: CreateEnquiryAddressModel | undefined
  buying?: CreateEnquiryBuyingModel | undefined
  renting?: CreateEnquiryRentingModel | undefined
  bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */ number | undefined
  propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  Array<string> | undefined
}
/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export const createIdentityDocumentModel = z.object({
  /** The unique identifier of the type of identity document provided */ typeId: z.string(),
  /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
  /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
  details: z.string().nullable().optional(),
  /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  fileData: z.string().nullable().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().nullable().optional(),
  /** The filename to store the document as (Required when 'details' are not given) */
  name: z.string().nullable().optional(),
})
/** Request body used to create a new contact identity check */
export const createIdentityCheckModel = z.object({
  /** The unique identifier of the contact associated to the identity check */ contactId: z.string(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ status: z.string(),
  /** The unique identifier of the negotiator that initiated the identity check */ negotiatorId: z.string(),
  identityDocument1: createIdentityDocumentModel.nullable().optional(),
  identityDocument2: createIdentityDocumentModel.nullable().optional(),
  /** App specific metadata to set against the identity check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export type CreateIdentityDocumentModel = {
  typeId: /** The unique identifier of the type of identity document provided */ string
  expiry?: /** The date when the document expires and becomes invalid */ string | undefined
  details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
  string | undefined
  fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  string | undefined
  fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  string | undefined
  name?: /** The filename to store the document as (Required when 'details' are not given) */ string | undefined
}
/** Request body used to create a new contact identity check */
export type CreateIdentityCheckModel = {
  contactId: /** The unique identifier of the contact associated to the identity check */ string
  checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
  string
  status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */ string
  negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */ string
  identityDocument1?: CreateIdentityDocumentModel | undefined
  identityDocument2?: CreateIdentityDocumentModel | undefined
  metadata?: /** App specific metadata to set against the identity check */
  Record<string, Record<string, never>> | undefined
}
/** Request body to create a journal entry */
export const createJournalEntryModel = z.object({
  /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
  typeId: z.string().nullable().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
  propertyId: z.string().nullable().optional(),
  /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
  associatedId: z.string().nullable().optional(),
  /** The textual description of the journal entry event */ description: z.string(),
  /** The identifier of the negotiator recording the journal entry */ negotiatorId: z.string().nullable().optional(),
})
/** Request body to create a journal entry */
export type CreateJournalEntryModel = {
  typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
  string | undefined
  propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
  string | undefined
  associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
  string | undefined
  associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
  string | undefined
  description: /** The textual description of the journal entry event */ string
  negotiatorId?: /** The identifier of the negotiator recording the journal entry */ string | undefined
}
/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel = z.object({
  /** Collection of journal entries */ createJournalEntry: z.array(createJournalEntryModel).nullable().optional(),
})
/** Request body to create bulk journal entry */
export type CreateBulkJournalEntryModel = {
  createJournalEntry?: /** Collection of journal entries */ Array<CreateJournalEntryModel> | undefined
}
/** Request body used to set the source of a new landlord */
export const createLandlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Request body used to create a new relationship between a landlord and a contact or company */
export const createLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string().nullable().optional(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string().nullable().optional(),
})
/** Request body used to create a new landlord */
export const createLandlordModel = z.object({
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */ officeId: z.string(),
  source: createLandlordSourceModel.nullable().optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z.array(createLandlordContactRelationshipModel),
  /** App specific metadata that to set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to set the source of a new landlord */
export type CreateLandlordSourceModel = {
  id?: /** The unique identifier of the source of the landlord */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Request body used to create a new relationship between a landlord and a contact or company */
export type CreateLandlordContactRelationshipModel = {
  associatedId?: /** The unique identifier of the contact or company to create a relationship with */ string | undefined
  associatedType?: /** The type of relationship to create (contact/company) */ string | undefined
}
/** Request body used to create a new landlord */
export type CreateLandlordModel = {
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId: /** The unique identifier of the office that is associated to the landlord */ string
  source?: CreateLandlordSourceModel | undefined
  related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  Array<CreateLandlordContactRelationshipModel>
  metadata?: /** App specific metadata that to set against the landlord */
  Record<string, Record<string, never>> | undefined
}
/** Request body used to create or update a relationship between a landlord and a contact or company */
export const insertLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean(),
})
/** Request body used to create or update a relationship between a landlord and a contact or company */
export type InsertLandlordContactRelationshipModel = {
  associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
  associatedType: /** The type of relationship to create (contact/company) */ string
  isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  boolean
}
/** Request body used to create a new negotiator */
export const createNegotiatorModel = z.object({
  /** The name of the negotiator */ name: z.string(),
  /** The job title of the negotiator */ jobTitle: z.string().nullable().optional(),
  /** A flag determining whether or not the negotiator is active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the office that the negotiator is attached to */ officeId: z.string(),
  /** The work phone number of the negotiator */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the negotiator */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the negotiator */ email: z.string().nullable().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).nullable().optional(),
  /** App specific metadata to set against the negotiator */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new negotiator */
export type CreateNegotiatorModel = {
  name: /** The name of the negotiator */ string
  jobTitle?: /** The job title of the negotiator */ string | undefined
  active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
  officeId: /** The unique identifier of the office that the negotiator is attached to */ string
  workPhone?: /** The work phone number of the negotiator */ string | undefined
  mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
  email?: /** The email address of the negotiator */ string | undefined
  diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  metadata?: /** App specific metadata to set against the negotiator */
  Record<string, Record<string, never>> | undefined
}
/** Payload for defining notification targets */
export const createNotificationTargetModel = z.object({
  /** The identifier of the negotiators whom should receive the notification */
  negotiatorId: z.array(z.string()).nullable().optional(),
})
/** Payload for creating a notification */
export const createNotificationModel = z.object({
  /** The notification type (telephony) */ type: z.string().nullable().optional(),
  /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
  subType: z.string().nullable().optional(),
  /** The products the notification is associated to, and will be delivered to */
  products: z.array(z.string()).nullable().optional(),
  targets: createNotificationTargetModel.nullable().optional(),
  /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
  payload: z.object({}).nullable().optional(),
})
/** Payload for defining notification targets */
export type CreateNotificationTargetModel = {
  negotiatorId?: /** The identifier of the negotiators whom should receive the notification */ Array<string> | undefined
}
/** Payload for creating a notification */
export type CreateNotificationModel = {
  type?: /** The notification type (telephony) */ string | undefined
  subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */ string | undefined
  products?: /** The products the notification is associated to, and will be delivered to */ Array<string> | undefined
  targets?: CreateNotificationTargetModel | undefined
  payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
  Record<string, never> | undefined
}
/** Request body used to create a new offer */
export const createOfferModel = z.object({
  /** The unique identifier of the applicant associated to the offer */ applicantId: z.string(),
  /** The unique identifier of the property associated to the offer */ propertyId: z.string(),
  /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().nullable().optional(),
  /** The date when the offer was made */ date: z.string(),
  /** The monetary amount of the offer */ amount: z.number(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */ status: z.string(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().nullable().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().nullable().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().nullable().optional(),
  /** App specific metadata to set against the offer */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new offer */
export type CreateOfferModel = {
  applicantId: /** The unique identifier of the applicant associated to the offer */ string
  propertyId: /** The unique identifier of the property associated to the offer */ string
  negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
  date: /** The date when the offer was made */ string
  amount: /** The monetary amount of the offer */ number
  status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */ string
  inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
  exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
  conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
  string | undefined
  metadata?: /** App specific metadata to set against the offer */ Record<string, Record<string, never>> | undefined
}
/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
/** Request body used to set the address of a new office */
export const createOfficeAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  geolocation: createOfficeAddressGeolocationModel.nullable().optional(),
})
/** Request body used to create a new office */
export const createOfficeModel = z.object({
  /** The name of the office */ name: z.string(),
  /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
  /** The name of the office manager */ manager: z.string().nullable().optional(),
  address: createOfficeAddressModel,
  /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
  /** The email address of the office */ email: z.string().nullable().optional(),
  /** App specific metadata to set against the office */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to set the geolocation coordinates of a new address */
export type CreateOfficeAddressGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
/** Request body used to set the address of a new office */
export type CreateOfficeAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1: /** The first line of the address */ string
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: CreateOfficeAddressGeolocationModel | undefined
}
/** Request body used to create a new office */
export type CreateOfficeModel = {
  name: /** The name of the office */ string
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  manager?: /** The name of the office manager */ string | undefined
  address: CreateOfficeAddressModel
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
}
/** Request body used to set the geolocation coordinates of a new property's address */
export const createPropertyGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number(),
})
/** Request body used to set the address of a new property */
export const createPropertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  geolocation: createPropertyGeolocationModel.nullable().optional(),
})
/** Request body used to set the EPC statistic of a new property */
export const createPropertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().nullable().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().nullable().optional(),
  /** The potential energy efficiency rating */ eerPotential: z.number().int().nullable().optional(),
  /** The current environmental impact rating */ eir: z.number().int().nullable().optional(),
  /** The potential environmental impact rating */ eirPotential: z.number().int().nullable().optional(),
  /** The URL to access the full EPC document */ fullDocumentUrl: z.string().nullable().optional(),
  /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().nullable().optional(),
})
/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().nullable().optional(),
})
/** Request body to set the internal dimensions of a new property */
export const createPropertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound */ max: z.number().nullable().optional(),
})
/** Request body used to set details specific to rural properties */
export const createPropertyRuralModel = z.object({
  /** Details of the buildings associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
/** Request body used to set the tenure of a new property */
export const createPropertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().nullable().optional(),
  /** The tenure expiration date */ expiry: z.string().nullable().optional(),
})
/** Request body used to set the commission fee for a property */
export const createPropertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The commission letting fee amount */ amount: z.number().nullable().optional(),
})
/** Details relating to the shared ownership of the property */
export const propertySharedOwnershipModel = z.object({
  /** The percentage of the shared ownership property being sold by the vendor */
  sharedPercentage: z.number().nullable().optional(),
  /** The rent payable on the remainder of the shared ownership property */ rent: z.number().nullable().optional(),
  /** The frequency at which the shared ownership rent should be paid */
  rentFrequency: z.string().nullable().optional(),
})
export const createPropertySharedOwnershipModel = propertySharedOwnershipModel
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export const createPropertySellingModel = z.object({
  /** The date that the property was marked as for sale */ instructed: z.string().nullable().optional(),
  /** The marketing price of the property */ price: z.number().int().nullable().optional(),
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
  tenure: createPropertyTenureModel.nullable().optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  sellingAgency: z.string().nullable().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  agencyId: z.string().nullable().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().nullable().optional(),
  fee: createPropertyCommissionFeeModel.nullable().optional(),
  /** The agent's recommended asking price */ recommendedPrice: z.number().int().nullable().optional(),
  /** The agent's valuation price */ valuationPrice: z.number().int().nullable().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  sharedOwnership: createPropertySharedOwnershipModel.nullable().optional(),
})
/** Representation of property details specific to utilities */
export const utilityModel = z.object({
  /** A flag denoting whether or not the property has gas connected */ hasGas: z.boolean().nullable().optional(),
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
export const createUtilityModel = utilityModel
/** Representation of a property details related to deposit */
export const propertyLettingsDepositModel = z.object({
  /** The type of deposit (weeks/months/fixed) */ type: z.string().nullable().optional(),
  /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
  amount: z.number().nullable().optional(),
})
export const createPropertyLettingsDepositModel = propertyLettingsDepositModel
/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel = z.object({
  /** The date the property was marked as to let */ instructed: z.string().nullable().optional(),
  /** The date the property is available from */ availableFrom: z.string().nullable().optional(),
  /** The date the property is available to */ availableTo: z.string().nullable().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().nullable().optional(),
  /** The rent being charged for the property */ rent: z.number().nullable().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** Details of any bills that are included in the rent */ rentIncludes: z.string().nullable().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().nullable().optional(),
  /** The acceptable letting terms (short/long/any) */ term: z.string().nullable().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().nullable().optional(),
  managementFee: createPropertyCommissionFeeModel.nullable().optional(),
  lettingFee: createPropertyCommissionFeeModel.nullable().optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
  utilities: createUtilityModel.nullable().optional(),
  deposit: createPropertyLettingsDepositModel.nullable().optional(),
})
/** Request body used to set the energy performance rating information for properties in Ireland */
export const createIrelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().nullable().optional(),
  /** The BER rating of the property */ rating: z.string().nullable().optional(),
  /** The BER certificate reference number */ refNumber: z.string().nullable().optional(),
  /** The energy performance indicator for the property */ epi: z.string().nullable().optional(),
})
/** Request body used to set the data specific to properties in Ireland */
export const createIrelandPropertyModel = z.object({
  buildingEnergyRating: createIrelandPropertyBERModel.nullable().optional(),
})
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel = z.object({ irl: createIrelandPropertyModel.nullable().optional() })
/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel = z.object({
  /** The name of the room */ name: z.string().nullable().optional(),
  /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
  /** Short description of the room */ description: z.string().nullable().optional(),
})
/** Request body used to create a new property */
export const createPropertyModel = z.object({
  /** The date the owner of the property was last called */ lastCall: z.string().nullable().optional(),
  /** The date the owner of the property is next due to be called */ nextCall: z.string().nullable().optional(),
  /** The marketing mode of the property (selling/letting/sellingAndLetting) */ marketingMode: z.string(),
  /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string(),
  /** The strapline description containing a short summary about the property */
  strapline: z.string().nullable().optional(),
  /** The brief description of the property */ description: z.string().nullable().optional(),
  /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  summary: z.string().nullable().optional(),
  /** An optional alternative identifier specified for this property */ alternateId: z.string().nullable().optional(),
  /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  address: createPropertyAddressModel,
  /** The total number of bedrooms in the property */ bedrooms: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms in the property */ bedroomsMax: z.number().int().nullable().optional(),
  /** The number of units offered on the market. This is typically used when marketing development sites. */
  numberOfUnits: z.number().int().nullable().optional(),
  /** The total number of reception rooms in the property */ receptions: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms in the property */ receptionsMax: z.number().int().nullable().optional(),
  /** The total number of bathrooms in the property */ bathrooms: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms in the property */ bathroomsMax: z.number().int().nullable().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parkingSpaces: z.number().int().nullable().optional(),
  /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
  councilTax: z.string().nullable().optional(),
  /** A flag denoting whether or not this property can be advertised on the internet */
  internetAdvertising: z.boolean().nullable().optional(),
  /** The arrangements regarding viewing the property */ viewingArrangements: z.string().nullable().optional(),
  /** The url of a video associated with this property, such as a virtual tour */
  videoUrl: z.string().nullable().optional(),
  /** The caption for the video url associated with this property */ videoCaption: z.string().nullable().optional(),
  /** The url of a second video associated with this property, such as a virtual tour */
  video2Url: z.string().nullable().optional(),
  /** The caption for the second video url associated with this property */
  video2Caption: z.string().nullable().optional(),
  /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  notes: z.string().nullable().optional(),
  /** The long description of the property */ longDescription: z.string().nullable().optional(),
  /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  floorLevel: z.number().int().nullable().optional(),
  /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  internalFloors: z.number().int().nullable().optional(),
  /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  totalFloors: z.number().int().nullable().optional(),
  /** The status of the advertising board sited outside or near to the property */
  boardStatus: z.string().nullable().optional(),
  /** Any notes relevant to the advertising board sited outside or near to the property */
  boardNotes: z.string().nullable().optional(),
  /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  boardUpdated: z.string().nullable().optional(),
  /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  valuation: z.string().nullable().optional(),
  epc: createPropertyEpcModel.nullable().optional(),
  externalArea: createPropertyExternalAreaModel.nullable().optional(),
  internalArea: createPropertyInternalAreaModel.nullable().optional(),
  rural: createPropertyRuralModel.nullable().optional(),
  selling: createPropertySellingModel.nullable().optional(),
  letting: createPropertyLettingModel.nullable().optional(),
  regional: createPropertyRegionalModel.nullable().optional(),
  /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).nullable().optional(),
  /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).nullable().optional(),
  /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).nullable().optional(),
  /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).nullable().optional(),
  /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).nullable().optional(),
  /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).nullable().optional(),
  /** Details of each room in the property */ rooms: z.array(createPropertyRoomModel).nullable().optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().nullable().optional(),
  /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** The unique identifier of the area that the property resides in */ areaId: z.string().nullable().optional(),
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
  /** Comments regarding the service charge of the property */ serviceChargeComment: z.string().nullable().optional(),
  /** App specific metadata to set against the property */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to set the geolocation coordinates of a new property's address */
export type CreatePropertyGeolocationModel = {
  latitude: /** The latitude coordinate of the coordinate pair */ number
  longitude: /** The longitude coordinate of the coordinate pair */ number
}
/** Request body used to set the address of a new property */
export type CreatePropertyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1: /** The first line of the address */ string
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: CreatePropertyGeolocationModel | undefined
}
/** Request body used to set the EPC statistic of a new property */
export type CreatePropertyEpcModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  boolean | undefined
  eer?: /** The current energy efficiency rating */ number | undefined
  eerPotential?: /** The potential energy efficiency rating */ number | undefined
  eir?: /** The current environmental impact rating */ number | undefined
  eirPotential?: /** The potential environmental impact rating */ number | undefined
  fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
  firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
}
/** Request body to set the external land area of a new property */
export type CreatePropertyExternalAreaModel = {
  type?: /** The unit of area (acres/hectares) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */ number | undefined
}
/** Request body to set the internal dimensions of a new property */
export type CreatePropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
/** Request body used to set details specific to rural properties */
export type CreatePropertyRuralModel = {
  buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined
  landDescription?: /** Details of the land associated with the property. */ string | undefined
}
/** Request body used to set the tenure of a new property */
export type CreatePropertyTenureModel = {
  type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  string | undefined
  expiry?: /** The tenure expiration date */ string | undefined
}
/** Request body used to set the commission fee for a property */
export type CreatePropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
/** Details relating to the shared ownership of the property */
export type PropertySharedOwnershipModel = {
  sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */ number | undefined
  rent?: /** The rent payable on the remainder of the shared ownership property */ number | undefined
  rentFrequency?: /** The frequency at which the shared ownership rent should be paid */ string | undefined
}
export type CreatePropertySharedOwnershipModel = PropertySharedOwnershipModel
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export type CreatePropertySellingModel = {
  instructed?: /** The date that the property was marked as for sale */ string | undefined
  price?: /** The marketing price of the property */ number | undefined
  reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */ number | undefined
  qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  string | undefined
  status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  string | undefined
  completed?: /** The date the property sale was completed */ string | undefined
  exchanged?: /** The date the property was exchanged */ string | undefined
  accountPaid?: /** The date the property account was paid */ string | undefined
  tenure?: CreatePropertyTenureModel | undefined
  sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  string | undefined
  agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  string | undefined
  agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
  fee?: CreatePropertyCommissionFeeModel | undefined
  recommendedPrice?: /** The agent's recommended asking price */ number | undefined
  valuationPrice?: /** The agent's valuation price */ number | undefined
  decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
  sharedOwnership?: CreatePropertySharedOwnershipModel | undefined
}
/** Representation of property details specific to utilities */
export type UtilityModel = {
  hasGas?: /** A flag denoting whether or not the property has gas connected */ boolean | undefined
  gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */ string | undefined
  gasMeterPoint?: /** The gas meter point number */ string | undefined
  electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
  string | undefined
  electricityMeterPoint?: /** The electricity meter point number */ string | undefined
  waterCompanyId?: /** The unique identifier of the company supplying the water to the property */ string | undefined
  waterMeterPoint?: /** The water meter point number */ string | undefined
  telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
  string | undefined
  internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
  string | undefined
  cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
  string | undefined
}
export type CreateUtilityModel = UtilityModel
/** Representation of a property details related to deposit */
export type PropertyLettingsDepositModel = {
  type?: /** The type of deposit (weeks/months/fixed) */ string | undefined
  amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
  number | undefined
}
export type CreatePropertyLettingsDepositModel = PropertyLettingsDepositModel
/** Request body used to set details specific to lettings marketing on a new property */
export type CreatePropertyLettingModel = {
  instructed?: /** The date the property was marked as to let */ string | undefined
  availableFrom?: /** The date the property is available from */ string | undefined
  availableTo?: /** The date the property is available to */ string | undefined
  agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */ string | undefined
  rent?: /** The rent being charged for the property */ number | undefined
  rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */ string | undefined
  rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
  furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  Array<string> | undefined
  agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  term?: /** The acceptable letting terms (short/long/any) */ string | undefined
  status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  string | undefined
  landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
  managementFee?: CreatePropertyCommissionFeeModel | undefined
  lettingFee?: CreatePropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: CreateUtilityModel | undefined
  deposit?: CreatePropertyLettingsDepositModel | undefined
}
/** Request body used to set the energy performance rating information for properties in Ireland */
export type CreateIrelandPropertyBERModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  boolean | undefined
  rating?: /** The BER rating of the property */ string | undefined
  refNumber?: /** The BER certificate reference number */ string | undefined
  epi?: /** The energy performance indicator for the property */ string | undefined
}
/** Request body used to set the data specific to properties in Ireland */
export type CreateIrelandPropertyModel = { buildingEnergyRating?: CreateIrelandPropertyBERModel | undefined }
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type CreatePropertyRegionalModel = { irl?: CreateIrelandPropertyModel | undefined }
/** Request body to create a room in the Rooms collection of a new property */
export type CreatePropertyRoomModel = {
  name?: /** The name of the room */ string | undefined
  dimensions?: /** Details about the dimensions of the room */ string | undefined
  description?: /** Short description of the room */ string | undefined
}
/** Request body used to create a new property */
export type CreatePropertyModel = {
  lastCall?: /** The date the owner of the property was last called */ string | undefined
  nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
  marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string
  departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string
  strapline?: /** The strapline description containing a short summary about the property */ string | undefined
  description?: /** The brief description of the property */ string | undefined
  summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  string | undefined
  alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
  specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  address: CreatePropertyAddressModel
  bedrooms?: /** The total number of bedrooms in the property */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined
  numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
  number | undefined
  receptions?: /** The total number of reception rooms in the property */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined
  bathrooms?: /** The total number of bathrooms in the property */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined
  parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  number | undefined
  councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
  internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
  boolean | undefined
  viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
  videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
  videoCaption?: /** The caption for the video url associated with this property */ string | undefined
  video2Url?: /** The url of a second video associated with this property, such as a virtual tour */ string | undefined
  video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
  notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  string | undefined
  longDescription?: /** The long description of the property */ string | undefined
  floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
  boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
  string | undefined
  boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  string | undefined
  valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  string | undefined
  epc?: CreatePropertyEpcModel | undefined
  externalArea?: CreatePropertyExternalAreaModel | undefined
  internalArea?: CreatePropertyInternalAreaModel | undefined
  rural?: CreatePropertyRuralModel | undefined
  selling?: CreatePropertySellingModel | undefined
  letting?: CreatePropertyLettingModel | undefined
  regional?: CreatePropertyRegionalModel | undefined
  type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  rooms?: /** Details of each room in the property */ Array<CreatePropertyRoomModel> | undefined
  roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  boolean | undefined
  negotiatorId: /** The unique identifier of the negotiator managing the property */ string
  officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  Array<string>
  areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
  url?: /** The url to the property on an external website */ string | undefined
  urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
  groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
  groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
  groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
  string | undefined
  groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */ number | undefined
  serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
  serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
  metadata?: /** App specific metadata to set against the property */ Record<string, Record<string, never>> | undefined
}
/** Request body used to create a new certificate */
export const createCertificateModel = z.object({
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().nullable().optional(),
  /** The certificate's type */ typeId: z.string().nullable().optional(),
  /** The certificate's start date */ start: z.string().nullable().optional(),
  /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
  /** The unique identifier of the company that supplied, or is supplying, the certificate */
  companyId: z.string().nullable().optional(),
  /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
  /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
})
/** Request body used to create a new certificate */
export type CreateCertificateModel = {
  category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined
  typeId?: /** The certificate's type */ string | undefined
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
  string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
}
/** Request body used to create an individual key included in a key set */
export const createIndividualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().nullable().optional(),
})
/** Request body used to create a new set of keys */
export const createKeyModel = z.object({
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().nullable().optional(),
  /** The unique identifier of the key type */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the office responsible for the key */ officeId: z.string().nullable().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z.array(createIndividualKeyModel).nullable().optional(),
})
/** Request body used to create an individual key included in a key set */
export type CreateIndividualKeyModel = { name?: /** The name of the individual key in the set */ string | undefined }
/** Request body used to create a new set of keys */
export type CreateKeyModel = {
  number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  string | undefined
  typeId?: /** The unique identifier of the key type */ string | undefined
  officeId?: /** The unique identifier of the office responsible for the key */ string | undefined
  keysInSet?: /** A listing of the individual keys included in the set */ Array<CreateIndividualKeyModel> | undefined
}
/** Request body used to create a new key movement */
export const createKeyMovementModel = z.object({
  /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
  checkInRequired: z.boolean().nullable().optional(),
  /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
  checkOutToId: z.string().nullable().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().nullable().optional(),
})
/** Request body used to create a new key movement */
export type CreateKeyMovementModel = {
  checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
  boolean | undefined
  checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
  string | undefined
  checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | undefined
  checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
  string | undefined
}
/** Request body used for checking in a key */
export const checkInKeyModel = z.object({
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().nullable().optional(),
})
/** Request body used for checking in a key */
export type CheckInKeyModel = {
  checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */ string | undefined
}
/** Request body used to create a new check */
export const createPropertyCheckModel = z.object({
  /** Short, descriptive text describing the purpose of the check */ description: z.string(),
  /** The type of the check (preInstruction) */ type: z.string(),
  /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string(),
})
/** Request body used to create a new check */
export type CreatePropertyCheckModel = {
  description: /** Short, descriptive text describing the purpose of the check */ string
  type: /** The type of the check (preInstruction) */ string
  status: /** The status of the check (needed/notNeeded/arranging/completed) */ string
}
/** Representation of the the commission fee for a property */
export const propertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The commission letting fee amount */ amount: z.number().nullable().optional(),
})
/** Model for the creation of a new property appraisal */
export const createPropertyAppraisalModel = z.object({
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** The date of the appraisal */ date: z.string().nullable().optional(),
  /** The appraisal value */ price: z.number().int().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** Free-text notes associated with the appraisal */ notes: z.string().nullable().optional(),
})
/** Representation of the the commission fee for a property */
export type PropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
/** Model for the creation of a new property appraisal */
export type CreatePropertyAppraisalModel = {
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
}
/** Request body used to create a new property image */
export const createPropertyImageModel = z.object({
  /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
  data: z.string().nullable().optional(),
  /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().nullable().optional(),
  /** The unique identifier of the property attached to the image */ propertyId: z.string(),
  /** The image caption */ caption: z.string(),
  /** The type of image (photograph/floorPlan/epc/map) */ type: z.string(),
})
/** Request body used to create a new property image */
export type CreatePropertyImageModel = {
  data?: /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
  string | undefined
  fileUrl?: /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
  string | undefined
  propertyId: /** The unique identifier of the property attached to the image */ string
  caption: /** The image caption */ string
  type: /** The type of image (photograph/floorPlan/epc/map) */ string
}
/** Request body used to reindex property images */
export const reindexPropertyImagesModel = z.object({
  /** The unique identifier of the property to update */ propertyId: z.string().nullable().optional(),
  /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
  imageOrder: z.array(z.string()).nullable().optional(),
})
/** Request body used to reindex property images */
export type ReindexPropertyImagesModel = {
  propertyId?: /** The unique identifier of the property to update */ string | undefined
  imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
  Array<string> | undefined
}
/** Create Referral Model */
export const createReferralModel = z.object({
  /** The unique identifier of the referral type */ referralTypeId: z.string(),
  /** The unique identifier of the negotiator creating the referral */ negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the property */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the contact that has been referred */ contactId: z.string(),
  /** The amount paid to the agent for the referral */ amount: z.number().nullable().optional(),
})
/** Create Referral Model */
export type CreateReferralModel = {
  referralTypeId: /** The unique identifier of the referral type */ string
  negotiatorId?: /** The unique identifier of the negotiator creating the referral */ string | undefined
  propertyId?: /** The unique identifier of the property */ string | undefined
  applicantId?: /** The unique identifier of the applicant */ string | undefined
  contactId: /** The unique identifier of the contact that has been referred */ string
  amount?: /** The amount paid to the agent for the referral */ number | undefined
}
/** Request body used to create a new webhook subscription */
export const createWebhookModel = z.object({
  /** The url where the payload associated with the webhook should be sent to */ url: z.string(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().nullable().optional(),
  /** The identifiers of the topics the subscription is associated with */
  topicIds: z.array(z.string()).nullable().optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().nullable().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
/** Request body used to create a new webhook subscription */
export type CreateWebhookModel = {
  url: /** The url where the payload associated with the webhook should be sent to */ string
  description?: /** A short description associated with the webhook (ie a friendly name or label) */ string | undefined
  topicIds?: /** The identifiers of the topics the subscription is associated with */ Array<string> | undefined
  active?: /** Flag denoting whether or not the webhook is active and ready to receive data */ boolean | undefined
  ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  boolean | undefined
}
/** Request body used to update a webhook subscription */
export const updateWebhookModel = z.object({
  /** The url where the payload associated with the webhook should be sent to */ url: z.string(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().nullable().optional(),
  /** The identifiers of the topics the subscription is associated with */
  topicIds: z.array(z.string()).nullable().optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().nullable().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
/** Request body used to update a webhook subscription */
export type UpdateWebhookModel = {
  url: /** The url where the payload associated with the webhook should be sent to */ string
  description?: /** A short description associated with the webhook (ie a friendly name or label) */ string | undefined
  topicIds?: /** The identifiers of the topics the subscription is associated with */ Array<string> | undefined
  active?: /** Flag denoting whether or not the webhook is active and ready to receive data */ boolean | undefined
  ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  boolean | undefined
}
/** Request body used to create a new source of business */
export const createSourceModel = z.object({
  /** The name of the source or advertising publication */ name: z.string(),
  /** The type of the source (source/advertisement) */ type: z.string(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).nullable().optional(),
})
/** Request body used to create a new source of business */
export type CreateSourceModel = {
  name: /** The name of the source or advertising publication */ string
  type: /** The type of the source (source/advertisement) */ string
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
}
/** Request body used to create a new task, which can also be an internal message */
export const createTaskModel = z.object({
  /** The date the task becomes active (Required when 'TypeId' is given) */ activates: z.string().nullable().optional(),
  /** The date the task was completed */ completed: z.string().nullable().optional(),
  /** The unique identifier of the task type */ typeId: z.string().nullable().optional(),
  /** The unique identifer of the negotiator that created the task */ senderId: z.string(),
  /** The textual contents of the task or message */ text: z.string(),
  /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().nullable().optional(),
  /** The unique identifier of the property the task is associated to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the contact the task is associated to */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */ recipientId: z.string(),
  /** The type of the recipient (office/negotiator) */ recipientType: z.string(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new task, which can also be an internal message */
export type CreateTaskModel = {
  activates?: /** The date the task becomes active (Required when 'TypeId' is given) */ string | undefined
  completed?: /** The date the task was completed */ string | undefined
  typeId?: /** The unique identifier of the task type */ string | undefined
  senderId: /** The unique identifer of the negotiator that created the task */ string
  text: /** The textual contents of the task or message */ string
  landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
  propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
  applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
  contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
  recipientId: /** The unique identifier of the negotiator or office the task is being sent to */ string
  recipientType: /** The type of the recipient (office/negotiator) */ string
  metadata?: /** App specific metadata that has been set against the task */
  Record<string, Record<string, never>> | undefined
}
/** Request body used to set letting fees on a new tenancy */
export const createTenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
/** Request body used to set management fees on a new tenancy */
export const createTenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
/** Request body used to set the deposit of a new tenancy */
export const createTenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().nullable().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().nullable().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().nullable().optional(),
  /** The amount of deposit held */ sum: z.number().nullable().optional(),
})
/** Request body used to set the source of a new tenancy */
export const createTenancySourceModel = z.object({
  /** The unique identifier of the source for the tenancy */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Request body used to create a new tenancy */
export const createTenancyModel = z.object({
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
  status: z.string().nullable().optional(),
  /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string(),
  /** The amount of rent required, returned in relation to the collection frequency */ rent: z.number(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string(),
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
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().nullable().optional(),
  /** The unique identifier of the type of tenancy */ typeId: z.string(),
  /** The unique identifier of the negotiator who is managing the tenancy */ negotiatorId: z.string(),
  /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string(),
  /** The unique identifier of the applicant who has applied to be a tenant */ applicantId: z.string(),
  /** Financial notes set against the tenancy */ feeNotes: z.string().nullable().optional(),
  lettingFee: createTenancyLettingFeeModel.nullable().optional(),
  managementFee: createTenancyManagementFeeModel.nullable().optional(),
  deposit: createTenancyDepositModel.nullable().optional(),
  source: createTenancySourceModel.nullable().optional(),
  /** App specific metadata to set against the tenancy */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to set letting fees on a new tenancy */
export type CreateTenancyLettingFeeModel = {
  type?: /** The letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  string | undefined
}
/** Request body used to set management fees on a new tenancy */
export type CreateTenancyManagementFeeModel = {
  type?: /** The management fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
/** Request body used to set the deposit of a new tenancy */
export type CreateTenancyDepositModel = {
  heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  string | undefined
  period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
  type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
  sum?: /** The amount of deposit held */ number | undefined
}
/** Request body used to set the source of a new tenancy */
export type CreateTenancySourceModel = {
  id?: /** The unique identifier of the source for the tenancy */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Request body used to create a new tenancy */
export type CreateTenancyModel = {
  startDate?: string | undefined
  endDate?: string | undefined
  status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
  string | undefined
  agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string
  rent: /** The amount of rent required, returned in relation to the collection frequency */ number
  rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */ string
  rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  string | undefined
  rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
  rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
  meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
  meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
  meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
  meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
  string | undefined
  meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
  meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
  isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
  typeId: /** The unique identifier of the type of tenancy */ string
  negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */ string
  propertyId: /** The unique identifier of the property that relates to the tenancy */ string
  applicantId: /** The unique identifier of the applicant who has applied to be a tenant */ string
  feeNotes?: /** Financial notes set against the tenancy */ string | undefined
  lettingFee?: CreateTenancyLettingFeeModel | undefined
  managementFee?: CreateTenancyManagementFeeModel | undefined
  deposit?: CreateTenancyDepositModel | undefined
  source?: CreateTenancySourceModel | undefined
  metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
}
/** Request body used to create a new tenancy check */
export const createTenancyCheckModel = z.object({
  /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
  description: z.string().nullable().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ status: z.string(),
  /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
  checkTypeId: z.string().nullable().optional(),
  /** App specific metadata to set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new tenancy check */
export type CreateTenancyCheckModel = {
  description?: /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
  string | undefined
  type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
  status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string
  checkTypeId?: /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
  string | undefined
  metadata?: /** App specific metadata to set against the tenancy check */
  Record<string, Record<string, never>> | undefined
}
/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export const createTenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
  /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
})
/** Request body used to set a break clauses break from details */
export const createTenancyBreakFromModel = z.object({
  /** The date the break from clause can be used */ date: z.string().nullable().optional(),
  /** The minimum number of months until the break clause can be used */
  minTermMonths: z.number().int().nullable().optional(),
})
/** Request body used to set a break clauses notice required details */
export const createTenancyNoticeRequiredModel = z.object({
  /** The date a break clauses notice is required by */ date: z.string().nullable().optional(),
  /** The number of months the notice is required before the break clause */
  beforeBreakMonths: z.number().int().nullable().optional(),
})
/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel = z.object({
  /** The identifier of the associated to the break clause */ typeId: z.string().nullable().optional(),
  /** The date the break clause becomes/became active */ active: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant/mutual) */ appliesTo: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
  breakFrom: createTenancyBreakFromModel.nullable().optional(),
  noticeRequired: createTenancyNoticeRequiredModel.nullable().optional(),
})
/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export type CreateTenancyAgreementModel = {
  landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
  tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
}
/** Request body used to set a break clauses break from details */
export type CreateTenancyBreakFromModel = {
  date?: /** The date the break from clause can be used */ string | undefined
  minTermMonths?: /** The minimum number of months until the break clause can be used */ number | undefined
}
/** Request body used to set a break clauses notice required details */
export type CreateTenancyNoticeRequiredModel = {
  date?: /** The date a break clauses notice is required by */ string | undefined
  beforeBreakMonths?: /** The number of months the notice is required before the break clause */ number | undefined
}
/** Request body used to update tenancy break clause */
export type CreateTenancyBreakClauseModel = {
  typeId?: /** The identifier of the associated to the break clause */ string | undefined
  active?: /** The date the break clause becomes/became active */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
  breakFrom?: CreateTenancyBreakFromModel | undefined
  noticeRequired?: CreateTenancyNoticeRequiredModel | undefined
}
/** Request body used to set a tenancy allowance */
export const createTenancyAllowanceModel = z.object({
  /** The identifier of the associated to the allowance */ typeId: z.string().nullable().optional(),
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
})
/** Request body used to set a tenancy allowance */
export type CreateTenancyAllowanceModel = {
  typeId?: /** The identifier of the associated to the allowance */ string | undefined
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
}
/** Request body used to set a tenancy responsibility */
export const createTenancyResponsibilityModel = z.object({
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  agreements: createTenancyAgreementModel.nullable().optional(),
})
/** Request body used to set a tenancy responsibility */
export type CreateTenancyResponsibilityModel = {
  typeId?: /** The identifier of the associated to the responsibility */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: CreateTenancyAgreementModel | undefined
}
/** Request body used to create a tenancy renewals letting fee */
export const createLettingFeeRenewalModel = z.object({
  /** The letting fee type (fixed/perentage) */ type: z.string().nullable().optional(),
  /** The letting fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().nullable().optional(),
  /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
/** Request body used to create a tenancy renewals management fee */
export const createManagementFeeRenewalModel = z.object({
  /** The mangement fee type (fixed/perentage) */ type: z.string().nullable().optional(),
  /** The mangement fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().nullable().optional(),
  /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
/** Request body used to create a tenancy renewal negotiation */
export const createTenancyRenewalModel = z.object({
  /** The proposed start date of the tenancy renewal */ startDate: z.string().nullable().optional(),
  /** The proposed end date of the tenancy renewal */ endDate: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who is managing this tenancy renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */ rentFrequency: z.string().nullable().optional(),
  lettingFee: createLettingFeeRenewalModel.nullable().optional(),
  managementFee: createManagementFeeRenewalModel.nullable().optional(),
})
/** Request body used to create a tenancy renewals letting fee */
export type CreateLettingFeeRenewalModel = {
  type?: /** The letting fee type (fixed/perentage) */ string | undefined
  amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  string | undefined
}
/** Request body used to create a tenancy renewals management fee */
export type CreateManagementFeeRenewalModel = {
  type?: /** The mangement fee type (fixed/perentage) */ string | undefined
  amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
/** Request body used to create a tenancy renewal negotiation */
export type CreateTenancyRenewalModel = {
  startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
  endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */ string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  lettingFee?: CreateLettingFeeRenewalModel | undefined
  managementFee?: CreateManagementFeeRenewalModel | undefined
}
/** Request body used to create a new tenancy renewal check */
export const createTenancyRenewalCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ status: z.string(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The name of this tenancy check */ description: z.string().nullable().optional(),
  /** App specific metadata to set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Request body used to create a new tenancy renewal check */
export type CreateTenancyRenewalCheckModel = {
  status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string
  checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  string | undefined
  description?: /** The name of this tenancy check */ string | undefined
  metadata?: /** App specific metadata to set against the tenancy renewal check */
  Record<string, Record<string, never>> | undefined
}
/** Request body used to create a new supplier invoice */
export const createSupplierInvoiceModel = z.object({
  /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
  worksOrderId: z.string().nullable().optional(),
  /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
  tenancyId: z.string().nullable().optional(),
  /** The supplier invoice work description */ description: z.string(),
  /** The identifier of the nominal account the supplier invoice should be attributed to */ accountId: z.string(),
  /** The invoice reference */ invoiceRef: z.string(),
  /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
  negotiatorId: z.string(),
  /** The invoice date */ invoiceDate: z.string(),
  /** The date the invoice should be paid by */ dueDate: z.string().nullable().optional(),
  /** The invoice net amount */ netAmount: z.number(),
  /** The invoice tax amount */ taxAmount: z.number(),
})
/** Request body used to create a new supplier invoice */
export type CreateSupplierInvoiceModel = {
  worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
  string | undefined
  propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
  string | undefined
  companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
  string | undefined
  tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
  string | undefined
  description: /** The supplier invoice work description */ string
  accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */ string
  invoiceRef: /** The invoice reference */ string
  negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
  string
  invoiceDate: /** The invoice date */ string
  dueDate?: /** The date the invoice should be paid by */ string | undefined
  netAmount: /** The invoice net amount */ number
  taxAmount: /** The invoice tax amount */ number
}
/** Request body used to create or update a relationship between a vendor and a contact or company */
export const insertVendorContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */ associatedId: z.string(),
  /** The type of relationship to create (contact/company) */ associatedType: z.string(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean(),
})
/** Request body used to create or update a relationship between a vendor and a contact or company */
export type InsertVendorContactRelationshipModel = {
  associatedId: /** The unique identifier of the contact or company to create a relationship with */ string
  associatedType: /** The type of relationship to create (contact/company) */ string
  isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  boolean
}
/** Representation of a works order item */
export const createWorksOrderItemModel = z.object({
  /** The notes attached to the works order item */ notes: z.string(),
  /** The party to be charged for the work being carried out (landlord/tenant) */ chargeTo: z.string(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().nullable().optional(),
  /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().nullable().optional(),
  /** The net cost of the work to be carried out */ netAmount: z.number().nullable().optional(),
  /** The cost of the vat associated with the work */ vatAmount: z.number().nullable().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().nullable().optional(),
})
/** Request body used to create a new works order */
export const createWorksOrderModel = z.object({
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the property where the work is to be carried out */ propertyId: z.string(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that booked the works order */ negotiatorId: z.string(),
  /** The unique id of the type of work that needs to be carried out */ typeId: z.string().nullable().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string(),
  /** A free text description of the work required */ description: z.string(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */ reporter: z.string(),
  /** The priority level of the works order (low/medium/high) */ priority: z.string().nullable().optional(),
  /** The date when the works order was booked */ booked: z.string().nullable().optional(),
  /** The date when the work is required to be completed by */ required: z.string().nullable().optional(),
  /** The date when the work was completed */ completed: z.string().nullable().optional(),
  /** Individual work items to attach to the works order */ items: z.array(createWorksOrderItemModel),
  /** App specific metadata to set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Representation of a works order item */
export type CreateWorksOrderItemModel = {
  notes: /** The notes attached to the works order item */ string
  chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */ string
  estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  number | undefined
  estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined
  netAmount?: /** The net cost of the work to be carried out */ number | undefined
  vatAmount?: /** The cost of the vat associated with the work */ number | undefined
  reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  number | undefined
}
/** Request body used to create a new works order */
export type CreateWorksOrderModel = {
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId: /** The unique identifier of the property where the work is to be carried out */ string
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId: /** The unique identifier of the negotiator that booked the works order */ string
  typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined
  status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string
  description: /** A free text description of the work required */ string
  reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */ string
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  items: /** Individual work items to attach to the works order */ Array<CreateWorksOrderItemModel>
  metadata?: /** App specific metadata to set against the works order */
  Record<string, Record<string, never>> | undefined
}
export const linkModel = z.object({ href: z.string().nullable().optional() })
/** Represents an unmapped requirement type */
export const unmappedRequirementModel = z.object({
  /** The type of unmapped requirement */ type: z.string().nullable().optional(),
  /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
})
/** The details specific to applicants with a marketingMode of buying */
export const applicantBuyingModel = z.object({
  /** The lower bound of the applicant's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the applicant's budget */ priceTo: z.number().int().nullable().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's buying reason */ reasonId: z.string().nullable().optional(),
  /** The identifier of the applicant's selling position */ positionId: z.string().nullable().optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).nullable().optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().nullable().optional(),
  leaseRemaining: applicantLeaseRemaining.nullable().optional(),
})
/** The details specific to applicants with a marketingMode of renting */
export const applicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */ moveDate: z.string().nullable().optional(),
  /** The applicant's preferred letting term (long/short/any) */ term: z.string().nullable().optional(),
  /** The lower bound of the applicant's budget */ rentFrom: z.number().nullable().optional(),
  /** The upper bound of the applicant's budget */ rentTo: z.number().nullable().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
  furnishing: z.array(z.string()).nullable().optional(),
  /** The identifier of the applicant's renting position */ positionId: z.string().nullable().optional(),
})
/** An applicant's commercial details */
export const applicantCommercialModel = z.object({
  /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  useClass: z.array(z.string()).nullable().optional(),
  /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  floorLevel: z.array(z.string()).nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export const applicantContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** Representation of additional contact details */
export const additionalContactDetailModel = z.object({
  /** The type of contact detail */ type: z.string().nullable().optional(),
  /** The contact detail */ value: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact or company associated to an applicant */
export const applicantContactModel = z.object({
  /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact or company */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  primaryAddress: applicantContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** Representation of an applicant */
export const applicantModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the applicant */ id: z.string().nullable().optional(),
  /** The date and time when the applicant was created */ created: z.string().nullable().optional(),
  /** The date and time when the applicant was last modified */ modified: z.string().nullable().optional(),
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string().nullable().optional(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  currency: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().nullable().optional(),
  /** A free text field describing any adhoc buying or renting requirements */ notes: z.string().nullable().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().nullable().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().nullable().optional(),
  /** The status id of the applicant */ statusId: z.string().nullable().optional(),
  /** The date when the applicant was last contacted */ lastCall: z.string().nullable().optional(),
  /** The date when the applicant is next due to be contacted */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().nullable().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().nullable().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).nullable().optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).nullable().optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).nullable().optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).nullable().optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).nullable().optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).nullable().optional(),
  /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).nullable().optional(),
  /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedRequirements: z.array(unmappedRequirementModel).nullable().optional(),
  /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMin: z.number().int().nullable().optional(),
  /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().nullable().optional(),
  /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMin: z.number().int().nullable().optional(),
  /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().nullable().optional(),
  /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMin: z.number().int().nullable().optional(),
  /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMax: z.number().int().nullable().optional(),
  /** The applicant's location type (areas/addresses/none) */ locationType: z.string().nullable().optional(),
  /** The applicant's location options */ locationOptions: z.array(z.string()).nullable().optional(),
  /** The date and time the applicant was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag denoting whether or not this applicant is archived */ fromArchive: z.boolean().nullable().optional(),
  buying: applicantBuyingModel.nullable().optional(),
  renting: applicantRentingModel.nullable().optional(),
  externalArea: applicantExternalAreaModel.nullable().optional(),
  internalArea: applicantInternalAreaModel.nullable().optional(),
  source: applicantSourceModel.nullable().optional(),
  commercial: applicantCommercialModel.nullable().optional(),
  regional: applicantRegionalModel.nullable().optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z.array(applicantContactModel).nullable().optional(),
  /** App specific metadata that has been set against the applicant */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the applicant. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
export type LinkModel = { href?: string | undefined }
/** Represents an unmapped requirement type */
export type UnmappedRequirementModel = {
  type?: /** The type of unmapped requirement */ string | undefined
  value?: /** The value associated to the unmapped type */ string | undefined
}
/** The details specific to applicants with a marketingMode of buying */
export type ApplicantBuyingModel = {
  priceFrom?: /** The lower bound of the applicant's budget */ number | undefined
  priceTo?: /** The upper bound of the applicant's budget */ number | undefined
  decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  Array<string> | undefined
  reasonId?: /** The identifier of the applicant's buying reason */ string | undefined
  positionId?: /** The identifier of the applicant's selling position */ string | undefined
  tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  Array<string> | undefined
  mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */ string | undefined
  leaseRemaining?: ApplicantLeaseRemaining | undefined
}
/** The details specific to applicants with a marketingMode of renting */
export type ApplicantRentingModel = {
  moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
  term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
  rentFrom?: /** The lower bound of the applicant's budget */ number | undefined
  rentTo?: /** The upper bound of the applicant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  string | undefined
  furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
  Array<string> | undefined
  positionId?: /** The identifier of the applicant's renting position */ string | undefined
}
/** An applicant's commercial details */
export type ApplicantCommercialModel = {
  useClass?: /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  floorLevel?: /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
}
/** Representation of the physical address of a building or premise */
export type ApplicantContactAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** Representation of additional contact details */
export type AdditionalContactDetailModel = {
  type?: /** The type of contact detail */ string | undefined
  value?: /** The contact detail */ string | undefined
}
/** A summarised view of the details of a contact or company associated to an applicant */
export type ApplicantContactModel = {
  id?: /** The unique identifier of the contact or company */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (company/contact) */ string | undefined
  homePhone?: /** The home phone number of the contact or company */ string | undefined
  workPhone?: /** The work phone number of the contact or company */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact or company */ string | undefined
  email?: /** The email address of the contact or company */ string | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
  primaryAddress?: ApplicantContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
/** Representation of an applicant */
export type ApplicantModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the applicant */ string | undefined
  created?: /** The date and time when the applicant was created */ string | undefined
  modified?: /** The date and time when the applicant was last modified */ string | undefined
  marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  string | undefined
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId?: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string | undefined
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  unmappedRequirements?: /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<UnmappedRequirementModel> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  archivedOn?: /** The date and time the applicant was archived */ string | undefined
  fromArchive?: /** A flag denoting whether or not this applicant is archived */ boolean | undefined
  buying?: ApplicantBuyingModel | undefined
  renting?: ApplicantRentingModel | undefined
  externalArea?: ApplicantExternalAreaModel | undefined
  internalArea?: ApplicantInternalAreaModel | undefined
  source?: ApplicantSourceModel | undefined
  commercial?: ApplicantCommercialModel | undefined
  regional?: ApplicantRegionalModel | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  related?: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  Array<ApplicantContactModel> | undefined
  metadata?: /** App specific metadata that has been set against the applicant */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the applicant. Used for managing update concurrency */
  string | undefined
}
/** Representation of a relationship between an applicant and a contact or company */
export const applicantContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the applicant relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the applicant */ applicantId: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
  isMain: z.boolean().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
})
/** Representation of a relationship between an applicant and a contact or company */
export type ApplicantContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the applicant relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  applicantId?: /** The unique identifier of the applicant */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
  boolean | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
}
/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export const areaModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the area */ id: z.string().nullable().optional(),
  /** The date and time when the area was created */ created: z.string().nullable().optional(),
  /** The date and time when the area was last modified */ modified: z.string().nullable().optional(),
  /** The name of the area */ name: z.string().nullable().optional(),
  /** A flag denoting whether the area can currently be selected against properties and applicants */
  active: z.boolean().nullable().optional(),
  /** The type of area (postcodes/polygon/group) */ type: z.string().nullable().optional(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
  parentIds: z.array(z.string()).nullable().optional(),
  /** The ETag for the current version of the area. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export type AreaModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the area */ string | undefined
  created?: /** The date and time when the area was created */ string | undefined
  modified?: /** The date and time when the area was last modified */ string | undefined
  name?: /** The name of the area */ string | undefined
  active?: /** A flag denoting whether the area can currently be selected against properties and applicants */
  boolean | undefined
  type?: /** The type of area (postcodes/polygon/group) */ string | undefined
  area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments associated to the area */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  Array<string> | undefined
  parentIds?: /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
  Array<string> | undefined
  _eTag?: /** The ETag for the current version of the area. Used for managing update concurrency */ string | undefined
}
/** Representation of an appointments recurrence details */
export const recurrenceModel = z.object({
  /** The recurrence interval */ interval: z.number().int().nullable().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().nullable().optional(),
  /** The date and time of the last occurrence of the appointment */ until: z.string().nullable().optional(),
})
/** Follow up information relating to an appointment */
export const appointmentFollowUpModel = z.object({
  /** The date when the appointment should be followed up */ due: z.string().nullable().optional(),
  /** The unique identifier of a pre-defined follow up response type */ responseId: z.string().nullable().optional(),
  /** Free text internal follow up notes to be stored against the appointment */
  notes: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The name of the contact */ name: z.string().nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** A flag determining if the related contact is archived */ fromArchive: z.boolean().nullable().optional(),
})
/** An appointment attendee */
export const appointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().nullable().optional(),
  /** The type of attendee */ type: z.string().nullable().optional(),
  /** A collection of contacts relating to the attendee */
  contacts: z.array(appointmentContactModel).nullable().optional(),
})
/** Representation of a calendar appointment */
export const appointmentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the appointment */ id: z.string().nullable().optional(),
  /** The date and time when the appointment was created */ created: z.string().nullable().optional(),
  /** The date and time when the appointment was last modified */ modified: z.string().nullable().optional(),
  /** The date and time when the appointment will start */ start: z.string().nullable().optional(),
  /** The date and time when the appointment will end */ end: z.string().nullable().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string().nullable().optional(),
  /** A free text description about the appointment */ description: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment recurs */ recurring: z.boolean().nullable().optional(),
  recurrence: recurrenceModel.nullable().optional(),
  /** A flag denoting whether or not the appointment has been cancelled */ cancelled: z.boolean().nullable().optional(),
  followUp: appointmentFollowUpModel.nullable().optional(),
  /** The unique identifier of the property related to the appointment */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  attendee: appointmentAttendeeModel.nullable().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */ attended: z.string().nullable().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the appointment is virtual */ virtual: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().nullable().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().nullable().optional(),
  /** A flag determining whether or not the appointment is archived */ fromArchive: z.boolean().nullable().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().nullable().optional(),
  documents: appointmentDocumentModel.nullable().optional(),
  /** App specific metadata that has been set against the appointment */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the appointment. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an appointments recurrence details */
export type RecurrenceModel = {
  interval?: /** The recurrence interval */ number | undefined
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  until?: /** The date and time of the last occurrence of the appointment */ string | undefined
}
/** Follow up information relating to an appointment */
export type AppointmentFollowUpModel = {
  due?: /** The date when the appointment should be followed up */ string | undefined
  responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
  notes?: /** Free text internal follow up notes to be stored against the appointment */ string | undefined
}
/** A summarised view of the details of a contact associated to an appointment attendee */
export type AppointmentContactModel = {
  id?: /** The unique identifier of the contact */ string | undefined
  name?: /** The name of the contact */ string | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  fromArchive?: /** A flag determining if the related contact is archived */ boolean | undefined
}
/** An appointment attendee */
export type AppointmentAttendeeModel = {
  id?: /** The unique identifier of the attendee */ string | undefined
  type?: /** The type of attendee */ string | undefined
  contacts?: /** A collection of contacts relating to the attendee */ Array<AppointmentContactModel> | undefined
}
/** Representation of a calendar appointment */
export type AppointmentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the appointment */ string | undefined
  created?: /** The date and time when the appointment was created */ string | undefined
  modified?: /** The date and time when the appointment was last modified */ string | undefined
  start?: /** The date and time when the appointment will start */ string | undefined
  end?: /** The date and time when the appointment will end */ string | undefined
  typeId?: /** The unique identifier of the appointment type */ string | undefined
  description?: /** A free text description about the appointment */ string | undefined
  recurring?: /** A flag denoting whether or not the appointment recurs */ boolean | undefined
  recurrence?: RecurrenceModel | undefined
  cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined
  followUp?: AppointmentFollowUpModel | undefined
  propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
  organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  Array<string> | undefined
  attendee?: AppointmentAttendeeModel | undefined
  attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
  accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  boolean | undefined
  isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  boolean | undefined
  virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
  negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  boolean | undefined
  attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
  boolean | undefined
  propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  boolean | undefined
  fromArchive?: /** A flag determining whether or not the appointment is archived */ boolean | undefined
  otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  string | undefined
  documents?: AppointmentDocumentModel | undefined
  metadata?: /** App specific metadata that has been set against the appointment */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the appointment. Used for managing update concurrency */
  string | undefined
}
/** Representation of a calendar appointment */
export const openHouseAttendeeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the open house attendee */ id: z.string().nullable().optional(),
  /** The unique identifier of the open house appointment */ openHouseId: z.string().nullable().optional(),
  /** The date and time when the open house attendee was created */ created: z.string().nullable().optional(),
  /** The date and time when the open house attendee was last modified */ modified: z.string().nullable().optional(),
  /** The notes taken regarding the open house attendee */ notes: z.string().nullable().optional(),
  /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  interestLevel: z.string().nullable().optional(),
  attendee: appointmentAttendeeModel.nullable().optional(),
  /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a calendar appointment */
export type OpenHouseAttendeeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the open house attendee */ string | undefined
  openHouseId?: /** The unique identifier of the open house appointment */ string | undefined
  created?: /** The date and time when the open house attendee was created */ string | undefined
  modified?: /** The date and time when the open house attendee was last modified */ string | undefined
  notes?: /** The notes taken regarding the open house attendee */ string | undefined
  interestLevel?: /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  string | undefined
  attendee?: AppointmentAttendeeModel | undefined
  _eTag?: /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  string | undefined
}
/** Representation of the physical address of a building or premise */
export const companyAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ country: z.string().nullable().optional(),
})
/** Representation of the payments and terms configuration for a company */
export const companyPaymentsModel = z.object({
  /** The identifier of the nominal code selected in the payments and terms configuration */
  nominalAccountId: z.string().nullable().optional(),
})
/** Representation of the roles that an individual companies possesses */
export const companyRoleModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the related company */ companyId: z.string().nullable().optional(),
  /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related entity */ associatedId: z.string().nullable().optional(),
  /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().nullable().optional(),
})
/** Representation of a company */
export const companyModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the company */ id: z.string().nullable().optional(),
  /** The date and time when the company was created */ created: z.string().nullable().optional(),
  /** The date and time when the company was last modified */ modified: z.string().nullable().optional(),
  /** The name of the company */ name: z.string().nullable().optional(),
  /** The branch name of the company */ branch: z.string().nullable().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().nullable().optional(),
  /** A flag determining whether or not the company is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the company (deny/notAsked) */ marketingConsent: z.string().nullable().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()).nullable().optional(),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().nullable().optional(),
  /** The work phone number of the company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the company */ email: z.string().nullable().optional(),
  /** The date and time the company was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the company is archived */ fromArchive: z.boolean().nullable().optional(),
  address: companyAddressModel.nullable().optional(),
  payments: companyPaymentsModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
  /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the company */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the company. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** A list of relationships belonging to the company. This is later removed from the response */
  relationships: z.array(companyRoleModel).nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export type CompanyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  country?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** Representation of the payments and terms configuration for a company */
export type CompanyPaymentsModel = {
  nominalAccountId?: /** The identifier of the nominal code selected in the payments and terms configuration */
  string | undefined
}
/** Representation of the roles that an individual companies possesses */
export type CompanyRoleModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  companyId?: /** The unique identifier of the related company */ string | undefined
  associatedType?: /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */ string | undefined
  associatedId?: /** The unique identifier of the related entity */ string | undefined
  fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | undefined
}
/** Representation of a company */
export type CompanyModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the company */ string | undefined
  created?: /** The date and time when the company was created */ string | undefined
  modified?: /** The date and time when the company was last modified */ string | undefined
  name?: /** The name of the company */ string | undefined
  branch?: /** The branch name of the company */ string | undefined
  notes?: /** A free text field containing notes that describe the company's business or service offering */
  string | undefined
  active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
  vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
  typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  Array<string> | undefined
  supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
  workPhone?: /** The work phone number of the company */ string | undefined
  mobilePhone?: /** The mobile phone number of the company */ string | undefined
  email?: /** The email address of the company */ string | undefined
  archivedOn?: /** The date and time the company was archived */ string | undefined
  fromArchive?: /** A flag determining whether or not the company is archived */ boolean | undefined
  address?: CompanyAddressModel | undefined
  payments?: CompanyPaymentsModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
  boolean | undefined
  metadata?: /** App specific metadata that has been set against the company */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the company. Used for managing update concurrency */
  string | undefined
  relationships?: /** A list of relationships belonging to the company. This is later removed from the response */
  Array<CompanyRoleModel> | undefined
}
/** Representation of a contact's source */
export const contactSourceModel = z.object({
  /** The unique identifier of the source of the contact */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export const contactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().nullable().optional(),
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
})
/** Representation of the roles that an individual contacts possesses */
export const contactRoleModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the related contact */ contactId: z.string().nullable().optional(),
  /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related entity */ associatedId: z.string().nullable().optional(),
  /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().nullable().optional(),
})
/** Representation of an individual contact */
export const contactModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The date and time when the contact was created */ created: z.string().nullable().optional(),
  /** The date and time when the contact was last modified */ modified: z.string().nullable().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string().nullable().optional(),
  /** The contact's date of birth */ dateOfBirth: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is currently active */ active: z.boolean().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
  identityCheck: z.string().nullable().optional(),
  source: contactSourceModel.nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** The date and time the contact was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the contact is archived */ fromArchive: z.boolean().nullable().optional(),
  primaryAddress: contactAddressModel.nullable().optional(),
  secondaryAddress: contactAddressModel.nullable().optional(),
  workAddress: contactAddressModel.nullable().optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).nullable().optional(),
  /** A collection of categories associated to the contact. */ categoryIds: z.array(z.string()).nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().nullable().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
  /** App specific metadata that has been set against the contact */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the contact. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** A list of relationships belonging to the contact. This is later removed from the response */
  relationships: z.array(contactRoleModel).nullable().optional(),
})
/** Representation of a contact's source */
export type ContactSourceModel = {
  id?: /** The unique identifier of the source of the contact */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Representation of the physical address of a building or premise */
export type ContactAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
}
/** Representation of the roles that an individual contacts possesses */
export type ContactRoleModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  contactId?: /** The unique identifier of the related contact */ string | undefined
  associatedType?: /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */ string | undefined
  associatedId?: /** The unique identifier of the related entity */ string | undefined
  fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | undefined
}
/** Representation of an individual contact */
export type ContactModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the contact */ string | undefined
  created?: /** The date and time when the contact was created */ string | undefined
  modified?: /** The date and time when the contact was last modified */ string | undefined
  title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
  forename?: /** The contact's forename */ string | undefined
  surname?: /** The contact's surname */ string | undefined
  dateOfBirth?: /** The contact's date of birth */ string | undefined
  active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
  identityCheck?: /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
  string | undefined
  source?: ContactSourceModel | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  archivedOn?: /** The date and time the contact was archived */ string | undefined
  fromArchive?: /** A flag determining whether or not the contact is archived */ boolean | undefined
  primaryAddress?: ContactAddressModel | undefined
  secondaryAddress?: ContactAddressModel | undefined
  workAddress?: ContactAddressModel | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
  boolean | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
  metadata?: /** App specific metadata that has been set against the contact */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the contact. Used for managing update concurrency */
  string | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  relationships?: /** A list of relationships belonging to the contact. This is later removed from the response */
  Array<ContactRoleModel> | undefined
}
/** Representation of an individual contact subscription */
export const contactSubscriptionModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the subscription */ id: z.string().nullable().optional(),
  /** The unique identifier of the contact the subscription is associated with */
  contactId: z.string().nullable().optional(),
  /** The name of the subscription */ name: z.string().nullable().optional(),
  /** The name of the group this subscription belongs to, if applicable */ group: z.string().nullable().optional(),
  /** The status of the subscription (subscribed/unsubscribed) */ status: z.string().nullable().optional(),
  /** The type of subscription (mailing/event) */ type: z.string().nullable().optional(),
  /** The date and time when the subscription was started for the associated contact */
  subscribedOn: z.string().nullable().optional(),
  /** The date and time when the subscription was terminated for the associated contact */
  unsubscribedOn: z.string().nullable().optional(),
})
/** Representation of an individual contact subscription */
export type ContactSubscriptionModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the subscription */ string | undefined
  contactId?: /** The unique identifier of the contact the subscription is associated with */ string | undefined
  name?: /** The name of the subscription */ string | undefined
  group?: /** The name of the group this subscription belongs to, if applicable */ string | undefined
  status?: /** The status of the subscription (subscribed/unsubscribed) */ string | undefined
  type?: /** The type of subscription (mailing/event) */ string | undefined
  subscribedOn?: /** The date and time when the subscription was started for the associated contact */
  string | undefined
  unsubscribedOn?: /** The date and time when the subscription was terminated for the associated contact */
  string | undefined
}
/** Representation of a check list item */
export const checkListItemModel = z.object({
  /** The name of the check list item */ name: z.string().nullable().optional(),
  /** A flag to determine if the item is completed */ completed: z.boolean().nullable().optional(),
  /** The date when the item was completed */ completedDate: z.string().nullable().optional(),
})
/** Representation of an offers sales progression information */
export const conveyancingModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the offer */ id: z.string().nullable().optional(),
  /** The date and time when the offer was created */ created: z.string().nullable().optional(),
  /** The date and time when the offer was modified */ modified: z.string().nullable().optional(),
  /** Flag set to true if this offer is external */ isExternal: z.boolean().nullable().optional(),
  /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  propertyId: z.string().nullable().optional(),
  /** The address of the property that this offer is associated to */ propertyAddress: z.string().nullable().optional(),
  /** The full name of the vendor of the property */ vendor: z.string().nullable().optional(),
  /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  vendorId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  vendorSolicitorId: z.string().nullable().optional(),
  /** The full name of the buyer who has submitted the offer */ buyer: z.string().nullable().optional(),
  /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
  buyerId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
  buyerSolicitorId: z.string().nullable().optional(),
  /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
  externalAgent: z.string().nullable().optional(),
  /** The unique identifier of the agent company that holds the property instruction */
  externalAgentId: z.string().nullable().optional(),
  /** The unique identifier of the offer that sits above this one in the chain (where known) */
  upwardChainId: z.string().nullable().optional(),
  /** The unique identifier of the offer that sits below this one in the chain (where known) */
  downwardChainId: z.string().nullable().optional(),
  /** The date when the fixtures and fittings form has been completed */
  fixturesAndFittingsCompleted: z.string().nullable().optional(),
  /** The date when the title deeds were requested from land registry */
  deedsRequested: z.string().nullable().optional(),
  /** The date when the title deeds were received from land registry */ deedsReceived: z.string().nullable().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were sent */
  enquiriesSent: z.string().nullable().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were answered */
  enquiriesAnswered: z.string().nullable().optional(),
  /** The date when the buyer paid for conveyancing searches */ searchesPaid: z.string().nullable().optional(),
  /** The date when conveyancing searches were applied for */ searchesApplied: z.string().nullable().optional(),
  /** The date when conveyancing searches were received for */ searchesReceived: z.string().nullable().optional(),
  /** The date when the draft contract was sent */ contractSent: z.string().nullable().optional(),
  /** The date when the draft contract was received */ contractReceived: z.string().nullable().optional(),
  /** The date when the contract was approved */ contractApproved: z.string().nullable().optional(),
  /** The date when the vendor signed the approved contract */ contractVendorSigned: z.string().nullable().optional(),
  /** The date when the buyer signed the approved contract */ contractBuyerSigned: z.string().nullable().optional(),
  /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  mortgageRequired: z.string().nullable().optional(),
  /** The loan to value percentage of the mortgage required */
  mortgageLoanPercentage: z.number().int().nullable().optional(),
  /** The date when the mortgage application was submitted */ mortgageSubmitted: z.string().nullable().optional(),
  /** The date when the mortgage offer was received */ mortgageOfferReceived: z.string().nullable().optional(),
  /** The unique identifier of the company who will provide the mortgage */
  mortgageLenderId: z.string().nullable().optional(),
  /** The unique identifier of the company who brokered the mortgage */
  mortgageBrokerId: z.string().nullable().optional(),
  /** The date of the mortgage valuation/survey */ mortgageSurveyDate: z.string().nullable().optional(),
  /** The unique identifier of the company who will perform the mortgage valuation/survey */
  mortgageSurveyorId: z.string().nullable().optional(),
  /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
  additionalSurveyRequired: z.string().nullable().optional(),
  /** The date of the additional survey */ additionalSurveyDate: z.string().nullable().optional(),
  /** The unique identifier of the company who will perform the additional survey */
  additionalSurveyorId: z.string().nullable().optional(),
  /** The date when the vendor conveyancer confirms the exchange */ exchangedVendor: z.string().nullable().optional(),
  /** The date when the buyer conveyancer confirms the exchange */ exchangedBuyer: z.string().nullable().optional(),
  /** The date when the sale completed */ completion: z.string().nullable().optional(),
  /** Check list items to be completed as part of the sales progression process */
  checkListItems: z.array(checkListItemModel).nullable().optional(),
  /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** App specific metadata that has been set against this conveyancing record */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Representation of a check list item */
export type CheckListItemModel = {
  name?: /** The name of the check list item */ string | undefined
  completed?: /** A flag to determine if the item is completed */ boolean | undefined
  completedDate?: /** The date when the item was completed */ string | undefined
}
/** Representation of an offers sales progression information */
export type ConveyancingModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the offer */ string | undefined
  created?: /** The date and time when the offer was created */ string | undefined
  modified?: /** The date and time when the offer was modified */ string | undefined
  isExternal?: /** Flag set to true if this offer is external */ boolean | undefined
  propertyId?: /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  string | undefined
  propertyAddress?: /** The address of the property that this offer is associated to */ string | undefined
  vendor?: /** The full name of the vendor of the property */ string | undefined
  vendorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  string | undefined
  vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  string | undefined
  buyer?: /** The full name of the buyer who has submitted the offer */ string | undefined
  buyerId?: /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
  string | undefined
  buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
  string | undefined
  externalAgent?: /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
  string | undefined
  externalAgentId?: /** The unique identifier of the agent company that holds the property instruction */
  string | undefined
  upwardChainId?: /** The unique identifier of the offer that sits above this one in the chain (where known) */
  string | undefined
  downwardChainId?: /** The unique identifier of the offer that sits below this one in the chain (where known) */
  string | undefined
  fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
  string | undefined
  deedsRequested?: /** The date when the title deeds were requested from land registry */ string | undefined
  deedsReceived?: /** The date when the title deeds were received from land registry */ string | undefined
  enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */ string | undefined
  enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
  string | undefined
  searchesPaid?: /** The date when the buyer paid for conveyancing searches */ string | undefined
  searchesApplied?: /** The date when conveyancing searches were applied for */ string | undefined
  searchesReceived?: /** The date when conveyancing searches were received for */ string | undefined
  contractSent?: /** The date when the draft contract was sent */ string | undefined
  contractReceived?: /** The date when the draft contract was received */ string | undefined
  contractApproved?: /** The date when the contract was approved */ string | undefined
  contractVendorSigned?: /** The date when the vendor signed the approved contract */ string | undefined
  contractBuyerSigned?: /** The date when the buyer signed the approved contract */ string | undefined
  mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  string | undefined
  mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */ number | undefined
  mortgageSubmitted?: /** The date when the mortgage application was submitted */ string | undefined
  mortgageOfferReceived?: /** The date when the mortgage offer was received */ string | undefined
  mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */ string | undefined
  mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */ string | undefined
  mortgageSurveyDate?: /** The date of the mortgage valuation/survey */ string | undefined
  mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
  string | undefined
  additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
  string | undefined
  additionalSurveyDate?: /** The date of the additional survey */ string | undefined
  additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
  string | undefined
  exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | undefined
  exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | undefined
  completion?: /** The date when the sale completed */ string | undefined
  checkListItems?: /** Check list items to be completed as part of the sales progression process */
  Array<CheckListItemModel> | undefined
  _eTag?: /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
  string | undefined
  metadata?: /** App specific metadata that has been set against this conveyancing record */
  Record<string, Record<string, never>> | undefined
}
/** Representation of a department */
export const departmentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the department */ id: z.string().nullable().optional(),
  /** The date and time when the department was created */ created: z.string().nullable().optional(),
  /** The date and time when the department was last modified */ modified: z.string().nullable().optional(),
  /** The name of the department */ name: z.string().nullable().optional(),
  /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  typeOptions: z.array(z.string()).nullable().optional(),
  /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  styleOptions: z.array(z.string()).nullable().optional(),
  /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situationOptions: z.array(z.string()).nullable().optional(),
  /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parkingOptions: z.array(z.string()).nullable().optional(),
  /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  ageOptions: z.array(z.string()).nullable().optional(),
  /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  localityOptions: z.array(z.string()).nullable().optional(),
  /** A collection of special property feature values that will be presented by other services */
  specialFeaturesOptions: z.array(z.string()).nullable().optional(),
  /** A collection of commercial use class values that will be accepted by other services */
  commercialUseClassOptions: z.array(z.string()).nullable().optional(),
  /** A collection of commercial floor level values that will be accepted by other services */
  commercialFloorLevelOptions: z.array(z.string()).nullable().optional(),
  /** A flag to determing if the department has bedrooms configured */ hasBedrooms: z.boolean().nullable().optional(),
  /** A flag to determing if the department has bathrooms configured */ hasBathrooms: z.boolean().nullable().optional(),
  /** A flag to determing if the department has reception rooms configured */
  hasReceptionRooms: z.boolean().nullable().optional(),
  /** A flag to determing if the department has parking spaces configured */
  hasParkingSpaces: z.boolean().nullable().optional(),
  /** A flag to determing if the department allows the floor level property to be set */
  hasFloorLevelEnabled: z.boolean().nullable().optional(),
  /** A flag to determing if the department allows the internal floors property to be set */
  hasInternalFloorsEnabled: z.boolean().nullable().optional(),
  /** A flag to determing if the department allows the total floors property to be set */
  hasTotalFloorsEnabled: z.boolean().nullable().optional(),
  /** The ETag for the current version of the department. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a department */
export type DepartmentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the department */ string | undefined
  created?: /** The date and time when the department was created */ string | undefined
  modified?: /** The date and time when the department was last modified */ string | undefined
  name?: /** The name of the department */ string | undefined
  typeOptions?: /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  styleOptions?: /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  situationOptions?: /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  parkingOptions?: /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  ageOptions?: /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  localityOptions?: /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  specialFeaturesOptions?: /** A collection of special property feature values that will be presented by other services */
  Array<string> | undefined
  commercialUseClassOptions?: /** A collection of commercial use class values that will be accepted by other services */
  Array<string> | undefined
  commercialFloorLevelOptions?: /** A collection of commercial floor level values that will be accepted by other services */
  Array<string> | undefined
  hasBedrooms?: /** A flag to determing if the department has bedrooms configured */ boolean | undefined
  hasBathrooms?: /** A flag to determing if the department has bathrooms configured */ boolean | undefined
  hasReceptionRooms?: /** A flag to determing if the department has reception rooms configured */ boolean | undefined
  hasParkingSpaces?: /** A flag to determing if the department has parking spaces configured */ boolean | undefined
  hasFloorLevelEnabled?: /** A flag to determing if the department allows the floor level property to be set */
  boolean | undefined
  hasInternalFloorsEnabled?: /** A flag to determing if the department allows the internal floors property to be set */
  boolean | undefined
  hasTotalFloorsEnabled?: /** A flag to determing if the department allows the total floors property to be set */
  boolean | undefined
  _eTag?: /** The ETag for the current version of the department. Used for managing update concurrency */
  string | undefined
}
/** Representation of a document */
export const documentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the document */ id: z.string().nullable().optional(),
  /** The date and time when the document was created */ created: z.string().nullable().optional(),
  /** The date and time when the document was last modified */ modified: z.string().nullable().optional(),
  /** The type of entity that the document is associated with */ associatedType: z.string().nullable().optional(),
  /** A flag denoting whether or not the document is private */ isPrivate: z.boolean().nullable().optional(),
  /** The unique identifier of the entity that the document is associated with */
  associatedId: z.string().nullable().optional(),
  /** The unique identifier of the type of document */ typeId: z.string().nullable().optional(),
  /** The filename of the document */ name: z.string().nullable().optional(),
  /** App specific metadata that has been set against the document */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the document. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a document */
export type DocumentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the document */ string | undefined
  created?: /** The date and time when the document was created */ string | undefined
  modified?: /** The date and time when the document was last modified */ string | undefined
  associatedType?: /** The type of entity that the document is associated with */ string | undefined
  isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
  associatedId?: /** The unique identifier of the entity that the document is associated with */ string | undefined
  typeId?: /** The unique identifier of the type of document */ string | undefined
  name?: /** The filename of the document */ string | undefined
  metadata?: /** App specific metadata that has been set against the document */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the document. Used for managing update concurrency */
  string | undefined
}
/** Representation of the physical address of a building or premise */
export const enquiryAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** Request body used to create a buying enquiry */
export const enquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */ priceFrom: z.number().int().nullable().optional(),
  /** The upper bound of the prospective buyer's budget */ priceTo: z.number().int().nullable().optional(),
})
/** The details specific to enquiries with a type of lettingsApplicant */
export const enquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */ rentFrom: z.number().nullable().optional(),
  /** The upper bound of the prospective tenant's budget */ rentTo: z.number().nullable().optional(),
  /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
  rentFrequency: z.string().nullable().optional(),
})
/** Representation of an enquiry */
export const enquiryModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the enquiry */ id: z.number().int().nullable().optional(),
  /** The date and time when the enquiry was created */ created: z.string().nullable().optional(),
  /** The date and time when the enquiry was last modified */ modified: z.string().nullable().optional(),
  /** The title of the individual making the enquiry */ title: z.string().nullable().optional(),
  /** The forename of the individual making the enquiry */ forename: z.string().nullable().optional(),
  /** The surname of the individual making the enquiry */ surname: z.string().nullable().optional(),
  /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  enquiryType: z.string().nullable().optional(),
  /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  message: z.string().nullable().optional(),
  /** The status of the enquiry (pending/added/rejected/alreadyExists/duplicateEntry/spam) */
  status: z.string().nullable().optional(),
  /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  marketingConsent: z.string().nullable().optional(),
  /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  position: z.string().nullable().optional(),
  /** The unique identifier of the office related to the enquiry */ officeId: z.string().nullable().optional(),
  /** The unique identifier of the applicant related to the enquiry */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator related to the enquiry */ negotiatorId: z.string().nullable().optional(),
  /** The name of the source that the enquiry was generated by */ sourceName: z.string().nullable().optional(),
  /** The home phone number of the individual making the enquiry */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the individual making the enquiry */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the individual making the enquiry */ mobilePhone: z.string().nullable().optional(),
  /** The email of the individual making the enquiry */ email: z.string().nullable().optional(),
  address: enquiryAddressModel.nullable().optional(),
  buying: enquiryBuyingModel.nullable().optional(),
  renting: enquiryRentingModel.nullable().optional(),
  /** The number of bedrooms the prospective buyer or tenant requires */
  bedrooms: z.number().int().nullable().optional(),
  /** A list of unique property identifiers that this enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  propertyIds: z.array(z.string()).nullable().optional(),
  /** The ETag for the current version of the enquiry. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export type EnquiryAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** Request body used to create a buying enquiry */
export type EnquiryBuyingModel = {
  priceFrom?: /** The lower bound of the prospective buyer's budget */ number | undefined
  priceTo?: /** The upper bound of the prospective buyer's budget */ number | undefined
}
/** The details specific to enquiries with a type of lettingsApplicant */
export type EnquiryRentingModel = {
  rentFrom?: /** The lower bound of the prospective tenant's budget */ number | undefined
  rentTo?: /** The upper bound of the prospective tenant's budget */ number | undefined
  rentFrequency?: /** How often the tenant would like to pay the rent (weekly/monthly/annually) */ string | undefined
}
/** Representation of an enquiry */
export type EnquiryModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the enquiry */ number | undefined
  created?: /** The date and time when the enquiry was created */ string | undefined
  modified?: /** The date and time when the enquiry was last modified */ string | undefined
  title?: /** The title of the individual making the enquiry */ string | undefined
  forename?: /** The forename of the individual making the enquiry */ string | undefined
  surname?: /** The surname of the individual making the enquiry */ string | undefined
  enquiryType?: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  string | undefined
  message?: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  string | undefined
  status?: /** The status of the enquiry (pending/added/rejected/alreadyExists/duplicateEntry/spam) */
  string | undefined
  marketingConsent?: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  string | undefined
  position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  string | undefined
  officeId?: /** The unique identifier of the office related to the enquiry */ string | undefined
  applicantId?: /** The unique identifier of the applicant related to the enquiry */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator related to the enquiry */ string | undefined
  sourceName?: /** The name of the source that the enquiry was generated by */ string | undefined
  homePhone?: /** The home phone number of the individual making the enquiry */ string | undefined
  workPhone?: /** The work phone number of the individual making the enquiry */ string | undefined
  mobilePhone?: /** The mobile phone number of the individual making the enquiry */ string | undefined
  email?: /** The email of the individual making the enquiry */ string | undefined
  address?: EnquiryAddressModel | undefined
  buying?: EnquiryBuyingModel | undefined
  renting?: EnquiryRentingModel | undefined
  bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */ number | undefined
  propertyIds?: /** A list of unique property identifiers that this enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  Array<string> | undefined
  _eTag?: /** The ETag for the current version of the enquiry. Used for managing update concurrency */
  string | undefined
}
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export const identityDocumentModel = z.object({
  /** The unique identifier of the identity document */ documentId: z.string().nullable().optional(),
  /** The unique identifier of the type of identity document provided */ typeId: z.string().nullable().optional(),
  /** The date when the document expires and becomes invalid */ expiry: z.string().nullable().optional(),
  /** Details regarding the identity document (eg. passport number) */ details: z.string().nullable().optional(),
})
/** Representation of a contact identity check */
export const identityCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the identity check */ id: z.string().nullable().optional(),
  /** The unique identifier of the contact associated to the identity check */
  contactId: z.string().nullable().optional(),
  /** The date and time when the identity check was created */ created: z.string().nullable().optional(),
  /** The date and time when the identity check was last modified */ modified: z.string().nullable().optional(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string().nullable().optional(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that initiated the identity check */
  negotiatorId: z.string().nullable().optional(),
  identityDocument1: identityDocumentModel.nullable().optional(),
  identityDocument2: identityDocumentModel.nullable().optional(),
  /** App specific metadata that has been set against the identity check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the identity check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export type IdentityDocumentModel = {
  documentId?: /** The unique identifier of the identity document */ string | undefined
  typeId?: /** The unique identifier of the type of identity document provided */ string | undefined
  expiry?: /** The date when the document expires and becomes invalid */ string | undefined
  details?: /** Details regarding the identity document (eg. passport number) */ string | undefined
}
/** Representation of a contact identity check */
export type IdentityCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the identity check */ string | undefined
  contactId?: /** The unique identifier of the contact associated to the identity check */ string | undefined
  created?: /** The date and time when the identity check was created */ string | undefined
  modified?: /** The date and time when the identity check was last modified */ string | undefined
  checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
  string | undefined
  status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */ string | undefined
  identityDocument1?: IdentityDocumentModel | undefined
  identityDocument2?: IdentityDocumentModel | undefined
  metadata?: /** App specific metadata that has been set against the identity check */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the identity check. Used for managing update concurrency */
  string | undefined
}
/** Representation of an individual invoice */
export const invoiceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the invoice */ id: z.string().nullable().optional(),
  /** The date and time when the invoice was created */ created: z.string().nullable().optional(),
  /** The date and time when the invoice was last modified */ modified: z.string().nullable().optional(),
  /** The invoice reference */ reference: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the invoice */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the invoice */ propertyId: z.string().nullable().optional(),
  /** Description of the invoice */ description: z.string().nullable().optional(),
  /** The status of the invoice */ status: z.string().nullable().optional(),
  /** The date of the invoice */ date: z.string().nullable().optional(),
  /** The due date of the invoice */ dueDate: z.string().nullable().optional(),
  /** Flag indicating whether the invoice has been raised */ isRaised: z.boolean().nullable().optional(),
  /** The net amount due for the invoice in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the invoice in the system base currency */ vatAmount: z.number().nullable().optional(),
  /** The value of the invoice outstanding in the system base currency */
  outstandingAmount: z.number().nullable().optional(),
})
/** Representation of an individual invoice */
export type InvoiceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the invoice */ string | undefined
  created?: /** The date and time when the invoice was created */ string | undefined
  modified?: /** The date and time when the invoice was last modified */ string | undefined
  reference?: /** The invoice reference */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the invoice */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the invoice */ string | undefined
  description?: /** Description of the invoice */ string | undefined
  status?: /** The status of the invoice */ string | undefined
  date?: /** The date of the invoice */ string | undefined
  dueDate?: /** The due date of the invoice */ string | undefined
  isRaised?: /** Flag indicating whether the invoice has been raised */ boolean | undefined
  netAmount?: /** The net amount due for the invoice in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the invoice in the system base currency */ number | undefined
  outstandingAmount?: /** The value of the invoice outstanding in the system base currency */ number | undefined
}
/** Representation of an individual payment */
export const paymentModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the payment */ id: z.string().nullable().optional(),
  /** The date and time when the payment was created */ created: z.string().nullable().optional(),
  /** The date and time when the payment was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the payment */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the payment */ propertyId: z.string().nullable().optional(),
  /** Unique identifier of the invoice associated with the payment */ invoiceId: z.string().nullable().optional(),
  /** Description of the payment */ description: z.string().nullable().optional(),
  /** The type of payment */ type: z.string().nullable().optional(),
  /** The date of the payment */ date: z.string().nullable().optional(),
  /** The net amount due for the payment in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the payment in the system base currency */ vatAmount: z.number().nullable().optional(),
})
/** Representation of an individual payment */
export type PaymentModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the payment */ string | undefined
  created?: /** The date and time when the payment was created */ string | undefined
  modified?: /** The date and time when the payment was last modified */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the payment */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the payment */ string | undefined
  invoiceId?: /** Unique identifier of the invoice associated with the payment */ string | undefined
  description?: /** Description of the payment */ string | undefined
  type?: /** The type of payment */ string | undefined
  date?: /** The date of the payment */ string | undefined
  netAmount?: /** The net amount due for the payment in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the payment in the system base currency */ number | undefined
}
/** Representation of an individual credit */
export const creditModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** Unique identifier of the credit */ id: z.string().nullable().optional(),
  /** The date and time when the credit was created */ created: z.string().nullable().optional(),
  /** The date and time when the credit was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the credit */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the credit */ propertyId: z.string().nullable().optional(),
  /** Unique identifier of the invoice associated with the credit */ invoiceId: z.string().nullable().optional(),
  /** Description of the credit */ description: z.string().nullable().optional(),
  /** The date of the credit */ date: z.string().nullable().optional(),
  /** The net amount due for the credit in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the credit in the system base currency */ vatAmount: z.number().nullable().optional(),
})
/** Representation of an individual credit */
export type CreditModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** Unique identifier of the credit */ string | undefined
  created?: /** The date and time when the credit was created */ string | undefined
  modified?: /** The date and time when the credit was last modified */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the credit */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the credit */ string | undefined
  invoiceId?: /** Unique identifier of the invoice associated with the credit */ string | undefined
  description?: /** Description of the credit */ string | undefined
  date?: /** The date of the credit */ string | undefined
  netAmount?: /** The net amount due for the credit in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the credit in the system base currency */ number | undefined
}
/** Representation of an invoice charge */
export const chargeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the charge */ id: z.string().nullable().optional(),
  /** The date and time when the charge was created */ created: z.string().nullable().optional(),
  /** The date and time when the charge was last modified */ modified: z.string().nullable().optional(),
  /** The type of charge (charge/advertising) */ type: z.string().nullable().optional(),
  /** The unique identifier of the invoice with which this charge is associated */
  invoiceId: z.string().nullable().optional(),
  /** The unique identifier of the property with which this charge is associated */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator with which this charge is associated */
  negotiatorId: z.string().nullable().optional(),
  /** The code representing the VAT applied to this charge */ vatCode: z.string().nullable().optional(),
  /** Description of the charge */ description: z.string().nullable().optional(),
  /** The net amount */ netAmount: z.number().nullable().optional(),
  /** The VAT amount */ vatAmount: z.number().nullable().optional(),
})
/** Representation of an invoice charge */
export type ChargeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the charge */ string | undefined
  created?: /** The date and time when the charge was created */ string | undefined
  modified?: /** The date and time when the charge was last modified */ string | undefined
  type?: /** The type of charge (charge/advertising) */ string | undefined
  invoiceId?: /** The unique identifier of the invoice with which this charge is associated */ string | undefined
  propertyId?: /** The unique identifier of the property with which this charge is associated */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator with which this charge is associated */ string | undefined
  vatCode?: /** The code representing the VAT applied to this charge */ string | undefined
  description?: /** Description of the charge */ string | undefined
  netAmount?: /** The net amount */ number | undefined
  vatAmount?: /** The VAT amount */ number | undefined
}
/** Representation of a journal entry */
export const journalEntryModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The date and time when the journal entry was created */ created: z.string().nullable().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().nullable().optional(),
  /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
  associatedType: z.string().nullable().optional(),
  /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
  associatedId: z.string().nullable().optional(),
  /** The type of journal entry */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that created the entry */ negotiatorId: z.string().nullable().optional(),
  /** The textual description of the journal entry event */ description: z.string().nullable().optional(),
})
/** Representation of a journal entry */
export type JournalEntryModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  created?: /** The date and time when the journal entry was created */ string | undefined
  propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  string | undefined
  associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
  string | undefined
  associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
  string | undefined
  typeId?: /** The type of journal entry */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that created the entry */ string | undefined
  description?: /** The textual description of the journal entry event */ string | undefined
}
/** Representation of a landlord related journal entry */
export const landlordJournalEntryModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The date and time when the journal entry was created */ created: z.string().nullable().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the landlord the journal entry is related to. */
  landlordId: z.string().nullable().optional(),
  /** The type of journal entry */ type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that created the entry */ negotiatorId: z.string().nullable().optional(),
  /** The textual description of the journal entry event */ description: z.string().nullable().optional(),
})
/** Representation of a landlord related journal entry */
export type LandlordJournalEntryModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  created?: /** The date and time when the journal entry was created */ string | undefined
  propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  string | undefined
  landlordId?: /** The unique identifier of the landlord the journal entry is related to. */ string | undefined
  type?: /** The type of journal entry */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that created the entry */ string | undefined
  description?: /** The textual description of the journal entry event */ string | undefined
}
/** Representation of a landlord's source */
export const landlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export const landlordContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact associated to a landlord */
export const landlordContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (contact/company) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().nullable().optional(),
  primaryAddress: landlordContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** Representation of a landlord */
export const landlordModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the landlord */ id: z.string().nullable().optional(),
  /** The date and time when the landlord was created */ created: z.string().nullable().optional(),
  /** The date and time when the landlord was last modified */ modified: z.string().nullable().optional(),
  /** A flag determining whether or not the landlord is currently active */ active: z.boolean().nullable().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().nullable().optional(),
  source: landlordSourceModel.nullable().optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z.array(landlordContactModel).nullable().optional(),
  /** App specific metadata that has been set against the landlord */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the landlord. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a landlord's source */
export type LandlordSourceModel = {
  id?: /** The unique identifier of the source of the landlord */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Representation of the physical address of a building or premise */
export type LandlordContactAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** A summarised view of the details of a contact associated to a landlord */
export type LandlordContactModel = {
  id?: /** The unique identifier of the contact */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (contact/company) */ string | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  primaryAddress?: LandlordContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
/** Representation of a landlord */
export type LandlordModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the landlord */ string | undefined
  created?: /** The date and time when the landlord was created */ string | undefined
  modified?: /** The date and time when the landlord was last modified */ string | undefined
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId?: /** The unique identifier of the office that is associated to the landlord */ string | undefined
  source?: LandlordSourceModel | undefined
  related?: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  Array<LandlordContactModel> | undefined
  metadata?: /** App specific metadata that has been set against the landlord */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the landlord. Used for managing update concurrency */
  string | undefined
}
/** Representation of relationship between a landlord and a contact or company */
export const landlordContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the landlord relationship */ id: z.string().nullable().optional(),
  /** The unique identifier of the landlord */ landlordId: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
  isMain: z.boolean().nullable().optional(),
})
/** Representation of relationship between a landlord and a contact or company */
export type LandlordContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the landlord relationship */ string | undefined
  landlordId?: /** The unique identifier of the landlord */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
  boolean | undefined
}
/** Model representing the state of a metadata record for a given entity */
export const metadataModel = z.object({
  /** The unique identifier of this metadata record */ id: z.string().nullable().optional(),
  /** The date and time of when this metadata record was last updated */ modified: z.string().nullable().optional(),
  /** The name of the entity type that this metadata record is associated to */
  entityType: z.string().nullable().optional(),
  /** The unique identifier of the the entity that this metadata is associated to */
  entityId: z.string().nullable().optional(),
  /** The JSON document content */ metadata: z.string().nullable().optional(),
})
/** Model representing the state of a metadata record for a given entity */
export type MetadataModel = {
  id?: /** The unique identifier of this metadata record */ string | undefined
  modified?: /** The date and time of when this metadata record was last updated */ string | undefined
  entityType?: /** The name of the entity type that this metadata record is associated to */ string | undefined
  entityId?: /** The unique identifier of the the entity that this metadata is associated to */ string | undefined
  metadata?: /** The JSON document content */ string | undefined
}
/** Model representing a JSON schema used to validate a specific entity type */
export const schemaModel = z.object({
  /** The unique identifier of this JSON schema */ id: z.string().nullable().optional(),
  /** The date and time of when this JSON schema was last updated */ modified: z.string().nullable().optional(),
  /** The JSON schema document */ schema: z.string().nullable().optional(),
})
/** Model representing a JSON schema used to validate a specific entity type */
export type SchemaModel = {
  id?: /** The unique identifier of this JSON schema */ string | undefined
  modified?: /** The date and time of when this JSON schema was last updated */ string | undefined
  schema?: /** The JSON schema document */ string | undefined
}
/** Representation of a negotiator */
export const negotiatorModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the negotiator */ id: z.string().nullable().optional(),
  /** The date and time when the negotiator was created */ created: z.string().nullable().optional(),
  /** The date and time when the negotiator was last modified */ modified: z.string().nullable().optional(),
  /** The name of the negotiator */ name: z.string().nullable().optional(),
  /** The job title of the negotiator */ jobTitle: z.string().nullable().optional(),
  /** The unique identifier of the office that the negotiator is attached to */
  officeId: z.string().nullable().optional(),
  /** The work phone number of the negotiator */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the negotiator */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the negotiator */ email: z.string().nullable().optional(),
  /** The URL of the optional negotiator profile image */ profileImageUrl: z.string().nullable().optional(),
  /** A flag determining whether or not the negotiator is active */ active: z.boolean().nullable().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
  /** App specific metadata that has been set against the negotiator */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the negotiator. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a negotiator */
export type NegotiatorModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the negotiator */ string | undefined
  created?: /** The date and time when the negotiator was created */ string | undefined
  modified?: /** The date and time when the negotiator was last modified */ string | undefined
  name?: /** The name of the negotiator */ string | undefined
  jobTitle?: /** The job title of the negotiator */ string | undefined
  officeId?: /** The unique identifier of the office that the negotiator is attached to */ string | undefined
  workPhone?: /** The work phone number of the negotiator */ string | undefined
  mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
  email?: /** The email address of the negotiator */ string | undefined
  profileImageUrl?: /** The URL of the optional negotiator profile image */ string | undefined
  active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
  diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
  metadata?: /** App specific metadata that has been set against the negotiator */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the negotiator. Used for managing update concurrency */
  string | undefined
}
/** Representation of the physical address of a building or premise */
export const offerContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides in */ countryId: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact associated to an offer */
export const offerContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (contact/company) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().nullable().optional(),
  primaryAddress: offerContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** Representation of an offer */
export const offerModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the offer */ id: z.string().nullable().optional(),
  /** The the date and time when the offer was created */ created: z.string().nullable().optional(),
  /** The date and time when the offer was last modified */ modified: z.string().nullable().optional(),
  /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().nullable().optional(),
  /** The unique identifier of the applicant associated to the offer */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the company associated to the offer */ companyId: z.string().nullable().optional(),
  /** The unique identifier of the contact associated to the offer */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the property associated to the offer */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the offer */ negotiatorId: z.string().nullable().optional(),
  /** The date when the offer was made */ date: z.string().nullable().optional(),
  /** The monetary amount of the offer */ amount: z.number().nullable().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().nullable().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().nullable().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().nullable().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().nullable().optional(),
  /** A collection of contacts associated to the offer */ related: z.array(offerContactModel).nullable().optional(),
  /** App specific metadata that has been set against the offer */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the offer. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export type OfferContactAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides in */ string | undefined
}
/** A summarised view of the details of a contact associated to an offer */
export type OfferContactModel = {
  id?: /** The unique identifier of the contact */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (contact/company) */ string | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  primaryAddress?: OfferContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
/** Representation of an offer */
export type OfferModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the offer */ string | undefined
  created?: /** The the date and time when the offer was created */ string | undefined
  modified?: /** The date and time when the offer was last modified */ string | undefined
  currency?: /** The currency that applies to monetary amounts exposed in the model */ string | undefined
  applicantId?: /** The unique identifier of the applicant associated to the offer */ string | undefined
  companyId?: /** The unique identifier of the company associated to the offer */ string | undefined
  contactId?: /** The unique identifier of the contact associated to the offer */ string | undefined
  propertyId?: /** The unique identifier of the property associated to the offer */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
  date?: /** The date when the offer was made */ string | undefined
  amount?: /** The monetary amount of the offer */ number | undefined
  status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  string | undefined
  inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
  exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
  conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
  string | undefined
  related?: /** A collection of contacts associated to the offer */ Array<OfferContactModel> | undefined
  metadata?: /** App specific metadata that has been set against the offer */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the offer. Used for managing update concurrency */ string | undefined
}
/** Representation of the geographical location of an address using coordinates */
export const officeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number().nullable().optional(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export const officeAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  geolocation: officeAddressGeolocationModel.nullable().optional(),
})
export const additionalCompanyContactDetailsModel = additionalContactDetailModel
export const additionalOfficeContactDetailsModel = additionalCompanyContactDetailsModel
/** Representation of an office */
export const officeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the office */ id: z.string().nullable().optional(),
  /** The date and time when the office was created */ created: z.string().nullable().optional(),
  /** The date and time when the office was last modified */ modified: z.string().nullable().optional(),
  /** The name of the office */ name: z.string().nullable().optional(),
  /** The name of the office manager */ manager: z.string().nullable().optional(),
  /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
  /** The region that the office is in */ region: z.string().nullable().optional(),
  address: officeAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalOfficeContactDetailsModel).nullable().optional(),
  /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
  /** The email address of the office */ email: z.string().nullable().optional(),
  /** App specific metadata that has been set against the office */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the office. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
})
/** Representation of the geographical location of an address using coordinates */
export type OfficeAddressGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
/** Representation of the physical address of a building or premise */
export type OfficeAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: OfficeAddressGeolocationModel | undefined
}
export type AdditionalCompanyContactDetailsModel = AdditionalContactDetailModel
export type AdditionalOfficeContactDetailsModel = AdditionalCompanyContactDetailsModel
/** Representation of an office */
export type OfficeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the office */ string | undefined
  created?: /** The date and time when the office was created */ string | undefined
  modified?: /** The date and time when the office was last modified */ string | undefined
  name?: /** The name of the office */ string | undefined
  manager?: /** The name of the office manager */ string | undefined
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  region?: /** The region that the office is in */ string | undefined
  address?: OfficeAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalOfficeContactDetailsModel> | undefined
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata that has been set against the office */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the office. Used for managing update concurrency */ string | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
}
export const propertyGeolocationModel = officeAddressGeolocationModel
/** Representation of the physical address of a building or premise */
export const propertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
  /** The local timezone for the address, based on the Geolocation coordinates */
  localTimeZone: z.string().nullable().optional(),
  geolocation: propertyGeolocationModel.nullable().optional(),
})
/** Details specific to rural properties */
export const propertyRuralModel = z.object({
  /** Details of the rural tenure associated with the property. */ tenureId: z.string().nullable().optional(),
  /** Details of the buildings associated with the property. */ buildingsDescription: z.string().nullable().optional(),
  /** Details of the land associated with the property. */ landDescription: z.string().nullable().optional(),
})
/** Representation of the external land area of a property */
export const propertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().nullable().optional(),
})
/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().nullable().optional(),
  /** The minimum area bound */ min: z.number().nullable().optional(),
  /** The maximum area bound */ max: z.number().nullable().optional(),
})
/** Representation of EPC statistics */
export const propertyEpcModel = z.object({
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
  /** The URL to access the first page of the EPC document */ firstPageDocumentUrl: z.string().nullable().optional(),
})
/** Representation of the tenure of a property */
export const propertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().nullable().optional(),
  /** The tenure expiration date */ expiry: z.string().nullable().optional(),
})
/** Representation of the sub agent terms */
export const propertySubAgentTermsModel = z.object({
  /** A flag denoting whether or not fee is available */ feeAvailable: z.boolean().nullable().optional(),
  /** The type of fee (percent/fixed/callForFees) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
})
/** Representation of property details specific to sales marketing */
export const propertySellingModel = z.object({
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
  tenure: propertyTenureModel.nullable().optional(),
  /** The unique identifier of the vendor selling the property */ vendorId: z.string().nullable().optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  agency: z.string().nullable().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
  agencyId: z.string().nullable().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
  exchangedCompanyFee: z.number().nullable().optional(),
  /** The agent's recommended asking price */ recommendedPrice: z.number().int().nullable().optional(),
  /** The agent's valuation price */ valuationPrice: z.number().int().nullable().optional(),
  /** The unique identifier of the document used for the sales brochure */ brochureId: z.string().nullable().optional(),
  /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  publicBrochureUrl: z.string().nullable().optional(),
  /** The price the property exchanged/sold for */ exchangedPrice: z.number().int().nullable().optional(),
  /** The unique identifier of the office that sold the property */ exchangedOfficeId: z.string().nullable().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).nullable().optional(),
  sharedOwnership: propertySharedOwnershipModel.nullable().optional(),
  subAgentTerms: propertySubAgentTermsModel.nullable().optional(),
})
/** Representation of property details specific to rent insurance associated with a lettings property */
export const propertyLettingRentInsuranceModel = z.object({
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
/** Representation of property details specific to property licence application */
export const propertyLettingLicenceApplicationModel = z.object({
  /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  status: z.string().nullable().optional(),
  /** The licence application reference number */ referenceNumber: z.string().nullable().optional(),
  /** The date the licence was applied for */ date: z.string().nullable().optional(),
  /** The date the licence application was granted */ granted: z.string().nullable().optional(),
  /** The date the licence will expire */ expiry: z.string().nullable().optional(),
})
/** Representation of property details specific to property Licencing */
export const propertyLettingLicencingModel = z.object({
  /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  licenceRequired: z.boolean().nullable().optional(),
  /** The type of licence (additional/mandatory/none/notSet/selective) */ licenceType: z.string().nullable().optional(),
  /** The number of households that the licence permits in the property */
  households: z.number().int().nullable().optional(),
  /** The number of occupants that the licence permits in the property */
  occupants: z.number().int().nullable().optional(),
  /** A flag determining whether or not the property is above commercial premises */
  aboveCommercialPremises: z.boolean().nullable().optional(),
  application: propertyLettingLicenceApplicationModel.nullable().optional(),
})
/** Representation of property details specific to lettings marketing */
export const propertyLettingModel = z.object({
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
  /** The unique identifier of the landlord letting the property */ landlordId: z.string().nullable().optional(),
  /** A note to accompany any works orders created for the property */ worksOrderNote: z.string().nullable().optional(),
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
  managementFee: propertyCommissionFeeModel.nullable().optional(),
  lettingFee: propertyCommissionFeeModel.nullable().optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */ qualifier: z.string().nullable().optional(),
  utilities: utilityModel.nullable().optional(),
  deposit: propertyLettingsDepositModel.nullable().optional(),
  rentInsurance: propertyLettingRentInsuranceModel.nullable().optional(),
  licencing: propertyLettingLicencingModel.nullable().optional(),
})
/** An properties commercial details */
export const propertyCommercialModel = z.object({
  /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  useClass: z.array(z.string()).nullable().optional(),
  /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  floorLevel: z.array(z.string()).nullable().optional(),
})
/** Any specific details relating to the marketing of a property in Guernsey */
export const guernseyModel = z.object({
  /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).nullable().optional(),
})
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export const irelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().nullable().optional(),
  /** The BER rating of the property */ rating: z.string().nullable().optional(),
  /** The BER certificate reference number */ refNumber: z.string().nullable().optional(),
  /** The energy performance indicator for the property */ epi: z.string().nullable().optional(),
})
/** Any specific details relating to the marketing of a property in Ireland */
export const irelandPropertyModel = z.object({ buildingEnergyRating: irelandPropertyBERModel.nullable().optional() })
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const propertyRegionalModel = z.object({
  ggy: guernseyModel.nullable().optional(),
  irl: irelandPropertyModel.nullable().optional(),
})
/** Represents an unmapped attribute type */
export const unmappedAttributeModel = z.object({
  /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
  type: z.string().nullable().optional(),
  /** The value associated to the unmapped type */ value: z.string().nullable().optional(),
})
/** Representation of a single room in a property */
export const propertyRoomModel = z.object({
  /** The name of the room */ name: z.string().nullable().optional(),
  /** Details about the dimensions of the room */ dimensions: z.string().nullable().optional(),
  /** Details about the alternate dimensions of the room */ dimensionsAlt: z.string().nullable().optional(),
  /** Short description of the room */ description: z.string().nullable().optional(),
})
/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export const propertyModel = z.object({
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the property */ id: z.string().nullable().optional(),
  /** The date and time when the property was created */ created: z.string().nullable().optional(),
  /** The date and time when the property was last modified */ modified: z.string().nullable().optional(),
  /** The date the owner of the property was last called */ lastCall: z.string().nullable().optional(),
  /** The date the owner of the property is next due to be called */ nextCall: z.string().nullable().optional(),
  /** The marketing mode of the property (selling/letting/sellingAndLetting) */
  marketingMode: z.string().nullable().optional(),
  /** The currency that applies to monetary amounts exposed in the model */ currency: z.string().nullable().optional(),
  /** An optional alternative identifier specified for this property */ alternateId: z.string().nullable().optional(),
  address: propertyAddressModel.nullable().optional(),
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
  /** The unique identifier of the negotiator managing the property */ negotiatorId: z.string().nullable().optional(),
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
  /** The caption for the video url associated with this property */ videoCaption: z.string().nullable().optional(),
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
  /** Comments regarding the service charge of the property */ serviceChargeComment: z.string().nullable().optional(),
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
  /** A flag determining whether or not the property is archived */ fromArchive: z.boolean().nullable().optional(),
  rural: propertyRuralModel.nullable().optional(),
  externalArea: propertyExternalAreaModel.nullable().optional(),
  internalArea: propertyInternalAreaModel.nullable().optional(),
  epc: propertyEpcModel.nullable().optional(),
  selling: propertySellingModel.nullable().optional(),
  letting: propertyLettingModel.nullable().optional(),
  commercial: propertyCommercialModel.nullable().optional(),
  regional: propertyRegionalModel.nullable().optional(),
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
  unmappedAttributes: z.array(unmappedAttributeModel).nullable().optional(),
  /** Identifiers of any services connected at the property */
  availableServicesIds: z.array(z.string()).nullable().optional(),
  /** Details of each room in the property */ rooms: z.array(propertyRoomModel).nullable().optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** The date that this property became a lost instruction */ lostInstructionDate: z.string().nullable().optional(),
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
  _links: z.record(z.string(), linkModel).nullable().optional(),
})
export type PropertyGeolocationModel = OfficeAddressGeolocationModel
/** Representation of the physical address of a building or premise */
export type PropertyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  localTimeZone?: /** The local timezone for the address, based on the Geolocation coordinates */ string | undefined
  geolocation?: PropertyGeolocationModel | undefined
}
/** Details specific to rural properties */
export type PropertyRuralModel = {
  tenureId?: /** Details of the rural tenure associated with the property. */ string | undefined
  buildingsDescription?: /** Details of the buildings associated with the property. */ string | undefined
  landDescription?: /** Details of the land associated with the property. */ string | undefined
}
/** Representation of the external land area of a property */
export type PropertyExternalAreaModel = {
  type?: /** The unit of area (acres/hectares) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */ number | undefined
}
/** Representation of the internal dimensions of a property */
export type PropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
/** Representation of EPC statistics */
export type PropertyEpcModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  boolean | undefined
  eer?: /** The current energy efficiency rating */ number | undefined
  eerRating?: /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
  string | undefined
  eerPotential?: /** The potential energy efficiency rating */ number | undefined
  eerPotentialRating?: /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
  string | undefined
  eir?: /** The current environmental impact rating */ number | undefined
  eirRating?: /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
  string | undefined
  eirPotential?: /** The potential environmental impact rating */ number | undefined
  eirPotentialRating?: /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
  string | undefined
  fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
  firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
}
/** Representation of the tenure of a property */
export type PropertyTenureModel = {
  type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  string | undefined
  expiry?: /** The tenure expiration date */ string | undefined
}
/** Representation of the sub agent terms */
export type PropertySubAgentTermsModel = {
  feeAvailable?: /** A flag denoting whether or not fee is available */ boolean | undefined
  type?: /** The type of fee (percent/fixed/callForFees) */ string | undefined
  amount?: /** The fee amount */ number | undefined
}
/** Representation of property details specific to sales marketing */
export type PropertySellingModel = {
  instructed?: /** The date that the property was marked as for sale */ string | undefined
  price?: /** The marketing price of the property */ number | undefined
  priceTo?: /** The maximum price of a property on the development plot */ number | undefined
  reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */ number | undefined
  qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  string | undefined
  status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  string | undefined
  completed?: /** The date the property sale was completed */ string | undefined
  exchanged?: /** The date the property was exchanged */ string | undefined
  accountPaid?: /** The date the property account was paid */ string | undefined
  tenure?: PropertyTenureModel | undefined
  vendorId?: /** The unique identifier of the vendor selling the property */ string | undefined
  agency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  string | undefined
  agencyId?: /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
  string | undefined
  agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
  fee?: PropertyCommissionFeeModel | undefined
  exchangedCompanyFee?: /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
  number | undefined
  recommendedPrice?: /** The agent's recommended asking price */ number | undefined
  valuationPrice?: /** The agent's valuation price */ number | undefined
  brochureId?: /** The unique identifier of the document used for the sales brochure */ string | undefined
  publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  string | undefined
  exchangedPrice?: /** The price the property exchanged/sold for */ number | undefined
  exchangedOfficeId?: /** The unique identifier of the office that sold the property */ string | undefined
  decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
  sharedOwnership?: PropertySharedOwnershipModel | undefined
  subAgentTerms?: PropertySubAgentTermsModel | undefined
}
/** Representation of property details specific to rent insurance associated with a lettings property */
export type PropertyLettingRentInsuranceModel = {
  status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
  string | undefined
  referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
  string | undefined
  start?: /** The insurance policy start date */ string | undefined
  end?: /** The insurance policy end date */ string | undefined
  cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
  string | undefined
  cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
  string | undefined
  autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */ boolean | undefined
}
/** Representation of property details specific to property licence application */
export type PropertyLettingLicenceApplicationModel = {
  status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  string | undefined
  referenceNumber?: /** The licence application reference number */ string | undefined
  date?: /** The date the licence was applied for */ string | undefined
  granted?: /** The date the licence application was granted */ string | undefined
  expiry?: /** The date the licence will expire */ string | undefined
}
/** Representation of property details specific to property Licencing */
export type PropertyLettingLicencingModel = {
  licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  boolean | undefined
  licenceType?: /** The type of licence (additional/mandatory/none/notSet/selective) */ string | undefined
  households?: /** The number of households that the licence permits in the property */ number | undefined
  occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
  aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
  boolean | undefined
  application?: PropertyLettingLicenceApplicationModel | undefined
}
/** Representation of property details specific to lettings marketing */
export type PropertyLettingModel = {
  instructed?: /** The date the property was marked as to let */ string | undefined
  availableFrom?: /** The date the property is next available from */ string | undefined
  availableTo?: /** The date the property is available to */ string | undefined
  agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */ string | undefined
  rent?: /** The rent being charged for the property */ number | undefined
  rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */ string | undefined
  rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
  furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  Array<string> | undefined
  term?: /** The acceptable letting terms (short/long/any) */ string | undefined
  status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  string | undefined
  agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** The minimum number of months the property can be let out for */ number | undefined
  propertyManagerId?: /** The unique identifier of the negotiator that manages the property */ string | undefined
  managementCompanyIds?: /** The unique identifiers of the management companies associated to the property */
  Array<string> | undefined
  brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | undefined
  publicBrochureUrl?: /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  string | undefined
  managementFee?: PropertyCommissionFeeModel | undefined
  lettingFee?: PropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: UtilityModel | undefined
  deposit?: PropertyLettingsDepositModel | undefined
  rentInsurance?: PropertyLettingRentInsuranceModel | undefined
  licencing?: PropertyLettingLicencingModel | undefined
}
/** An properties commercial details */
export type PropertyCommercialModel = {
  useClass?: /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  floorLevel?: /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
}
/** Any specific details relating to the marketing of a property in Guernsey */
export type GuernseyModel = {
  market?: /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
  Array<string> | undefined
}
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export type IrelandPropertyBERModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  boolean | undefined
  rating?: /** The BER rating of the property */ string | undefined
  refNumber?: /** The BER certificate reference number */ string | undefined
  epi?: /** The energy performance indicator for the property */ string | undefined
}
/** Any specific details relating to the marketing of a property in Ireland */
export type IrelandPropertyModel = { buildingEnergyRating?: IrelandPropertyBERModel | undefined }
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type PropertyRegionalModel = { ggy?: GuernseyModel | undefined; irl?: IrelandPropertyModel | undefined }
/** Represents an unmapped attribute type */
export type UnmappedAttributeModel = {
  type?: /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */ string | undefined
  value?: /** The value associated to the unmapped type */ string | undefined
}
/** Representation of a single room in a property */
export type PropertyRoomModel = {
  name?: /** The name of the room */ string | undefined
  dimensions?: /** Details about the dimensions of the room */ string | undefined
  dimensionsAlt?: /** Details about the alternate dimensions of the room */ string | undefined
  description?: /** Short description of the room */ string | undefined
}
/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export type PropertyModel = {
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the property */ string | undefined
  created?: /** The date and time when the property was created */ string | undefined
  modified?: /** The date and time when the property was last modified */ string | undefined
  lastCall?: /** The date the owner of the property was last called */ string | undefined
  nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
  marketingMode?: /** The marketing mode of the property (selling/letting/sellingAndLetting) */ string | undefined
  currency?: /** The currency that applies to monetary amounts exposed in the model */ string | undefined
  alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
  address?: PropertyAddressModel | undefined
  areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
  strapline?: /** The strapline description containing a short summary about the property */ string | undefined
  description?: /** The brief description of the property */ string | undefined
  longDescription?: /** The long description of the property */ string | undefined
  localAuthorityCompanyId?: /** The property's local authority */ string | undefined
  localAuthorityCompanyName?: /** The name of the property's local authority */ string | undefined
  summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  string | undefined
  departmentId?: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined
  bedrooms?: /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bedroomsMax?: /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptions?: /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  receptionsMax?: /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathrooms?: /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  bathroomsMax?: /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
  number | undefined
  parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
  disabledPortalIds?: /** A collection of identifiers of portals that the property should not be displayed on */
  Array<string> | undefined
  internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
  boolean | undefined
  isExternal?: /** A flag denoting whether or not the property has been instructed by another estate agent */
  boolean | undefined
  viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
  videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
  videoCaption?: /** The caption for the video url associated with this property */ string | undefined
  video2Url?: /** The url of a second video associated with this property, such as a virtual tour */ string | undefined
  video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
  notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  string | undefined
  boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
  boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
  string | undefined
  featuredImageUrl?: /** The properties featured image url */ string | undefined
  url?: /** The url to the property on an external website */ string | undefined
  urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
  groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
  groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
  groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
  string | undefined
  groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */ number | undefined
  serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
  serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
  floorLevel?: /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  string | undefined
  valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  string | undefined
  archivedOn?: /** The date and time the property was archived */ string | undefined
  fromArchive?: /** A flag determining whether or not the property is archived */ boolean | undefined
  rural?: PropertyRuralModel | undefined
  externalArea?: PropertyExternalAreaModel | undefined
  internalArea?: PropertyInternalAreaModel | undefined
  epc?: PropertyEpcModel | undefined
  selling?: PropertySellingModel | undefined
  letting?: PropertyLettingModel | undefined
  commercial?: PropertyCommercialModel | undefined
  regional?: PropertyRegionalModel | undefined
  type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  Array<string> | undefined
  specialFeatures?: /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  unmappedAttributes?: /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<UnmappedAttributeModel> | undefined
  availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined
  rooms?: /** Details of each room in the property */ Array<PropertyRoomModel> | undefined
  roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  boolean | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  Array<string> | undefined
  lostInstructionDate?: /** The date that this property became a lost instruction */ string | undefined
  lostInstructionNote?: /** The notes regarding the lost instruction */ string | undefined
  developmentSiteType?: /** The type of development */ string | undefined
  metadata?: /** App specific metadata that has been set against the property */
  Record<string, Record<string, never>> | undefined
  keywords?: /** The keywords associated with property */ Array<string> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the property. Used for managing update concurrency */
  string | undefined
  _links?: /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
  Record<string, LinkModel> | undefined
}
/** Representation of a cerificate */
export const certificateModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the certificate */ id: z.string().nullable().optional(),
  /** The date and time when the certificate was created */ created: z.string().nullable().optional(),
  /** The date and time when the certificate was last modified */ modified: z.string().nullable().optional(),
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().nullable().optional(),
  /** The certificate's type */ typeId: z.string().nullable().optional(),
  /** The certificate's start date */ start: z.string().nullable().optional(),
  /** The certificate's expiry date */ expiry: z.string().nullable().optional(),
  /** The unique identifier of the property */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the company */ companyId: z.string().nullable().optional(),
  /** The unique identifier of the certificates status */ statusId: z.string().nullable().optional(),
  /** Any general notes regarding the certificate */ notes: z.string().nullable().optional(),
  /** The certificate's reference number */ referenceNumber: z.string().nullable().optional(),
  /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
  responsibleParty: z.string().nullable().optional(),
  /** The ETag for the current version of the certificate. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a cerificate */
export type CertificateModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the certificate */ string | undefined
  created?: /** The date and time when the certificate was created */ string | undefined
  modified?: /** The date and time when the certificate was last modified */ string | undefined
  category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */ string | undefined
  typeId?: /** The certificate's type */ string | undefined
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  propertyId?: /** The unique identifier of the property */ string | undefined
  companyId?: /** The unique identifier of the company */ string | undefined
  statusId?: /** The unique identifier of the certificates status */ string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
  responsibleParty?: /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
  string | undefined
  _eTag?: /** The ETag for the current version of the certificate. Used for managing update concurrency */
  string | undefined
}
/** Representation of an individual key included in a key set */
export const individualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().nullable().optional(),
})
/** Representation of a set of keys */
export const keysModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the key */ id: z.string().nullable().optional(),
  /** The date and time when the key was created */ created: z.string().nullable().optional(),
  /** The date and time when the key was last modified */ modified: z.string().nullable().optional(),
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().nullable().optional(),
  /** The unique identifier of the key type */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the office responsible for the key */ officeId: z.string().nullable().optional(),
  /** The unique identifier of the property that the key belongs to */ propertyId: z.string().nullable().optional(),
  /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ status: z.string().nullable().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z.array(individualKeyModel).nullable().optional(),
  /** The ETag for the current version of the keys. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of an individual key included in a key set */
export type IndividualKeyModel = { name?: /** The name of the individual key in the set */ string | undefined }
/** Representation of a set of keys */
export type KeysModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the key */ string | undefined
  created?: /** The date and time when the key was created */ string | undefined
  modified?: /** The date and time when the key was last modified */ string | undefined
  number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  string | undefined
  typeId?: /** The unique identifier of the key type */ string | undefined
  officeId?: /** The unique identifier of the office responsible for the key */ string | undefined
  propertyId?: /** The unique identifier of the property that the key belongs to */ string | undefined
  status?: /** The status of the key (checkedIn/checkedOut/noLongerHeld) */ string | undefined
  keysInSet?: /** A listing of the individual keys included in the set */ Array<IndividualKeyModel> | undefined
  _eTag?: /** The ETag for the current version of the keys. Used for managing update concurrency */ string | undefined
}
/** Representation of a key movement */
export const keyMovementModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the key movement */ id: z.string().nullable().optional(),
  /** The date and time when the key movement was created */ created: z.string().nullable().optional(),
  /** The date and time when the key movement was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the key set this movement belongs to */ keyId: z.string().nullable().optional(),
  /** The unique identifier of the property that the key set belongs to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the contact/negotiator that the key is checked out with */
  checkOutToId: z.string().nullable().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().nullable().optional(),
  /** The date and time of when the key set was checked out */ checkOutAt: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().nullable().optional(),
  /** The date and time of when the key set was checked in */ checkInAt: z.string().nullable().optional(),
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().nullable().optional(),
  /** The ETag for the current version of the key movement. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a key movement */
export type KeyMovementModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the key movement */ string | undefined
  created?: /** The date and time when the key movement was created */ string | undefined
  modified?: /** The date and time when the key movement was last modified */ string | undefined
  keyId?: /** The unique identifier of the key set this movement belongs to */ string | undefined
  propertyId?: /** The unique identifier of the property that the key set belongs to */ string | undefined
  checkOutToId?: /** The unique identifier of the contact/negotiator that the key is checked out with */
  string | undefined
  checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */ string | undefined
  checkOutAt?: /** The date and time of when the key set was checked out */ string | undefined
  checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
  string | undefined
  checkInAt?: /** The date and time of when the key set was checked in */ string | undefined
  checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */ string | undefined
  _eTag?: /** The ETag for the current version of the key movement. Used for managing update concurrency */
  string | undefined
}
/** Representation of a check */
export const propertyCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the check */ id: z.string().nullable().optional(),
  /** The date and time when the check was created */ created: z.string().nullable().optional(),
  /** The date and time when the check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the check relates to */ description: z.string().nullable().optional(),
  /** The status of the check (needed/notNeeded/arranging/completed) */ status: z.string().nullable().optional(),
  /** The type of the check (preInstruction) */ type: z.string().nullable().optional(),
  /** The unique identifier of the property that this check relates to */ propertyId: z.string().nullable().optional(),
  /** The ETag for the current version of the check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a check */
export type PropertyCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the check */ string | undefined
  created?: /** The date and time when the check was created */ string | undefined
  modified?: /** The date and time when the check was last modified */ string | undefined
  description?: /** Textual description of what the check relates to */ string | undefined
  status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | undefined
  type?: /** The type of the check (preInstruction) */ string | undefined
  propertyId?: /** The unique identifier of the property that this check relates to */ string | undefined
  _eTag?: /** The ETag for the current version of the check. Used for managing update concurrency */ string | undefined
}
/** Representation of a property appraisal */
export const propertyAppraisalModel = z.object({
  /** Unique identifier of the appraisal */ id: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property appraisal was last modified */ modified: z.string().nullable().optional(),
  /** Unique identifier of the appraising company */ companyId: z.string().nullable().optional(),
  /** Flag indicating whether the appraisal is internal or external */ isExternal: z.boolean().nullable().optional(),
  /** The date of the appraisal */ date: z.string().nullable().optional(),
  /** The appraisal value */ price: z.number().int().nullable().optional(),
  fee: propertyCommissionFeeModel.nullable().optional(),
  /** Free-text notes associated with the appraisal */ notes: z.string().nullable().optional(),
  _eTag: z.string().nullable().optional(),
})
/** Representation of a property appraisal */
export type PropertyAppraisalModel = {
  id?: /** Unique identifier of the appraisal */ string | undefined
  created?: /** The date and time on which the property appraisal was created */ string | undefined
  modified?: /** The date and time on which the property appraisal was last modified */ string | undefined
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  isExternal?: /** Flag indicating whether the appraisal is internal or external */ boolean | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
  _eTag?: string | undefined
}
/** Representation of a property image */
export const propertyImageModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the image, which is also the filename */ id: z.string().nullable().optional(),
  /** The date and time when the image was created */ created: z.string().nullable().optional(),
  /** The date and time when the property image was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the property attached to the image */ propertyId: z.string().nullable().optional(),
  /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
  url: z.string().nullable().optional(),
  /** The image caption */ caption: z.string().nullable().optional(),
  /** The type of image (photograph/floorPlan/epc/map) */ type: z.string().nullable().optional(),
  /** The display order index of the image which can be used to correctly order the whole collection */
  order: z.number().int().nullable().optional(),
  /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
  fromArchive: z.boolean().nullable().optional(),
  /** The ETag for the current version of the image. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a property image */
export type PropertyImageModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the image, which is also the filename */ string | undefined
  created?: /** The date and time when the image was created */ string | undefined
  modified?: /** The date and time when the property image was last modified */ string | undefined
  propertyId?: /** The unique identifier of the property attached to the image */ string | undefined
  url?: /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
  string | undefined
  caption?: /** The image caption */ string | undefined
  type?: /** The type of image (photograph/floorPlan/epc/map) */ string | undefined
  order?: /** The display order index of the image which can be used to correctly order the whole collection */
  number | undefined
  fromArchive?: /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
  boolean | undefined
  _eTag?: /** The ETag for the current version of the image. Used for managing update concurrency */ string | undefined
}
/** Representation of a contact */
export const referralContactModel = z.object({
  id: z.string().nullable().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ title: z.string().nullable().optional(),
  /** The contact's forename */ forename: z.string().nullable().optional(),
  /** The contact's surname */ surname: z.string().nullable().optional(),
  /** The mobile phone number of the contact */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact */ email: z.string().nullable().optional(),
})
/** Representation of a referral */
export const referralModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the referral */ id: z.string().nullable().optional(),
  /** The date and time when the referral was created */ created: z.string().nullable().optional(),
  /** The date and time when the referral was amended */ modified: z.string().nullable().optional(),
  /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
  referralTypeId: z.string().nullable().optional(),
  /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
  type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator the referral is associated with, where applicable */
  negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the property the referral is associated with, where applicable */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the referral is associated with, where applicable */
  applicantId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the referral is associated with, where applicable */
  contactId: z.string().nullable().optional(),
  /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  status: z.string().nullable().optional(),
  /** The amount paid to the agent for the referral */ amount: z.number().nullable().optional(),
  /** The date and time when the referral was paid */ paid: z.string().nullable().optional(),
  /** The date and time when the referral was accepted */ accepted: z.string().nullable().optional(),
  related: referralContactModel.nullable().optional(),
  /** App specific metadata that has been set against the referral */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the referral. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a contact */
export type ReferralContactModel = {
  id?: string | undefined
  title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
  forename?: /** The contact's forename */ string | undefined
  surname?: /** The contact's surname */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
}
/** Representation of a referral */
export type ReferralModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the referral */ string | undefined
  created?: /** The date and time when the referral was created */ string | undefined
  modified?: /** The date and time when the referral was amended */ string | undefined
  referralTypeId?: /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
  string | undefined
  type?: /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator the referral is associated with, where applicable */
  string | undefined
  propertyId?: /** The unique identifier of the property the referral is associated with, where applicable */
  string | undefined
  applicantId?: /** The unique identifier of the applicant the referral is associated with, where applicable */
  string | undefined
  contactId?: /** The unique identifier of the applicant the referral is associated with, where applicable */
  string | undefined
  status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  string | undefined
  amount?: /** The amount paid to the agent for the referral */ number | undefined
  paid?: /** The date and time when the referral was paid */ string | undefined
  accepted?: /** The date and time when the referral was accepted */ string | undefined
  related?: ReferralContactModel | undefined
  metadata?: /** App specific metadata that has been set against the referral */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the referral. Used for managing update concurrency */
  string | undefined
}
/** Representation of a referral type */
export const referralTypeModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  id: z.string().nullable().optional(),
  /** The name of the referral type */ name: z.string().nullable().optional(),
})
/** Representation of a referral type */
export type ReferralTypeModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  name?: /** The name of the referral type */ string | undefined
}
/** Representation of a webhook subscription */
export const webhookModel = z.object({
  /** The unique identifier of the webhook */ id: z.string().nullable().optional(),
  /** The date and time when the webhook was created */ created: z.string().nullable().optional(),
  /** The date and time when the webhook was last modified */ modified: z.string().nullable().optional(),
  /** The url where the payload associated with the webhook should be sent to */ url: z.string().nullable().optional(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().nullable().optional(),
  /** The identifiers of the topics the webhook is associated with */
  topicIds: z.array(z.string()).nullable().optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().nullable().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
/** Representation of a webhook subscription */
export type WebhookModel = {
  id?: /** The unique identifier of the webhook */ string | undefined
  created?: /** The date and time when the webhook was created */ string | undefined
  modified?: /** The date and time when the webhook was last modified */ string | undefined
  url?: /** The url where the payload associated with the webhook should be sent to */ string | undefined
  description?: /** A short description associated with the webhook (ie a friendly name or label) */ string | undefined
  topicIds?: /** The identifiers of the topics the webhook is associated with */ Array<string> | undefined
  active?: /** Flag denoting whether or not the webhook is active and ready to receive data */ boolean | undefined
  ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
  boolean | undefined
}
/** Representation of a source of business */
export const sourceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the source */ id: z.string().nullable().optional(),
  /** The date and time when the source was created */ created: z.string().nullable().optional(),
  /** The date and time when the source was last modified */ modified: z.string().nullable().optional(),
  /** The name of the source or advertising publication */ name: z.string().nullable().optional(),
  /** The type of the source (source/advertisement) */ type: z.string().nullable().optional(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).nullable().optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).nullable().optional(),
  /** The ETag for the current version of the source. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a source of business */
export type SourceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the source */ string | undefined
  created?: /** The date and time when the source was created */ string | undefined
  modified?: /** The date and time when the source was last modified */ string | undefined
  name?: /** The name of the source or advertising publication */ string | undefined
  type?: /** The type of the source (source/advertisement) */ string | undefined
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
  _eTag?: /** The ETag for the current version of the source. Used for managing update concurrency */ string | undefined
}
/** Representation of a task, which can also be an internal message */
export const taskModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the task */ id: z.string().nullable().optional(),
  /** The date and time when the task was created */ created: z.string().nullable().optional(),
  /** The date and time when the task was last modified */ modified: z.string().nullable().optional(),
  /** The date the task becomes active */ activates: z.string().nullable().optional(),
  /** The date the task was completed */ completed: z.string().nullable().optional(),
  /** The unique identifier of the task type */ typeId: z.string().nullable().optional(),
  /** The unique identifer of the negotiator that created the task */ senderId: z.string().nullable().optional(),
  /** The textual contents of the task or message */ text: z.string().nullable().optional(),
  /** The unique identifier of the landlord the task is associated to */ landlordId: z.string().nullable().optional(),
  /** The unique identifier of the property the task is associated to */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant the task is associated to */ applicantId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy the task is associated to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the contact the task is associated to */ contactId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */
  recipientId: z.string().nullable().optional(),
  /** The type of the recipient (office/negotiator) */ recipientType: z.string().nullable().optional(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the task. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a task, which can also be an internal message */
export type TaskModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the task */ string | undefined
  created?: /** The date and time when the task was created */ string | undefined
  modified?: /** The date and time when the task was last modified */ string | undefined
  activates?: /** The date the task becomes active */ string | undefined
  completed?: /** The date the task was completed */ string | undefined
  typeId?: /** The unique identifier of the task type */ string | undefined
  senderId?: /** The unique identifer of the negotiator that created the task */ string | undefined
  text?: /** The textual contents of the task or message */ string | undefined
  landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
  propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
  applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
  contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
  recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */ string | undefined
  recipientType?: /** The type of the recipient (office/negotiator) */ string | undefined
  metadata?: /** App specific metadata that has been set against the task */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the task. Used for managing update concurrency */ string | undefined
}
/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().nullable().optional(),
})
/** Representation of the tenancy management fee */
export const tenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().nullable().optional(),
  /** The fee amount */ amount: z.number().nullable().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().nullable().optional(),
})
/** A tenancy source of enquiry */
export const tenancySourceModel = z.object({
  /** The unique identifier of the source for this tenancy */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** A tenancy deposit model */
export const tenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().nullable().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().nullable().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ type: z.string().nullable().optional(),
  /** The amount of deposit held */ sum: z.number().nullable().optional(),
})
/** Representation of the physical address of a building or premise */
export const tenancyContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().nullable().optional(),
  /** The building number */ buildingNumber: z.string().nullable().optional(),
  /** The first line of the address */ line1: z.string().nullable().optional(),
  /** The second line of the address */ line2: z.string().nullable().optional(),
  /** The third line of the address */ line3: z.string().nullable().optional(),
  /** The fourth line of the address */ line4: z.string().nullable().optional(),
  /** The postcode */ postcode: z.string().nullable().optional(),
  /** The ISO-3166 country code that the address resides within */ countryId: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact or company associated to a tenancy */
export const tenancyContactModel = z.object({
  /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
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
  primaryAddress: tenancyContactAddressModel.nullable().optional(),
  /** The date the tenant moved in (or will move in) to the property */ occupyOn: z.string().nullable().optional(),
  /** The date the tenant vacated (or is due to vacate) the property */ vacateOn: z.string().nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** Representation of renewal options in a tenancy */
export const renewalOptionsModel = z.object({
  /** The unique identifier of the renewal option */ optionId: z.string().nullable().optional(),
  /** The associated renewal option text */ optionText: z.string().nullable().optional(),
  /** The renewal option expiry date */ expiry: z.string().nullable().optional(),
  /** The renewal options associated condition Ids */ conditionIds: z.array(z.string()).nullable().optional(),
})
/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export const tenancyArrearsModel = z.object({
  /** A flag determining whether or not tenancy arrears should be chased */
  chaseArrears: z.boolean().nullable().optional(),
  /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
  paymentPlan: z.string().nullable().optional(),
})
/** Representation of a tenancy */
export const tenancyModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
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
  /** The unique identifier of the property that relates to the tenancy */ propertyId: z.string().nullable().optional(),
  /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
  applicantId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator assigned as the manager of the tenancy */
  managerId: z.string().nullable().optional(),
  /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
  groupPaymentReference: z.string().nullable().optional(),
  lettingFee: tenancyLettingFeeModel.nullable().optional(),
  managementFee: tenancyManagementFeeModel.nullable().optional(),
  source: tenancySourceModel.nullable().optional(),
  deposit: tenancyDepositModel.nullable().optional(),
  /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
  related: z.array(tenancyContactModel).nullable().optional(),
  /** A flag denoting whether or not this tenancy is archived */ fromArchive: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the tenancy */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** Financial notes set against the tenancy */ feeNotes: z.string().nullable().optional(),
  /** The identifier of the legal status to set against the tenancy */ legalStatusId: z.string().nullable().optional(),
  renewalOptions: renewalOptionsModel.nullable().optional(),
  arrears: tenancyArrearsModel.nullable().optional(),
  /** The ETag for the current version of the tenancy. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of the tenancy letting fee */
export type TenancyLettingFeeModel = {
  type?: /** The letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  string | undefined
}
/** Representation of the tenancy management fee */
export type TenancyManagementFeeModel = {
  type?: /** The management fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
/** A tenancy source of enquiry */
export type TenancySourceModel = {
  id?: /** The unique identifier of the source for this tenancy */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** A tenancy deposit model */
export type TenancyDepositModel = {
  heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  string | undefined
  period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
  type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
  sum?: /** The amount of deposit held */ number | undefined
}
/** Representation of the physical address of a building or premise */
export type TenancyContactAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** A summarised view of the details of a contact or company associated to a tenancy */
export type TenancyContactModel = {
  id?: /** The unique identifier of the contact or company */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (company/contact) */ string | undefined
  homePhone?: /** The home phone number of the contact or company */ string | undefined
  workPhone?: /** The work phone number of the contact or company */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact or company */ string | undefined
  email?: /** The email address of the contact or company */ string | undefined
  paymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
  string | undefined
  fromArchive?: /** A flag denoting whether or not this roie on the system is now archived */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  primaryAddress?: TenancyContactAddressModel | undefined
  occupyOn?: /** The date the tenant moved in (or will move in) to the property */ string | undefined
  vacateOn?: /** The date the tenant vacated (or is due to vacate) the property */ string | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
/** Representation of renewal options in a tenancy */
export type RenewalOptionsModel = {
  optionId?: /** The unique identifier of the renewal option */ string | undefined
  optionText?: /** The associated renewal option text */ string | undefined
  expiry?: /** The renewal option expiry date */ string | undefined
  conditionIds?: /** The renewal options associated condition Ids */ Array<string> | undefined
}
/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export type TenancyArrearsModel = {
  chaseArrears?: /** A flag determining whether or not tenancy arrears should be chased */ boolean | undefined
  paymentPlan?: /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
  string | undefined
}
/** Representation of a tenancy */
export type TenancyModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy */ string | undefined
  created?: /** The date and time when the tenancy was created */ string | undefined
  modified?: /** The date and time when the tenancy was last modified */ string | undefined
  startDate?: /** The start date of the tenancy */ string | undefined
  endDate?: /** The end date of the tenancy */ string | undefined
  status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  string | undefined
  agentRole?: /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
  number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  endDateConfirmed?: /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
  boolean | undefined
  isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
  rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  string | undefined
  rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
  rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
  meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
  meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
  meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
  meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
  string | undefined
  meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
  meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
  typeId?: /** The unique identifier of the type of tenancy */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | undefined
  propertyId?: /** The unique identifier of the property that relates to the tenancy */ string | undefined
  applicantId?: /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
  string | undefined
  managerId?: /** The unique identifier of the negotiator assigned as the manager of the tenancy */ string | undefined
  groupPaymentReference?: /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
  string | undefined
  lettingFee?: TenancyLettingFeeModel | undefined
  managementFee?: TenancyManagementFeeModel | undefined
  source?: TenancySourceModel | undefined
  deposit?: TenancyDepositModel | undefined
  related?: /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
  Array<TenancyContactModel> | undefined
  fromArchive?: /** A flag denoting whether or not this tenancy is archived */ boolean | undefined
  metadata?: /** App specific metadata that has been set against the tenancy */
  Record<string, Record<string, never>> | undefined
  feeNotes?: /** Financial notes set against the tenancy */ string | undefined
  legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | undefined
  renewalOptions?: RenewalOptionsModel | undefined
  arrears?: TenancyArrearsModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy. Used for managing update concurrency */
  string | undefined
}
/** Read model representing a Guarantor */
export const guarantorModel = z.object({
  /** The identifier for the guarantor record */ id: z.string().nullable().optional(),
  /** The identifier for the contact record associated with the guarantor */
  guarantorAssociatedId: z.string().nullable().optional(),
  /** Value indicating whether a the referenced guarantor is a person or a company */
  type: z.string().nullable().optional(),
  /** The status of the reference requested from the guarantor (notSet/requested/received) */
  referenceStatus: z.string().nullable().optional(),
})
/** Read model representing a tenant/applicant reference */
export const referenceModel = z.object({
  /** The identifier for the reference record */ id: z.string().nullable().optional(),
  /** The identifier for the contact/company record associated with the reference */
  referenceAssociatedId: z.string().nullable().optional(),
  /** Value indicating whether a referenced contact is a person or a company */ type: z.string().nullable().optional(),
  /** The status of the reference (notSet/requested/received) */ referenceStatus: z.string().nullable().optional(),
  /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
  referenceType: z.string().nullable().optional(),
})
/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy relationship */ id: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the tenancy */ tenancyId: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  isMain: z.boolean().nullable().optional(),
  /** A flag denoting whether or not this relationship is archived */ fromArchive: z.boolean().nullable().optional(),
  /** Collection of guarantors recorded for this relationship */
  guarantors: z.array(guarantorModel).nullable().optional(),
  /** Collection of references recorded for this relationship */
  references: z.array(referenceModel).nullable().optional(),
})
/** Read model representing a Guarantor */
export type GuarantorModel = {
  id?: /** The identifier for the guarantor record */ string | undefined
  guarantorAssociatedId?: /** The identifier for the contact record associated with the guarantor */ string | undefined
  type?: /** Value indicating whether a the referenced guarantor is a person or a company */ string | undefined
  referenceStatus?: /** The status of the reference requested from the guarantor (notSet/requested/received) */
  string | undefined
}
/** Read model representing a tenant/applicant reference */
export type ReferenceModel = {
  id?: /** The identifier for the reference record */ string | undefined
  referenceAssociatedId?: /** The identifier for the contact/company record associated with the reference */
  string | undefined
  type?: /** Value indicating whether a referenced contact is a person or a company */ string | undefined
  referenceStatus?: /** The status of the reference (notSet/requested/received) */ string | undefined
  referenceType?: /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
  string | undefined
}
/** Representation of a relationship between a tenancy and a contact or company */
export type TenancyContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy relationship */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  boolean | undefined
  fromArchive?: /** A flag denoting whether or not this relationship is archived */ boolean | undefined
  guarantors?: /** Collection of guarantors recorded for this relationship */ Array<GuarantorModel> | undefined
  references?: /** Collection of references recorded for this relationship */ Array<ReferenceModel> | undefined
}
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy check */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy check was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy check was last modified */ modified: z.string().nullable().optional(),
  /** Textual description of what the tenancy check relates to */ description: z.string().nullable().optional(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */ type: z.string().nullable().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().nullable().optional(),
  /** App specific metadata that has been set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export type TenancyCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy check */ string | undefined
  created?: /** The date and time when the tenancy check was created */ string | undefined
  modified?: /** The date and time when the tenancy check was last modified */ string | undefined
  description?: /** Textual description of what the tenancy check relates to */ string | undefined
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  type?: /** The type of the tenancy check (preTenancy/postTenancy) */ string | undefined
  checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  string | undefined
  tenancyId?: /** The unique identifier of the tenancy that this check relates to */ string | undefined
  metadata?: /** App specific metadata that has been set against the tenancy check */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  string | undefined
}
/** Representation of a tenancy break clauses break from details */
export const tenancyBreakClauseBreakFromModel = z.object({
  /** The earliest date at which the tenant/landlord can end the tenancy agreement */
  date: z.string().nullable().optional(),
  /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
  minTermMonths: z.number().int().nullable().optional(),
})
/** Representation of a tenancy break clauses notice requirements */
export const tenancyBreakClauseNoticeRequiredModel = z.object({
  /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
  date: z.string().nullable().optional(),
  /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
  beforeBreakMonths: z.number().int().nullable().optional(),
})
/** Representation of party agreements to a specific clause in a tenancy agreement */
export const tenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */ landlord: z.boolean().nullable().optional(),
  /** A flag to determine if the tenant has agreed */ tenant: z.boolean().nullable().optional(),
})
/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the break clause */ id: z.string().nullable().optional(),
  /** The date and time when the break clause was created */ created: z.string().nullable().optional(),
  /** The date and time when the break clause last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated break clause */ clauseTypeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The date the break clause became (or becomes) active */ active: z.string().nullable().optional(),
  /** The parties that the break clause applies to (landlord/tenant/mutual) */
  appliesTo: z.string().nullable().optional(),
  /** Tenancy agreement text relating to the break clause */ letterText: z.string().nullable().optional(),
  breakFrom: tenancyBreakClauseBreakFromModel.nullable().optional(),
  noticeRequired: tenancyBreakClauseNoticeRequiredModel.nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the break clause. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy break clauses break from details */
export type TenancyBreakClauseBreakFromModel = {
  date?: /** The earliest date at which the tenant/landlord can end the tenancy agreement */ string | undefined
  minTermMonths?: /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
  number | undefined
}
/** Representation of a tenancy break clauses notice requirements */
export type TenancyBreakClauseNoticeRequiredModel = {
  date?: /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
  string | undefined
  beforeBreakMonths?: /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
  number | undefined
}
/** Representation of party agreements to a specific clause in a tenancy agreement */
export type TenancyAgreementModel = {
  landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
  tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
}
/** Representation of a tenancy break clause */
export type TenancyBreakClauseModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the break clause */ string | undefined
  created?: /** The date and time when the break clause was created */ string | undefined
  modified?: /** The date and time when the break clause last modified */ string | undefined
  clauseTypeId?: /** The identifier of the associated break clause */ string | undefined
  description?: /** The break clauses description */ string | undefined
  active?: /** The date the break clause became (or becomes) active */ string | undefined
  appliesTo?: /** The parties that the break clause applies to (landlord/tenant/mutual) */ string | undefined
  letterText?: /** Tenancy agreement text relating to the break clause */ string | undefined
  breakFrom?: TenancyBreakClauseBreakFromModel | undefined
  noticeRequired?: TenancyBreakClauseNoticeRequiredModel | undefined
  agreements?: TenancyAgreementModel | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the break clause. Used for managing update concurrency */
  string | undefined
}
/** Representation of a tenancy allowance */
export const tenancyAllowanceModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the allowance */ id: z.string().nullable().optional(),
  /** The date and time when the allowance was created */ created: z.string().nullable().optional(),
  /** The date and time when the allowance last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated allowance */ typeId: z.string().nullable().optional(),
  /** The break clauses description */ description: z.string().nullable().optional(),
  /** The state of the allowance (allowed/notAllowed) */ state: z.string().nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** Tenancy agreement text that relates to the allowance */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the allowance. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy allowance */
export type TenancyAllowanceModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the allowance */ string | undefined
  created?: /** The date and time when the allowance was created */ string | undefined
  modified?: /** The date and time when the allowance last modified */ string | undefined
  typeId?: /** The identifier of the associated allowance */ string | undefined
  description?: /** The break clauses description */ string | undefined
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: TenancyAgreementModel | undefined
  letterText?: /** Tenancy agreement text that relates to the allowance */ string | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the allowance. Used for managing update concurrency */
  string | undefined
}
/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the responsibility */ id: z.string().nullable().optional(),
  /** The date and time when the responsibility was created */ created: z.string().nullable().optional(),
  /** The date and time when the responsibility last modified */ modified: z.string().nullable().optional(),
  /** The identifier of the associated to the responsibility */ typeId: z.string().nullable().optional(),
  /** The responsibilities description */ description: z.string().nullable().optional(),
  /** The responsible party (landlord/tenant) */ appliesTo: z.string().nullable().optional(),
  agreements: tenancyAgreementModel.nullable().optional(),
  /** Tenancy agreement text that relates to the responsibility */ letterText: z.string().nullable().optional(),
  /** The unique identifier of the associated tenancy */ tenancyId: z.string().nullable().optional(),
  /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancies responsibility */
export type TenancyResponsibilityModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the responsibility */ string | undefined
  created?: /** The date and time when the responsibility was created */ string | undefined
  modified?: /** The date and time when the responsibility last modified */ string | undefined
  typeId?: /** The identifier of the associated to the responsibility */ string | undefined
  description?: /** The responsibilities description */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: TenancyAgreementModel | undefined
  letterText?: /** Tenancy agreement text that relates to the responsibility */ string | undefined
  tenancyId?: /** The unique identifier of the associated tenancy */ string | undefined
  _eTag?: /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  string | undefined
}
/** Represents rent changes in a tenancies renewal */
export const tenancyRentChangeModel = z.object({
  /** The amount the rent has changed in the renewal */ amount: z.number().nullable().optional(),
  /** The percentage the rent has changed in the renewal */ percentage: z.number().nullable().optional(),
})
/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the renewal negotiation */ id: z.string().nullable().optional(),
  /** The date and time when the renewal was created */ created: z.string().nullable().optional(),
  /** The date and time when the renewal was last modified */ modified: z.string().nullable().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  status: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the renewal */
  negotiatorId: z.string().nullable().optional(),
  /** The tenancies rent amount */ rent: z.number().nullable().optional(),
  /** The rent collection frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  rentChange: tenancyRentChangeModel.nullable().optional(),
  /** The unique identifier of the tenancy associated to the renewal */ tenancyId: z.string().nullable().optional(),
  lettingFee: tenancyLettingFeeModel.nullable().optional(),
  managementFee: tenancyManagementFeeModel.nullable().optional(),
  /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Represents rent changes in a tenancies renewal */
export type TenancyRentChangeModel = {
  amount?: /** The amount the rent has changed in the renewal */ number | undefined
  percentage?: /** The percentage the rent has changed in the renewal */ number | undefined
}
/** Represents a tenancies renewal negotiation */
export type TenancyRenewalModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the renewal negotiation */ string | undefined
  created?: /** The date and time when the renewal was created */ string | undefined
  modified?: /** The date and time when the renewal was last modified */ string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  status?: /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator associated to the renewal */ string | undefined
  rent?: /** The tenancies rent amount */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/4weeks/annually) */ string | undefined
  rentChange?: TenancyRentChangeModel | undefined
  tenancyId?: /** The unique identifier of the tenancy associated to the renewal */ string | undefined
  lettingFee?: TenancyLettingFeeModel | undefined
  managementFee?: TenancyManagementFeeModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  string | undefined
}
/** Represents a one off fee associated with tenancy extension or alteration */
export const tenancyExtensionAlterationFeeModel = z.object({
  /** The one fee amount */ amount: z.number().nullable().optional(),
  /** The one of fee summary text */ summary: z.string().nullable().optional(),
  /** The fee type */ type: z.string().nullable().optional(),
})
/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the extension or alteration */ id: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was created */ created: z.string().nullable().optional(),
  /** The date and time when the extension or alteration was last modified */
  modified: z.string().nullable().optional(),
  /** The start date of the extension or alteration */ startDate: z.string().nullable().optional(),
  /** The end date of the extension (alterations do not have an end date) */ endDate: z.string().nullable().optional(),
  /** The type of entry (extension|alteration) */ type: z.string().nullable().optional(),
  /** The unique identifier of the negotiator associated to the extension or alteration */
  negotiatorId: z.string().nullable().optional(),
  /** The extension or alteration rent amount */ rent: z.number().nullable().optional(),
  /** The rent frequency (weekly/monthly/4weeks/annually) */ rentFrequency: z.string().nullable().optional(),
  /** The unique identifier of the tenancy associated to the extension or alteration */
  tenancyId: z.string().nullable().optional(),
  fee: tenancyExtensionAlterationFeeModel.nullable().optional(),
  /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Represents a one off fee associated with tenancy extension or alteration */
export type TenancyExtensionAlterationFeeModel = {
  amount?: /** The one fee amount */ number | undefined
  summary?: /** The one of fee summary text */ string | undefined
  type?: /** The fee type */ string | undefined
}
/** Represents a tenancy extension or alteration */
export type TenancyExtensionAlterationModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the extension or alteration */ string | undefined
  created?: /** The date and time when the extension or alteration was created */ string | undefined
  modified?: /** The date and time when the extension or alteration was last modified */ string | undefined
  startDate?: /** The start date of the extension or alteration */ string | undefined
  endDate?: /** The end date of the extension (alterations do not have an end date) */ string | undefined
  type?: /** The type of entry (extension|alteration) */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator associated to the extension or alteration */
  string | undefined
  rent?: /** The extension or alteration rent amount */ number | undefined
  rentFrequency?: /** The rent frequency (weekly/monthly/4weeks/annually) */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy associated to the extension or alteration */ string | undefined
  fee?: TenancyExtensionAlterationFeeModel | undefined
  _eTag?: /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  string | undefined
}
/** Representation of a tenancy renewal check */
export const tenancyRenewalCheckModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the tenancy renewal check */ id: z.string().nullable().optional(),
  /** The date and time when the tenancy renewal check was created */ created: z.string().nullable().optional(),
  /** The date and time when the tenancy renewal check was last modified */ modified: z.string().nullable().optional(),
  /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */
  status: z.string().nullable().optional(),
  /** Textual description of what the tenancy renewal check relates to */ description: z.string().nullable().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that this check relates to */ tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the renewal that this check relates to */ renewalId: z.string().nullable().optional(),
  /** App specific metadata that has been set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a tenancy renewal check */
export type TenancyRenewalCheckModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the tenancy renewal check */ string | undefined
  created?: /** The date and time when the tenancy renewal check was created */ string | undefined
  modified?: /** The date and time when the tenancy renewal check was last modified */ string | undefined
  status?: /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */ string | undefined
  description?: /** Textual description of what the tenancy renewal check relates to */ string | undefined
  checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  string | undefined
  tenancyId?: /** The unique identifier of the tenancy that this check relates to */ string | undefined
  renewalId?: /** The unique identifier of the renewal that this check relates to */ string | undefined
  metadata?: /** App specific metadata that has been set against the tenancy renewal check */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  string | undefined
}
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
/** Model representing a nominal account */
export const nominalAccountModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the nominal account */ id: z.string().nullable().optional(),
  /** The date and time when the nominal account was created */ created: z.string().nullable().optional(),
  /** The date and time when the nominal account was last modified */ modified: z.string().nullable().optional(),
  /** The nominal account name */ name: z.string().nullable().optional(),
  /** Flag indicating whether or not the nominal account can be associated with works orders */
  appliesToWorksOrders: z.boolean().nullable().optional(),
})
/** Model representing a nominal account */
export type NominalAccountModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the nominal account */ string | undefined
  created?: /** The date and time when the nominal account was created */ string | undefined
  modified?: /** The date and time when the nominal account was last modified */ string | undefined
  name?: /** The nominal account name */ string | undefined
  appliesToWorksOrders?: /** Flag indicating whether or not the nominal account can be associated with works orders */
  boolean | undefined
}
/** Representation of a vendor's source */
export const vendorSourceModel = z.object({
  /** The unique identifier of the source of the vendor */ id: z.string().nullable().optional(),
  /** The source type (office/source) */ type: z.string().nullable().optional(),
})
/** A summarised view of the details of a contact or company associated to a vendor */
export const vendorContactModel = z.object({
  /** The unique identifier of the contact or company */ id: z.string().nullable().optional(),
  /** The complete name of the contact or company */ name: z.string().nullable().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */ title: z.string().nullable().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */ forename: z.string().nullable().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */ surname: z.string().nullable().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().nullable().optional(),
  /** The type of the contact (company/contact) */ type: z.string().nullable().optional(),
  /** The home phone number of the contact or company */ homePhone: z.string().nullable().optional(),
  /** The work phone number of the contact or company */ workPhone: z.string().nullable().optional(),
  /** The mobile phone number of the contact or company */ mobilePhone: z.string().nullable().optional(),
  /** The email address of the contact or company */ email: z.string().nullable().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().nullable().optional(),
  /** Flag to determine if this role on the system is now archived */ fromArchive: z.boolean().nullable().optional(),
  primaryAddress: applicantContactAddressModel.nullable().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.array(additionalContactDetailModel).nullable().optional(),
})
/** Representation of a vendor */
export const vendorModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the vendor */ id: z.string().nullable().optional(),
  /** The date and time when the vendor was created */ created: z.string().nullable().optional(),
  /** The date and time when the vendor was last modified */ modified: z.string().nullable().optional(),
  /** The date the vendor was last called */ lastCall: z.string().nullable().optional(),
  /** The date the vendor is next due to be called */ nextCall: z.string().nullable().optional(),
  /** The unique identifier of the type of vendor */ typeId: z.string().nullable().optional(),
  /** The unique identifier of the reason the vendor is selling */ sellingReasonId: z.string().nullable().optional(),
  /** The unique identifier of the solicitor associated to the vendor */ solicitorId: z.string().nullable().optional(),
  /** The unique identifier of the property associated to the vendor */ propertyId: z.string().nullable().optional(),
  source: vendorSourceModel.nullable().optional(),
  /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
  related: z.array(vendorContactModel).nullable().optional(),
  /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
  correspondenceAddressType: z.string().nullable().optional(),
  /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
  negotiatorId: z.string().nullable().optional(),
  /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).nullable().optional(),
  /** The date and time the vendor was archived */ archivedOn: z.string().nullable().optional(),
  /** A flag determining whether or not the vendor is archived */ fromArchive: z.boolean().nullable().optional(),
  /** App specific metadata that has been set against the vendor */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the vendor. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a vendor's source */
export type VendorSourceModel = {
  id?: /** The unique identifier of the source of the vendor */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** A summarised view of the details of a contact or company associated to a vendor */
export type VendorContactModel = {
  id?: /** The unique identifier of the contact or company */ string | undefined
  name?: /** The complete name of the contact or company */ string | undefined
  title?: /** The title of the contact (Available when 'type' is 'contact') */ string | undefined
  forename?: /** The forename of the contact (Available when 'type' is 'contact') */ string | undefined
  surname?: /** The surname of the contact (Available when 'type' is 'contact') */ string | undefined
  dateOfBirth?: /** The date of birth of the contact (Available when 'type' is 'contact') */ string | undefined
  type?: /** The type of the contact (company/contact) */ string | undefined
  homePhone?: /** The home phone number of the contact or company */ string | undefined
  workPhone?: /** The work phone number of the contact or company */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact or company */ string | undefined
  email?: /** The email address of the contact or company */ string | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */ string | undefined
  fromArchive?: /** Flag to determine if this role on the system is now archived */ boolean | undefined
  primaryAddress?: ApplicantContactAddressModel | undefined
  additionalContactDetails?: /** A collection of additional contact details */
  Array<AdditionalContactDetailModel> | undefined
}
/** Representation of a vendor */
export type VendorModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the vendor */ string | undefined
  created?: /** The date and time when the vendor was created */ string | undefined
  modified?: /** The date and time when the vendor was last modified */ string | undefined
  lastCall?: /** The date the vendor was last called */ string | undefined
  nextCall?: /** The date the vendor is next due to be called */ string | undefined
  typeId?: /** The unique identifier of the type of vendor */ string | undefined
  sellingReasonId?: /** The unique identifier of the reason the vendor is selling */ string | undefined
  solicitorId?: /** The unique identifier of the solicitor associated to the vendor */ string | undefined
  propertyId?: /** The unique identifier of the property associated to the vendor */ string | undefined
  source?: VendorSourceModel | undefined
  related?: /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
  Array<VendorContactModel> | undefined
  correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
  string | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
  Array<string> | undefined
  archivedOn?: /** The date and time the vendor was archived */ string | undefined
  fromArchive?: /** A flag determining whether or not the vendor is archived */ boolean | undefined
  metadata?: /** App specific metadata that has been set against the vendor */
  Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the vendor. Used for managing update concurrency */ string | undefined
}
/** Representation of a relationship between a vendor and a contact or company */
export const vendorContactRelationshipModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the vendor relationship */ id: z.string().nullable().optional(),
  /** The unique identifier of the vendor */ vendorId: z.string().nullable().optional(),
  /** The date and time when the relationship was created */ created: z.string().nullable().optional(),
  /** The date and time when the relationship was last modified */ modified: z.string().nullable().optional(),
  /** The type of related entity (contact/company) */ associatedType: z.string().nullable().optional(),
  /** The unique identifier of the related contact or company */ associatedId: z.string().nullable().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
  isMain: z.boolean().nullable().optional(),
})
/** Representation of a relationship between a vendor and a contact or company */
export type VendorContactRelationshipModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the vendor relationship */ string | undefined
  vendorId?: /** The unique identifier of the vendor */ string | undefined
  created?: /** The date and time when the relationship was created */ string | undefined
  modified?: /** The date and time when the relationship was last modified */ string | undefined
  associatedType?: /** The type of related entity (contact/company) */ string | undefined
  associatedId?: /** The unique identifier of the related contact or company */ string | undefined
  isMain?: /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
  boolean | undefined
}
/** Representation of a works order item */
export const worksOrderItemModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the works order item */ id: z.string().nullable().optional(),
  /** The unique identifier of the parent works order */ worksOrderId: z.string().nullable().optional(),
  /** The date and time when the works order item was created */ created: z.string().nullable().optional(),
  /** The date and time when the works order item was last modified */ modified: z.string().nullable().optional(),
  /** The notes attached to the works order item */ notes: z.string().nullable().optional(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string().nullable().optional(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().nullable().optional(),
  /** The type of estimate supplied (agent/verbal/written) */ estimateType: z.string().nullable().optional(),
  /** The net cost of the work to be carried out */ netAmount: z.number().nullable().optional(),
  /** The additional vat cost for the work to be carried out */ vatAmount: z.number().nullable().optional(),
  /** The gross cost of the work to be carried out */ grossAmount: z.number().nullable().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().nullable().optional(),
  /** The unique identifier of the nominal account the works order financial transactions are allocated to */
  nominalAccountId: z.string().nullable().optional(),
  /** The ETag for the current version of the works order item. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a works order */
export const worksOrderModel = z.object({
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
  /** The unique identifier of the works order */ id: z.string().nullable().optional(),
  /** The date and time when the works order was created */ created: z.string().nullable().optional(),
  /** The date and time when the works order was last modified */ modified: z.string().nullable().optional(),
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().nullable().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string().nullable().optional(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().nullable().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string().nullable().optional(),
  /** The unique identifier of the type of work that needs to be carried out */
  typeId: z.string().nullable().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string().nullable().optional(),
  /** A free text description of the work required */ description: z.string().nullable().optional(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string().nullable().optional(),
  /** The priority level of the works order (low/medium/high) */ priority: z.string().nullable().optional(),
  /** The date when the works order was booked */ booked: z.string().nullable().optional(),
  /** The date when the work is required to be completed by */ required: z.string().nullable().optional(),
  /** The date when the work was completed */ completed: z.string().nullable().optional(),
  /** The total net cost for all of the items of work to be carried out */
  totalNetAmount: z.number().nullable().optional(),
  /** The total additional vat cost for all of the items of work to be carried out */
  totalVatAmount: z.number().nullable().optional(),
  /** The total gross cost for all of the items of work to be carried out */
  totalGrossAmount: z.number().nullable().optional(),
  /** A collection of jobs/items of work that the works order should fulfill */
  items: z.array(worksOrderItemModel).nullable().optional(),
  /** App specific metadata that has been set against the works order */
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
  /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
  /** The ETag for the current version of the works order. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Representation of a works order item */
export type WorksOrderItemModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the works order item */ string | undefined
  worksOrderId?: /** The unique identifier of the parent works order */ string | undefined
  created?: /** The date and time when the works order item was created */ string | undefined
  modified?: /** The date and time when the works order item was last modified */ string | undefined
  notes?: /** The notes attached to the works order item */ string | undefined
  chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */ string | undefined
  estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  number | undefined
  estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined
  netAmount?: /** The net cost of the work to be carried out */ number | undefined
  vatAmount?: /** The additional vat cost for the work to be carried out */ number | undefined
  grossAmount?: /** The gross cost of the work to be carried out */ number | undefined
  reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  number | undefined
  nominalAccountId?: /** The unique identifier of the nominal account the works order financial transactions are allocated to */
  string | undefined
  _eTag?: /** The ETag for the current version of the works order item. Used for managing update concurrency */
  string | undefined
}
/** Representation of a works order */
export type WorksOrderModel = {
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: /** The unique identifier of the works order */ string | undefined
  created?: /** The date and time when the works order was created */ string | undefined
  modified?: /** The date and time when the works order was last modified */ string | undefined
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId?: /** The unique identifier of the property where the work is to be carried out */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | undefined
  typeId?: /** The unique identifier of the type of work that needs to be carried out */ string | undefined
  status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string | undefined
  description?: /** A free text description of the work required */ string | undefined
  reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | undefined
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  totalNetAmount?: /** The total net cost for all of the items of work to be carried out */ number | undefined
  totalVatAmount?: /** The total additional vat cost for all of the items of work to be carried out */
  number | undefined
  totalGrossAmount?: /** The total gross cost for all of the items of work to be carried out */ number | undefined
  items?: /** A collection of jobs/items of work that the works order should fulfill */
  Array<WorksOrderItemModel> | undefined
  metadata?: /** App specific metadata that has been set against the works order */
  Record<string, Record<string, never>> | undefined
  extrasField?: /** The requested extras fields */ Record<string, Record<string, never>> | undefined
  _eTag?: /** The ETag for the current version of the works order. Used for managing update concurrency */
  string | undefined
}
export const pagingLinkModel = linkModel
export const applicantModelPagedResult = z.object({
  _embedded: z.array(applicantModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** The details specific to applicants with a marketingMode of renting */
export type UpdateApplicantRentingModel = {
  moveDate?: /** The date the applicant is looking to move to a new property */ string | undefined
  term?: /** The applicant's preferred letting term (long/short/any) */ string | undefined
  rentFrom?: /** The lower bound of the applicant's budget */ number | undefined
  rentTo?: /** The upper bound of the applicant's budget */ number | undefined
  rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  string | undefined
  furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
  Array<string> | undefined
  positionId?: /** The identifier of the applicant's renting position */ string | undefined
}
/** Request body used to update an existing applicant */
export type UpdateApplicantModel = {
  marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  string | undefined
  currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  string | undefined
  active?: /** A flag determining whether or not the applicant is actively looking for a property */ boolean | undefined
  notes?: /** A free text field describing any adhoc buying or renting requirements */ string | undefined
  statusId?: /** The status id of the applicant */ string | undefined
  sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  string | undefined
  lastCall?: /** The date when the applicant was last contacted */ string | undefined
  nextCall?: /** The date when the applicant is next due to be contacted */ string | undefined
  departmentId?: /** The unique identifier of the department that the applicant requirements are associated with. The applicant will only match to properties with the same value */
  string | undefined
  solicitorId?: /** The unique identifier of the solicitor associated to the applicant */ string | undefined
  potentialClient?: /** A flag determining whether or not the applicant is a potential client */ boolean | undefined
  type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  bedroomsMin?: /** The minimum number of bedrooms the applicant requires */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms the applicant requires */ number | undefined
  receptionsMin?: /** The minimum number of reception rooms the applicant requires */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms the applicant requires */ number | undefined
  bathroomsMin?: /** The minimum number of bathrooms the applicant requires */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms the applicant requires */ number | undefined
  parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */ number | undefined
  parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */ number | undefined
  locationType?: /** The applicant's location type (areas/addresses/none) */ string | undefined
  locationOptions?: /** The applicant's location options */ Array<string> | undefined
  buying?: ApplicantBuyingModel | undefined
  renting?: UpdateApplicantRentingModel | undefined
  externalArea?: ApplicantExternalAreaModel | undefined
  internalArea?: ApplicantInternalAreaModel | undefined
  source?: ApplicantSourceModel | undefined
  regional?: ApplicantRegionalModel | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  metadata?: /** App specific metadata to set against the applicant */ Record<string, Record<string, never>> | undefined
}
export const applicantContactRelationshipModelPagedResult = z.object({
  _embedded: z.array(applicantContactRelationshipModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const areaModelPagedResult = z.object({
  _embedded: z.array(areaModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing area */
export type UpdateAreaModel = {
  name?: /** The name of the area */ string | undefined
  area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments associated to the area */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  Array<string> | undefined
}
export const appointmentModelPagedResult = z.object({
  _embedded: z.array(appointmentModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Represents an external attendee on an appointment */
export type UpdateAppointmentAttendeeModel = {
  id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
  string | undefined
  type?: /** The type of attendee (applicant/contact/landlord/tenant) */ string | undefined
  confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */ boolean | undefined
}
/** Represents the follow up information on a single appointment */
export type UpdateAppointmentFollowUpModel = {
  responseId?: /** The unique identifier of a pre-defined follow up response type */ string | undefined
  notes?: /** The internal follow up notes to be stored against the appointment */ string | undefined
}
/** Details of an appointment's recurrence pattern */
export type UpdateAppointmentRecurrenceModel = {
  type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */ string | undefined
  interval?: /** The numeric value denoting how often the appointment will recur */ number | undefined
  until?: /** The date and time of the last occurrence of the appointment */ string | undefined
}
export type UpdateAppointmentDocumentModel = AppointmentDocumentModel
/** Request body used to update an existing calendar appointment */
export type UpdateAppointmentModel = {
  start?: /** The date and time when the appointment will start */ string | undefined
  end?: /** The date and time when the appointment will end */ string | undefined
  followUpOn?: /** The date when the appointment should be followed up */ string | undefined
  typeId?: /** The unique identifier of the appointment type */ string | undefined
  description?: /** A free text description about the appointment */ string | undefined
  propertyId?: /** The unique identifier of the property related to the appointment */ string | undefined
  otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  string | undefined
  organiserId?: /** The unique identifier of the negotiator that organised the appointment */ string | undefined
  cancelled?: /** A flag denoting whether or not the appointment has been cancelled */ boolean | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  Array<string> | undefined
  attendee?: UpdateAppointmentAttendeeModel | undefined
  accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  boolean | undefined
  virtual?: /** A flag denoting whether or not the appointment is virtual */ boolean | undefined
  isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  boolean | undefined
  negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  boolean | undefined
  attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
  boolean | undefined
  propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  boolean | undefined
  attended?: /** The attendance status of the appointment (notSet/noShow/attended) */ string | undefined
  followUp?: UpdateAppointmentFollowUpModel | undefined
  recurrence?: UpdateAppointmentRecurrenceModel | undefined
  documents?: UpdateAppointmentDocumentModel | undefined
  metadata?: /** App specific metadata to set against the appointment */
  Record<string, Record<string, never>> | undefined
}
export const openHouseAttendeeModelPagedResult = z.object({
  _embedded: z.array(openHouseAttendeeModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to upda te a new open house attendee */
export type UpdateOpenHouseAttendeeModel = {
  interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  string | undefined
  notes?: /** Notes on this open house attendee */ string | undefined
}
export const companyModelPagedResult = z.object({
  _embedded: z.array(companyModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body to set the address of an existing company */
export type UpdateCompanyAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
/** Request body used to update an existing company */
export type UpdateCompanyModel = {
  name?: /** The name of the company */ string | undefined
  branch?: /** The branch name of the company */ string | undefined
  notes?: /** A free text field containing notes that describe the company's business or service offering */
  string | undefined
  active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
  vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
  typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  Array<string> | undefined
  supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
  workPhone?: /** The work phone number of the company */ string | undefined
  mobilePhone?: /** The mobile phone number of the company */ string | undefined
  email?: /** The email address of the company */ string | undefined
  address?: UpdateCompanyAddressModel | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
  boolean | undefined
  metadata?: /** App specific metadata to set against the company */ Record<string, Record<string, never>> | undefined
}
export const companyRoleModelPagedResult = z.object({
  _embedded: z.array(companyRoleModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Representation of a staff member */
export const staffModel = z.object({
  /** The staff member's name */ name: z.string().nullable().optional(),
  /** A flag determining whether or not the staff member is currently active */
  active: z.boolean().nullable().optional(),
  /** The staff member's job title */ jobTitle: z.string().nullable().optional(),
  /** The staff member's work phone */ workPhone: z.string().nullable().optional(),
  /** The staff member's mobile phone */ mobilePhone: z.string().nullable().optional(),
  /** The staff member's email */ email: z.string().nullable().optional(),
  /** The staff member's preferred salutation */ salutation: z.string().nullable().optional(),
})
export const staffModelPagedResult = z.object({
  _embedded: z.array(staffModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Representation of a configuration item */
export const listItemModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
})
/** Representation of all of the available configurable items */
export const typeModel = z.object({
  /** A list of configurable agency types */ agencyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable appointment types */ appointmentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable applicant statuses */ applicantStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable board statuses */ boardStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable buying positions */ buyingPositions: z.array(listItemModel).nullable().optional(),
  /** A list of configurable buying reasons */ buyingReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable certificate types */ certificateTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable company types */ companyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable contact categories */ contactCategories: z.array(listItemModel).nullable().optional(),
  /** A list of configurable document types */ documentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable identity document types */
  identityDocumentTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable journal entry types */ journalEntryTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable key types */ keyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable follow up responses */ followUpResponses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable selling reasons */ sellingReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable rent insurance cancellation reasons */
  rentInsuranceCancellationReasons: z.array(listItemModel).nullable().optional(),
  /** A list of configurable renting positions */ rentingPositions: z.array(listItemModel).nullable().optional(),
  /** A list of configurable supplier types */ supplierTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable task types */ taskTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable tenancy legal status */ tenancyLegalStatuses: z.array(listItemModel).nullable().optional(),
  /** A list of configurable tenancy types */ tenancyTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable vendor types */ vendorTypes: z.array(listItemModel).nullable().optional(),
  /** A list of configurable works order types */ worksOrderTypes: z.array(listItemModel).nullable().optional(),
})
/** Representation of a certificate type */
export const certificateTypeModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
  /** The configurable statuses associated to the certificate type */
  statuses: z.array(listItemModel).nullable().optional(),
})
/** Representation of detail properties configuration item
configuration */
export const listItemDetailModel = z.object({
  /** The unique identifier of the list item */ id: z.string().nullable().optional(),
  /** The textual value for the list item */ value: z.string().nullable().optional(),
  /** A flag determining the status */ active: z.boolean().nullable().optional(),
  /** A collection of unique identifiers of offices associated */ officeIds: z.array(z.string()).nullable().optional(),
})
/** Terminologies associated with the properties */
export const propertyTerminologyModel = z.object({
  /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
  useSoldStc: z.boolean().nullable().optional(),
  /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
  useMarketAppraisal: z.boolean().nullable().optional(),
})
/** Representation of the configuration settings for terminology */
export const terminologyModel = z.object({ properties: propertyTerminologyModel.nullable().optional() })
export const contactModelPagedResult = z.object({
  _embedded: z.array(contactModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update the source of an existing contact */
export type UpdateContactSourceModel = {
  id?: /** The unique identifier of the source of the contact */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Request body used to update an address on an existing contact */
export type UpdateContactAddressModel = {
  type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the adderess resides in */ string | undefined
}
/** Request body used to update an existing contact */
export type UpdateContactModel = {
  title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */ string | undefined
  forename?: /** The contact's forename */ string | undefined
  surname?: /** The contact's surname */ string | undefined
  dateOfBirth?: /** The contact's date of birth */ string | undefined
  active?: /** A flag determining whether or not the contact is currently active */ boolean | undefined
  marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */ string | undefined
  source?: UpdateContactSourceModel | undefined
  homePhone?: /** The home phone number of the contact */ string | undefined
  workPhone?: /** The work phone number of the contact */ string | undefined
  mobilePhone?: /** The mobile phone number of the contact */ string | undefined
  email?: /** The email address of the contact */ string | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  Array<string> | undefined
  negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  Array<string> | undefined
  categoryIds?: /** A collection of categories associated to the contact. */ Array<string> | undefined
  primaryAddress?: UpdateContactAddressModel | undefined
  secondaryAddress?: UpdateContactAddressModel | undefined
  workAddress?: UpdateContactAddressModel | undefined
  communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
  boolean | undefined
  communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
  boolean | undefined
  communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
  boolean | undefined
  communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
  boolean | undefined
  fromArchive?: /** A flag determining whether the contact is archived */ boolean | undefined
  metadata?: /** App specific metadata to set against the contact */ Record<string, Record<string, never>> | undefined
  additionalContactDetails?: /** A collection of additional contact details */ Record<string, string> | undefined
}
export const contactRoleModelPagedResult = z.object({
  _embedded: z.array(contactRoleModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const contactSubscriptionModelPagedResult = z.object({
  _embedded: z.array(contactSubscriptionModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const conveyancingModelPagedResult = z.object({
  _embedded: z.array(conveyancingModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body for updating sales progression information on an existing offer */
export type UpdateConveyancingModel = {
  vendorSolicitorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  string | undefined
  buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  string | undefined
  fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
  string | undefined
  deedsRequested?: /** The date when the title deeds were requested from land registry */ string | undefined
  deedsReceived?: /** The date when the title deeds were received from land registry */ string | undefined
  enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */ string | undefined
  enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
  string | undefined
  searchesPaid?: /** The date when the buyer paid for conveyancing searches */ string | undefined
  searchesApplied?: /** The date when conveyancing searches were applied for */ string | undefined
  searchesReceived?: /** The date when conveyancing searches were received */ string | undefined
  contractSent?: /** The date when the draft contract was sent */ string | undefined
  contractReceived?: /** The date when the draft contract was received */ string | undefined
  contractApproved?: /** The date when the contract was approved */ string | undefined
  contractVendorSigned?: /** The date when the vendor signed the approved contract */ string | undefined
  contractBuyerSigned?: /** The date when the buyer signed the approved contract */ string | undefined
  mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  string | undefined
  mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */ number | undefined
  mortgageSubmitted?: /** The date when the mortgage application was submitted */ string | undefined
  mortgageOfferReceived?: /** The date when the mortgage offer was received */ string | undefined
  mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */ string | undefined
  mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */ string | undefined
  mortgageSurveyDate?: /** The date of the mortgage valuation/survey */ string | undefined
  mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
  string | undefined
  additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
  string | undefined
  additionalSurveyDate?: /** The date of the additional survey */ string | undefined
  additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
  string | undefined
  exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */ string | undefined
  exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */ string | undefined
  completion?: /** The date when the sale completed */ string | undefined
  metadata?: /** App specific metadata to set against this conveyancing record */
  Record<string, Record<string, never>> | undefined
}
export const departmentModelPagedResult = z.object({
  _embedded: z.array(departmentModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const documentModelPagedResult = z.object({
  _embedded: z.array(documentModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing document */
export type UpdateDocumentModel = {
  typeId?: /** The unique identifier of the type of document */ string | undefined
  name?: /** The filename of the document */ string | undefined
  isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
  metadata?: /** App specific metadata to set against the document */ Record<string, Record<string, never>> | undefined
}
export const enquiryModelPagedResult = z.object({
  _embedded: z.array(enquiryModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing enquiry */
export type UpdateEnquiryModel = {
  applicantId?: /** The unique identifier of the applicant associated to the enquiry */ string | undefined
  status?: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
  string | undefined
}
export const identityCheckModelPagedResult = z.object({
  _embedded: z.array(identityCheckModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body to update an identity document attached to an existing contact identity check */
export type UpdateIdentityDocumentModel = {
  typeId?: /** The unique identifier of the type of identity document provided */ string | undefined
  expiry?: /** The date when the document expires and becomes invalid */ string | undefined
  details?: /** Details regarding the identity document (eg. passport number) */ string | undefined
  fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  string | undefined
  fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  string | undefined
  name?: /** The filename to store the document as */ string | undefined
}
/** Request body used to update an exist contact identity check */
export type UpdateIdentityCheckModel = {
  checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
  string | undefined
  status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */ string | undefined
  identityDocument1?: UpdateIdentityDocumentModel | undefined
  identityDocument2?: UpdateIdentityDocumentModel | undefined
  metadata?: /** App specific metadata to set against the identity check */
  Record<string, Record<string, never>> | undefined
}
export const invoiceModelPagedResult = z.object({
  _embedded: z.array(invoiceModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Detailed representation of an individual invoice */
export const invoiceDetailModel = z.object({
  /** Unique identifier of the invoice */ id: z.string().nullable().optional(),
  /** The date and time when the invoice was created */ created: z.string().nullable().optional(),
  /** The date and time when the invoice was last modified */ modified: z.string().nullable().optional(),
  /** The invoice reference */ reference: z.string().nullable().optional(),
  /** Unique identifier of the negotiator associated with the invoice */ negotiatorId: z.string().nullable().optional(),
  /** Unique identifier of the property associated with the invoice */ propertyId: z.string().nullable().optional(),
  /** Description of the invoice */ description: z.string().nullable().optional(),
  /** The status of the invoice */ status: z.string().nullable().optional(),
  /** The date of the invoice */ date: z.string().nullable().optional(),
  /** The due date of the invoice */ dueDate: z.string().nullable().optional(),
  /** Flag indicating whether the invoice has been raised */ isRaised: z.boolean().nullable().optional(),
  /** The net amount due for the invoice in the system base currency */ netAmount: z.number().nullable().optional(),
  /** The amount of VAT due for the invoice in the system base currency */ vatAmount: z.number().nullable().optional(),
  /** The value of the invoice outstanding in the system base currency */
  outstandingAmount: z.number().nullable().optional(),
  /** Collection of charges associated with the invoice */ charges: z.array(chargeModel).nullable().optional(),
  /** Collection of credits associated with the invoice */ credits: z.array(creditModel).nullable().optional(),
  /** Collection of payments associated with the invoice */ payments: z.array(paymentModel).nullable().optional(),
  _links: z.record(z.string(), linkModel).nullable().optional(),
  _embedded: z.record(z.string(), z.object({})).nullable().optional(),
})
export const paymentModelPagedResult = z.object({
  _embedded: z.array(paymentModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const creditModelPagedResult = z.object({
  _embedded: z.array(creditModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const chargeModelPagedResult = z.object({
  _embedded: z.array(chargeModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const journalEntryModelPagedResult = z.object({
  _embedded: z.array(journalEntryModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const landlordJournalEntryModelPagedResult = z.object({
  _embedded: z.array(landlordJournalEntryModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const landlordModelPagedResult = z.object({
  _embedded: z.array(landlordModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update the source of an existing landlord */
export type UpdateLandlordSourceModel = {
  id?: /** The unique identifier of the source of the landlord */ string | undefined
  type?: /** The source type (office/source) */ string | undefined
}
/** Request body used to update an existing landlord */
export type UpdateLandlordModel = {
  active?: /** A flag determining whether or not the landlord is currently active */ boolean | undefined
  solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */ string | undefined
  officeId?: /** The unique identifier of the office that is associated to the landlord */ string | undefined
  source?: UpdateLandlordSourceModel | undefined
  metadata?: /** App specific metadata that to set against the landlord */
  Record<string, Record<string, never>> | undefined
}
export const landlordContactRelationshipModelPagedResult = z.object({
  _embedded: z.array(landlordContactRelationshipModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const metadataModelPagedResult = z.object({
  _embedded: z.array(metadataModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const schemaModelPagedResult = z.object({
  _embedded: z.array(schemaModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const negotiatorModelPagedResult = z.object({
  _embedded: z.array(negotiatorModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing negotiator */
export type UpdateNegotiatorModel = {
  name?: /** The name of the negotiator */ string | undefined
  jobTitle?: /** The job title of the negotiator */ string | undefined
  active?: /** A flag determining whether or not the negotiator is active */ boolean | undefined
  workPhone?: /** The work phone number of the negotiator */ string | undefined
  mobilePhone?: /** The mobile phone number of the negotiator */ string | undefined
  email?: /** The email address of the negotiator */ string | undefined
  diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  Array<string> | undefined
  metadata?: /** App specific metadata to set against the negotiator */
  Record<string, Record<string, never>> | undefined
}
export const offerModelPagedResult = z.object({
  _embedded: z.array(offerModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing offer */
export type UpdateOfferModel = {
  negotiatorId?: /** The unique identifier of the negotiator associated to the offer */ string | undefined
  date?: /** The date when the offer was made */ string | undefined
  amount?: /** The monetary amount of the offer */ number | undefined
  status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  string | undefined
  inclusions?: /** A free text field describing items that should be included in the sale */ string | undefined
  exclusions?: /** A free text field describing items that are explicitly excluded from the sale */ string | undefined
  conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
  string | undefined
  metadata?: /** App specific metadata to set against the offer */ Record<string, Record<string, never>> | undefined
}
export const officeModelPagedResult = z.object({
  _embedded: z.array(officeModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to set the geolocation coordinates of an existing address */
export type UpdateOfficeAddressGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
/** Request body used to update the address of an existing office */
export type UpdateOfficeAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: UpdateOfficeAddressGeolocationModel | undefined
}
/** Request body used to update an existing office */
export type UpdateOfficeModel = {
  name?: /** The name of the office */ string | undefined
  active?: /** A flag denoting whether or not this office is active */ boolean | undefined
  manager?: /** The name of the office manager */ string | undefined
  address?: UpdateOfficeAddressModel | undefined
  workPhone?: /** The work phone number of the office */ string | undefined
  email?: /** The email address of the office */ string | undefined
  metadata?: /** App specific metadata to set against the office */ Record<string, Record<string, never>> | undefined
}
export const propertyModelPagedResult = z.object({
  _embedded: z.array(propertyModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update the geolocation coordinates of an existing property's address */
export type UpdatePropertyGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
/** Request body used to update the address of an existing property */
export type UpdatePropertyAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
  geolocation?: UpdatePropertyGeolocationModel | undefined
}
/** Request body used to update the EPC statistics of an existing property */
export type UpdatePropertyEpcModel = {
  exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  boolean | undefined
  eer?: /** The current energy efficiency rating */ number | undefined
  eerPotential?: /** The potential energy efficiency rating */ number | undefined
  eir?: /** The current environmental impact rating */ number | undefined
  eirPotential?: /** The potential environmental impact rating */ number | undefined
  fullDocumentUrl?: /** The URL to access the full EPC document */ string | undefined
  firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */ string | undefined
}
/** Request body to update the external land area of an existing property */
export type UpdatePropertyExternalAreaModel = {
  type?: /** The unit of area (acres/hectares) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */ number | undefined
}
/** Request body to update the internal dimensions of an existing property */
export type UpdatePropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
/** Request body used to set the tenure of an existing property */
export type UpdatePropertyTenureModel = {
  type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  string | undefined
  expiry?: /** The tenure expiration date */ string | undefined
}
/** Request body used to update the commission fee for a property */
export type UpdatePropertyCommissionFeeModel = {
  type?: /** The commission letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The commission letting fee amount */ number | undefined
}
export type UpdatePropertySharedOwnershipModel = PropertySharedOwnershipModel
/** Request body used to update details specific to sales marketing on an existing property */
export type UpdatePropertySellingModel = {
  instructed?: /** The date that the property was marked as for sale */ string | undefined
  price?: /** The marketing price of the property */ number | undefined
  reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */ number | undefined
  qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  string | undefined
  status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  string | undefined
  disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  string | undefined
  completed?: /** The date the property sale was completed */ string | undefined
  exchanged?: /** The date the property was exchanged */ string | undefined
  accountPaid?: /** The date the property account was paid */ string | undefined
  tenure?: UpdatePropertyTenureModel | undefined
  sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  string | undefined
  agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  string | undefined
  agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */ string | undefined
  fee?: UpdatePropertyCommissionFeeModel | undefined
  recommendedPrice?: /** The agent's recommended asking price */ number | undefined
  valuationPrice?: /** The agent's valuation price */ number | undefined
  brochureId?: /** The unique identifier of the document used for the sales brochure */ string | undefined
  decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */ Array<string> | undefined
  sharedOwnership?: UpdatePropertySharedOwnershipModel | undefined
}
export type UpdateUtilityModel = UtilityModel
/** Representation of a property details related to deposit */
export type UpdatePropertyLettingsDepositModel = {
  type?: /** The type of deposit (weeks/months/fixed) */ string | undefined
  amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
  number | undefined
}
/** Request body used to update details specific to rent insurance associated with a lettings property */
export type UpdatePropertyLettingRentInsuranceModel = {
  status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
  string | undefined
  referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
  string | undefined
  start?: /** The insurance policy start date */ string | undefined
  end?: /** The insurance policy end date */ string | undefined
  cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
  string | undefined
  cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
  string | undefined
  autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */ boolean | undefined
}
/** Representation of property details specific to property licence application */
export type UpdateLicenceApplicationModel = {
  status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  string | undefined
  referenceNumber?: /** The licence application reference number */ string | undefined
  date?: /** The date the licence was applied for */ string | undefined
  granted?: /** The date the licence application was granted */ string | undefined
  expiry?: /** The date the licence will expire */ string | undefined
}
/** Representation of property details specific to property Licencing */
export type UpdatePropertyLettingLicencingModel = {
  licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  boolean | undefined
  licenceType?: /** The type of licence (additional/mandatory/none/selective) */ string | undefined
  households?: /** The number of households that the licence permits in the property */ number | undefined
  occupants?: /** The number of occupants that the licence permits in the property */ number | undefined
  aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
  boolean | undefined
  application?: UpdateLicenceApplicationModel | undefined
}
/** Request body used to update details specific to lettings marketing on an existing property */
export type UpdatePropertyLettingModel = {
  instructed?: /** The date the property was marked as to let */ string | undefined
  availableFrom?: /** The date the property is next available from */ string | undefined
  availableTo?: /** The date the property is available to */ string | undefined
  agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */ string | undefined
  rent?: /** The rent being charged for the property */ number | undefined
  rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */ string | undefined
  rentIncludes?: /** Details of any bills that are included in the rent */ string | undefined
  furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  Array<string> | undefined
  term?: /** The acceptable letting terms (short/long/any) */ string | undefined
  status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  string | undefined
  agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  landlordId?: /** The unique identifier of the landlord letting the property */ string | undefined
  brochureId?: /** The unique identifier of the document used for the lettings brochure */ string | undefined
  worksOrderNote?: /** A note to accompany any works orders created for the property */ string | undefined
  minimumTerm?: /** Sets the minimum number of months the property can be let out for */ number | undefined
  managementFee?: UpdatePropertyCommissionFeeModel | undefined
  lettingFee?: UpdatePropertyCommissionFeeModel | undefined
  qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */ string | undefined
  utilities?: UpdateUtilityModel | undefined
  deposit?: UpdatePropertyLettingsDepositModel | undefined
  rentInsurance?: UpdatePropertyLettingRentInsuranceModel | undefined
  licencing?: UpdatePropertyLettingLicencingModel | undefined
}
export type UpdatePropertyRegionalModel = CreatePropertyRegionalModel
/** Request body used to set details specific to rural properties. */
export type UpdatePropertyRuralModel = {
  buildingsDescription?: /** Details of the building associated with the property. */ string | undefined
  landDescription?: /** Details of the land associated with the property. */ string | undefined
}
/** Request body used to update an existing property */
export type UpdatePropertyModel = {
  lastCall?: /** The date the owner of the property was last called */ string | undefined
  nextCall?: /** The date the owner of the property is next due to be called */ string | undefined
  roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  boolean | undefined
  strapline?: /** The strapline description containing a short summary about the property */ string | undefined
  description?: /** The brief description of the property */ string | undefined
  summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  string | undefined
  alternateId?: /** An optional alternative identifier specified for this property */ string | undefined
  specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  address?: UpdatePropertyAddressModel | undefined
  bedrooms?: /** The total number of bedrooms in the property */ number | undefined
  bedroomsMax?: /** The maximum number of bedrooms in the property */ number | undefined
  numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
  number | undefined
  receptions?: /** The total number of reception rooms in the property */ number | undefined
  receptionsMax?: /** The maximum number of reception rooms in the property */ number | undefined
  bathrooms?: /** The total number of bathrooms in the property */ number | undefined
  bathroomsMax?: /** The maximum number of bathrooms in the property */ number | undefined
  parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  number | undefined
  councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */ string | undefined
  internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
  boolean | undefined
  viewingArrangements?: /** The arrangements regarding viewing the property */ string | undefined
  videoUrl?: /** The url of a video associated with this property, such as a virtual tour */ string | undefined
  videoCaption?: /** The caption for the video url associated with this property */ string | undefined
  video2Url?: /** The url of a second video associated with this property, such as a virtual tour */ string | undefined
  video2Caption?: /** The caption for the second video url associated with this property */ string | undefined
  notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  string | undefined
  longDescription?: /** The long description of the property */ string | undefined
  floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  number | undefined
  boardStatus?: /** The status of the advertising board sited outside or near to the property */ string | undefined
  boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
  string | undefined
  boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  string | undefined
  valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  string | undefined
  epc?: UpdatePropertyEpcModel | undefined
  externalArea?: UpdatePropertyExternalAreaModel | undefined
  internalArea?: UpdatePropertyInternalAreaModel | undefined
  selling?: UpdatePropertySellingModel | undefined
  letting?: UpdatePropertyLettingModel | undefined
  regional?: UpdatePropertyRegionalModel | undefined
  rural?: UpdatePropertyRuralModel | undefined
  type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  negotiatorId?: /** The unique identifier of the negotiator managing the property */ string | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  Array<string> | undefined
  areaId?: /** The unique identifier of the area that the property resides in */ string | undefined
  url?: /** The url to the property on an external website */ string | undefined
  urlCaption?: /** The caption to accompany the url to the property on an external website */ string | undefined
  groundRent?: /** Any ground rent payment that applies to the property */ number | undefined
  groundRentComment?: /** Comments regarding the ground rent of the property */ string | undefined
  groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
  string | undefined
  groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */ number | undefined
  serviceCharge?: /** Any service charge payment that applies to the property */ number | undefined
  serviceChargeComment?: /** Comments regarding the service charge of the property */ string | undefined
  availableServicesIds?: /** Identifiers of any services connected at the property */ Array<string> | undefined
  metadata?: /** App specific metadata to set against the property */ Record<string, Record<string, never>> | undefined
}
export const certificateModelPagedResult = z.object({
  _embedded: z.array(certificateModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing certificate */
export type UpdateCertificateModel = {
  start?: /** The certificate's start date */ string | undefined
  expiry?: /** The certificate's expiry date */ string | undefined
  companyId?: /** The unique identifier of the company */ string | undefined
  notes?: /** Any general notes regarding the certificate */ string | undefined
  referenceNumber?: /** The certificate's reference number */ string | undefined
}
/** Record describing the responsible party for a given type of certificate within a property entry */
export const certificateResponsiblePartyModel = z.object({
  /** Identifier for the type of certificate for which the party is responsible */
  typeId: z.string().nullable().optional(),
  /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  responsibleParty: z.string().nullable().optional(),
})
/** Representation of certificate responsibilities configured for a property */
export const propertyCertificateResponsibilitiesModel = z.object({
  /** The id of the property to which the configured certificate responsibilities apply */
  id: z.string().nullable().optional(),
  /** The date and time on which the property was created */ created: z.string().nullable().optional(),
  /** The date and time on which the property was last modified */ modified: z.string().nullable().optional(),
  /** The configured certificate responsibilities */
  responsibleParties: z.array(certificateResponsiblePartyModel).nullable().optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().nullable().optional(),
})
/** Record describing the responsible party for a given type of certificate within a property entry */
export type CertificateResponsiblePartyModel = {
  typeId?: /** Identifier for the type of certificate for which the party is responsible */ string | undefined
  responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  string | undefined
}
export type UpdateCertificateResponsiblePartyModel = CertificateResponsiblePartyModel
/** Object containing a collection of certificate type to responsible party mappings */
export type UpdateCertificateResponsibilitiesModel = {
  responsibleParties?: /** A collection of certificate type to responsible party mappings */
  Array<UpdateCertificateResponsiblePartyModel> | undefined
}
export const keysModelPagedResult = z.object({
  _embedded: z.array(keysModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const keyMovementModelPagedResult = z.object({
  _embedded: z.array(keyMovementModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const propertyCheckModelPagedResult = z.object({
  _embedded: z.array(propertyCheckModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Model for the update of an existing check */
export type UpdatePropertyCheckModel = {
  status?: /** The status of the check (needed/notNeeded/arranging/completed) */ string | undefined
}
export const propertyAppraisalModelPagedResult = z.object({
  _embedded: z.array(propertyAppraisalModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Model for the creation of a new property appraisal */
export type UpdatePropertyAppraisalModel = {
  companyId?: /** Unique identifier of the appraising company */ string | undefined
  date?: /** The date of the appraisal */ string | undefined
  price?: /** The appraisal value */ number | undefined
  fee?: PropertyCommissionFeeModel | undefined
  notes?: /** Free-text notes associated with the appraisal */ string | undefined
}
export const propertyImageModelPagedResult = z.object({
  _embedded: z.array(propertyImageModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing property image */
export type UpdatePropertyImageModel = {
  caption?: /** The image caption */ string | undefined
  type?: /** The type of image (photograph/floorPlan/epc/map) */ string | undefined
}
export const referralModelPagedResult = z.object({
  _embedded: z.array(referralModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Update Referral Model */
export type UpdateReferralModel = {
  status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  string | undefined
  amount?: /** The amount paid to the agent for the referral */ number | undefined
  metadata?: /** App specific metadata to set against the referral */ Record<string, Record<string, never>> | undefined
}
export const referralTypeModelPagedResult = z.object({
  _embedded: z.array(referralTypeModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const webhookModelPagedResult = z.object({
  _embedded: z.array(webhookModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const sourceModelPagedResult = z.object({
  _embedded: z.array(sourceModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing source of business */
export type UpdateSourceModel = {
  name?: /** The name of the source or advertising publication */ string | undefined
  type?: /** The type of the source (source/advertisement) */ string | undefined
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
}
export const taskModelPagedResult = z.object({
  _embedded: z.array(taskModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing task, which can also be an internal message */
export type UpdateTaskModel = {
  activates?: /** The date the task becomes active (Required when 'TypeId' is given) */ string | undefined
  completed?: /** The date the task was completed */ string | undefined
  typeId?: /** The unique identifier of the task type */ string | undefined
  senderId?: /** The unique identifer of the negotiator that created the task */ string | undefined
  text?: /** The textual contents of the task or message */ string | undefined
  landlordId?: /** The unique identifier of the landlord the task is associated to */ string | undefined
  propertyId?: /** The unique identifier of the property the task is associated to */ string | undefined
  applicantId?: /** The unique identifier of the applicant the task is associated to */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy the task is associated to */ string | undefined
  contactId?: /** The unique identifier of the contact the task is associated to */ string | undefined
  recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */ string | undefined
  recipientType?: /** The type of the recipient (office/negotiator) */ string | undefined
  metadata?: /** App specific metadata that has been set against the task */
  Record<string, Record<string, never>> | undefined
}
export const tenancyModelPagedResult = z.object({
  _embedded: z.array(tenancyModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export type UpdateTenancySourceModel = CreateTenancySourceModel
/** Request body used to set the deposit of a tenancy */
export type UpdateTenancyDepositModel = {
  heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  string | undefined
  period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
  type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
  sum?: /** The amount of deposit held */ number | undefined
}
/** Request body used to update letting fees on an existing tenancy */
export type UpdateTenancyLettingFeeModel = {
  type?: /** The letting fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  string | undefined
}
/** Request body used to update management fees on an existing tenancy */
export type UpdateTenancyManagementFeeModel = {
  type?: /** The management fee type (percentage/fixed) */ string | undefined
  amount?: /** The fee amount */ number | undefined
  frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
/** Request body used to update an existing Tenancy */
export type UpdateTenancyModel = {
  startDate?: /** The start date of the tenancy */ string | undefined
  endDate?: /** The end date of the tenancy */ string | undefined
  status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  string | undefined
  agentRole?: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  endDateConfirmed?: /** Flag for end date confirmation */ boolean | undefined
  isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
  typeId?: /** The unique identifier of the type of tenancy */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | undefined
  source?: UpdateTenancySourceModel | undefined
  rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  string | undefined
  rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
  rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
  meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
  meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
  meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
  meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
  string | undefined
  meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
  meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
  feeNotes?: /** Financial notes set against the tenancy */ string | undefined
  legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | undefined
  deposit?: UpdateTenancyDepositModel | undefined
  lettingFee?: UpdateTenancyLettingFeeModel | undefined
  managementFee?: UpdateTenancyManagementFeeModel | undefined
  metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
}
export const tenancyContactRelationshipModelPagedResult = z.object({
  _embedded: z.array(tenancyContactRelationshipModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const tenancyCheckModelPagedResult = z.object({
  _embedded: z.array(tenancyCheckModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Model for updat of an existing tenancy check */
export type UpdateTenancyCheckModel = {
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  metadata?: /** App specific metadata to set against the tenancy check */
  Record<string, Record<string, never>> | undefined
}
export const tenancyBreakClauseModelPagedResult = z.object({
  _embedded: z.array(tenancyBreakClauseModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export type UpdateTenancyAgreementModel = CreateTenancyAgreementModel
export type UpdateTenancyBreakFromModel = CreateTenancyBreakFromModel
export type UpdateTenancyNoticeRequiredModel = CreateTenancyNoticeRequiredModel
/** Request body used to update tenancy break clause */
export type UpdateTenancyBreakClauseModel = {
  active?: /** The date the break clause becomes/became active */ string | undefined
  appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
  breakFrom?: UpdateTenancyBreakFromModel | undefined
  noticeRequired?: UpdateTenancyNoticeRequiredModel | undefined
}
export const tenancyAllowanceModelPagedResult = z.object({
  _embedded: z.array(tenancyAllowanceModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update tenancy allowance */
export type UpdateTenancyAllowanceModel = {
  state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
}
export const tenancyResponsibilityModelPagedResult = z.object({
  _embedded: z.array(tenancyResponsibilityModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update tenancy responsibility */
export type UpdateTenancyResponsibilityModel = {
  appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
  agreements?: UpdateTenancyAgreementModel | undefined
}
export const tenancyRenewalModelPagedResult = z.object({
  _embedded: z.array(tenancyRenewalModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update a tenancy renewals letting fee */
export type UpdateLettingFeeRenewalModel = {
  type?: /** The letting fee type (fixed/perentage) */ string | undefined
  amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  string | undefined
}
/** Request body used to update a tenancy renewals management fee */
export type UpdateManagementFeeRenewalModel = {
  type?: /** The mangement fee type (fixed/perentage) */ string | undefined
  amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */ number | undefined
  frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  string | undefined
}
/** Request body used to update a tenancy renewal negotiation */
export type UpdateTenancyRenewalModel = {
  startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
  endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */ string | undefined
  rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
  rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
  lettingFee?: UpdateLettingFeeRenewalModel | undefined
  managementFee?: UpdateManagementFeeRenewalModel | undefined
}
export const tenancyExtensionAlterationModelPagedResult = z.object({
  _embedded: z.array(tenancyExtensionAlterationModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const tenancyRenewalCheckModelPagedResult = z.object({
  _embedded: z.array(tenancyRenewalCheckModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update a tenancy renewal check */
export type UpdateTenancyRenewalCheckModel = {
  status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
  metadata?: /** App specific metadata to set against the tenancy renewal check */
  Record<string, Record<string, never>> | undefined
}
export const transactionModelPagedResult = z.object({
  _embedded: z.array(transactionModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const nominalAccountModelPagedResult = z.object({
  _embedded: z.array(nominalAccountModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export type VendorUpdateSourceModel = VendorSourceModel
/** Request body used to update an existing vendor */
export type UpdateVendorModel = {
  lastCall?: /** The date the vendor was last called */ string | undefined
  nextCall?: /** The date the vendor is next due to be called */ string | undefined
  typeId?: /** The unique identifier of the type of vendor */ string | undefined
  sellingReasonId?: /** The unique identifier of the reason the vendor is selling */ string | undefined
  solicitorId?: /** The unique identifier of the vendor's solicitor */ string | undefined
  correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
  string | undefined
  source?: VendorUpdateSourceModel | undefined
  metadata?: /** App specific metadata that has been set against the vendor */
  Record<string, Record<string, never>> | undefined
}
export const vendorModelPagedResult = z.object({
  _embedded: z.array(vendorModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const vendorContactRelationshipModelPagedResult = z.object({
  _embedded: z.array(vendorContactRelationshipModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
export const worksOrderModelPagedResult = z.object({
  _embedded: z.array(worksOrderModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Request body used to update an existing works order */
export type UpdateWorksOrderModel = {
  companyId?: /** The unique identifier of the company that has been selected to perform the work */ string | undefined
  propertyId?: /** The unique identifier of the property where the work is to be carried out */ string | undefined
  tenancyId?: /** The unique identifier of the tenancy that the works order originated from */ string | undefined
  negotiatorId?: /** The unique identifier of the negotiator that booked the works order */ string | undefined
  typeId?: /** The unique id of the type of work that needs to be carried out */ string | undefined
  status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  string | undefined
  description?: /** A free text description of the work required */ string | undefined
  reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */ string | undefined
  priority?: /** The priority level of the works order (low/medium/high) */ string | undefined
  booked?: /** The date when the works order was booked */ string | undefined
  required?: /** The date when the work is required to be completed by */ string | undefined
  completed?: /** The date when the work was completed */ string | undefined
  metadata?: /** App specific metadata to set against the works order */
  Record<string, Record<string, never>> | undefined
}
export const worksOrderItemModelPagedResult = z.object({
  _embedded: z.array(worksOrderItemModel).nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  pageSize: z.number().int().nullable().optional(),
  pageCount: z.number().int().nullable().optional(),
  totalPageCount: z.number().int().nullable().optional(),
  totalCount: z.number().int().nullable().optional(),
  _links: z.record(z.string(), pagingLinkModel).nullable().optional(),
})
/** Representation of a works order item */
export type UpdateWorksOrderItemModel = {
  notes?: /** The notes attached to the works order item */ string | undefined
  chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */ string | undefined
  estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  number | undefined
  estimateType?: /** The type of estimate supplied (agent/verbal/written) */ string | undefined
  netAmount?: /** The net cost of the work to be carried out */ number | undefined
  vatAmount?: /** The cost of the vat associated with the work */ number | undefined
  reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  number | undefined
}
export type HttpStatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511
/** Model for exposing error details to API consumers */
export type ApiErrorModel = {
  statusCode?: HttpStatusCode | undefined
  dateTime?: /** The date and time that this error event occurred */ string | undefined
  description?: /** The detailed information regarding this error event */ string | undefined
}
export type PagingLinkModel = LinkModel
/** Model for validation failure */
export type ValidationMessageModel = {
  field?: /** Gets the field that the message applies to */ string | undefined
  message?: /** Gets the validation failure message to issue to the client */ string | undefined
}
/** Represents a one or more messages for fields that have failed a given validation action */
export type ValidationErrorModel = {
  statusCode?: HttpStatusCode | undefined
  dateTime?: /** The date and time that this error event occurred */ string | undefined
  description?: /** The detailed information regarding this error event */ string | undefined
  errors?: /** Gets or sets the list of validation errors. */ Array<ValidationMessageModel> | undefined
}
/** Representation of a staff member */
export type StaffModel = {
  name?: /** The staff member's name */ string | undefined
  active?: /** A flag determining whether or not the staff member is currently active */ boolean | undefined
  jobTitle?: /** The staff member's job title */ string | undefined
  workPhone?: /** The staff member's work phone */ string | undefined
  mobilePhone?: /** The staff member's mobile phone */ string | undefined
  email?: /** The staff member's email */ string | undefined
  salutation?: /** The staff member's preferred salutation */ string | undefined
}
/** Representation of a configuration item */
export type ListItemModel = {
  id?: /** The unique identifier of the list item */ string | undefined
  value?: /** The textual value for the list item */ string | undefined
}
/** Representation of all of the available configurable items */
export type TypeModel = {
  agencyTypes?: /** A list of configurable agency types */ Array<ListItemModel> | undefined
  appointmentTypes?: /** A list of configurable appointment types */ Array<ListItemModel> | undefined
  applicantStatuses?: /** A list of configurable applicant statuses */ Array<ListItemModel> | undefined
  boardStatuses?: /** A list of configurable board statuses */ Array<ListItemModel> | undefined
  buyingPositions?: /** A list of configurable buying positions */ Array<ListItemModel> | undefined
  buyingReasons?: /** A list of configurable buying reasons */ Array<ListItemModel> | undefined
  certificateTypes?: /** A list of configurable certificate types */ Array<ListItemModel> | undefined
  companyTypes?: /** A list of configurable company types */ Array<ListItemModel> | undefined
  contactCategories?: /** A list of configurable contact categories */ Array<ListItemModel> | undefined
  documentTypes?: /** A list of configurable document types */ Array<ListItemModel> | undefined
  identityDocumentTypes?: /** A list of configurable identity document types */ Array<ListItemModel> | undefined
  journalEntryTypes?: /** A list of configurable journal entry types */ Array<ListItemModel> | undefined
  keyTypes?: /** A list of configurable key types */ Array<ListItemModel> | undefined
  followUpResponses?: /** A list of configurable follow up responses */ Array<ListItemModel> | undefined
  sellingReasons?: /** A list of configurable selling reasons */ Array<ListItemModel> | undefined
  rentInsuranceCancellationReasons?: /** A list of configurable rent insurance cancellation reasons */
  Array<ListItemModel> | undefined
  rentingPositions?: /** A list of configurable renting positions */ Array<ListItemModel> | undefined
  supplierTypes?: /** A list of configurable supplier types */ Array<ListItemModel> | undefined
  taskTypes?: /** A list of configurable task types */ Array<ListItemModel> | undefined
  tenancyLegalStatuses?: /** A list of configurable tenancy legal status */ Array<ListItemModel> | undefined
  tenancyTypes?: /** A list of configurable tenancy types */ Array<ListItemModel> | undefined
  vendorTypes?: /** A list of configurable vendor types */ Array<ListItemModel> | undefined
  worksOrderTypes?: /** A list of configurable works order types */ Array<ListItemModel> | undefined
}
/** Representation of a certificate type */
export type CertificateTypeModel = {
  id?: /** The unique identifier of the list item */ string | undefined
  value?: /** The textual value for the list item */ string | undefined
  statuses?: /** The configurable statuses associated to the certificate type */ Array<ListItemModel> | undefined
}
/** Representation of detail properties configuration item
configuration */
export type ListItemDetailModel = {
  id?: /** The unique identifier of the list item */ string | undefined
  value?: /** The textual value for the list item */ string | undefined
  active?: /** A flag determining the status */ boolean | undefined
  officeIds?: /** A collection of unique identifiers of offices associated */ Array<string> | undefined
}
/** Terminologies associated with the properties */
export type PropertyTerminologyModel = {
  useSoldStc?: /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
  boolean | undefined
  useMarketAppraisal?: /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
  boolean | undefined
}
/** Representation of the configuration settings for terminology */
export type TerminologyModel = { properties?: PropertyTerminologyModel | undefined }
/** Detailed representation of an individual invoice */
export type InvoiceDetailModel = {
  id?: /** Unique identifier of the invoice */ string | undefined
  created?: /** The date and time when the invoice was created */ string | undefined
  modified?: /** The date and time when the invoice was last modified */ string | undefined
  reference?: /** The invoice reference */ string | undefined
  negotiatorId?: /** Unique identifier of the negotiator associated with the invoice */ string | undefined
  propertyId?: /** Unique identifier of the property associated with the invoice */ string | undefined
  description?: /** Description of the invoice */ string | undefined
  status?: /** The status of the invoice */ string | undefined
  date?: /** The date of the invoice */ string | undefined
  dueDate?: /** The due date of the invoice */ string | undefined
  isRaised?: /** Flag indicating whether the invoice has been raised */ boolean | undefined
  netAmount?: /** The net amount due for the invoice in the system base currency */ number | undefined
  vatAmount?: /** The amount of VAT due for the invoice in the system base currency */ number | undefined
  outstandingAmount?: /** The value of the invoice outstanding in the system base currency */ number | undefined
  charges?: /** Collection of charges associated with the invoice */ Array<ChargeModel> | undefined
  credits?: /** Collection of credits associated with the invoice */ Array<CreditModel> | undefined
  payments?: /** Collection of payments associated with the invoice */ Array<PaymentModel> | undefined
  _links?: Record<string, LinkModel> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
}
/** Representation of certificate responsibilities configured for a property */
export type PropertyCertificateResponsibilitiesModel = {
  id?: /** The id of the property to which the configured certificate responsibilities apply */ string | undefined
  created?: /** The date and time on which the property was created */ string | undefined
  modified?: /** The date and time on which the property was last modified */ string | undefined
  responsibleParties?: /** The configured certificate responsibilities */
  Array<CertificateResponsiblePartyModel> | undefined
  _eTag?: /** The ETag for the current version of the property. Used for managing update concurrency */
  string | undefined
}
/** Representation of the physical address of a building or premise */
export type VendorContactAddressModel = {
  buildingName?: /** The building name */ string | undefined
  buildingNumber?: /** The building number */ string | undefined
  line1?: /** The first line of the address */ string | undefined
  line2?: /** The second line of the address */ string | undefined
  line3?: /** The third line of the address */ string | undefined
  line4?: /** The fourth line of the address */ string | undefined
  postcode?: /** The postcode */ string | undefined
  countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
}
