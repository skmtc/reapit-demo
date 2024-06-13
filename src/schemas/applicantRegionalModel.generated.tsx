import { ApplicantGuernseyModel, applicantGuernseyModel } from '@/schemas/applicantGuernseyModel.generated.tsx'
import { z } from 'zod'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type ApplicantRegionalModel =
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  { ggy?: ApplicantGuernseyModel | null | undefined }
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const applicantRegionalModel =
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  z.object({ ggy: applicantGuernseyModel.optional().nullable() })
