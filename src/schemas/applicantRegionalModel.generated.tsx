import { z } from 'zod'
import { applicantGuernseyModel, ApplicantGuernseyModel } from '@/schemas/applicantGuernseyModel.generated.tsx'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const applicantRegionalModel =
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  z.object({ ggy: applicantGuernseyModel.optional().nullable() })
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type ApplicantRegionalModel =
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  { ggy?: ApplicantGuernseyModel | null | undefined }
