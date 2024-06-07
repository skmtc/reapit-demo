import { z } from 'zod'

/** Any specific details relating to the marketing of a property in Guernsey */
export const guernseyModel = /** Any specific details relating to the marketing of a property in Guernsey */
z.object({market: /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
z.array(z.string()).optional()});
/** Any specific details relating to the marketing of a property in Guernsey */
export type GuernseyModel = /** Any specific details relating to the marketing of a property in Guernsey */
{market?: /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
Array<string> | undefined};