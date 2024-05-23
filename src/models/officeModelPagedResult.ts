import { z } from 'zod'

export const officeModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an office */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
        _embedded: z.record(z.string(), z.object({})).nullable().optional(),
        /** The unique identifier of the office */ id: z.string().nullable().optional(),
        /** The date and time when the office was created */ created: z.string().nullable().optional(),
        /** The date and time when the office was last modified */ modified: z.string().nullable().optional(),
        /** The name of the office */ name: z.string().nullable().optional(),
        /** The name of the office manager */ manager: z.string().nullable().optional(),
        /** A flag denoting whether or not this office is active */ active: z.boolean().nullable().optional(),
        /** The region that the office is in */ region: z.string().nullable().optional(),
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
        /** The work phone number of the office */ workPhone: z.string().nullable().optional(),
        /** The email address of the office */ email: z.string().nullable().optional(),
        /** App specific metadata that has been set against the office */
        metadata: z.record(z.string(), z.object({})).nullable().optional(),
        /** The ETag for the current version of the office. Used for managing update concurrency */
        _eTag: z.string().nullable().optional(),
        /** The requested extras fields */ extrasField: z.record(z.string(), z.object({})).nullable().optional(),
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
