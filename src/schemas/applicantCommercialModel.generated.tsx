import { z } from 'zod'

/** An applicant's commercial details */
export const applicantCommercialModel = /** An applicant's commercial details */
z.object({useClass: /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional(), floorLevel: /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
z.array(z.string()).optional()});
/** An applicant's commercial details */
export type ApplicantCommercialModel = /** An applicant's commercial details */
{useClass?: /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined, floorLevel?: /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
Array<string> | undefined};