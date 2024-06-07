import { z } from 'zod'
import { linkModel, LinkModel } from '@/schemas/linkModel.generated.tsx'

/** Representation of a department */
export const departmentModel = /** Representation of a department */
z.object({_links: z.record(z.string(), linkModel).optional(), _embedded: z.record(z.string(), z.object({})).optional(), id: /** The unique identifier of the department */
z.string().optional(), created: /** The date and time when the department was created */
z.string().optional(), modified: /** The date and time when the department was last modified */
z.string().optional(), name: /** The name of the department */
z.string().optional(), typeOptions: /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), styleOptions: /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), situationOptions: /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), parkingOptions: /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), ageOptions: /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), localityOptions: /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
z.array(z.string()).optional(), specialFeaturesOptions: /** A collection of special property feature values that will be presented by other services */
z.array(z.string()).optional(), commercialUseClassOptions: /** A collection of commercial use class values that will be accepted by other services */
z.array(z.string()).optional(), commercialFloorLevelOptions: /** A collection of commercial floor level values that will be accepted by other services */
z.array(z.string()).optional(), hasBedrooms: /** A flag to determing if the department has bedrooms configured */
z.boolean().optional(), hasBathrooms: /** A flag to determing if the department has bathrooms configured */
z.boolean().optional(), hasReceptionRooms: /** A flag to determing if the department has reception rooms configured */
z.boolean().optional(), hasParkingSpaces: /** A flag to determing if the department has parking spaces configured */
z.boolean().optional(), hasFloorLevelEnabled: /** A flag to determing if the department allows the floor level property to be set */
z.boolean().optional(), hasInternalFloorsEnabled: /** A flag to determing if the department allows the internal floors property to be set */
z.boolean().optional(), hasTotalFloorsEnabled: /** A flag to determing if the department allows the total floors property to be set */
z.boolean().optional(), _eTag: /** The ETag for the current version of the department. Used for managing update concurrency */
z.string().optional()});
/** Representation of a department */
export type DepartmentModel = /** Representation of a department */
{_links?: Record<string, LinkModel> | undefined, _embedded?: Record<string, Record<string, never>> | undefined, id?: /** The unique identifier of the department */
string | undefined, created?: /** The date and time when the department was created */
string | undefined, modified?: /** The date and time when the department was last modified */
string | undefined, name?: /** The name of the department */
string | undefined, typeOptions?: /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, styleOptions?: /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, situationOptions?: /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, parkingOptions?: /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, ageOptions?: /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, localityOptions?: /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
Array<string> | undefined, specialFeaturesOptions?: /** A collection of special property feature values that will be presented by other services */
Array<string> | undefined, commercialUseClassOptions?: /** A collection of commercial use class values that will be accepted by other services */
Array<string> | undefined, commercialFloorLevelOptions?: /** A collection of commercial floor level values that will be accepted by other services */
Array<string> | undefined, hasBedrooms?: /** A flag to determing if the department has bedrooms configured */
boolean | undefined, hasBathrooms?: /** A flag to determing if the department has bathrooms configured */
boolean | undefined, hasReceptionRooms?: /** A flag to determing if the department has reception rooms configured */
boolean | undefined, hasParkingSpaces?: /** A flag to determing if the department has parking spaces configured */
boolean | undefined, hasFloorLevelEnabled?: /** A flag to determing if the department allows the floor level property to be set */
boolean | undefined, hasInternalFloorsEnabled?: /** A flag to determing if the department allows the internal floors property to be set */
boolean | undefined, hasTotalFloorsEnabled?: /** A flag to determing if the department allows the total floors property to be set */
boolean | undefined, _eTag?: /** The ETag for the current version of the department. Used for managing update concurrency */
string | undefined};