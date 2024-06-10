import { z } from 'zod'

/** An properties commercial details */
export const propertyCommercialModel =
  /** An properties commercial details */
  z.object({
    /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    useClass: z.array(z.string()).optional().nullable(),
    /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    floorLevel: z.array(z.string()).optional().nullable(),
  })
/** An properties commercial details */
export type PropertyCommercialModel =
  /** An properties commercial details */
  {
    useClass?:
      | /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
    floorLevel?:
      | /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      Array<string>
      | null
      | undefined
  }
