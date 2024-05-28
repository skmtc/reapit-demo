import { z } from 'zod'
import { applicantGuernseyModel, ApplicantGuernseyModel } from '@/models/applicantGuernseyModel.ts'

/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const applicantRegionalModel = z.object({ ggy: applicantGuernseyModel.nullable().optional() })
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export type ApplicantRegionalModel = { ggy?: ApplicantGuernseyModel | undefined }
