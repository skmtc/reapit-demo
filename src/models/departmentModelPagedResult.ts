import { z } from 'zod'

export const departmentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a department */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().nullable().optional() }))
          .nullable()
          .optional(),
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
        /** A flag to determing if the department has bedrooms configured */
        hasBedrooms: z.boolean().nullable().optional(),
        /** A flag to determing if the department has bathrooms configured */
        hasBathrooms: z.boolean().nullable().optional(),
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
