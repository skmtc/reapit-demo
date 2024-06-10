import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a department */
export const departmentModel =
  /** Representation of a department */
  z.object({
    _links: z.record(z.string(), linkModel).optional().nullable(),
    _embedded: z.record(z.string(), z.object({})).optional().nullable(),
    /** The unique identifier of the department */ id: z.string().optional().nullable(),
    /** The date and time when the department was created */ created: z.string().optional().nullable(),
    /** The date and time when the department was last modified */ modified: z.string().optional().nullable(),
    /** The name of the department */ name: z.string().optional().nullable(),
    /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    typeOptions: z.array(z.string()).optional().nullable(),
    /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    styleOptions: z.array(z.string()).optional().nullable(),
    /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    situationOptions: z.array(z.string()).optional().nullable(),
    /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    parkingOptions: z.array(z.string()).optional().nullable(),
    /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    ageOptions: z.array(z.string()).optional().nullable(),
    /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    localityOptions: z.array(z.string()).optional().nullable(),
    /** A collection of special property feature values that will be presented by other services */
    specialFeaturesOptions: z.array(z.string()).optional().nullable(),
    /** A collection of commercial use class values that will be accepted by other services */
    commercialUseClassOptions: z.array(z.string()).optional().nullable(),
    /** A collection of commercial floor level values that will be accepted by other services */
    commercialFloorLevelOptions: z.array(z.string()).optional().nullable(),
    /** A flag to determing if the department has bedrooms configured */ hasBedrooms: z.boolean().optional().nullable(),
    /** A flag to determing if the department has bathrooms configured */
    hasBathrooms: z.boolean().optional().nullable(),
    /** A flag to determing if the department has reception rooms configured */
    hasReceptionRooms: z.boolean().optional().nullable(),
    /** A flag to determing if the department has parking spaces configured */
    hasParkingSpaces: z.boolean().optional().nullable(),
    /** A flag to determing if the department allows the floor level property to be set */
    hasFloorLevelEnabled: z.boolean().optional().nullable(),
    /** A flag to determing if the department allows the internal floors property to be set */
    hasInternalFloorsEnabled: z.boolean().optional().nullable(),
    /** A flag to determing if the department allows the total floors property to be set */
    hasTotalFloorsEnabled: z.boolean().optional().nullable(),
    /** The ETag for the current version of the department. Used for managing update concurrency */
    _eTag: z.string().optional().nullable(),
  })
export type DepartmentModel =
  /** Representation of a department */
  {
    _links?: Record<string, LinkModel> | null | undefined
    _embedded?: Record<string, Record<string, never>> | null | undefined
    id?: /** The unique identifier of the department */ string | null | undefined
    created?: /** The date and time when the department was created */ string | null | undefined
    modified?: /** The date and time when the department was last modified */ string | null | undefined
    name?: /** The name of the department */ string | null | undefined
    typeOptions?:
      | /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    styleOptions?:
      | /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    situationOptions?:
      | /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    parkingOptions?:
      | /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    ageOptions?:
      | /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    localityOptions?:
      | /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
      Array<string>
      | null
      | undefined
    specialFeaturesOptions?:
      | /** A collection of special property feature values that will be presented by other services */
      Array<string>
      | null
      | undefined
    commercialUseClassOptions?:
      | /** A collection of commercial use class values that will be accepted by other services */
      Array<string>
      | null
      | undefined
    commercialFloorLevelOptions?:
      | /** A collection of commercial floor level values that will be accepted by other services */
      Array<string>
      | null
      | undefined
    hasBedrooms?: /** A flag to determing if the department has bedrooms configured */ boolean | null | undefined
    hasBathrooms?: /** A flag to determing if the department has bathrooms configured */ boolean | null | undefined
    hasReceptionRooms?:
      | /** A flag to determing if the department has reception rooms configured */
      boolean
      | null
      | undefined
    hasParkingSpaces?:
      | /** A flag to determing if the department has parking spaces configured */
      boolean
      | null
      | undefined
    hasFloorLevelEnabled?:
      | /** A flag to determing if the department allows the floor level property to be set */
      boolean
      | null
      | undefined
    hasInternalFloorsEnabled?:
      | /** A flag to determing if the department allows the internal floors property to be set */
      boolean
      | null
      | undefined
    hasTotalFloorsEnabled?:
      | /** A flag to determing if the department allows the total floors property to be set */
      boolean
      | null
      | undefined
    _eTag?:
      | /** The ETag for the current version of the department. Used for managing update concurrency */
      string
      | null
      | undefined
  }
