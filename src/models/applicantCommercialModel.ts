import { z } from 'zod'

/** An applicant's commercial details */
export const applicantCommercialModel = z.object({
  /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  useClass: z.array(z.string()).nullable().optional(),
  /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  floorLevel: z.array(z.string()).nullable().optional(),
})
/** An applicant's commercial details */
export type ApplicantCommercialModel = {
  useClass?: /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
  floorLevel?: /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  Array<string> | undefined
}
