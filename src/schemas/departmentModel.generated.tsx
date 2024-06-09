import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a department */
export const departmentModel =
  /** Representation of a department */
  z.object({
    _links: z.record(z.string(), linkModel).optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    /** The unique identifier of the department */ id: z.string().optional(),
    /** The date and time when the department was created */ created: z.string().optional(),
    /** The date and time when the department was last modified */ modified: z.string().optional(),
    /** The name of the department */ name: z.string().optional(),
    /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    typeOptions: z.array(z.string()).optional(),
    /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    styleOptions: z.array(z.string()).optional(),
    /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    situationOptions: z.array(z.string()).optional(),
    /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    parkingOptions: z.array(z.string()).optional(),
    /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    ageOptions: z.array(z.string()).optional(),
    /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
    localityOptions: z.array(z.string()).optional(),
    /** A collection of special property feature values that will be presented by other services */
    specialFeaturesOptions: z.array(z.string()).optional(),
    /** A collection of commercial use class values that will be accepted by other services */
    commercialUseClassOptions: z.array(z.string()).optional(),
    /** A collection of commercial floor level values that will be accepted by other services */
    commercialFloorLevelOptions: z.array(z.string()).optional(),
    /** A flag to determing if the department has bedrooms configured */ hasBedrooms: z.boolean().optional(),
    /** A flag to determing if the department has bathrooms configured */ hasBathrooms: z.boolean().optional(),
    /** A flag to determing if the department has reception rooms configured */
    hasReceptionRooms: z.boolean().optional(),
    /** A flag to determing if the department has parking spaces configured */ hasParkingSpaces: z.boolean().optional(),
    /** A flag to determing if the department allows the floor level property to be set */
    hasFloorLevelEnabled: z.boolean().optional(),
    /** A flag to determing if the department allows the internal floors property to be set */
    hasInternalFloorsEnabled: z.boolean().optional(),
    /** A flag to determing if the department allows the total floors property to be set */
    hasTotalFloorsEnabled: z.boolean().optional(),
    /** The ETag for the current version of the department. Used for managing update concurrency */
    _eTag: z.string().optional(),
  })
/** Representation of a department */
export type DepartmentModel =
  /** Representation of a department */
  {
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
